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
repository, under `locales/<locale>/`, published in four locales (see that
repo's `spec/locales.md`): `en-us` (American English), `en-gb-oxendict`
(British English, Oxford spelling; the authoring source), `en-gb` (mainstream
British English), and `en-001` (international English). This repo copies each
into `src/content/<locale>/` (see
[`scripts/sync-content.mjs`](scripts/sync-content.mjs)) and generates one
navigation manifest per locale from it (see
[`scripts/generate-manifest.mjs`](scripts/generate-manifest.mjs)).

`en-us` is served unprefixed (`/chapters/x/`); the other three are served
under a locale-prefixed path (`/en-gb/chapters/x/`), switched between with the
`LocalePicker` in the header. See [`AGENTS.md`](AGENTS.md) for how the routing
is wired.

**Never hand-edit files under `src/content/`.** Edit the source repo instead,
then regenerate:

```sh
pnpm run content   # re-copies locales/ from ../software-engineering-metrics, then rebuilds the manifests
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
and `src/lib/manifest/<locale>.json` first (see the `manifest` script), so
they never need to be committed stale — though they are committed, since
`src/content/` is committed too.

## Structure

- `src/content/<locale>/{chapters,front-matter,examples,contributing,project}/` :
  synced Markdown source per locale (see above).
- `src/lib/manifest.json` (`en-us`) and `src/lib/manifest/<locale>.json`
  (the other three) : generated tables of contents (parts, chapters,
  ordering, prev/next) — see `scripts/generate-manifest.mjs`. Read through
  `getManifest(locale)` in `src/lib/manifests.js`.
- `src/lib/locales.js` : the locale list and the locale-prefixing rule
  (`en-us` unprefixed, the other three under `/<locale>/`).
- `src/routes/chapters/[slug]/`, `front-matter/[slug]/`, `examples/[slug]/`,
  `contributing/[slug]/`, `project/[slug]/` : dynamic routes that prerender
  one `en-us` page per Markdown file, using `entries()` to enumerate slugs
  from the manifest.
- `src/routes/[locale]/` : the same set of pages for the other three
  locales, each a thin wrapper re-rendering the corresponding `en-us` route's
  `+page.svelte`.
- `src/routes/table-of-contents/` : the full contents page with client-side
  filtering.
- `src/lib/Sidebar.svelte`, `Breadcrumb.svelte`, `ChapterPager.svelte`,
  `LocalePicker.svelte` : the book chrome.
- `scripts/remark-chapter-links.mjs` : auto-links plain-text chapter
  cross-references ("see chapter 2.1") to their locale-prefixed route.
- `static/assets/style.css` : the whole design — Lily is headless and ships
  no CSS, so this hand-authored stylesheet (using Lily's semantic class
  hooks: `.button`, `.card`, `.prose`, `.locale-picker`, …) is the site's look.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and
deploys to GitHub Pages on every push to `main`. For the first deployment,
set repository **Settings → Pages → Build and deployment → Source → GitHub
Actions**.
