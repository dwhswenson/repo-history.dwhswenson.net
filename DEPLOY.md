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

- `CLOUDFLARE_API_TOKEN`: the administrative Cloudflare token described below,
  used by the OpenTofu Cloudflare provider on the infrastructure-management
  machine.
- `TF_VAR_cloudflare_account_id`: the Cloudflare account ID.
- `GITHUB_TOKEN`: a GitHub token with access to the destination repository
  and permission to manage Actions secrets and variables.
- AWS credentials from the standard provider chain, such as an authenticated
  `AWS_PROFILE`, with permission to discover the public hosted zone and
  manage its `repo-history.dwhswenson.net` record. Record updates also require
  Route53 change-status lookup permission.

### Administrative Cloudflare token

Create a custom account-owned token under **Manage account > Account API
tokens** for the account identified by `TF_VAR_cloudflare_account_id`. The
person creating it needs API Token Provisioning capabilities or Super
Administrator status; see Cloudflare's
[account API token setup](https://developers.cloudflare.com/fundamentals/api/get-started/account-owned-tokens/).

Grant exactly these two account-level permissions, restricted to that account:

| API permission | Dashboard permission/access | Why OpenTofu needs it |
| --- | --- | --- |
| [`Pages Write`](https://developers.cloudflare.com/api/resources/pages/subresources/projects/subresources/domains/methods/create/) | Cloudflare Pages / Edit | Create, read, update, and delete the Pages project and its custom-domain association. |
| [`Account API Tokens Write`](https://developers.cloudflare.com/api/resources/accounts/subresources/tokens/methods/create/) | Account API Tokens / Edit | Create and manage the separate Pages deployment token. |

The dashboard may label write access as **Edit**. `Account API Tokens Write`
also authorizes the module's
[permission-group lookup](https://developers.cloudflare.com/api/resources/accounts/subresources/tokens/subresources/permission_groups/methods/list/)
and [token reads](https://developers.cloudflare.com/api/resources/accounts/subresources/tokens/methods/get/),
so a separate `Account API Tokens Read` grant is unnecessary. No zone or user
permissions are required. DNS permissions belong to the AWS credentials
because DNS is managed in Route53.

Export this administrative token as `CLOUDFLARE_API_TOKEN` **only on the machine
managing the Terraform/OpenTofu state and infrastructure**, for operations
such as `plan`, `apply`, `refresh`, and `destroy`. It authenticates provider
API calls; the local state backend itself needs no Cloudflare credentials.
Provide it for each infrastructure-management session; it does not need to
remain set between sessions. Local site preview, history collection, and
GitHub Actions publishing do not need this administrative token. Do not copy
it into GitHub: OpenTofu creates and installs a separate deployment token as
described below.

### Configure the infrastructure session

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

| Kind | Name | Value |
| --- | --- | --- |
| Secret | `CLOUDFLARE_ACCOUNT_ID` | The configured Cloudflare account ID. |
| Secret | `CLOUDFLARE_API_TOKEN` | The generated Pages deployment token. |
| Variable | `CLOUDFLARE_PROJECT_NAME` | `repo-history` |
| Variable | `MAIN_REPO` | `dwhswenson/repo-history.dwhswenson.net` |

Using the administrative token from your local environment,
`module.cloudflare_pages` creates the account-owned token
`repo-history-pages-deploy` with only `Pages Write` permission for the
configured Cloudflare account. `module.github_vars` stores that generated
token's value in the GitHub Actions secret `CLOUDFLARE_API_TOKEN`. The local
environment variable and the GitHub secret have the same name but contain
different token values.

GitHub Actions uses the generated token to upload the site to Pages, deploy
PR previews, and clean up preview deployments. It has no account-token
management permission. Publishing therefore requires neither the local
administrative token nor access to the local Terraform state or AWS
credentials.

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
