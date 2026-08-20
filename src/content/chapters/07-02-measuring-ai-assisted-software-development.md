# 7.2 Measuring AI-assisted software development

## Overview and motivation

Chapter 7.1 established why several existing metrics no longer reliably
measure what they used to under AI-assisted development. This chapter is
about what to measure instead: how to know, with real evidence rather than
impression or vendor marketing, whether AI coding assistance is actually
helping your organization, and by how much. This is a genuinely important
question with real budget consequences, AI tooling licenses represent a
real, ongoing cost, chapter 5.4's unit economics discipline applies
directly, and an organization that cannot answer it with evidence is
either overpaying for a tool that is not helping or underinvesting in one
that genuinely is.

This chapter's approach draws directly on chapter 1.3's outcomes-over-output
principle, now applied specifically to AI tooling evaluation. The naive,
most common approach measures AI-assisted development by output volume,
lines of code generated, suggestions accepted, time saved per task as
self-reported by developers, exactly the metrics chapter 7.1 warned are
most exposed to this shift. The more rigorous approach this chapter
recommends measures outcomes: did AI assistance genuinely reduce cycle time
without degrading quality, did it reduce time spent on genuinely
low-value, repetitive work, freeing capacity for higher-value work, and did
it measurably affect the business and product outcomes from Part 5.

For large teams, getting this measurement right determines whether AI
tooling investment decisions are made on evidence or on vendor claims and
organizational momentum. Enterprise organizations negotiating large-scale AI
tooling contracts need genuine evidence of value to justify the
expenditure and to compare competing tools fairly; government organizations,
often under particular scrutiny for technology spending, need a rigorous,
defensible evaluation methodology before committing public funds to AI
tooling adoption at scale.

## Key principles

- **Measure AI assistance by outcome, not by output volume or vendor-reported
  usage statistics.** Chapter 1.3's discipline applies with full force here.
