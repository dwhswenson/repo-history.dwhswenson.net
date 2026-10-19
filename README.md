# Repository history website

Plain HTML and shared visualization assets for <https://repo-history.dwhswenson.net>.
Cloudflare Pages hosts the site; AWS Route53 hosts DNS for `dwhswenson.net`.
This repository contains a project homepage, a command for adding repository
reports, and the deployment scaffold. Scheduled collection will be added later.

## Local development

Install [Pixi](https://pixi.sh), then run:

```sh
pixi install
pixi run demo
```

Open <http://localhost:8000>. The server binds to the local machine and serves
only `site/`. Stop it with Ctrl-C.

Both the default and `dev` environments include Python 3.12, the editable
`repo-history` package, Node.js 24, and OpenTofu. Focused environments are also
available:

| Environment | Feature | Example |
| --- | --- | --- |
| `collection` | Editable Python collector and summarizer | `pixi run -e collection add-repo owner/repo` |
| `visualization` | Local visualizer build and asset refresh | `pixi run -e visualization update-viz` |
| `infra` | OpenTofu infrastructure management | `pixi run -e infra infra-validate` |
| `dev` | All lifecycle features | `pixi run -e dev demo` |

All environments include Python and the demo command. Install a focused
environment with `pixi install -e collection` (or its environment name).
The workspace targets `osx-64`.

### Local source projects

The editable Python dependency intentionally points to:

```text
/Users/dwhs/Dropbox/omsf/mupt/repo-history-tracking
```

The visualizer source defaults to its `repo-history-viz` subdirectory. Python
source changes are immediately available through `repo-history`. To move the
Python checkout, update the path in `pixi.toml` and run `pixi install`.
To build the visualizer from another checkout, set `REPO_HISTORY_VIZ_SOURCE`
to its `repo-history-viz` directory.

### Refresh the shared visualization bundle

```sh
pixi run update-viz
```

This runs three tasks in order: `install-viz` executes `npm ci` in the local
visualizer project, `build-viz` runs its library build, and `update-viz` copies
the standalone `dist/repo-history-viz.js` to
`site/assets/repo-history-viz.mjs`, along with its MIT license. These tasks
write npm dependencies and build output into the source checkout. They do not
change its source files. A failed installation or build prevents the copy.

Commit refreshed assets here. GitHub Actions deploys the committed files and
does not need Python, Node.js, or your local source checkout.

### Add a repository

Set `GH_TOKEN` or `GITHUB_TOKEN` for the collector, then run:

```sh
pixi run add-repo owner/repo
# Or use the focused collection environment:
pixi run -e collection add-repo owner/repo
```

The task runs `repo-history backfill` for the full available history, runs
`repo-history summarize`, and creates a simple visualization page and social
preview image. All outputs live together directly in `site/<owner>/<repo>/`:

```text
site/owner/repo/
  YYYY-MM.json
  ...
  manifest.json
  index.html
  social-card.png
```

The page is served at `/<owner>/<repo>/`. The task also refreshes the homepage's
repository links. Preview it with `pixi run demo` and commit the resulting
directory together with the updated `site/index.html` to publish them through
the existing workflows.
The monthly JSON files are stored and hosted here for convenience. Of the
JSON files in each repository directory, only `manifest.json` is needed for
the HTML page to render its visualization; the page does not load the
individual monthly reports.

Rerunning the task backfills again, rebuilds the manifest, and replaces the
generated page. Collection or summarization errors stop the task before it
writes the page; monthly files already written by the collector are retained.

Each page loads the same shared module and its own summary manifest:

```html
<script type="module" src="/assets/repo-history-viz.mjs"></script>
<repo-history-viz
  manifest="./manifest.json"
  measures="github-activities commits contributors total-contributors balance"
  hide-loader
></repo-history-viz>
```

To rebuild just the manifest after updating monthly reports:

```sh
pixi run repo-history summarize \
  --input-directory site/OWNER/REPO
```

There is one hosted visualizer bundle shared by all repository pages.

### Compare updates with full history

Set `GH_TOKEN` or `GITHUB_TOKEN`, then run:

```sh
pixi run compare-update owner/repo
pixi run compare-update --all
# The focused environment supports the same task:
pixi run -e collection compare-update owner/repo
```

The script validates the saved dataset, copies its monthly reports and
`collection-state.json` into temporary storage, runs a fresh `repo-history
backfill` in a separate directory, and runs `repo-history update` on the copy.
Both outputs must pass the collector's state verifier, including schema,
report consistency, and exact-byte inventory checks. An existing nonempty
dataset with a valid state file is required; a missing state file is an error.

Comparison covers the full month inventory, repository node IDs, calendar
boundaries, every monthly summary field (including per-contributor counts and
unattributed activities), and credited contributor keys and classifications.
Bots and unresolved Git identities are included. This catches differences in
older months, such as commits belonging to a pull request merged months later,
even when the update only refreshes recent months. Uncredited actors, display
names, titles, URLs, coverage information, branch observations, and collection
provenance are excluded. State hashes validate each dataset independently;
they cannot be compared directly because report bytes include run metadata.

| Option | Behavior |
| --- | --- |
| `OWNER/REPO` / `--all` | Choose one repository or discover all directories with monthly reports under the site root; exactly one selection is required. |
| `--site-dir PATH` | Read datasets from another root; defaults to this checkout's `site/` regardless of the working directory. |
| `--in-place` | Apply the update directly to the source dataset instead of a temporary copy. |
| `--update-start YYYY-MM` | Override the updater's start month; defaults to its normal latest-report-month inference. The backfill always starts at the beginning of history. |
| `--end YYYY-MM` | Inclusive end month for both commands; defaults to the UTC month resolved once when the script starts. Cannot precede existing reports or lie in the future. |
| `--work-dir PATH` | Store and retain all results in a new or empty directory. |
| `--report PATH` | Also save the complete JSON comparison report at this path. |
| `--no-progress` | Forward `--no-progress` to backfill, suppressing its progress display while keeping ordinary logs. The current update CLI has no progress flag. |

Collector output is shown live and saved to the command logs. Interactive
terminals show the collector's normal progress display; redirected output
uses plain progress messages. Interactive logs retain terminal control codes.
Progress is enabled by default; use `--no-progress` to suppress it.

```sh
pixi run compare-update owner/repo --update-start 2026-08
pixi run compare-update owner/repo --work-dir /tmp/history-comparison
pixi run compare-update owner/repo --no-progress
# For a disposable CI checkout with the collector already installed:
python scripts/compare_update.py --all --in-place --report /tmp/comparison.json
```

In-place mode modifies monthly reports and collection state, including on a
mismatch, and does not roll back partial collector writes after an error.
It does not refresh manifests, HTML pages, social cards, or homepage links.
Use it in a disposable CI checkout when the extra copy is unnecessary.
Workspace and report paths must be outside the site root. This script adds no
CI schedule; the current Pixi platform and editable dependency still target
the local checkout described above, so CI must provision the collector itself.

Repositories run sequentially in sorted order; a failure does not stop later
repositories. Exit codes are **0** for all matching results, **1** for valid
datasets that differ, and **2** for argument, collection, validation, filesystem,
or reporting errors. An error takes precedence over mismatches in a batch.
Separate live GitHub collections are not transactional snapshots. Activity
between runs, changed attribution, or historical revisions can produce real
mismatches; the script reports these without suppressing them automatically.

The console lists month outcomes and at most 20 individual differences per
repository. `comparison.json` contains every difference as a JSON Pointer
field path with backfill/update values and explicit presence flags, plus
parameters, timings, command arguments, artifact paths, and errors. Each
repository has separate `backfill/` and `update/` directories, command logs,
and an `initial-collection-state.json` snapshot; in-place runs record the
original update directory instead. Logs inherit collector authentication
through the environment; token values are never added to command arguments.

Successful automatic workspaces are deleted; mismatches and errors retain
them and print their location. Explicit `--work-dir` directories are always
retained. Use `--report` with a distinct filename per run to keep a comparison
record after successful automatic cleanup; artifact paths in that report
refer to the removed workspace. A report inside an explicit workspace must
use its `comparison.json` path.

Run the offline tests, including mocked collection flows, with:

```sh
pixi run python -m unittest discover -s tests -v
```

### Refresh homepage links

```sh
pixi run refresh-index
```

This scans `site/<owner>/<repo>/manifest.json` files that have a neighboring
`index.html`, sorts their repository names alphabetically, and regenerates
the links between the `BEGIN REPOSITORY LINKS` and `END REPOSITORY LINKS`
comments in `site/index.html`. Display names come from each manifest; links
use the actual directory paths. Text outside the marked section is preserved.

`add-repo` runs this automatically after creating the repository page. Run
it manually after deleting a repository directory or changing a manifest's
display name. The generated links are ordinary HTML and require no browser
JavaScript or separate repository registry. Combined reports are excluded from
this repository list and linked in their own section, using `combos.yaml` as
described below. Both generated sections are refreshed by this task; all other
homepage content is preserved.

### Combined repository reports

Define combinations in the root-level `combos.yaml`, then run:

```sh
pixi run refresh-combos
# Or use the focused collection environment:
pixi run -e collection refresh-combos
```

The configuration maps each report's display name to its repository inputs and
homepage link text:

```yaml
OpenFreeEnergy:
  repos:
    - openfreeenergy/openfe
    - openfreeenergy/gufe
  index-display: "OpenFreeEnergy (openfe + gufe)"
```

`repos` requires at least two distinct `owner/repo` paths, each with an existing
`site/<owner>/<repo>/manifest.json` and neighboring `index.html`. Use the actual
deployed directory spelling. Inputs can belong to different organizations, and
a repository can participate in multiple combinations. All configured inputs
are checked before any combined reports are generated. Duplicate YAML keys,
invalid paths, blank names or labels, and colliding output slugs are errors.

The top-level name supplies the manifest display name, page title, and social-card
title. `index-display` supplies the homepage link text independently, with HTML
escaping. Directory slugs lowercase the display name, replace runs of characters
outside ASCII letters and digits with hyphens, and trim surrounding hyphens.
For example, `OpenFreeEnergy` produces:

```text
site/combos/openfreeenergy/
  manifest.json
  index.html
  social-card.png
```

The task runs `repo-history combine-manifests` offline on the saved manifests;
no GitHub credentials or collection runs are needed. It uses the command's
default of excluding any month marked partial by an input. Incompatible coverage,
overlapping repository identities, or conflicting contributor classifications
remain errors from the combiner. A failed combine leaves that report's existing
manifest and page intact; combinations completed earlier in the run are retained.

After each successful combine, the task generates its visualization page and
social card. After all combinations succeed, it refreshes the homepage's
**Combined repositories** section immediately below **Repositories**. This section
lists configured combinations with published manifests and pages, sorted by
`index-display`, between `BEGIN COMBINATION LINKS` and `END COMBINATION LINKS`.

Rerun `refresh-combos` after changing the configuration or source manifests.
`add-repo` does not rebuild combinations automatically, and `refresh-index`
only updates links. Removing or renaming an entry removes its old homepage link
on the next index refresh but leaves its old output directory on disk; remove
obsolete directories manually. Commit generated combo directories alongside
the homepage to publish through the existing deployment workflows.

### Social previews

Repository pages include static [Open Graph](https://ogp.me/) and Twitter/X
large-image card metadata, including the repository title, description,
canonical URL, and an absolute image URL on `repo-history.dwhswenson.net`.
Each `social-card.png` is a 1200 × 630 PNG generated from its manifest, showing
the repository name, total commits, collected month count, GitHub activities,
total contributors, and monthly commit history. GitHub activities exclude
commits; activity and contributor totals use the visualizer's default human
and unresolved-identity filters, excluding known bots. Contributors are
deduplicated across all months and contribution types. Unattributed non-commit
events count toward activities but do not add a contributor identity. The
current month is marked as partial when applicable.

`add-repo` generates the image and metadata automatically. After updating
manifests, refresh all existing repository and combination previews without
collecting again:

```sh
pixi run refresh-social-cards
```

This refreshes metadata in the page head and leaves each page body intact.
Combination previews use the manifest's display name and their `/combos/<slug>/`
URL; they do not use the homepage's `index-display` label.
Pillow, included in the collection feature, renders the images locally;
social crawlers do not need to run the visualization's JavaScript. Commit
the PNGs alongside the HTML to publish the previews. Social services may
cache older cards until they recrawl the published pages.

## Infrastructure and deployment

See [DEPLOY.md](DEPLOY.md) for credentials, provisioning, and publishing steps.
Infrastructure is managed locally with OpenTofu and local state. Deployment
workflows package only `site/`, publish production from `main`, publish PR
previews, and clean up previews when PRs close. No collection runs in CI.

The upstream `omsf/static-site-tools` **main branch**, resolved on 2026-10-17,
is pinned at `bddfe9537ca08333360801f82a95bb4adaff314e`. This is a main-branch
commit, not a release tag. Both module sources and all direct
static-site-tools workflow/action references use that revision. Upstream
reusable workflows may themselves reference other actions or workflows.

The workflows were installed with the Python installer downloaded from that
same revision:

```sh
python /path/to/downloaded/install.py generic --site-dir site \
  --commit bddfe9537ca08333360801f82a95bb4adaff314e
```

Local changes remove the examples' testing schedules and convert the cleanup
workflow's unsupported top-level `description` field into a comment. If
regenerating the workflows, reapply these changes. When updating upstream,
resolve the then-current `refs/heads/main` and update the installer, modules,
workflow references, and this documentation together.
