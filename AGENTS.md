# Software Engineering Metrics — website

The published website for the Software Engineering Metrics book. See
[README.md](README.md) for the human-oriented overview.

## What this is

A SvelteKit project (`@sveltejs/adapter-static`) that prerenders the whole
book as a static site, deployed by GitHub Actions to
<https://software-engineering-metrics.github.io/>. It does not own the
book's content — see below.

## Working rules

- `src/content/` is **generated** from the sibling `software-engineering-metrics`
  repo's `docs/` directory by `scripts/sync-content.mjs` — never hand-edit
  files under it. Edit the content repo, then run `pnpm run content` here.
- `src/lib/manifest.json` is **generated** by `scripts/generate-manifest.mjs`
  from `src/content/` — never hand-edit it.
- Chapter, front-matter, examples, contributing, and project pages are all
  rendered by the same pattern: a `[slug]/+page.js` with `entries()` sourced
  from the manifest, dynamically importing the matching `.md` file from
  `src/content/`, and a `+page.svelte` that renders `data.content` (the
  mdsvex-compiled component) inside the page chrome. Follow this pattern for
  any new content section rather than inventing a new one.
- Do not touch the sibling `software-engineering-metrics` repository from
  here — that repo owns the book's content and spec.
- Run `pnpm run check` before committing changes to `src/`.
