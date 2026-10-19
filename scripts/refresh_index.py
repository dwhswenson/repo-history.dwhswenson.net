"""Refresh homepage links for repositories and configured combined reports."""

import json
from html import escape
from pathlib import Path
from urllib.parse import quote

if __package__:
    from .combo_config import CONFIG, load_combos
else:
    from combo_config import CONFIG, load_combos

SITE = Path(__file__).resolve().parents[1] / "site"
START = "      <!-- BEGIN REPOSITORY LINKS -->"
END = "      <!-- END REPOSITORY LINKS -->"
COMBO_START = "      <!-- BEGIN COMBINATION LINKS -->"
COMBO_END = "      <!-- END COMBINATION LINKS -->"


def replace_section(original, start_marker, end_marker, content):
    if original.count(start_marker) != 1 or original.count(end_marker) != 1:
        raise ValueError(f"expected one pair of link markers: {start_marker}")
    start = original.index(start_marker) + len(start_marker)
    end = original.index(end_marker)
    if end < start:
        raise ValueError(f"link markers are out of order: {start_marker}")
    return original[:start] + "\n" + content + "\n" + original[end:]


def link_section(title, links, empty_message):
    links.sort(key=lambda item: (item[0].casefold(), item[1]))
    lines = [f"      <h2>{title}</h2>"]
    if links:
        lines.append("      <ul>")
        lines.extend(
            f'        <li><a href="{escape(url, quote=True)}">{escape(name)}</a></li>'
            for name, url in links
        )
        lines.append("      </ul>")
    else:
        lines.append(f"      <p>{empty_message}</p>")
    return "\n".join(lines)


def refresh_index(site: Path = SITE, config: Path = CONFIG) -> Path:
    combos = load_combos(config)
    index = site / "index.html"
    original = index.read_text(encoding="utf-8")

    repositories = []
    for manifest in site.glob("*/*/manifest.json"):
        if manifest.relative_to(site).parts[0] == "combos":
            continue
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

    combinations = []
    for combo in combos:
        directory = site / "combos" / combo.slug
        if all((directory / name).is_file() for name in ("manifest.json", "index.html")):
            combinations.append((combo.index_display, f"./combos/{combo.slug}/"))
    updated = replace_section(
        original, START, END,
        link_section("Repositories", repositories, "No repository reports have been added yet."),
    )
    updated = replace_section(
        updated, COMBO_START, COMBO_END,
        link_section("Combined repositories", combinations, "No combined reports have been added yet."),
    )
    index.write_text(updated, encoding="utf-8")
    return index


if __name__ == "__main__":
    try:
        print(f"Updated {refresh_index()}")
    except (OSError, ValueError, KeyError) as error:
        raise SystemExit(f"refresh-index: {error}") from error
