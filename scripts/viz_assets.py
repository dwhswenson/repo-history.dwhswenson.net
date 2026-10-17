"""Build and copy the shared visualizer from the local repo-history checkout."""

import argparse
import json
import os
import shutil
import subprocess
from pathlib import Path

DEFAULT_SOURCE = Path(
    "/Users/dwhs/Dropbox/omsf/mupt/repo-history-tracking/repo-history-viz"
)
ASSETS = Path(__file__).resolve().parents[1] / "site" / "assets"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("action", choices=["install", "build", "copy"])
    parser.add_argument(
        "--source",
        type=Path,
        default=os.environ.get("REPO_HISTORY_VIZ_SOURCE", DEFAULT_SOURCE),
        help="repo-history-viz directory (or set REPO_HISTORY_VIZ_SOURCE)",
    )
    args = parser.parse_args()
    source = args.source.expanduser().resolve()
    try:
        package = json.loads((source / "package.json").read_text())
    except (OSError, ValueError) as error:
        parser.error(f"cannot read {source / 'package.json'}: {error}")
    if package.get("name") != "repo-history-viz":
        parser.error(f"{source} is not the repo-history-viz package")

    if args.action == "install":
        subprocess.run(["npm", "ci"], cwd=source, check=True)
    elif args.action == "build":
        subprocess.run(["npm", "run", "build"], cwd=source, check=True)
    else:
        bundle = source / "dist" / "repo-history-viz.js"
        license_file = source / "LICENSE"
        for required in (bundle, license_file):
            if not required.is_file():
                parser.error(f"missing {required}; run pixi run update-viz")
        ASSETS.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(bundle, ASSETS / "repo-history-viz.mjs")
        shutil.copyfile(license_file, ASSETS / "repo-history-viz.LICENSE")
        print(f"Updated {ASSETS / 'repo-history-viz.mjs'}")


if __name__ == "__main__":
    main()
