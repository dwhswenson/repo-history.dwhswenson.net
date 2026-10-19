"""Rebuild configured combined reports from deployed repository manifests."""

import subprocess
import sys
from pathlib import Path

if __package__:
    from .combo_config import CONFIG, load_combos
    from .refresh_index import SITE, refresh_index
    from .report_pages import page
    from .social_cards import write_social_card
else:
    from combo_config import CONFIG, load_combos
    from refresh_index import SITE, refresh_index
    from report_pages import page
    from social_cards import write_social_card


def refresh_combos(site: Path = SITE, config: Path = CONFIG) -> None:
    combos = load_combos(config)
    # Check every input before replacing any existing combined reports.
    for combo in combos:
        output = site / "combos" / combo.slug
        if not output.resolve().is_relative_to(site.resolve()):
            raise ValueError(f"{output}: output must remain inside site/")
        for repo in combo.repos:
            directory = site / repo
            if not directory.resolve().is_relative_to(site.resolve()):
                raise ValueError(f"{directory}: repository must remain inside site/")
            for filename in ("manifest.json", "index.html"):
                if not (directory / filename).is_file():
                    raise ValueError(f"{directory}: deployed repository requires {filename}")
    for combo in combos:
        directory = site / "combos" / combo.slug
        subprocess.run(
            [
                sys.executable, "-m", "repo_history", "combine-manifests",
                *(str(site / repo / "manifest.json") for repo in combo.repos),
                "--output", str(directory / "manifest.json"),
                "--display-name", combo.display_name,
            ],
            check=True,
        )
        write_social_card(combo.display_name, directory)
        index = directory / "index.html"
        index.write_text(page(combo.display_name, f"combos/{combo.slug}"), encoding="utf-8")
        print(f"Created {index}")
    refresh_index(site, config)


def main() -> int:
    try:
        refresh_combos()
    except subprocess.CalledProcessError as error:
        return error.returncode
    except (OSError, ValueError, KeyError) as error:
        print(f"refresh-combos: {error}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
