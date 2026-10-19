"""Collect a repository's history and create its page under site/OWNER/REPO/."""

import argparse
import re
import subprocess
import sys
from pathlib import Path

if __package__:
    from .refresh_index import refresh_index
    from .report_pages import page
    from .social_cards import write_social_card
else:
    from refresh_index import refresh_index
    from report_pages import page
    from social_cards import write_social_card

SITE = Path(__file__).resolve().parents[1] / "site"


def repository_name(value: str) -> str:
    match = re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9-]*/([A-Za-z0-9_.-]+)", value)
    if match is None or match[1] in {".", ".."}:
        raise argparse.ArgumentTypeError("repository must use OWNER/REPO")
    return value


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("repository", type=repository_name, metavar="OWNER/REPO")
    args = parser.parse_args(argv)
    directory = SITE.joinpath(*args.repository.split("/"))
    if not directory.resolve().is_relative_to(SITE.resolve()):
        parser.error("repository directory must remain inside site/")
    try:
        directory.mkdir(parents=True, exist_ok=True)
        subprocess.run(
            [
                sys.executable, "-m", "repo_history", "backfill", args.repository,
                "--output-directory", str(directory),
            ],
            check=True,
        )
        subprocess.run(
            [
                sys.executable, "-m", "repo_history", "summarize",
                "--input-directory", str(directory),
            ],
            check=True,
        )
        write_social_card(args.repository, directory)
        index = directory / "index.html"
        index.write_text(page(args.repository), encoding="utf-8")
        refresh_index(SITE)
    except subprocess.CalledProcessError as error:
        return error.returncode
    except (OSError, ValueError, KeyError) as error:
        print(f"add-repo: {error}", file=sys.stderr)
        return 1
    print(f"Created {index}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
