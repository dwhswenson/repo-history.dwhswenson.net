"""Offline contract and orchestration tests for the comparison script.

Run with: python -m unittest discover -s tests -v
"""

import contextlib
import copy
import io
import json
import os
import subprocess
import sys
import tempfile
import unittest
from datetime import datetime, timedelta, timezone
from pathlib import Path
from unittest.mock import patch
from uuid import uuid4

import repo_history as api
from repo_history.state import write_collection_state

from scripts import compare_update as script

NOW = datetime(2024, 3, 2, 12, tzinfo=timezone.utc)


def dataset(
    directory,
    *,
    repository="owner/repo",
    months=("2024-01", "2024-02"),
    performers=("A", "B"),
    classifications=None,
    variant=0,
    command="collect",
    node_id="R_test",
):
    """Write valid synthetic reports and a real, verified exact-byte inventory."""
    directory.mkdir(parents=True, exist_ok=True)
    observed = NOW + timedelta(days=variant)
    run = api.CollectionRun(
        str(uuid4()),
        command,
        "rebuild",
        "0.1.0",
        observed,
        observed,
        parent_discovery="full" if command == "collect" else "bounded",
        commit_history="full" if command == "collect" else "bounded",
    )
    identity = api.RepositoryMetadata(
        node_id,
        repository,
        f"https://github.com/{repository}",
        datetime(2024, 1, 1, tzinfo=timezone.utc),
    )
    classifications = classifications or {}
    actors = [
        api.Actor(
            key,
            classifications.get(key, "human"),
            github_node_id=key,
            login=key,
            display_name=f"Person {key} variant {variant}",
        )
        for key in ("A", "B", "C")
    ]
    unlinked = api.unlinked_git_actor("unlinked@example.com", "Unlinked")
    actors.append(unlinked)
    for name in months:
        year, number = map(int, name.split("-"))
        first = datetime(year, number, 1, tzinfo=timezone.utc)
        after = (
            first.replace(year=year + 1, month=1)
            if number == 12
            else first.replace(month=number + 1)
        )
        metadata = api.ReportMetadata(
            identity,
            name,
            first,
            after,
            api.Provenance(run, run, run),
            api.Coverage(observed, (f"observation {variant}",)),
            observed < after,
            "main",
            str(variant % 10) * 40,
        )
        credited = performers[name] if isinstance(performers, dict) else performers
        events = tuple(
            api.Activity(
                f"issue_comment:IC_{i}",
                "issue_comment",
                first + timedelta(hours=i + 1),
                f"https://github.com/{repository}/issues/1#issuecomment-{i}",
                api.Subject("issue", "I_1", f"Title variant {variant}", None, number=1),
                (api.Credit(unlinked.key if key == "unlinked" else key, "author"),),
                api.IssueCommentMetadata(f"IC_{i}"),
            )
            for i, key in enumerate(credited)
        )
        report = api.MonthlyReport(
            metadata, tuple(actors), events, api.derive_summaries(actors, events)
        )
        (directory / f"{name}.json").write_text(
            api.report_to_json(report), encoding="utf-8"
        )
    write_collection_state(directory, run)
    return directory


class DatasetTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name).resolve()

    def projection(self, name, **kwargs):
        return script.load_dataset(dataset(self.root / name, **kwargs))[1]

    def test_ignores_observation_run_ids_names_titles_and_branch_head(self):
        left = self.projection("left")
        right = self.projection("right", variant=1, command="update")
        self.assertEqual(script.differences(left, right), [])

    def test_counts_attribution_classification_and_unattributed_differences(self):
        scenarios = [
            (
                {"performers": ("A", "A", "B")},
                "/summaries/repository_counts/issue_comment",
            ),
            ({"performers": ("A", "C")}, "/summaries/actor_counts/B"),
            ({"classifications": {"A": "bot"}}, "/contributors/A"),
            ({"performers": ("A", None)}, "/summaries/unattributed_total"),
            ({"performers": ("A", "unlinked")}, "/contributors/"),
        ]
        left = self.projection("left")
        for i, (kwargs, suffix) in enumerate(scenarios):
            with self.subTest(kwargs=kwargs):
                right = self.projection(f"right-{i}", **kwargs)
                changes = script.differences(left, right)
                self.assertTrue(
                    any(suffix in item["path"] for item in changes), changes
                )

    def test_per_person_counts_differ_with_same_roster_and_repository_totals(self):
        left = self.projection("left", performers=("A", "A", "B"))
        right = self.projection("right", performers=("A", "B", "B"))
        changes = script.differences(left, right)
        self.assertTrue(
            any(
                item["path"].endswith("/actor_counts/A/issue_comment")
                for item in changes
            )
        )
        self.assertFalse(any("repository_counts" in item["path"] for item in changes))

    def test_inventory_and_identity_differences(self):
        left = self.projection("left", months=("2024-01",))
        right = self.projection("right", months=("2024-02",), node_id="R_other")
        changes = {item["path"]: item for item in script.differences(left, right)}
        self.assertFalse(changes["/months/2024-01"]["update_present"])
        self.assertFalse(changes["/months/2024-02"]["collect_present"])
        self.assertIn("/repository_node_id", changes)

    def test_calendar_comparison_and_json_pointer_escaping(self):
        left = self.projection("left")
        right = copy.deepcopy(left)
        right["months"]["2024-01"]["calendar"]["month_end"] = "changed"
        self.assertEqual(
            script.differences(left, right)[0]["path"],
            "/months/2024-01/calendar/month_end",
        )
        self.assertEqual(script.differences({"a/b~c": None}, {})[0]["path"], "/a~1b~0c")

    def test_rejects_missing_invalid_stale_and_inconsistent_data(self):
        for kind in (
            "missing-state",
            "invalid-state",
            "stale",
            "missing-report",
            "extra-report",
            "malformed",
            "bad-summary",
            "wrong-month",
            "empty",
            "mixed-repository",
        ):
            with self.subTest(kind=kind):
                directory = dataset(self.root / kind)
                state_path = directory / script.STATE_FILE
                report_path = directory / "2024-01.json"
                if kind == "missing-state":
                    state_path.unlink()
                elif kind == "invalid-state":
                    state_path.write_text('{"schema_version": "unsupported"}')
                elif kind == "stale":
                    report_path.write_text(report_path.read_text() + "\n")
                elif kind == "missing-report":
                    report_path.unlink()
                elif kind == "extra-report":
                    report_path.rename(directory / "2024-03.json")
                elif kind == "malformed":
                    report_path.write_text("broken JSON")
                elif kind in {"bad-summary", "wrong-month", "mixed-repository"}:
                    value = json.loads(report_path.read_text())
                    if kind == "bad-summary":
                        value["summaries"]["repository_counts"]["issue_comment"] += 1
                    elif kind == "wrong-month":
                        value["metadata"]["month"] = "2024-02"
                    else:
                        value["metadata"]["repository"]["node_id"] = "R_other"
                    report_path.write_text(json.dumps(value))
                elif kind == "empty":
                    for path in directory.glob("2024-*.json"):
                        path.unlink()
                with self.assertRaises((OSError, ValueError)):
                    script.load_dataset(directory)

    def test_requested_name_is_case_insensitive_but_identity_is_checked(self):
        directory = dataset(self.root / "data")
        script.load_dataset(directory, repository="Owner/Repo", node_id="R_test")
        with self.assertRaisesRegex(ValueError, "belongs to"):
            script.load_dataset(directory, repository="other/repo")
        with self.assertRaisesRegex(ValueError, "node ID"):
            script.load_dataset(directory, node_id="R_other")


class CollectorOutputTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.log = Path(self.temporary.name) / "collector.log"

    def test_redirected_output_is_streamed_and_logged_including_failure(self):
        output = io.StringIO()
        command = [
            sys.executable,
            "-c",
            (
                "import sys; print('saved report', flush=True); "
                "print('progress café', file=sys.stderr, flush=True); sys.exit(7)"
            ),
        ]
        with (
            contextlib.redirect_stderr(output),
            self.assertRaises(subprocess.CalledProcessError) as error,
        ):
            script.run_collector(command, self.log)
        self.assertEqual(error.exception.returncode, 7)
        self.assertEqual(error.exception.cmd, command)
        self.assertIn("saved report", output.getvalue())
        self.assertIn("progress café", output.getvalue())
        self.assertEqual(self.log.read_text(), output.getvalue())

    def test_output_is_forwarded_before_the_child_exits(self):
        marker = self.log.parent / "received"

        class Output(io.StringIO):
            def write(self, value):
                if "ready" in value:
                    marker.touch()
                return super().write(value)

        command = [
            sys.executable,
            "-c",
            (
                "import pathlib, sys, time; "
                f"marker = pathlib.Path({str(marker)!r}); "
                "print('ready', flush=True); "
                "deadline = time.monotonic() + 5\n"
                "while not marker.exists() and time.monotonic() < deadline: time.sleep(0.01)\n"
                "sys.exit(0 if marker.exists() else 1)"
            ),
        ]
        with contextlib.redirect_stderr(Output()):
            script.run_collector(command, self.log)
        self.assertTrue(marker.exists())

    @unittest.skipUnless(hasattr(os, "openpty"), "requires POSIX pseudo-terminals")
    def test_interactive_child_sees_a_terminal_and_output_is_logged(self):
        class Terminal(io.StringIO):
            def isatty(self):
                return True

        output = Terminal()
        command = [
            sys.executable,
            "-c",
            (
                "import sys; print('terminal:', sys.stdout.isatty(), sys.stderr.isatty()); "
                "print('\\x1b[32mprogress\\x1b[0m', file=sys.stderr)"
            ),
        ]
        with contextlib.redirect_stderr(output):
            script.run_collector(command, self.log)
        self.assertIn("terminal: True True", output.getvalue())
        self.assertIn("\x1b[32mprogress\x1b[0m", output.getvalue())
        self.assertEqual(self.log.read_bytes(), output.getvalue().encode("utf-8"))


class OrchestrationTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name).resolve()
        self.site = self.root / "site"
        self.source = dataset(self.site / "owner" / "repo")
        (self.source / "index.html").write_text("site page")
        (self.source / "summary.json").write_text("site summary")
        (self.source / "social-card.png").write_bytes(b"image")
        self.work = self.root / "work"
        self.report = self.root / "report.json"
        self.commands = []
        self.original = {p.name: p.read_bytes() for p in self.source.iterdir()}

    def collect(self, command, *, stdout, stderr, check):
        self.commands.append(command)
        self.assertEqual(command[:3], [sys.executable, "-m", "repo_history"])
        self.assertEqual(stderr, subprocess.STDOUT)
        self.assertTrue(check)
        action, repository = command[3:5]
        destination = Path(command[command.index("--output-directory") + 1])
        if action == "collect":
            self.assertFalse(destination.exists())
        elif destination != self.site.joinpath(*repository.split("/")):
            self.assertEqual(
                {p.name for p in destination.iterdir()},
                {"2024-01.json", "2024-02.json", script.STATE_FILE},
            )
            for path in destination.iterdir():
                source = self.site.joinpath(*repository.split("/")) / path.name
                self.assertEqual(path.read_bytes(), source.read_bytes())
        stdout.write(f"synthetic {action} output\n")
        dataset(destination, repository=repository, variant=1, command=action)
        return subprocess.CompletedProcess(command, 0)

    def invoke(self, args=(), collector=None, retain=True):
        self.output = io.StringIO()
        argv = ["--site-dir", str(self.site), "--report", str(self.report)]
        if retain:
            argv.extend(["--work-dir", str(self.work)])
        argv.extend(args or ["owner/repo"])

        def run_mock(command, log):
            with log.open("w", encoding="utf-8") as stream:
                return (collector or self.collect)(
                    command, stdout=stream, stderr=subprocess.STDOUT, check=True
                )

        with (
            patch.object(script, "utc_now", return_value=NOW),
            patch.object(script, "run_collector", side_effect=run_mock),
            contextlib.redirect_stdout(self.output),
            contextlib.redirect_stderr(self.output),
        ):
            code = script.main(argv)
        return code

    def result(self):
        return json.loads(self.report.read_text())

    def test_copy_flow_commands_report_and_initial_state(self):
        self.assertEqual(self.invoke(), 0, self.output.getvalue())
        self.assertEqual([cmd[3] for cmd in self.commands], ["collect", "update"])
        for command in self.commands:
            self.assertEqual(command[command.index("--end") + 1], "2024-03")
            self.assertNotIn("--start", command)
            self.assertNotIn("--no-progress", command)
        self.assertFalse(self.result()["parameters"]["no_progress"])
        for path in self.source.iterdir():
            self.assertEqual(path.read_bytes(), self.original[path.name])
        artifacts = self.result()["results"][0]["artifacts"]
        self.assertEqual(
            Path(artifacts["initial_state"]).read_bytes(),
            self.original[script.STATE_FILE],
        )
        self.assertIn("synthetic collect", Path(artifacts["collect_log"]).read_text())
        self.assertIn("synthetic update", Path(artifacts["update_log"]).read_text())
        self.assertEqual(self.result()["results"][0]["status"], "match")
        self.assertTrue(self.result()["workspace_retained"])
        self.assertEqual(
            json.loads((self.work / "comparison.json").read_text()), self.result()
        )

    def test_no_progress_is_forwarded_only_to_collect(self):
        self.assertEqual(self.invoke(["owner/repo", "--no-progress"]), 0)
        self.assertIn("--no-progress", self.commands[0])
        self.assertNotIn("--no-progress", self.commands[1])
        self.assertTrue(self.result()["parameters"]["no_progress"])

    def test_in_place_start_override_and_explicit_end(self):
        self.assertEqual(
            self.invoke(
                [
                    "owner/repo",
                    "--in-place",
                    "--update-start",
                    "2024-01",
                    "--end",
                    "2024-02",
                ]
            ),
            0,
        )
        self.assertNotIn("--start", self.commands[0])
        self.assertEqual(self.commands[1][-2:], ["--start", "2024-01"])
        self.assertEqual(
            Path(self.commands[1][self.commands[1].index("--output-directory") + 1]),
            self.source,
        )
        self.assertNotEqual(
            (self.source / script.STATE_FILE).read_bytes(),
            self.original[script.STATE_FILE],
        )
        self.assertEqual(
            (self.source / "index.html").read_bytes(), self.original["index.html"]
        )

    def test_automatic_workspace_removed_on_success(self):
        self.assertEqual(self.invoke(retain=False), 0)
        data = self.result()
        self.assertFalse(data["workspace_retained"])
        self.assertFalse(Path(data["parameters"]["work_dir"]).exists())

    def test_mismatch_outside_update_range_retains_automatic_workspace(self):
        def collect(command, **kwargs):
            result = self.collect(command, **kwargs)
            if command[3] == "collect":
                path = Path(command[command.index("--output-directory") + 1])
                dataset(
                    path, performers={"2024-01": ("A", "A", "B"), "2024-02": ("A", "B")}
                )
            return result

        self.assertEqual(self.invoke(collector=collect, retain=False), 1)
        data = self.result()
        work = Path(data["parameters"]["work_dir"])
        self.addCleanup(script.shutil.rmtree, work)
        self.assertTrue(work.exists())
        self.assertEqual(
            data["results"][0]["months"], {"2024-01": "mismatch", "2024-02": "match"}
        )

    def test_missing_month_is_a_mismatch(self):
        def collect(command, **kwargs):
            result = self.collect(command, **kwargs)
            if command[3] == "update":
                destination = Path(command[command.index("--output-directory") + 1])
                (destination / "2024-01.json").unlink()
                report = api.report_from_json(
                    (destination / "2024-02.json").read_text()
                )
                write_collection_state(
                    destination, report.metadata.provenance.last_updated_by
                )
            return result

        self.assertEqual(self.invoke(collector=collect), 1)
        self.assertEqual(
            self.result()["results"][0]["months"]["2024-01"], "collect-only"
        )

    def test_failed_collect_does_not_run_update_or_touch_in_place_data(self):
        def fail(command, **kwargs):
            kwargs["stdout"].write("collector failed\n")
            raise subprocess.CalledProcessError(7, command)

        self.assertEqual(self.invoke(["owner/repo", "--in-place"], collector=fail), 2)
        outcome = self.result()["results"][0]
        self.assertEqual(outcome["collector_returncode"], 7)
        self.assertEqual(len(outcome["commands"]), 1)
        self.assertEqual(
            (self.source / script.STATE_FILE).read_bytes(),
            self.original[script.STATE_FILE],
        )

    def test_update_failure_retains_automatic_workspace_and_initial_state(self):
        def collect(command, **kwargs):
            if command[3] == "update":
                kwargs["stdout"].write("update failed after partial writes\n")
                raise subprocess.CalledProcessError(1, command)
            return self.collect(command, **kwargs)

        self.assertEqual(self.invoke(collector=collect, retain=False), 2)
        data = self.result()
        work = Path(data["parameters"]["work_dir"])
        self.addCleanup(script.shutil.rmtree, work)
        outcome = data["results"][0]
        self.assertTrue(data["workspace_retained"])
        self.assertEqual(outcome["stage"], "update")
        self.assertEqual(
            Path(outcome["artifacts"]["initial_state"]).read_bytes(),
            self.original[script.STATE_FILE],
        )
        self.assertIn(
            "partial writes", Path(outcome["artifacts"]["update_log"]).read_text()
        )

    def test_successful_command_with_invalid_output_stops_before_update(self):
        def collect(command, **kwargs):
            result = self.collect(command, **kwargs)
            destination = Path(command[command.index("--output-directory") + 1])
            (destination / "2024-01.json").write_text("invalid")
            return result

        self.assertEqual(self.invoke(collector=collect), 2)
        self.assertEqual(len(self.commands), 1)
        self.assertEqual(self.result()["results"][0]["stage"], "validate-collect")

    def test_wrong_collect_identity_stops_before_update(self):
        def collect(command, **kwargs):
            result = self.collect(command, **kwargs)
            destination = Path(command[command.index("--output-directory") + 1])
            dataset(destination, node_id="R_other")
            return result

        self.assertEqual(self.invoke(collector=collect), 2)
        self.assertEqual(len(self.commands), 1)
        self.assertIn("node ID", self.result()["results"][0]["error"])

    def test_invalid_source_never_collects_and_retains_initial_state(self):
        (self.source / "2024-01.json").write_text("bad")
        self.assertEqual(self.invoke(), 2)
        self.assertEqual(self.commands, [])
        artifacts = self.result()["results"][0]["artifacts"]
        self.assertEqual(
            Path(artifacts["initial_state"]).read_bytes(),
            self.original[script.STATE_FILE],
        )

    def test_end_before_existing_reports_never_collects(self):
        self.assertEqual(self.invoke(["owner/repo", "--end", "2024-01"]), 2)
        self.assertEqual(self.commands, [])

    def test_batch_continues_and_errors_take_precedence_over_mismatches(self):
        dataset(self.site / "aaa" / "broken", repository="aaa/broken")
        (self.site / "aaa" / "broken" / script.STATE_FILE).unlink()
        dataset(self.site / "zzz" / "last", repository="zzz/last")

        def collect(command, **kwargs):
            result = self.collect(command, **kwargs)
            if command[3] == "collect" and command[4] == "owner/repo":
                destination = Path(command[command.index("--output-directory") + 1])
                dataset(destination, performers=("A",))
            return result

        self.assertEqual(self.invoke(["--all"], collector=collect), 2)
        outcomes = self.result()["results"]
        self.assertEqual(
            [item["repository"] for item in outcomes],
            ["aaa/broken", "owner/repo", "zzz/last"],
        )
        self.assertEqual(
            [item["status"] for item in outcomes], ["error", "mismatch", "match"]
        )

    def test_console_limit_preserves_all_json_differences(self):
        def collect(command, **kwargs):
            result = self.collect(command, **kwargs)
            if command[3] == "collect":
                destination = Path(command[command.index("--output-directory") + 1])
                dataset(destination, performers=("C",))
            return result

        self.assertEqual(self.invoke(collector=collect), 1)
        changes = self.result()["results"][0]["differences"]
        self.assertGreater(len(changes), 20)
        self.assertEqual(self.output.getvalue().count("collect="), 20)
        self.assertIn("more differences", self.output.getvalue())

    def test_report_write_failure_is_operational_and_retains_workspace_report(self):
        self.report.mkdir()
        self.assertEqual(self.invoke(), 2)
        data = json.loads((self.work / "comparison.json").read_text())
        self.assertEqual(data["exit_code"], 2)
        self.assertTrue(data["workspace_retained"])
        self.assertIn("error", data)

    def test_rejects_unsafe_paths_and_nonempty_workspaces(self):
        cases = [
            ["--work-dir", str(self.site / "new-work")],
            ["--report", str(self.source / "2024-01.json")],
            ["--work-dir", str(self.source)],
            ["--report", str(self.work / "owner" / "repo" / "update" / "2024-01.json")],
        ]
        for extra in cases:
            with self.subTest(extra=extra):
                self.assertEqual(self.invoke(["owner/repo", *extra]), 2)
                self.assertEqual(self.commands, [])
        self.work.mkdir(exist_ok=True)
        (self.work / "existing").write_text("keep")
        self.assertEqual(self.invoke(), 2)
        self.assertEqual((self.work / "existing").read_text(), "keep")

    def test_report_can_use_workspace_comparison_json(self):
        self.report = self.work / "comparison.json"
        self.assertEqual(self.invoke(), 0)
        self.assertTrue(self.result()["workspace_retained"])

    def test_all_ignores_directories_named_like_monthly_reports(self):
        (self.site / "empty" / "repo" / "2024-01.json").mkdir(parents=True)
        self.assertEqual(self.invoke(["--all"]), 0)
        self.assertEqual(self.result()["parameters"]["repositories"], ["owner/repo"])

    def test_all_rejects_invalid_directory_names_without_traceback(self):
        dataset(self.site / "invalid_owner" / "repo")
        self.assertEqual(self.invoke(["--all"]), 2)
        self.assertEqual(self.commands, [])

    def test_rejects_symlink_escape(self):
        outside = self.root / "outside"
        dataset(outside)
        (self.site / "owner" / "escape").symlink_to(outside, target_is_directory=True)
        self.assertEqual(self.invoke(["owner/escape"]), 2)
        self.assertEqual(self.commands, [])

    def test_argument_errors(self):
        for argv in (
            [],
            ["--all", "owner/repo"],
            ["../repo"],
            ["owner/.."],
            ["owner/repo", "--end", "2024-13"],
            ["owner/repo", "--end", "0000-01"],
            ["owner/repo", "--end", "2024-04"],
            ["owner/repo", "--end", "2024-02", "--update-start", "2024-03"],
        ):
            with (
                self.subTest(argv=argv),
                patch.object(script, "utc_now", return_value=NOW),
                contextlib.redirect_stderr(io.StringIO()),
            ):
                with self.assertRaises(SystemExit) as error:
                    script.main(argv)
                self.assertEqual(error.exception.code, 2)


if __name__ == "__main__":
    unittest.main()
