terraform {
  required_version = ">= 1.11, < 2.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
    cloudflare = {
      source = "cloudflare/cloudflare"
      # static-site-tools uses the token policy format from this version.
      version = "= 5.9.0"
    }
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
  }

  backend "local" {}
}

provider "aws" {
  region = "us-east-1"
}

provider "cloudflare" {}

provider "github" {
  owner = "dwhswenson"
}

variable "cloudflare_account_id" {
  description = "Cloudflare account containing the Pages project (TF_VAR_cloudflare_account_id)."
  type        = string
  sensitive   = true
}

locals {
  github_repository       = "dwhswenson/repo-history.dwhswenson.net"
  cloudflare_project_name = "repo-history"
  custom_domain           = "repo-history.dwhswenson.net"
}

# Pinned to upstream omsf/static-site-tools main on 2026-10-17, not a release.
# Keep this revision aligned with the installer and generated workflows.
module "cloudflare_pages" {
  source = "github.com/omsf/static-site-tools//modules/cloudflare_pages?ref=bddfe9537ca08333360801f82a95bb4adaff314e"

  cloudflare_token_name   = "repo-history-pages-deploy"
  cloudflare_project_name = local.cloudflare_project_name
  cloudflare_account_id   = var.cloudflare_account_id
}

module "github_vars" {
  source = "github.com/omsf/static-site-tools//modules/github_vars?ref=bddfe9537ca08333360801f82a95bb4adaff314e"

  github_repository       = local.github_repository
  cloudflare_account_id   = var.cloudflare_account_id
  cloudflare_token        = module.cloudflare_pages.cloudflare_token
  cloudflare_project_name = local.cloudflare_project_name
}

resource "cloudflare_pages_domain" "site" {
  account_id   = var.cloudflare_account_id
  project_name = local.cloudflare_project_name
  name         = local.custom_domain

  depends_on = [module.cloudflare_pages]
}

data "aws_route53_zone" "site" {
  name         = "dwhswenson.net."
  private_zone = false
}

resource "aws_route53_record" "site" {
  zone_id = data.aws_route53_zone.site.zone_id
  name    = local.custom_domain
  type    = "CNAME"
  ttl     = 300
  records = [module.cloudflare_pages.cloudflare_subdomain]

  # Associate the domain with Pages before pointing external DNS to it.
  depends_on = [cloudflare_pages_domain.site]
}

output "pages_hostname" {
  description = "Cloudflare Pages hostname, also the Route53 CNAME target."
  value       = module.cloudflare_pages.cloudflare_subdomain
}

output "site_url" {
  description = "Public URL after provisioning, deployment, and domain activation."
  value       = "https://${local.custom_domain}"
}
