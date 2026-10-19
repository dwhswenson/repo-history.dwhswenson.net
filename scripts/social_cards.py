"""Generate static social cards and refresh metadata without collecting history."""

import json
from datetime import date
from html import escape
from pathlib import Path
from urllib.parse import quote

from PIL import Image, ImageDraw, ImageFont

SITE = Path(__file__).resolve().parents[1] / "site"
SITE_URL = "https://repo-history.dwhswenson.net"
WIDTH, HEIGHT, SCALE = 1200, 630, 2
START = "    <!-- Social preview -->"
END = "    <!-- /Social preview -->"


def social_metadata(path: str, *, display_name: str | None = None) -> str:
    repository = display_name if display_name is not None else path
    url = f"{SITE_URL}/{quote(path, safe='/')}/"
    image = f"{url}social-card.png"
    title = f"{repository} · Repository history"
    description = f"Explore monthly commits, GitHub activity, and contributor trends for {repository}."
    alt = (
        f"Repository history for {repository}: monthly commits and totals for commits, "
        "GitHub activities, and contributors."
    )
    tags = [
        START,
        f'    <link rel="canonical" href="{escape(url, quote=True)}">',
        f'    <meta name="description" content="{escape(description, quote=True)}">',
    ]
    for attribute, values in (
        (
            "property",
            {
                "og:type": "website",
                "og:site_name": "Repository history",
                "og:title": title,
                "og:description": description,
                "og:url": url,
                "og:image": image,
                "og:image:type": "image/png",
                "og:image:width": str(WIDTH),
                "og:image:height": str(HEIGHT),
                "og:image:alt": alt,
            },
        ),
        (
            "name",
            {
                "twitter:card": "summary_large_image",
                "twitter:title": title,
                "twitter:description": description,
                "twitter:image": image,
                "twitter:image:alt": alt,
            },
        ),
    ):
        for key, value in values.items():
            tags.append(
                f'    <meta {attribute}="{key}" content="{escape(value, quote=True)}">'
            )
    return "\n".join([*tags, END])


def font(size: int, *, bold: bool = False):
    filename = "Arial Bold.ttf" if bold else "Arial.ttf"
    for candidate in (
        Path("/System/Library/Fonts/Supplemental") / filename,
        Path("DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"),
    ):
        try:
            return ImageFont.truetype(str(candidate), size * SCALE)
        except OSError:
            pass
    return ImageFont.load_default(size=size * SCALE)


def contribution_totals(manifest: dict) -> tuple[int, int]:
    """Match the visualizer's default human and unresolved-identity filters."""
    activities = 0
    contributors = set()
    for month in manifest["months"]:
        summaries = month["summaries"]
        for actor, counts in summaries["actor_counts"].items():
            if manifest["actors"][actor] not in ("human", "unresolved_git"):
                continue
            if any(counts.values()):
                contributors.add(actor)
            activities += sum(
                value for kind, value in counts.items() if kind != "commit"
            )
        activities += sum(
            value
            for kind, value in summaries["unattributed_by_type"].items()
            if kind != "commit"
        )
    return activities, len(contributors)


