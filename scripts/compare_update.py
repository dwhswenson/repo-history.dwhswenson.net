"""Compare monthly counts and contributor attribution after update and collect."""

import argparse
import codecs
import errno
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path
from time import perf_counter

SITE = Path(__file__).resolve().parents[1] / "site"
STATE_FILE = "collection-state.json"
MONTHLY_FILE = re.compile(r"[0-9]{4}-[0-9]{2}\.json")


def utc_now():
    return datetime.now(timezone.utc)


def repository_name(value):
    match = re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9-]*/([A-Za-z0-9_.-]+)", value)
    if match is None or match[1] in {".", ".."}:
        raise argparse.ArgumentTypeError("repository must use OWNER/REPO")
    return value


def month(value):
    if not re.fullmatch(r"[0-9]{4}-(0[1-9]|1[0-2])", value) or value[:4] == "0000":
        raise argparse.ArgumentTypeError(
            "month must use YYYY-MM with a valid year/month"
        )
    return value


def monthly_files(directory):
    return sorted(
        p for p in directory.iterdir() if MONTHLY_FILE.fullmatch(p.name) and p.is_file()
    )


def overlaps(left, right):
    return left.is_relative_to(right) or right.is_relative_to(left)


def load_dataset(directory, *, repository=None, node_id=None):
    """Validate exact bytes first, then project only the fields being compared."""
    from repo_history.state import verify_collection_state

    state = json.loads((directory / STATE_FILE).read_text(encoding="utf-8"))
    verify_collection_state(state, directory)
    identity = state["repository"]
    if (
        repository is not None
        and identity["full_name"].casefold() != repository.casefold()
    ):
        raise ValueError(
            f"{directory}: state belongs to {identity['full_name']}, not {repository}"
        )
    if node_id is not None and identity["node_id"] != node_id:
        raise ValueError(
            f"{directory}: repository node ID differs from the initial dataset"
        )
    months = {}
    for name in sorted(state["reports"]):
        data = json.loads((directory / f"{name}.json").read_text(encoding="utf-8"))
        metadata = data["metadata"]
        credited = data["summaries"]["actor_counts"]
        months[name] = {
            "calendar": {
                key: metadata[key] for key in ("month", "month_start", "month_end")
            },
            "summaries": data["summaries"],
            "contributors": {
                actor["key"]: actor["classification"]
                for actor in data["actors"]
                if actor["key"] in credited
            },
        }
    return state, {"repository_node_id": identity["node_id"], "months": months}


def differences(collect, update, path=""):
    """Return deterministic JSON Pointer paths, retaining missing vs null values."""
    result = []
    if isinstance(collect, dict) and isinstance(update, dict):
        for key in sorted(collect.keys() | update.keys()):
            child = path + "/" + key.replace("~", "~0").replace("/", "~1")
            if key not in collect or key not in update:
                result.append(
                    {
                        "path": child,
                        "collect": collect.get(key),
                        "update": update.get(key),
                        "collect_present": key in collect,
                        "update_present": key in update,
                    }
                )
            else:
                result.extend(differences(collect[key], update[key], child))
    elif collect != update:
        result.append(
            {
                "path": path,
                "collect": collect,
                "update": update,
                "collect_present": True,
                "update_present": True,
            }
        )
    return result


def run_collector(command, log):
    """Tee live output to stderr and the log, preserving terminal progress."""
    terminal = sys.stderr.isatty() and hasattr(os, "openpty")
    master = slave = None
    decoder = codecs.getincrementaldecoder("utf-8")(errors="replace")
    with log.open("wb") as stream:
        try:
            if terminal:
                import termios

                master, slave = os.openpty()
                size = shutil.get_terminal_size()
                termios.tcsetwinsize(slave, (size.lines, size.columns))
            with subprocess.Popen(
                command,
                stdout=slave if terminal else subprocess.PIPE,
                stderr=subprocess.STDOUT,
            ) as process:
                if slave is not None:
                    os.close(slave)
                    slave = None
                try:
                    while True:
                        try:
                            chunk = (
                                os.read(master, 8192)
                                if terminal
                                else process.stdout.read1(8192)
                            )
                        except OSError as error:
                            # Linux PTYs report EIO when the child closes its end.
                            if terminal and error.errno == errno.EIO:
                                break
                            raise
                        if not chunk:
                            break
                        stream.write(chunk)
                        stream.flush()
                        sys.stderr.write(decoder.decode(chunk))
                        sys.stderr.flush()
                    sys.stderr.write(decoder.decode(b"", final=True))
                    sys.stderr.flush()
                    returncode = process.wait()
                except BaseException:
                    process.kill()
                    process.wait()
                    raise
                if returncode:
                    raise subprocess.CalledProcessError(returncode, command)
        finally:
            for descriptor in (master, slave):
                if descriptor is not None:
                    os.close(descriptor)


