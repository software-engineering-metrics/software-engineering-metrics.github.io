# Authoring: writing and editing chapters

## Before you write

- Read the [style rules](style-rules.md) and `spec/conventions.md` at the
  repository root.
- Check `spec/structure.md` at the repository root to see where the topic fits
  and what number it should have.

## Writing a new chapter

1. Pick the part and the next free decimal number in that part. Numbering is
   contiguous, so a new chapter usually takes the next number after the last one
   in its part.
2. Create `docs/chapters/PP-CC-slug.md` (zero-padded, dash-separated prefix, for example `02-01-...`) from the
   [chapter template](chapter-template.md).
3. Write to the template. Every content chapter needs all of its sections:
   overview, key principles, recommendations, trade-offs (with a table),
   discussion questions, a sector lens (startup, small business, enterprise,
   government), examples (one enterprise and one government), business case,
   anti-patterns, a five-level maturity model, discussion ideas, key
   takeaways, and references.
4. Name the gaming vector. Every metric family needs an explicit answer to
   "how does a team make this number look good without improving the thing it
   measures, and what guardrail catches that" (see chapter 1.2).
5. Define terms on first use. Add Wikipedia links to key concepts on first
   mention, in prose only.
6. Cross-reference related chapters by decimal, for example "(chapter 2.1)."
7. Add the chapter to `spec/structure.md`.
8. If the part introduction (N.0) lists its chapters, add a bullet there.
9. Run `just nav`, then `just test`.

## Editing an existing chapter

- Keep the section order and headings intact. The tests check that content
  chapters still have every required section.
- Preserve inline definitions, Wikipedia links, tables, and the references list
  unless the edit is specifically about them.
- Do not introduce em-dashes or the forbidden phrases. If you are rephrasing,
  reword rather than dropping in a dash.

## Renaming or renumbering

- Rename the file, update its `# N.M Title` heading, update `spec/structure.md`,
  and update every cross-reference that points to the old number.
- Run `just nav` and `just test`. The tests will flag a mismatch between the H1
  and the file name, a numbering gap, or a broken link.

## Tone reminder

Write like an experienced colleague who wants the reader to succeed. Warm, plain,
direct, and useful. Short sentences. No filler.