def write_social_card(repository: str, directory: Path) -> Path:
    manifest = json.loads((directory / "manifest.json").read_text(encoding="utf-8"))
    months = sorted(manifest["months"], key=lambda month: month["metadata"]["month"])
    if not months:
        raise ValueError(f"{directory}: no monthly data for a social card")
    counts = {
        month["metadata"]["month"]: month["summaries"]["repository_counts"]["commit"]
        for month in months
    }
    first, last = months[0]["metadata"]["month"], months[-1]["metadata"]["month"]
    activities, contributors = contribution_totals(manifest)

    def month_index(value):
        year, month = map(int, value.split("-"))
        return year * 12 + month - 1

    # Keep gaps in the timeline if some months have not been collected.
    timeline = [
        counts.get(f"{index // 12:04d}-{index % 12 + 1:02d}")
        for index in range(month_index(first), month_index(last) + 1)
    ]
    image = Image.new("RGB", (WIDTH * SCALE, HEIGHT * SCALE), "#101b30")
    draw = ImageDraw.Draw(image)

    def position(x, y):
        return (round(x * SCALE), round(y * SCALE))

    def text(x, y, value, size, color, *, bold=False, anchor="la"):
        draw.text(
            position(x, y), value, font=font(size, bold=bold), fill=color, anchor=anchor
        )

    draw.rectangle((0, 0, WIDTH * SCALE, 6 * SCALE), fill="#76dfc5")
    text(64, 45, "REPOSITORY HISTORY", 19, "#76dfc5", bold=True)
    if len(manifest.get("repositories", [])) > 1:
        name = repository
        text(64, 99, "COMBINED REPOSITORIES", 24, "#a9b9d3")
    elif "/" in repository:
        owner, name = repository.split("/", 1)
        text(64, 99, f"{owner} /", 30, "#a9b9d3")
    else:
        name = repository
    size = 78
    while (
        size > 12 and draw.textlength(name, font=font(size, bold=True)) > 1072 * SCALE
    ):
        size -= 1
    text(60, 143, name, size, "#f6f8ff", bold=True)
    text(64, 246, "Commits. Activity. Contributors.", 26, "#c2cce0")
    text(64, 316, "MONTHLY COMMITS", 16, "#a9b9d3", bold=True)
    text(
        1136,
        311,
        f"{sum(counts.values()):,} commits  /  {len(months)} months",
        22,
        "#f6f8ff",
        anchor="ra",
    )
    text(
        1136,
        343,
        f"{activities:,} GitHub activities  /  {contributors:,} total contributors",
        22,
        "#f6f8ff",
        anchor="ra",
    )

    left, right, top, bottom = 104, 1136, 394, 510
    maximum = max(counts.values())
    text(82, top - 8, f"{maximum:,}", 13, "#8194b2", anchor="ra")
    text(82, bottom - 8, "0", 13, "#8194b2", anchor="ra")
    for y in (top, (top + bottom) / 2, bottom):
        draw.line([position(left, y), position(right, y)], fill="#28374f", width=SCALE)
    step = (right - left) / len(timeline)
    for index, value in enumerate(timeline):
        if value is None or value == 0:
            continue
        x = left + index * step + step * 0.17
        height = value / max(maximum, 1) * (bottom - top)
        ongoing = index == len(timeline) - 1 and months[-1]["metadata"]["ongoing"]
        draw.rectangle(
            [position(x, bottom - height), position(x + step * 0.66, bottom)],
            fill="#76dfc5" if ongoing else "#9aaeff",
        )

    def label(month):
        year, number = map(int, month.split("-"))
        return date(year, number, 1).strftime("%b %Y")

    text(left, 520, label(first), 15, "#a9b9d3")
    text(right, 520, label(last), 15, "#a9b9d3", anchor="ra")
    text(64, 577, "repo-history.dwhswenson.net", 18, "#a9b9d3")
    if months[-1]["metadata"]["ongoing"]:
        text(1136, 579, "Latest month is partial", 16, "#76dfc5", anchor="ra")

    target = directory / "social-card.png"
    image.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS).save(target, optimize=True)
    return target


def refresh_existing_pages(site: Path = SITE):
    for index in sorted(site.glob("*/*/index.html")):
        if not (index.parent / "manifest.json").is_file():
            continue
        path = index.parent.relative_to(site).as_posix()
        manifest = json.loads((index.parent / "manifest.json").read_text(encoding="utf-8"))
        repository = manifest.get("display_name", path)
        original = index.read_text(encoding="utf-8")
        metadata = social_metadata(path, display_name=repository)
        if START in original and END in original:
            prefix, remaining = original.split(START, 1)
            _, suffix = remaining.split(END, 1)
            updated = prefix + metadata + suffix
        elif "  </head>" in original:
            updated = original.replace("  </head>", metadata + "\n  </head>", 1)
        else:
            raise ValueError(f"{index}: cannot find the page head")
        write_social_card(repository, index.parent)
        index.write_text(updated, encoding="utf-8")
        print(f"Refreshed social preview for {repository}")


if __name__ == "__main__":
    refresh_existing_pages()
