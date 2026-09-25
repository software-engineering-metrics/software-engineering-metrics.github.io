# Navigation: how the generated files work

Per locale, four navigation artefacts are generated from that locale's
chapters, not written by hand (plus `README.md`, generated once for the
reference locale, `en-gb-oxendict`):

- `README.md` (the table of contents on the repository home page; reference locale only)
- `locales/<locale>/index.md` (the home page of the published site)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/chapters/09-07-index.md` (the subject index, with links)

They are produced by
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py).
Do not edit them by hand, because the next generation will overwrite your
change.

## When to regenerate

Run `just nav` (or `python3 tools/gen_nav.py`) whenever you:

- add, remove, rename, or renumber a chapter, or
- change a chapter's `# N.M Title` heading (the TOC uses it).

Run `python3 tools/localize.py` first if you changed anything under
`locales/en-gb-oxendict/`, so the other three locales' chapters (and their
generated titles) are up to date before `gen_nav.py` reads them; see
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## How it works

For each locale, `gen_nav.py` reads every `locales/<locale>/chapters/*.md`
file, sorts by decimal number, groups by part, and:

- builds the part-by-part table of contents from each chapter's H1 title,
- writes it into `locales/<locale>/index.md` and
  `locales/<locale>/front-matter/table-of-contents.md` (and, for the
  reference locale only, `README.md`),
- scans the substantive chapters (Parts 1 through 8) for a fixed list of key
  terms and writes the subject index to `locales/<locale>/chapters/09-07-index.md`.

The shared boilerplate text (the intro paragraph, "How to read this book",
"Cross-cutting themes", and the part titles) is localized the same way as
chapter prose, via `tools/localize.py`'s locale functions, so the generated
pages read naturally in each locale.

Part titles live in the `PART_TITLES` dictionary near the top of the script.
The generator uses colon-style part headers ("Part 2: Delivery and Flow
Metrics"), never em-dashes.

## What it does not touch

The specification at the repository root (`spec/index.md`, `spec/structure.md`,
and its companions) is the hand-authored source of truth. The generator does not
write it, and it is not part of the published site. If you change the structure,
update `spec/structure.md` yourself, then run `just nav` for the derived files and
`just test` to confirm everything lines up.
