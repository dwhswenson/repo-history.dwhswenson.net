"""Collect a repository's history and create its page under site/OWNER/REPO/."""

import argparse
import re
import subprocess
import sys
from html import escape
from pathlib import Path

from social_cards import social_metadata, write_social_card

SITE = Path(__file__).resolve().parents[1] / "site"


def repository_name(value: str) -> str:
    match = re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9-]*/([A-Za-z0-9_.-]+)", value)
    if match is None or match[1] in {".", ".."}:
        raise argparse.ArgumentTypeError("repository must use OWNER/REPO")
    return value


def page(repository: str) -> str:
    name = escape(repository)
    return f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{name} · Repository history</title>
{social_metadata(repository)}
    <style>
      body {{ margin: 0; background: #f4f6fa; }}
    </style>
    <script type="module" src="/assets/repo-history-viz.mjs"></script>
  </head>
  <body>
    <repo-history-viz
      manifest="./manifest.json"
      measures="commits github-activities total-contributors"
      hide-loader
    ></repo-history-viz>
  </body>
</html>
"""


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
    except subprocess.CalledProcessError as error:
        return error.returncode
    except OSError as error:
        print(f"add-repo: {error}", file=sys.stderr)
        return 1
    print(f"Created {index}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
