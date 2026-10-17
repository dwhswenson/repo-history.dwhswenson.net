# Repository history website

Plain HTML and shared visualization assets for <https://repo-history.dwhswenson.net>.
Cloudflare Pages hosts the site; AWS Route53 hosts DNS for `dwhswenson.net`.
This repository contains a placeholder homepage, a command for adding repository
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
`repo-history summarize`, and creates a simple visualization page. All outputs
live together directly in `site/<owner>/<repo>/`:

```text
site/owner/repo/
  YYYY-MM.json
  ...
  manifest.json
  index.html
```

The page is served at `/<owner>/<repo>/`. Preview it with `pixi run demo` and
commit the resulting directory to publish it through the existing workflows.
Monthly reports are hosted along with the manifest and HTML.

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
