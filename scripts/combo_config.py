"""Load the explicit combinations shared by report and homepage generation."""

import re
from dataclasses import dataclass
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
CONFIG = ROOT / "combos.yaml"


class UniqueKeyLoader(yaml.SafeLoader):
    def construct_mapping(self, node, deep=False):
        result = {}
        for key_node, value_node in node.value:
            key = self.construct_object(key_node, deep=deep)
            if not isinstance(key, str):
                raise ValueError("configuration mapping keys must be strings")
            if key in result:
                raise ValueError(f"duplicate configuration key: {key!r}")
            result[key] = self.construct_object(value_node, deep=deep)
        return result


@dataclass(frozen=True)
class Combo:
    display_name: str
    index_display: str
    repos: tuple[str, ...]
    slug: str


def load_combos(path: Path = CONFIG) -> list[Combo]:
    try:
        data = yaml.load(path.read_text(encoding="utf-8"), Loader=UniqueKeyLoader)
    except yaml.YAMLError as error:
        raise ValueError(f"{path}: invalid YAML: {error}") from error
    if not isinstance(data, dict):
        raise ValueError(f"{path}: expected a mapping of display names to combinations")
    combos = []
    names, slugs = set(), set()
    for name, settings in data.items():
        if not name.strip() or name.strip() in names:
            raise ValueError(f"{path}: display names must be unique and nonblank")
        names.add(name.strip())
        if not isinstance(settings, dict):
            raise ValueError(f"{path}: {name!r} must contain repos and index-display")
        label = settings.get("index-display")
        if not isinstance(label, str) or not label.strip():
            raise ValueError(f"{path}: {name!r} requires a nonblank index-display")
        repos = settings.get("repos")
        if not isinstance(repos, list) or len(repos) < 2:
            raise ValueError(f"{path}: {name!r} requires at least two repositories")
        seen = set()
        for repo in repos:
            if not isinstance(repo, str) or not re.fullmatch(
                r"[A-Za-z0-9][A-Za-z0-9-]*/[A-Za-z0-9_.-]+", repo
            ) or repo.split("/")[-1] in {".", ".."}:
                raise ValueError(f"{path}: invalid OWNER/REPO path: {repo!r}")
            if repo.split("/")[0].casefold() == "combos":
                raise ValueError(f"{path}: combinations cannot be repository inputs")
            if repo.casefold() in seen:
                raise ValueError(f"{path}: {name!r} repeats repository {repo!r}")
            seen.add(repo.casefold())
        slug = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
        if not slug or slug in slugs:
            raise ValueError(f"{path}: empty or colliding output slug for {name!r}")
        slugs.add(slug)
        combos.append(Combo(name, label, tuple(repos), slug))
    return combos
