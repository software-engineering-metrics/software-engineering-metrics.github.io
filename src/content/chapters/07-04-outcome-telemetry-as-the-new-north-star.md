# 7.4 Outcome telemetry as the new north star

## Overview and motivation

This chapter closes Part 7, and in a real sense closes the argument this
entire book has been building since chapter 1.3, with a single, direct
claim: as generative AI makes raw output cheap, **outcome [telemetry](https://en.wikipedia.org/wiki/Telemetry)**,
continuous, instrumented measurement of real outcomes rather than activity
or output, stops being one good practice among several and becomes the
organizing principle a metrics programme has to be built around. This is
not a new idea introduced for the first time here. It is the idea chapter
1.3 introduced in this book's opening part, now presented as the necessary,
rather than merely preferable, response to a technology shift that has
made every alternative more dangerous than it used to be.

The logic is direct. Before generative AI, output volume was an imperfect
but not worthless proxy for effort and, loosely, for value; a team that
shipped more features had, at minimum, done more work, even if that work
was not always the right work. Generative AI severs even that loose
connection: output volume no longer reliably indicates effort, since a tool
can generate it in seconds, and it certainly does not indicate value, since
chapter 7.3 showed that inflated output can coexist with degrading quality.
The metrics that survive this shift intact are precisely the ones this book
has emphasized building toward from its opening chapters: escaped defect
rate (chapter 5.1), feature adoption (chapter 5.2), customer and business
outcomes (chapter 5.3), reliability (Part 6), and developer well-being
(Part 3). None of these depend on how the underlying code was produced;
all of them measure what actually happened as a result.

For large teams, this chapter's argument has direct, practical
consequences for how a metrics programme should be built and rebuilt going
forward. Enterprise organizations redesigning their engineering dashboards
in light of AI adoption should weight investment specifically toward the
outcome-telemetry infrastructure this chapter describes; government
organizations, evaluating both AI tooling and the broader technology
programmes it is embedded in, should hold both to the same outcome-telemetry
standard this chapter recommends as the baseline for any credible,
future-proof evaluation.

## Key principles

- **Outcome telemetry becomes necessary, not merely preferable, once output
  is cheap.** This is chapter 1.3's founding principle, now urgent rather
  than aspirational.
- **The metrics that survive this shift are the ones this book has built
  toward throughout**: escaped defects, adoption, business outcomes,
  reliability, and well-being.
- **A metrics programme built primarily around output metrics is now a
  liability, not just a suboptimal choice.** Output metrics can be inflated
  cheaply and quickly at scale.
- **Outcome telemetry requires real investment**, instrumentation, patience
  for slower signal, and organizational discipline to resist the pull
  toward faster, cheaper, but now-unreliable output metrics.
- **This principle outlasts any specific AI tool or vendor.** It is a
  durable response to a durable shift in what output means, not a temporary
  adjustment to a passing trend.

## Recommendations

### Audit your metrics investment ratio: outcome telemetry versus output
tracking

Calculate roughly what share of your current metrics infrastructure,
instrumentation effort, dashboard real estate, review-meeting time, goes
toward outcome metrics (Part 5, Part 6, developer well-being from Part 3)
versus output and activity metrics (deployment count, commit volume, pull
request throughput). If output tracking dominates, that ratio itself is
now a liability given this chapter's argument, and rebalancing it is the
single highest-leverage change this chapter recommends.

### Invest in outcome telemetry infrastructure deliberately, as a first-class
engineering investment

Outcome measurement, feature adoption tracking, business outcome
correlation (chapter 5.3), reliability instrumentation (Part 6), requires
real, ongoing engineering investment that many organizations have
historically under-resourced relative to the comparatively cheap and easy
output metrics that dominate many dashboards today. Treat this
infrastructure investment with the same seriousness this book applies to
any other significant engineering capability, not as a secondary concern
behind the AI tooling investment itself.

### Accept and communicate that outcome telemetry is slower, and build
patience for that into your organization's expectations

Outcome metrics are, almost by their nature, laggier and noisier than
output metrics (chapter 1.3's leading-versus-lagging distinction, chapter
1.6's statistical caution). An organization used to the fast, satisfying
feedback of watching an output number rise needs to build genuine patience
for the slower, more honest signal outcome telemetry provides, and
leadership needs to actively communicate and model that patience rather
than reflexively reaching for the faster, now-unreliable alternative under
pressure to show quick results.

### Use this shift as the occasion to retire genuinely obsolete output
metrics, not just to add outcome metrics alongside them

Following chapter 1.1's discipline of retiring metrics that no longer earn
their keep, use this moment as a deliberate occasion to remove output and
activity metrics that this shift has specifically devalued, rather than
simply adding outcome metrics on top of an unchanged existing dashboard.
A dashboard that keeps every old output metric while bolting on new outcome
ones grows bloated rather than genuinely improved.

### Treat outcome telemetry investment as durable, independent of any
specific AI tool or vendor relationship

Build outcome-telemetry infrastructure as a permanent organizational
capability, not as a reaction specific to whichever AI tool your
organization happens to be using this year. This principle, and the
infrastructure it calls for, will outlast any specific vendor relationship
or tooling generation, and building it as a durable capability protects
your metrics programme against the next technology shift as much as the
current one.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Output-metric-dominant dashboard | Fast, cheap feedback; familiar to most organizations | Now actively unreliable given generative AI's effect on output cost |
| Outcome-telemetry-dominant dashboard | Resilient to this shift; measures what actually matters | Slower, noisier signal; requires real instrumentation investment |
| Adding outcome metrics alongside unchanged output metrics | Incremental, less disruptive | Produces dashboard bloat rather than genuine improvement |
| Full, deliberate rebalancing toward outcome telemetry | Addresses the shift directly and completely | Requires the most significant organizational and investment change |

The central tension, in a real sense, is the same one this book opened with
in chapter 1.3, now sharpened to its most urgent form: **fast, familiar
feedback versus slower, honest signal**. Output metrics have always been
easier and faster to produce; this chapter's argument is that generative AI
has moved that trade-off from merely suboptimal to actively dangerous.
Resolve the tension the way this book has recommended from its opening
chapter: weight decisively toward outcomes, accept the slower feedback that
comes with genuine value measurement, and treat the discomfort of that
slower feedback as the honest cost of measuring something real rather than
something merely convenient.

## Questions to discuss with your team

1. **What share of our current metrics infrastructure and dashboard
   attention goes toward outcome metrics versus output and activity
   metrics?** Calculate this ratio honestly; most organizations, assessed
   for the first time, find it more output-weighted than they would have
   guessed.

2. **What specific outcome-telemetry infrastructure investment have we
   been deferring in favour of faster, cheaper output tracking?** Name a
   concrete example, feature adoption instrumentation, business outcome
   correlation tooling, and discuss what it would take to actually build
   it.

3. **Has our organization built genuine patience for outcome telemetry's
   slower feedback, or does pressure for quick results keep pulling us back
   toward faster but now-unreliable output metrics?** Be honest about this
   pattern in your own recent reporting and review meetings.

4. **What output or activity metric on our current dashboard is a genuine
   candidate for retirement, now that this chapter's argument applies to
   it specifically?** Identify at least one, and discuss what would need to
   replace it rather than simply leaving a gap.

5. **If our AI tooling vendor or the current generation of AI coding
   assistants changed dramatically next year, would our metrics programme
   still hold up?** This tests whether your outcome-telemetry investment is
   genuinely durable, built as a permanent capability, or merely a reaction
   specific to your current tooling situation.

6. **What would it look like for our organization to fully commit to this
   chapter's argument, rebalancing our metrics investment decisively toward
   outcomes rather than incrementally?** Sketch this concretely rather than
   leaving it abstract; the gap between the current state and this vision is
   your organization's actual roadmap for responding to this shift.

## Sector lens

**Startup.** Building outcome telemetry early, before output metrics have
had a chance to become deeply entrenched organizational habit, is
genuinely easier than retrofitting it later. A young company adopting AI
coding assistance from the start has a real opportunity to build its
metrics programme outcome-first rather than needing to unwind an existing
output-metric-dominant culture.

**Small business.** Focus outcome-telemetry investment on the single
outcome metric that most directly reflects survival and growth (chapter
5.3), rather than attempting comprehensive instrumentation across every
outcome category this book covers. A modest, focused outcome-telemetry
investment beats a comprehensive output-metric dashboard that this
chapter's argument has now specifically devalued.

**Enterprise.** The rebalancing this chapter recommends is a genuine,
significant organizational change at this scale, likely requiring
executive sponsorship and a multi-quarter investment plan. Treat it with
the same seriousness as any other major infrastructure investment this
book covers, and use the specific, concrete examples from chapter 7.1 and
chapter 7.3, metric inflation and quality dilution that a rebalanced
dashboard would have caught earlier, to build the internal case for the
investment.

**Government.** Government technology programmes evaluated primarily on
delivery and output metrics (features shipped, on schedule) are
increasingly vulnerable to exactly the skepticism chapter 5.3 described,
and this chapter's argument sharpens that vulnerability further as AI
tooling adoption spreads through the broader industry government agencies
recruit from and are compared against. Build outcome telemetry as the
primary basis for public reporting and budget justification, positioning
your organization ahead of, rather than behind, this shift.

## Examples

**Enterprise.** A software company's engineering leadership, prompted
directly by the metric-inflation near-miss described in chapter 7.1's
financial technology example, conducted a full audit of its metrics
investment ratio and found nearly 70% of its dashboard real estate and
instrumentation effort was devoted to output and activity metrics, with
only modest, inconsistent investment in outcome telemetry. Over the
following year, the company deliberately rebalanced this ratio, retiring
several output metrics chapter 7.1's audit had flagged as most exposed and
investing the freed capacity in feature adoption and business outcome
instrumentation (chapters 5.2, 5.3). The resulting dashboard, presented at
the following year's board meeting, was explicitly credited by the same
previously skeptical board member as a meaningfully more trustworthy basis
for evaluating engineering investment than the output-heavy version it
replaced.

**Government.** A national digital services agency, building a new
engineering metrics programme from scratch specifically because its
previous, output-metric-dominant dashboard had drawn sustained legislative
skepticism, adopted this chapter's principle explicitly as its founding
design decision: outcome telemetry, citizen wait time, service completion
rate, escaped defect rate, would be the primary basis for all public
reporting, with output and delivery metrics retained only as internal
diagnostic tools, never as the headline evidence presented externally. This
outcome-first design, built deliberately in light of the generative AI
shift this part describes, gave the agency's reporting a durability and
credibility with its oversight committee that its predecessor programme,
built around an earlier generation's output-metric assumptions, had never
achieved.

## Business case: motivations, ROI, and TCO

The return on committing decisively to outcome telemetry is a metrics
programme that remains trustworthy and credible through the current
technology shift and whatever comes after it, rather than one that requires
another significant overhaul the next time output becomes cheap through
some future technology change. The software company example above shows
this concretely: the rebalanced dashboard directly repaired credibility
that the earlier, output-heavy version had put at genuine risk.

The total cost of ownership is the outcome-telemetry infrastructure
investment this chapter recommends, genuinely significant, multi-quarter
work for a large organization, weighed against the durable, long-term risk
of a metrics programme that becomes progressively less trustworthy as
output continues to get cheaper. This is not a cost this book asks you to
accept lightly; it is the direct, necessary consequence of taking chapter
1.3's founding argument as seriously as this final part of the book asks
you to.

## Anti-patterns and pitfalls

- **Treating this shift as requiring only incremental adjustment rather
  than genuine rebalancing:** underestimates the scale of change generative
  AI has introduced to what output metrics mean.
- **Adding outcome metrics alongside an unchanged, still-dominant set of
  output metrics:** produces dashboard bloat rather than the genuine
  rebalancing this chapter argues for.
- **Building outcome-telemetry investment as a reaction to a specific
  current AI tool rather than as a durable capability:** leaves the
  organization exposed to the next technology shift in the same way.
- **Failing to build organizational patience for outcome telemetry's
  slower feedback:** risks reverting to faster, but now-unreliable, output
  metrics under pressure for quick results.
- **Retiring output metrics without a genuine outcome-telemetry
  replacement:** leaves a measurement gap rather than a genuine
  improvement.
- **Presenting this shift to stakeholders as merely a response to AI
  tooling rather than as the fulfillment of this book's founding
  principle:** understates the argument's durability and generality.

## Maturity model

- **Level 1, Initiate:** The dashboard remains output-metric-dominant, with
  no deliberate response to the shift this part describes.
- **Level 2, Develop:** Some outcome metrics have been added, but the
  overall investment ratio remains output-heavy and no metrics have been
  deliberately retired.
- **Level 3, Standardize:** A deliberate audit and rebalancing toward
  outcome telemetry has been conducted, with genuinely obsolete output
  metrics retired, organization-wide.
- **Level 4, Manage:** Outcome-telemetry infrastructure is treated as a
  first-class, ongoing engineering investment, and organizational patience
  for its slower feedback is actively cultivated and protected.
- **Level 5, Orchestrate:** The organization's metrics programme is
  outcome-telemetry-led as a durable, permanent design principle, proven
  resilient through the current technology shift and explicitly built to
  remain resilient through whatever comes next.

## Ideas for discussion

1. What is our actual current ratio of outcome-metric to output-metric investment?
2. What single output metric should we retire this quarter, and what outcome metric should replace it?
3. Where has organizational impatience pulled us back toward faster but less trustworthy output metrics recently?
4. Is our outcome-telemetry investment durable, or tied specifically to our current AI tooling situation?
5. What would it take to fully commit to this chapter's argument, rather than adjusting incrementally?

## Key takeaways

- Outcome telemetry becomes **necessary, not merely preferable**, once
  generative AI makes output cheap; this is chapter 1.3's founding
  principle, now urgent.
- The metrics that **survive this shift** are the ones this book builds
  toward throughout: escaped defects, adoption, business outcomes,
  reliability, and well-being.
- **Audit and rebalance your metrics investment ratio** deliberately,
  retiring genuinely obsolete output metrics rather than only adding
  outcome metrics alongside them.
- Build organizational **patience for outcome telemetry's slower
  feedback**, and resist the pull back toward faster but now-unreliable
  output metrics under pressure.
- Build this investment as a **durable capability**, independent of any
  specific AI tool or vendor, protecting your metrics programme against
  future technology shifts as well as the current one.

## References and further reading

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (the outcome-based measurement foundation this
  entire book, and this closing chapter of Part 7, builds on).
- *Lean Analytics*, by Alistair Croll and Benjamin Yoskovitz (the
  actionable-versus-vanity-metric distinction this chapter's argument
  extends to the AI era).
- *The Innovator's Dilemma*, by Clayton M. Christensen (the general pattern
  of established metrics and practices becoming liabilities under a
  disruptive technology shift).
- *Measure What Matters*, by John Doerr (outcome-oriented goal setting as
  an organizing principle for a metrics programme, the model this chapter
  argues should now be the default, not the exception).
