# Changelog

Notable changes to the book and its tooling. The most recent entries are at
the top. Dates use ISO 8601 (YYYY-MM-DD).

## [Unreleased]

### Changed

- Renamed Part 2 from "Delivery and Flow Metrics" to "Flow Metrics" and
  reorganized it around Mik Kersten's Flow Framework. Added four new
  chapters: 2.1 The Flow Framework, 2.2 Flow items (features, defects,
  risks, debt), 2.3 Flow velocity and flow distribution, and 2.4 Flow time
  and flow load. Consolidated the four individual DORA metric chapters
  (deployment frequency, lead time, change failure rate, recovery time)
  into a single reference chapter, 2.9 The DORA metrics framework, moved
  to the end of the part. Renumbered flow efficiency and work in process
  to 2.5 and renamed and renumbered the queueing theory chapter (formerly
  2.9) to 2.7 Queueing theory. Cycle time (2.6) and pull request and code
  review metrics (2.8) keep their numbers. Updated every cross-reference
  across the book, the glossary, the formulas reference, the maturity
  self-assessment, and the front matter to match.

### Added

- Initial release: 45 substantive chapters across 8 parts, plus front matter
  and a 7-chapter appendix (Part 9), covering the DORA and SPACE frameworks,
  code and quality metrics, product and business metrics, reliability and
  security metrics, and the effect of generative AI on engineering metrics.
- Repository infrastructure mirrored from the sibling
  `software-engineering-guide` project: a specification-driven `spec/`
  (index, structure, conventions, oxford spelling, roadmap), a validation
  suite in `tests/validate.py`, a navigation generator in `tools/gen_nav.py`,
  a `justfile`, `AGENTS.md` with contributor guides under `docs/contributing/`,
  `CONTRIBUTING.md`, and this changelog.
- `spec/structure.md`, the canonical chapter manifest that the tests check
  the files against.
- Two worked examples in `docs/examples/`: a filled-in metrics charter and a
  dashboard specification.

## History

The book was built from the specification outward: the nine-part structure
was declared in `spec/structure.md` first, then every chapter was authored
against the shared template in `docs/contributing/chapter-template.md`, with
`tests/validate.py` enforcing structure and house style throughout.

## Conventions for this file

- Group changes under **Added**, **Changed**, **Fixed**, **Removed**, or
  **Deprecated**.
- Keep entries short and specific. One line each where possible.
- Do not use em-dashes here either; the tests check this file too.