def compare_repository(repository, source, workspace, args):
    started = perf_counter()
    directory = workspace.joinpath(*repository.split("/"))
    collect = directory / "collect"
    update = source if args.in_place else directory / "update"
    initial = directory / "initial-collection-state.json"
    result = {
        "repository": repository,
        "status": "error",
        "stage": "prepare",
        "started_at": utc_now().isoformat(),
        "differences": [],
        "months": {},
        "artifacts": {
            "source": str(source),
            "collect": str(collect),
            "update": str(update),
            "initial_state": str(initial),
            "collect_log": str(directory / "collect.log"),
            "update_log": str(directory / "update.log"),
        },
        "commands": [],
        "timings_seconds": {},
    }
    try:
        directory.mkdir(parents=True)
        if (source / STATE_FILE).exists():
            shutil.copyfile(source / STATE_FILE, initial)
        result["stage"] = "validate-source"
        print(f"{repository}: validating source", flush=True)
        state, _ = load_dataset(source, repository=repository)
        if max(state["reports"]) > args.end:
            raise ValueError("--end precedes an existing report month")
        result["initial_months"] = sorted(state["reports"])
        result["effective_update_start"] = args.update_start or max(state["reports"])
        if not args.in_place:
            update.mkdir()
            shutil.copyfile(initial, update / STATE_FILE)
            for name in state["reports"]:
                shutil.copyfile(source / f"{name}.json", update / f"{name}.json")
            load_dataset(update, node_id=state["repository"]["node_id"])

        projections = {}
        for action, target in (("collect", collect), ("update", update)):
            result["stage"] = action
            command = [
                sys.executable,
                "-m",
                "repo_history",
                action,
                repository,
                "--output-directory",
                str(target),
                "--end",
                args.end,
            ]
            if action == "collect" and args.no_progress:
                command.append("--no-progress")
            if action == "update" and args.update_start:
                command.extend(["--start", args.update_start])
            result["commands"].append(command)
            print(
                f"{repository}: running {action} (log: {directory / (action + '.log')})",
                flush=True,
            )
            timer = perf_counter()
            try:
                run_collector(command, directory / f"{action}.log")
            finally:
                result["timings_seconds"][action] = perf_counter() - timer
            result["stage"] = f"validate-{action}"
            _, projections[action] = load_dataset(
                target, node_id=state["repository"]["node_id"]
            )

        result["stage"] = "compare"
        result["differences"] = differences(
            projections["collect"], projections["update"]
        )
        left, right = projections["collect"]["months"], projections["update"]["months"]
        for name in sorted(left.keys() | right.keys()):
            if name not in left:
                outcome = "update-only"
            elif name not in right:
                outcome = "collect-only"
            else:
                outcome = "match" if left[name] == right[name] else "mismatch"
            result["months"][name] = outcome
            print(f"{repository} {name}: {outcome}")
        result["status"] = "mismatch" if result["differences"] else "match"
        for difference in result["differences"][:20]:
            values = []
            for side in ("collect", "update"):
                value = (
                    json.dumps(difference[side], ensure_ascii=False)
                    if difference[side + "_present"]
                    else "<missing>"
                )
                values.append(f"{side}={value[:160]}")
            print(f"  {difference['path']}: {', '.join(values)}")
        if len(result["differences"]) > 20:
            print(
                f"  {len(result['differences']) - 20} more differences in comparison.json"
            )
    except (OSError, ValueError, ImportError, subprocess.CalledProcessError) as error:
        result["status"] = "error"
        result["error"] = str(error)
        if isinstance(error, subprocess.CalledProcessError):
            result["collector_returncode"] = error.returncode
        print(f"{repository}: {result['stage']}: {error}", file=sys.stderr, flush=True)
    finally:
        result["finished_at"] = utc_now().isoformat()
        result["timings_seconds"]["total"] = perf_counter() - started
    return result


