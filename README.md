# Software Engineering Metrics — website

This repository is a deploy shell only. Its sole job is to own the
`software-engineering-metrics.github.io` name, since GitHub Pages will only
serve the naked domain `https://software-engineering-metrics.github.io/` from
a repository with exactly that name.

The site's actual source (SvelteKit app, Markdown content, build scripts) and
[`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/software-engineering-metrics.github.io/AGENTS.md)
live in the
[`software-engineering-metrics`](https://github.com/software-engineering-metrics/software-engineering-metrics)
monorepo, under `software-engineering-metrics.github.io/`. Make changes
there.

## How deployment works

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) here checks
out that monorepo, builds the `software-engineering-metrics.github.io/`
subdirectory, and deploys the result to GitHub Pages, because
`actions/deploy-pages` can only publish to the repository whose own workflow
run invokes it. It runs on:

- a `repository_dispatch` (`monorepo-updated`) sent by the monorepo's CI
  after every push to its `main` branch, and
- `workflow_dispatch`, as a manual fallback if you need to redeploy without a
  monorepo change (from this repo's Actions tab, or `gh workflow run deploy.yml
  --repo software-engineering-metrics/software-engineering-metrics.github.io`).
