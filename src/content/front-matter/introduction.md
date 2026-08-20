# Introduction

This book is a working guide to measuring [software engineering](https://en.wikipedia.org/wiki/Software_engineering)
well, for teams anywhere from a five-person startup to a multi-thousand-engineer
enterprise or a government agency reporting against a statutory performance
framework. It exists because most metrics advice is either a framework
summary with no operational detail, or a tool vendor's feature list. This book
tries to be neither: it is opinionated about what to measure, explicit about
how each metric gets gamed, and practical about how to run a metrics
programme that a team trusts rather than fears.

## Who this is for

The primary audience is the people who choose what an organization measures:
engineering leaders, staff and principal engineers, platform and DevOps
teams, and programme and product managers. The secondary audience is any
engineer who wants to understand the reasoning behind a dashboard they are
asked to move, and how to challenge a metric that has stopped serving its
purpose. You do not need to read it cover to cover. Each chapter stands on
its own, states its principles first, and ends with practical takeaways, a
maturity model, and references.

## How the book is organized

The book is divided into **parts** (whole numbers) and **chapters**
(decimals). Chapter **N.0** introduces each part and explains how its
chapters interrelate; chapters **N.1, N.2, …** cover the topics in depth.

- **Part 1, Foundations of Measurement:** why measure at all, Goodhart's law
  and the psychology of gaming, choosing outcomes over output, governance and
  ownership, data sources, and the statistical literacy every metrics
  programme needs.
- **Part 2, Flow Metrics:** the Flow Framework, its flow items and five flow
  metrics, cycle time, queueing theory, pull request and code review
  metrics, and the DORA framework as a reference chapter.
- **Part 3, Developer Experience and the SPACE Framework:** the SPACE
  framework and its five dimensions, and how to run a developer experience
  survey without it becoming a popularity contest.
- **Part 4, Code and Quality Metrics:** complexity, test coverage and
  effectiveness, churn and hotspots, static analysis, technical debt, and
  documentation.
- **Part 5, Product and Business Metrics:** escaped defects, feature
  adoption, customer and business outcomes, unit economics, and return on
  investment.
- **Part 6, Reliability, Operations, and Security Metrics:** SLIs, SLOs, and
  error budgets, incident metrics, on-call and capacity, and security and
  vulnerability metrics.
- **Part 7, Metrics in the Age of AI:** the generative AI paradigm shift, how
  to measure AI-assisted development, the risk of metric inflation, and why
  outcome telemetry becomes the north star as output gets cheap.
- **Part 8, Building a Metrics Program:** designing a dashboard, build versus
  buy, rolling out metrics without breeding fear, a maturity model, and an
  incremental adoption roadmap.
- **Part 9, Appendices:** glossary, a metric definitions and formulas
  reference, checklists, templates, maturity self-assessment, references, and
  index.

## Guiding principles

Eight principles form the spine of the book:

1. **A measure that becomes a target stops being a good measure.** Design
   against Goodhart's law from the start, not after the distortion appears.
2. **Outcomes over output over activity.** Weight every metric set toward
   what changed for the customer or the business, not what the team produced
   or how busy it was.
3. **Every incentivized metric needs a guardrail.** Pair speed with quality,
   throughput with stability, and never chase one number in isolation.
4. **Measure systems, not people.** A metric that individualizes blame breaks
   trust and invites gaming; a metric that reveals a system constraint invites
   improvement.
5. **Prefer instrumentation over self-report where you can get it, and
   self-report where you cannot.** Deployment counts come from the pipeline;
   satisfaction comes from asking.
6. **A metric earns its keep or it gets retired.** Every tile on a dashboard
   costs attention. Prune deliberately.
7. **Definitions matter more than dashboards.** Two teams computing "lead
   time" differently will spend more time arguing about the number than
   acting on it.
8. **Generative AI is a reason to re-examine, not just re-baseline.** When
   output gets cheap, metrics built around output volume need new guardrails,
   not just new targets.

## Cross-cutting themes

[Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) is the one
theme that runs through every part of this book, not just chapter 1.2. Every
metric-family chapter states how the metric it covers gets gamed and what
guardrail catches that. Government and enterprise reporting obligations,
where a metric can carry statutory or contractual weight, are treated as
design inputs throughout, not an afterthought confined to one chapter.

## How to use it

Adopt incrementally; do not big-bang a dashboard onto a team that has never
had one. Start where the pain is greatest, use each chapter's maturity model
to locate yourself honestly, and let the adoption roadmap (chapter 8.5)
sequence the work. The goal is not a wall of charts. It is an organization
that can tell, with evidence, whether what it is doing is working, and that
trusts its own numbers enough to act on them.