def write_report(path, report):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(report, indent=2, sort_keys=True) + "\n", encoding="utf-8"
    )


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "repository", nargs="?", type=repository_name, metavar="OWNER/REPO"
    )
    parser.add_argument(
        "--all", action="store_true", help="compare all datasets under --site-dir"
    )
    parser.add_argument("--site-dir", type=Path, default=SITE)
    parser.add_argument(
        "--in-place",
        action="store_true",
        help="update source data instead of a temporary copy",
    )
    parser.add_argument(
        "--update-start",
        type=month,
        metavar="YYYY-MM",
        help="override update start only",
    )
    parser.add_argument(
        "--end",
        type=month,
        metavar="YYYY-MM",
        help="inclusive end; default: current UTC month",
    )
    parser.add_argument(
        "--work-dir", type=Path, help="new or empty directory; always retain results"
    )
    parser.add_argument(
        "--report", type=Path, help="also save the JSON report at this path"
    )
    parser.add_argument(
        "--no-progress",
        action="store_true",
        help="pass --no-progress to collect; keep ordinary collector logs",
    )
    args = parser.parse_args(argv)
    if bool(args.repository) == args.all:
        parser.error("select either OWNER/REPO or --all")
    now = utc_now()
    current = now.strftime("%Y-%m")
    args.end = args.end or current
    if args.end > current:
        parser.error("--end cannot be in the future")
    if args.update_start and args.update_start > args.end:
        parser.error("--update-start must not follow --end")

    workspace = None
    report = None
    try:
        site = args.site_dir.resolve()
        if args.all:
            repositories = sorted(
                repository_name(p.relative_to(site).as_posix())
                for p in site.glob("*/*")
                if p.is_dir() and monthly_files(p)
            )
            if not repositories:
                raise ValueError(f"{site}: no datasets with monthly reports")
        else:
            repositories = [args.repository]
        sources = {
            name: site.joinpath(*name.split("/")).resolve() for name in repositories
        }
        for source in sources.values():
            if not source.is_relative_to(site):
                raise ValueError("repository directory must remain inside --site-dir")
        # Reject overlapping datasets (including aliases through symlinks).
        paths = list(sources.values())
        if any(overlaps(a, b) for i, a in enumerate(paths) for b in paths[i + 1 :]):
            raise ValueError("selected repository directories overlap")
        report_path = args.report.resolve() if args.report else None
        requested_work = args.work_dir.resolve() if args.work_dir else None
        for path in (requested_work, report_path):
            if path and overlaps(path, site):
                raise ValueError(
                    "workspace and report paths must not overlap --site-dir"
                )
        if requested_work:
            if requested_work.exists() and (
                not requested_work.is_dir() or any(requested_work.iterdir())
            ):
                raise ValueError("--work-dir must be a new or empty directory")
            requested_work.mkdir(parents=True, exist_ok=True)
            workspace = requested_work
        else:
            workspace = Path(tempfile.mkdtemp(prefix="repo-history-compare-"))
        if (
            report_path
            and report_path.is_relative_to(workspace)
            and report_path != workspace / "comparison.json"
        ):
            raise ValueError(
                "--report inside the workspace must be WORK_DIR/comparison.json"
            )
        print(f"Workspace: {workspace}", flush=True)
        report = {
            "schema_version": 1,
            "started_at": now.isoformat(),
            "parameters": {
                "repositories": repositories,
                "site_dir": str(site),
                "in_place": args.in_place,
                "no_progress": args.no_progress,
                "update_start": args.update_start,
                "end": args.end,
                "work_dir": str(workspace),
                "report": str(report_path) if report_path else None,
            },
            "results": [],
        }
        for name in repositories:
            report["results"].append(
                compare_repository(name, sources[name], workspace, args)
            )
        statuses = {result["status"] for result in report["results"]}
        code = 2 if "error" in statuses else 1 if "mismatch" in statuses else 0
        report.update(
            {
                "finished_at": utc_now().isoformat(),
                "exit_code": code,
                "workspace_retained": bool(code or requested_work),
            }
        )
        write_report(workspace / "comparison.json", report)
        if report_path and report_path != workspace / "comparison.json":
            write_report(report_path, report)
        print(
            "Results: "
            + ", ".join(
                f"{result['repository']}={result['status']}"
                for result in report["results"]
            )
        )
        if report["workspace_retained"]:
            print(f"Diagnostics retained: {workspace / 'comparison.json'}")
        else:
            shutil.rmtree(workspace)
            print("Successful temporary workspace removed.")
        if report_path:
            print(f"Report: {report_path}")
        return code
    except (OSError, ValueError, argparse.ArgumentTypeError) as error:
        print(f"compare-update: {error}", file=sys.stderr)
        if workspace:
            if report is not None:
                report.update(
                    {"exit_code": 2, "workspace_retained": True, "error": str(error)}
                )
                try:
                    write_report(workspace / "comparison.json", report)
                except OSError:
                    pass
            print(f"Diagnostics retained: {workspace}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    sys.exit(main())
