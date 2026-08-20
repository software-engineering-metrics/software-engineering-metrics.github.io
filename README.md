# Software Engineering Metrics — website

The published website for [Software Engineering
Metrics](https://github.com/software-engineering-metrics/software-engineering-metrics):
a book about measuring software engineering well. Live at
<https://software-engineering-metrics.github.io/>.

Built with [SvelteKit](https://svelte.dev/docs/kit) (`@sveltejs/adapter-static`,
fully prerendered) and styled with the [Lily Design
System](https://lilydesignsystem.com/) class-hook conventions. Chapter content
is Markdown, compiled with [mdsvex](https://mdsvex.pngwn.io/).

## Where the content comes from

The book's Markdown lives in the sibling
[`software-engineering-metrics`](https://github.com/software-engineering-metrics/software-engineering-metrics)
repository, under `docs/`. This repo copies it into `src/content/` (see
[`scripts/sync-content.mjs`](scripts/sync-content.mjs)) and generates a
navigation manifest from it (see
[`scripts/generate-manifest.mjs`](scripts/generate-manifest.mjs)).

**Never hand-edit files under `src/content/`.** Edit the source repo instead,
then regenerate:

```sh
pnpm run content   # re-copies docs/ from ../software-engineering-metrics, then rebuilds the manifest
```

This assumes `software-engineering-metrics` is checked out as a sibling
directory (`../software-engineering-metrics` relative to this repo).

## Development

```sh
pnpm install
pnpm run dev       # http://localhost:5173
pnpm run build     # prerenders the full site into build/
pnpm run preview   # serve the production build locally
pnpm run check     # svelte-check
```

`pnpm run dev` and `pnpm run build` both regenerate `src/lib/manifest.json`
first (see the `manifest` script), so it never needs to be committed stale —
though it is committed, since `src/content/` is committed too.

## Structure

- `src/content/{chapters,front-matter,examples,contributing,project}/` :
  synced Markdown source (see above).
- `src/lib/manifest.json` : generated table of contents (parts, chapters,
  ordering, prev/next) — see `scripts/generate-manifest.mjs`.
- `src/routes/chapters/[slug]/`, `front-matter/[slug]/`, `examples/[slug]/`,
  `contributing/[slug]/`, `project/[slug]/` : dynamic routes that prerender
  one page per Markdown file, using `entries()` to enumerate slugs from the
  manifest.
- `src/routes/table-of-contents/` : the full contents page with client-side
  filtering.
- `src/lib/Sidebar.svelte`, `Breadcrumb.svelte`, `ChapterPager.svelte` : the
  book chrome.
- `scripts/remark-chapter-links.mjs` : auto-links plain-text chapter
  cross-references ("see chapter 2.1") to their route.
- `static/assets/style.css` : the whole design — Lily is headless and ships
  no CSS, so this hand-authored stylesheet (using Lily's semantic class
  hooks: `.button`, `.card`, `.prose`, …) is the site's look.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and
deploys to GitHub Pages on every push to `main`. For the first deployment,
set repository **Settings → Pages → Build and deployment → Source → GitHub
Actions**.
