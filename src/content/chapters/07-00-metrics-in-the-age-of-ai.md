# 7.0 Introduction to Part 7: Metrics in the Age of AI

Every metric in this book so far was built for a world where writing code
was the scarce, effortful resource. Generative AI tools have changed that
premise faster than most organizations' metrics have caught up. When a
tool can produce a plausible-looking pull request in seconds, several
metrics this book covers in earlier parts, activity counts most directly
(chapter 3.4), and to a real extent raw deployment frequency (chapter 2.10)
and even test coverage (chapter 4.2) if pursued carelessly, stop measuring
what they used to measure. This part exists because a metrics programme that does not
explicitly reckon with this shift risks confidently reporting numbers that
have quietly become meaningless, or worse, actively counterproductive.

This part's four chapters trace a deliberate arc. Chapter 7.1 names the
shift directly and explains why it is a paradigm change, not an incremental
adjustment. Chapter 7.2 covers how to actually measure whether AI-assisted
development is helping, using the outcome-over-output discipline chapter
1.3 established from the very start of this book. Chapter 7.3 names the
specific new risks this shift introduces: metrics that inflate without
corresponding value, and quality dilution that outpaces the industry's
current ability to detect it. Chapter 7.4 closes the part with this book's
answer to the whole shift: a deliberate pivot toward outcome telemetry as
the metrics that matter most, precisely because output volume, this part
argues throughout, was never the right thing to optimize for in the first
place, and generative AI has simply made that truth impossible to ignore
any longer.

For large teams, this part is urgent rather than speculative. Enterprise
organizations adopting AI coding assistants at scale need to know quickly
whether their existing metrics still mean what they think they mean;
government organizations, often moving more cautiously on AI adoption but
facing the same underlying tooling shift in the broader industry they
recruit from and benchmark against, need this part's guidance to interpret
industry benchmarks correctly as those benchmarks themselves shift under
the same pressure.

## Chapters in this part

- **7.1 The generative AI paradigm shift:** Why this is a fundamental
  change to what several existing metrics measure, not just a new tool to
  add to the toolbox.
- **7.2 Measuring AI-assisted software development:** How to measure
  whether AI assistance is actually helping, using outcome data rather than
  output volume.
- **7.3 Metric inflation and quality dilution risks:** The specific new
  gaming and quality risks this shift introduces, and how to guard against
  them.
- **7.4 Outcome telemetry as the new north star:** This book's answer to
  the whole shift: a deliberate, permanent pivot toward outcome metrics as
  output becomes cheap.

## How these chapters interrelate

Chapter 7.1 establishes why this part exists at all; chapter 7.2 gives the
practical measurement guidance the shift demands; chapter 7.3 names the
specific failure modes an organization needs to guard against as it adopts
AI-assisted development; and chapter 7.4 generalizes the lesson into a
permanent principle that outlasts any specific tool or vendor. This part is
less a standalone metric family, in the way Parts 2 through 6 each cover a
distinct domain, and more a lens applied back across the entire book: every
earlier chapter's activity, output, and even some outcome metrics need to be
re-examined through this part's questions as AI-assisted development
becomes standard practice, not exceptional.

This part connects most directly back to chapter 1.3's outcomes-over-output
principle and chapter 3.4's warning against activity metrics, both of which
this part treats as having been correct all along, now proven urgently so by
a technology shift that makes their opposite, measuring by volume, actively
dangerous rather than merely suboptimal. It also sets up Part 8's practical
guidance on building a metrics programme, since a dashboard designed before
this shift needs deliberate reconsideration, not just incremental
adjustment, in light of what this part covers.
