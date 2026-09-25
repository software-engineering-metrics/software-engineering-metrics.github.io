# Software Engineering Metrics — website

The published website for the Software Engineering Metrics book. See
[README.md](README.md) for the human-oriented overview.

## What this is

A SvelteKit project (`@sveltejs/adapter-static`) that prerenders the whole
book as a static site, deployed by GitHub Actions to
<https://software-engineering-metrics.github.io/>. It does not own the
book's content — see below.

## Locales

The book is published in four locales (see `spec/locales.md` in the sibling
content repo): `en-us` (American English) is served **unprefixed**
(`/chapters/x/`); `en-gb-oxendict`, `en-gb`, and `en-001` are served under a
locale-prefixed path (`/en-gb/chapters/x/`) via the `src/routes/[locale]/`
route tree. `src/lib/locales.js` (re-exporting `scripts/locales.mjs`) is the
single source of truth for the locale list and the prefixing rule.

Every `[locale]/...` route is a thin wrapper re-exporting (or re-rendering)
the corresponding unprefixed route's `+page.svelte`, so there is one
presentational component per page, not two. Shared chrome and content
components (`+layout.svelte`, `Sidebar.svelte`, `ChapterPager.svelte`, the
chapter/front-matter/examples/contributing/project `+page.svelte` files) read
the current locale from `page.params.locale` via `$app/state` and build
locale-prefixed hrefs with `localePrefix()`. Follow this pattern for any new
page rather than hardcoding an absolute path.

`LocalePicker.svelte` is the locale switcher in the header; it is a hand-built
component following the Lily Design System's class-hook convention (one
class, `.locale-picker`, styled in `static/assets/style.css`), since Lily
ships no markup or JS of its own.

## Working rules

- `src/content/<locale>/` is **generated** from the sibling
  `software-engineering-metrics` repo's `locales/<locale>/` directories by
  `scripts/sync-content.mjs` — never hand-edit files under it. Edit the
  content repo, then run `pnpm run content` here.
- `src/lib/manifest.json` (the `en-us` manifest) and `src/lib/manifest/<locale>.json`
  (the other three) are **generated** by `scripts/generate-manifest.mjs` from
  `src/content/` — never hand-edit them. Read them through
  `getManifest(locale)` in `src/lib/manifests.js`, not by importing a
  manifest file directly, so a component works under both the unprefixed and
  `[locale]`-prefixed routes.
- Chapter, front-matter, examples, contributing, and project pages are all
  rendered by the same pattern: a `[slug]/+page.js` with `entries()` sourced
  from the manifest, dynamically importing the matching `.md` file via the
  `$content` alias (`$content/<locale>/<section>/<slug>.md`), and a
  `+page.svelte` that renders `data.content` (the mdsvex-compiled component)
  inside the page chrome. Follow this pattern for any new content section
  rather than inventing a new one.
- `scripts/remark-chapter-links.mjs` and `scripts/remark-resolve-content-links.mjs`
  detect a source file's locale from its path under `src/content/<locale>/`
  and prefix the links they generate accordingly; keep that in mind if you
  move where content lives.
- A page whose only dynamic segment is the inherited `[locale]` (a list page
  with no `[slug]` of its own) is prerendered either by the crawler following
  a real `<a href>` link to it, or, if nothing links to it directly (as with
  the front-matter list), by its own `+page.js` `entries()`. `+layout.js`
  cannot declare `entries()` in SvelteKit; see `src/routes/[locale]/+layout.js`.
- Do not touch the sibling `software-engineering-metrics` repository from
  here — that repo owns the book's content and spec.
- Run `pnpm run check` before committing changes to `src/`, and `pnpm run build`
  before committing a routing or manifest change, since prerendering (with
  `strict: true` and `handleHttpError: 'fail'`) is the real check that every
  locale's internal links resolve.
