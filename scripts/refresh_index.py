"""Refresh the homepage's repository links from published manifests."""

import json
from html import escape
from pathlib import Path
from urllib.parse import quote

SITE = Path(__file__).resolve().parents[1] / "site"
START = "      <!-- BEGIN REPOSITORY LINKS -->"
END = "      <!-- END REPOSITORY LINKS -->"


def refresh_index(site: Path = SITE) -> Path:
    index = site / "index.html"
    original = index.read_text(encoding="utf-8")
    if original.count(START) != 1 or original.count(END) != 1:
        raise ValueError(f"{index}: expected one pair of repository-link markers")
    start = original.index(START) + len(START)
    end = original.index(END)
    if end < start:
        raise ValueError(f"{index}: repository-link markers are out of order")

    repositories = []
    for manifest in site.glob("*/*/manifest.json"):
        if not (manifest.parent / "index.html").is_file():
            continue
        data = json.loads(manifest.read_text(encoding="utf-8"))
        name = (
            data["display_name"]
            if "display_name" in data
            else data["repository"]["full_name"]
        )
        path = manifest.parent.relative_to(site).as_posix()
        repositories.append((name, f"./{quote(path, safe='/')}/"))
    repositories.sort(key=lambda item: (item[0].casefold(), item[1]))

    lines = ["      <h2>Repositories</h2>"]
    if repositories:
        lines.append("      <ul>")
        lines.extend(
            f'        <li><a href="{escape(url, quote=True)}">{escape(name)}</a></li>'
            for name, url in repositories
        )
        lines.append("      </ul>")
    else:
        lines.append("      <p>No repository reports have been added yet.</p>")
    index.write_text(
        original[:start] + "\n" + "\n".join(lines) + "\n" + original[end:],
        encoding="utf-8",
    )
    return index


if __name__ == "__main__":
    try:
        print(f"Updated {refresh_index()}")
    except (OSError, ValueError, KeyError) as error:
        raise SystemExit(f"refresh-index: {error}") from error
