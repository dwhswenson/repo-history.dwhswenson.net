# Provisioning and publishing

The scaffold is configured for:

- GitHub repository: `dwhswenson/repo-history.dwhswenson.net`
- Cloudflare Pages project: `repo-history`, production branch `main`
- Custom domain: `repo-history.dwhswenson.net`
- Existing public Route53 hosted zone: `dwhswenson.net`

These instructions are for a later deployment. Bootstrapping this repository
does not create its GitHub remote, provision resources, or publish content.

## Credentials

Use credentials supplied outside source control:

- `CLOUDFLARE_API_TOKEN`: an administrative Cloudflare account token that can
  manage Pages projects and account API tokens, including permission-group
  lookup. Cloudflare DNS permissions are not required: DNS is in Route53.
- `TF_VAR_cloudflare_account_id`: the Cloudflare account ID.
- `GITHUB_TOKEN`: a GitHub token with access to the destination repository
  and permission to manage Actions secrets and variables.
- AWS credentials from the standard provider chain, such as an authenticated
  `AWS_PROFILE`, with permission to discover the public hosted zone and
  manage its `repo-history.dwhswenson.net` record. Record updates also require
  Route53 change-status lookup permission.

For example, select an already configured AWS profile and export your account
ID; obtain and export tokens through your usual credential tooling:

```sh
export AWS_PROFILE=your-profile
export TF_VAR_cloudflare_account_id=your-account-id
```

The AWS provider uses `us-east-1`; Route53 hosted zones are global. The AWS
provider constraint is `~> 4.0` because this machine requires provider 4.x.
Cloudflare is pinned to `5.9.0` for compatibility with the upstream module's
account-token policy format. Commit `.terraform.lock.hcl` when updating providers.

## Validate without provisioning

```sh
pixi install -e infra
pixi run -e infra tofu init -backend=false
pixi run -e infra infra-fmt-check
pixi run -e infra infra-validate
```

Initialization downloads the modules and providers. These checks do not need
cloud credentials and do not create remote resources.

## Create the remote repository

Before planning or applying infrastructure, create the empty destination
repository `dwhswenson/repo-history.dwhswenson.net` on GitHub. The
`github_vars` module reads an existing repository; it does not create one.
Add its remote locally if needed:

```sh
git remote add origin git@github.com:dwhswenson/repo-history.dwhswenson.net.git
```

Do not push until the deployment credentials have been installed below.

## Provision

With the credentials above available:

```sh
pixi run -e infra infra-init
pixi run -e infra infra-plan
```

Review the target AWS account, Cloudflare account, GitHub repository, and
planned changes. Expect a Pages project, a Pages deployment token, GitHub
Actions secrets/variables, a Pages domain association, and one Route53 CNAME.
If a DNS record already exists, import it into state before applying rather
than overwriting it. The public hosted zone is looked up, not created.

After review, apply locally:

```sh
pixi run -e infra tofu apply
```

The configuration registers the custom domain with Cloudflare Pages before
creating the Route53 CNAME pointing at the Pages project's returned hostname.
DNS stays in Route53; no Cloudflare zone or nameserver changes are needed.
Domain and TLS activation may take time after DNS propagates.

The module installs these GitHub Actions settings:

| Kind | Name |
| --- | --- |
| Secret | `CLOUDFLARE_ACCOUNT_ID` |
| Secret | `CLOUDFLARE_API_TOKEN` |
| Variable | `CLOUDFLARE_PROJECT_NAME` |
| Variable | `MAIN_REPO` |

The generated Pages token is separate from your administrative token. The
workflows receive the generated deployment token, not AWS credentials.

State is stored locally in `terraform.tfstate`, which contains the deployment
token. State, backups, saved plans, and variable files are ignored by Git.
Retain a secure backup of the state and use this same state for later changes.

## Publish and verify

Push `main` after provisioning. The installed workflows package `site/` as
`site.tar.gz`, then deploy it to Cloudflare Pages. PRs use a separate preview
deployment and receive a preview link; closing a PR triggers preview cleanup.
There are no scheduled builds or collection jobs. The production packaging
workflow can also be started manually from the Actions tab.

After the first successful deployment, verify the Pages hostname reported by
`tofu output pages_hostname` and <https://repo-history.dwhswenson.net>. Check
that Cloudflare reports the custom domain and certificate as active. Future
repository pages and manifests are published by committing them under `site/`.