- **Use a genuine [comparison group](https://en.wikipedia.org/wiki/Treatment_and_control_groups) wherever feasible**, not just a
  before-and-after comparison that a rising industry-wide baseline could
  confound.
- **Self-reported time savings are a weak signal on their own.** Pair them
  with objective cycle-time and quality data.
- **Measure the full cost, including review and correction time**, not just
  the generation speed.
- **Different tasks and different engineers may see very different AI
  assistance value.** Avoid a single, blended organization-wide number that
  hides this variation.

## Recommendations

### Build a genuine comparison, not just a before-and-after snapshot

Where feasible, compare outcomes between a group using AI assistance and a
comparable group not using it, over the same period, rather than only
comparing your own organization's before-and-after numbers, which cannot
distinguish AI assistance's effect from any other concurrent change (chapter
1.6's confounding-variable caution applies directly). Where a true
comparison group is impractical, at minimum compare against a longer
historical baseline (a control chart, per chapter 1.6) rather than a single
before-and-after snapshot vulnerable to regression to the mean or
unrelated concurrent changes.

### Measure cycle time and quality together, never AI assistance's speed
claim alone

Apply chapters 2.6 and 2.4's discipline directly: track whether AI-assisted
work moves faster through the cycle-time stages, and simultaneously
whether change failure rate or escaped defect rate (chapter 5.1) for that
work moves in the wrong direction. A genuine productivity gain shows faster
cycle time with stable or improved quality; a false gain shows faster
cycle time with degrading quality, exactly the trade chapter 7.1 warned
against, discovered here through the same paired-metric discipline this
book applies throughout.

### Include review and correction time in the full cost accounting

AI-generated code that is faster to produce but slower to review, or that
requires more correction and rework after initial generation, may show no
net cycle-time improvement once the full pipeline is measured, even if the
initial code-generation step felt dramatically faster to the individual
engineer. Measure the full cycle-time chain (chapter 2.6), not just the
coding stage, to capture this honestly rather than crediting AI assistance
based on a felt, but incomplete, sense of speed.

### Treat self-reported time savings as a starting hypothesis, not a
conclusion

Developer self-report of "this saved me an hour" is useful as an initial
signal and as qualitative context (chapter 5.3's combined
quantitative-qualitative approach applies here too), but it is subject to
the same recall and desirability biases chapter 1.5 warns about for any
self-reported data, and it says nothing about downstream review or
correction cost. Use self-report to generate hypotheses about where AI
assistance is helping most, then validate those hypotheses against
objective cycle-time and quality data before drawing a firm conclusion.

### Segment measurement by task type and avoid a single blended number

AI coding assistance likely provides very different value for boilerplate,
well-understood tasks than for genuinely novel, complex problem-solving.
Measure and report by task category rather than a single, blended
organization-wide average, which can hide the fact that assistance is
providing strong value in one category while providing little or even
negative value in another, information a blended number would completely
obscure.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Self-reported time savings alone | Fast, easy to collect | Weak signal; subject to bias; ignores downstream review cost |
| Before-and-after comparison only | Simple to set up | Confounded by any other concurrent change or industry-wide trend |
| Genuine comparison group | Strongest, most defensible evidence | Harder to arrange; may not be feasible for a full-adoption rollout |
| Task-segmented outcome measurement | Reveals where value genuinely concentrates | Requires more granular tracking and categorization effort |

The central tension is **measurement rigor versus practical feasibility**.
A genuine, controlled comparison group is the strongest evidence but is
often impractical once a tool has been rolled out organization-wide with
no held-back control group; self-reported impressions are fast and easy but
weak on their own. Resolve the tension by using the strongest comparison
design your actual rollout allows, a genuine control group during an early
pilot phase if possible, a historical baseline control chart if not, and
treating self-report as a hypothesis-generation tool rather than the final
word, regardless of which comparison design you end up using.

## Questions to discuss with your team

1. **Did we have, or could we still construct, a genuine comparison group
   for evaluating our AI tooling adoption, or are we relying entirely on a
   before-and-after comparison?** If a true comparison group was never
   established, discuss whether a historical baseline control chart could
   still provide a reasonably rigorous alternative.

2. **Have we measured cycle time and quality together for AI-assisted work,
   or do we only have a speed claim without a corresponding quality
   check?** Pull whatever data exists and check for this specific pairing;
   if it does not exist, that gap is this chapter's single highest-priority
   fix.

3. **Does our cycle-time measurement for AI-assisted work include review
   and correction time, or only the initial generation step?** A speed
   claim based only on generation time, ignoring downstream review cost,
   risks the incomplete-accounting trap this chapter warns against
   directly.

4. **What self-reported time-savings claims have we collected, and have we
   validated any of them against objective data?** Pick a specific,
   commonly repeated claim and check whether the objective data actually
   supports it.

5. **Does our current measurement blend all task types into one number, or
   do we know which specific categories of work see the strongest AI
   assistance value?** If blended, discuss what a task-segmented breakdown
   might reveal that the current number hides.

6. **If we had to defend our AI tooling investment to a skeptical financial
   stakeholder today, using evidence rather than impression, what would we
   actually be able to show them?** This concrete test surfaces the gap
   between what your organization currently believes about AI assistance
   value and what it can actually demonstrate with evidence.

## Sector lens

**Startup.** A formal comparison-group study is usually impractical at
small scale, but even a simple, honest before-and-after look at cycle time
and defect rate, rather than relying purely on how much faster the work
feels, gives a meaningfully more reliable signal than impression alone.

**Small business.** Focus measurement effort on your highest-value,
most repetitive task category first, where AI assistance value is most
likely to be clear and measurable, rather than attempting a comprehensive
evaluation across every kind of work your small team does.

**Enterprise.** A genuine, controlled comparison during an early pilot
phase, before full organization-wide rollout, is often achievable here and
is worth the deliberate effort to arrange, since it produces far more
defensible evidence for the large-scale tooling investment decision that
typically follows a successful pilot.

**Government.** Public technology spending decisions, including AI tooling
procurement, often face particular scrutiny and may require formal
cost-benefit justification (chapter 5.5). Build the measurement discipline
this chapter recommends into any pilot phase from the start, since a
rigorous, documented evaluation methodology strengthens the eventual
funding or procurement case considerably.

## Examples

**Enterprise.** A software company rolled out an AI coding assistant to
half its engineering teams as a deliberate pilot, holding the other half as
a comparison group for one quarter before full rollout. The pilot group
showed a genuine, statistically meaningful cycle-time improvement for
well-defined, boilerplate-heavy tasks, but showed no measurable improvement,
and a slightly elevated review-iteration count (chapter 2.8), for complex,
novel architectural work. This task-segmented finding, only visible because
of the genuine comparison design and the task-category breakdown, led the
company to specifically target AI assistance rollout messaging and training
toward the task categories where it demonstrably helped, rather than
presenting it as a uniform productivity boost across all work.

**Government.** A federal agency piloting AI coding assistance for a
subset of its modernization programme teams initially relied on
self-reported time-savings surveys, which showed enthusiastic, uniformly
positive responses. A follow-up objective analysis, comparing cycle time
and escaped defect rate between the pilot teams and a comparable
non-pilot cohort working on similar system components, found the objective
cycle-time improvement was real but notably smaller than the self-reported
estimates suggested, and identified a modest but real increase in review
time that had been offsetting some of the generation-speed gain, a finding
the self-report data alone had completely missed. This more accurate,
evidence-based picture directly informed a more modest and more defensible
business case for the tool's continued, expanded procurement.

## Business case: motivations, ROI, and TCO

The return on measuring AI-assisted development rigorously is confident,
evidence-based investment decisions: an organization that knows precisely
where AI assistance genuinely helps can invest in expanding it there and
avoid overpaying for licenses in task categories where it provides little
value, exactly the task-segmentation insight the software company example
above demonstrates. This directly connects to chapter 5.4's unit economics
and chapter 5.5's ROI discipline, since AI tooling cost, often licensed
per-seat, needs the same rigorous cost-benefit treatment this book applies
to any other major engineering investment.

The total cost of ownership is the analytical effort to build genuine
comparisons, measure full cycle time including review and correction, and
segment by task type, which is more work than accepting vendor-reported
usage statistics or self-reported impressions at face value. That effort is
justified directly by the scale of AI tooling licensing cost across a large
organization and the risk of a poorly evidenced, expensive, organization-wide
commitment based on impression rather than data.

## Anti-patterns and pitfalls

- **Measuring AI assistance by output volume or vendor usage statistics
  alone:** repeats chapter 7.1's central warning directly.
- **Relying entirely on self-reported time savings:** a weak signal
  vulnerable to bias, and blind to downstream review and correction cost.
- **Measuring only the generation-speed step, ignoring full cycle time:**
  produces an incomplete, potentially misleading accounting of actual
  productivity effect.
- **Reporting a single, blended organization-wide number:** hides real
  variation in value across different task categories.
- **No comparison group or historical baseline:** cannot distinguish AI
  assistance's actual effect from any other concurrent change.
- **Treating an enthusiastic self-reported survey result as sufficient
  evidence for a large-scale investment decision:** risks the exact gap the
  federal agency example above discovered only after building a more
  rigorous comparison.

## Maturity model

- **Level 1, Initiate:** AI-assisted development value is assessed, if at
  all, through self-reported impression and vendor usage statistics alone.
- **Level 2, Develop:** Some cycle-time or quality data exists, but there
  is no genuine comparison group or historical baseline and no
  task-segmented analysis.
- **Level 3, Standardize:** A genuine comparison design (control group or
  historical baseline) with paired cycle-time and quality measurement is
  applied consistently, segmented by task type.
- **Level 4, Manage:** Full cycle-time accounting, including review and
  correction time, is tracked; self-reported claims are systematically
  validated against objective data.
- **Level 5, Orchestrate:** The organization has a mature, evidence-based
  understanding of exactly where AI assistance genuinely helps, informing
  targeted rollout, training investment, and procurement decisions with
  demonstrated, defensible ROI.

## Ideas for discussion

1. What genuine comparison, if any, do we have for our current AI tooling adoption?
2. Have we measured cycle time and quality together, or only a speed claim?
3. What self-reported AI assistance claim should we validate against objective data?
4. Which specific task category shows the strongest evidence of genuine AI assistance value for us?
5. Could we currently defend our AI tooling investment to a skeptical financial stakeholder with evidence?

## Key takeaways

- Measure AI-assisted development by **outcome**, not output volume or
  vendor-reported usage statistics.
- Use a **genuine comparison group or historical baseline**, not just a
  before-and-after snapshot vulnerable to confounds.
- Measure **cycle time and quality together**, including the full pipeline,
  review and correction time, not just generation speed.
- Treat **self-reported time savings as a hypothesis**, not a conclusion,
  and validate it against objective data.
- **Segment by task type**; a single blended number hides where value
  genuinely concentrates and where it does not.

## References and further reading

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (the outcome-measurement discipline this chapter
  applies to AI tooling evaluation).
- GitHub's research on AI pair programming and developer productivity
  (industry-scale empirical research on AI-assisted development outcomes).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021) (the multi-dimensional measurement
  discipline this chapter applies to a specific new tooling category).
- *How to Measure Anything*, by Douglas W. Hubbard (constructing defensible
  comparisons and quantifying value under genuine uncertainty).
