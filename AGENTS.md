# AGENTS

This repository is a deploy shell, not a place to make changes. See
[README.md](README.md) for why it exists.

- The site's source lives in the
  [`software-engineering-metrics`](https://github.com/software-engineering-metrics/software-engineering-metrics)
  monorepo, under `software-engineering-metrics.github.io/`. Make code and
  content changes there, not here.
- The only thing that belongs in this repo is
  [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
  checks out that monorepo and deploys it. Change it only to fix the
  deployment mechanism itself (for example, a new Node or pnpm version, or a
  different trigger).
