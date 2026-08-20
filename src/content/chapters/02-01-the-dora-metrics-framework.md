# 2.1 The DORA metrics framework

## Overview and motivation

The [DORA metrics](https://dora.dev/guides/dora-metrics/) come from the
[DevOps](https://en.wikipedia.org/wiki/DevOps) Research and Assessment programme, a multi-year research effort,
later published as the book *Accelerate* by Nicole Forsgren, Jez Humble, and
Gene Kim, that surveyed tens of thousands of engineering professionals to
find out which delivery practices actually correlate with organizational
performance. The result was four metrics that, together, distinguish elite,
high, medium, and low performers with more statistical rigor than almost any
other framework in this book: deployment frequency, lead time for changes,
change failure rate, and failed deployment recovery time, often shortened to
mean time to recovery (MTTR).

What makes DORA different from an arbitrary metric set is the pairing. Two
of the four metrics measure speed (deployment frequency, lead time) and two
measure stability (change failure rate, recovery time). The research finding
that made this framework significant was that elite performers were fast
*and* stable simultaneously, not fast at the expense of stability, which
overturned the widespread assumption that speed and safety trade off against
each other. That finding is the whole reason this book treats DORA as a
worked example of the guardrail-pairing principle from chapter 1.2: the
framework itself is a demonstration that pairing an incentivized speed
metric with a stability guardrail is not just good governance, it is what
the best-performing organizations actually do.

For large teams, DORA's biggest practical value is comparability. A metric
computed consistently from pipeline and incident data lets an organization
compare delivery capability across dozens of teams working in completely
different domains, without the apples-to-oranges problem that plagues most
cross-team comparisons. Enterprise organizations use DORA to prioritize
platform investment; government organizations use it to demonstrate, with
evidence, that a modernization programme measurably improved delivery
capability rather than simply consuming budget.

## Key principles

- **Speed and stability are measured together, never separately.** A
  DORA-informed dashboard without both halves is not really using the
  framework.
- **The four metrics are proxies for delivery capability, not the goal
  itself.** They correlate with organizational performance; they do not
  define it on their own.
- **Consistency of definition matters more than the raw number.** A team
  moving from "medium" to "high" performance on a consistently defined
  metric is a real signal; comparing two teams' numbers computed differently
  is not.
- **DORA measures the system, not individuals.** Applying these metrics to
  individual engineers breaks the framework's entire evidentiary basis and
  invites exactly the gaming chapter 1.2 warns about.
- **The four metrics summarize; they do not diagnose.** Use cycle time
  (chapter 2.6) and flow metrics (chapter 2.7) to find out why a DORA number
  is what it is.

## Recommendations

### Instrument all four metrics from the pipeline, not from self-report

Deployment frequency and lead time can be computed directly and objectively
from version control and CI/CD pipeline timestamps (chapter 1.5's
instrumentation-over-self-report principle applies directly here). Change
failure rate and recovery time require linking deploys to incident records,
which takes more integration work but is equally automatable. Avoid
self-reported DORA metrics wherever possible; a team estimating its own lead
time introduces bias that defeats the framework's evidentiary value.

### Agree on definitions before comparing across teams

DORA's four metrics sound simple but hide real definitional choices: does
"deployment" mean a push to any environment or only to production, does
"change" mean a commit or a merged pull request, does "failure" mean any
production incident or only ones directly caused by the deploy. Chapters 2.2
through 2.5 go deep on each definition. Before comparing two teams' numbers,
confirm both are using the same definitions; otherwise the comparison is
worse than useless, it actively misleads.

### Use the four-tier performance bands as a starting orientation, not a
target

DORA research classifies organizations into elite, high, medium, and low
performance tiers based on where their four metrics fall. Use these bands to
orient a team honestly about where it stands relative to the broader
industry, not as a target to hit for its own sake. A team that pushes its
numbers into the "elite" band by gaming deployment frequency (chapter 2.2)
without genuinely improving its delivery system has defeated the entire
purpose of using DORA in the first place.

### Treat DORA as the summary layer, and use flow metrics to diagnose

When a DORA metric moves, the four numbers alone rarely tell you why. Use
cycle time decomposition (chapter 2.6) and flow efficiency (chapter 2.7) as
the diagnostic layer underneath DORA's summary layer: if lead time is
rising, cycle time breakdown shows which specific stage, code review,
testing, deployment approval, is actually slowing down. Present DORA
metrics to leadership as the headline, and keep flow metrics as the
engineering team's working diagnostic tools.

### Never use DORA metrics in individual performance reviews

This is the single most important guardrail this chapter can offer, and it
follows directly from chapter 1.2's incentive-exposure principle. DORA
metrics were validated as *system*-level indicators of organizational
delivery capability, not as individual performance measures. Applying them
to an individual, "how many deployments did you personally ship this
quarter," breaks the statistical basis the whole framework rests on and
creates exactly the strong, direct incentive to game that this book warns
against throughout.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Full DORA framework (all four metrics, paired) | Research-validated, resists gaming through pairing, enables fair cross-team comparison | Requires real pipeline-to-incident integration work to instrument properly |
| Speed metrics only (deployment frequency, lead time) | Simple to instrument first | Loses the stability guardrail; invites speed-at-the-expense-of-safety gaming |
| Self-reported DORA metrics | Fast to start with no integration work | Undermines the framework's evidentiary basis; introduces bias |
| DORA applied at individual level | Feels more directly actionable to some managers | Breaks the framework's validity; strong Goodhart's law exposure |

The central tension is **speed of adoption versus rigor of instrumentation**.
A team can start reporting DORA-flavored numbers from self-report or
spreadsheets almost immediately, but that shortcut sacrifices exactly the
objectivity that makes DORA valuable in the first place. Resolve the tension
by starting with whichever half of the framework your existing pipeline data
already supports well (usually deployment frequency and lead time), and
investing in the incident-linkage work needed for change failure rate and
recovery time as a near-term, not indefinitely deferred, follow-up.

## Questions to discuss with your team

1. **Are we instrumenting all four DORA metrics from the pipeline, or are
   some of them self-reported estimates?** A framework built on objective,
   research-validated measurement loses much of its value the moment a
   number becomes someone's best guess. Audit each of your four metrics for
   its actual data source (chapter 1.5) and prioritize automating any that
   are not yet automated.

2. **Do all the teams we compare using DORA metrics share the same
   definitions of deployment, change, and failure?** A comparison between
   teams using different definitions is not actually a comparison at all,
   and can lead to unfair judgements about relative performance. Walk
   through your definitions team by team and reconcile any that differ.

3. **Has anyone in our organization used a DORA metric in an individual
   performance review, formally or informally?** This is the single most
   damaging misuse of the framework and often happens quietly, through an
   offhand comment rather than a formal policy. Ask directly and be prepared
   for an uncomfortable but necessary answer.

4. **When one of our DORA metrics moves, do we have the flow-metric
   diagnostics to explain why?** A DORA number alone tells you that
   something changed, not what. Check whether your teams can actually
   answer "why did lead time increase this month" with data, or only with
   speculation.

5. **Are we chasing the DORA performance tiers as a target, or using them as
   an honest orientation?** Treating "elite" status as a target to hit
   invites exactly the gaming this framework's own research was designed to
   detect and discourage. Discuss whether your organization's language about
   DORA tiers has drifted from diagnosis toward target-chasing.

6. **How would our four DORA numbers change if we deliberately tried to game
   each one, and would we notice?** This adversarial exercise, deliberately
   designing the exploit for each metric, is the practical application of
   chapter 1.2's core discipline to this specific framework. Walk through
   deployment frequency, lead time, change failure rate, and recovery time
   one at a time.

## Sector lens

**Startup.** DORA's speed metrics usually come naturally to a small team
already deploying frequently; the harder discipline is instrumenting change
failure rate and recovery time honestly rather than assuming stability
because nothing has broken badly yet. Start tracking all four from day one,
even informally, so the habit exists before scale makes it harder to
retrofit.

**Small business.** Most modern CI/CD and version control platforms can
export deployment frequency and lead time data with minimal setup; linking
deploys to incidents for change failure rate typically needs more manual
effort. Start with the two speed metrics and add stability tracking as soon
as you have even an informal incident log to link against.

**Enterprise.** DORA's greatest value at this scale is fair, consistent
cross-team comparison for investment decisions. Standardize definitions
organization-wide (chapter 1.4's governance discipline applies directly),
automate instrumentation centrally where possible, and resist any pressure
to use the metrics for individual evaluation, which tends to emerge
precisely because the metrics are visible and easy to point to.

**Government.** DORA metrics give a modernization programme a defensible,
research-backed way to demonstrate delivery improvement to oversight bodies
without relying on anecdote. Document your definitions publicly, report all
four metrics together rather than cherry-picking the flattering half, and be
explicit that these are system-level, not individual, measures if the
metrics are ever referenced in a public report.

## Examples

**Enterprise.** A large telecommunications company's platform modernization
programme needed to demonstrate return on a two-year infrastructure
investment to its board. The engineering organization instrumented all four
DORA metrics consistently across forty product teams, using pipeline and
incident data rather than self-report, and showed a movement from
low-performer to high-performer bands for the median team over eighteen
months, deployment frequency up roughly tenfold, lead time down from weeks
to days, with change failure rate held flat and recovery time improved. The
paired presentation, speed and stability together, was what convinced a
skeptical board that the improvement was real rather than a sign of
corners being cut.

**Government.** A state government's IT modernization office adopted DORA
metrics to compare the delivery capability of several competing vendor
teams working on a shared platform, an unusual and effective use of the
framework's comparability. Vendors initially resisted, preferring to report
only deployment frequency, the flattering half. The office required all
four metrics with a shared definition as a contract condition, and one
vendor's high deployment frequency was revealed to correlate with a change
failure rate nearly three times higher than its peers, information that
directly informed the office's contract renewal decision the following
year.

## Business case: motivations, ROI, and TCO

The return on adopting DORA well is a defensible, evidence-based answer to
"is our delivery getting better," which is otherwise one of the hardest
questions in engineering to answer with confidence at scale. That answer
justifies platform and tooling investment with real numbers rather than
faith, and it lets leadership compare competing investments, in-house
platform work versus a vendor contract, on a fair, consistent basis.

The total cost of ownership is the integration work: linking deploy events
to incident records for change failure rate and recovery time is nontrivial,
especially across a large, heterogeneous tooling landscape. That cost is
worth paying because the alternative, self-reported or partial DORA
metrics, undermines the very evidentiary basis that makes the framework
worth adopting over an arbitrary local metric set.

## Anti-patterns and pitfalls

- **Reporting only the speed half of DORA:** defeats the framework's central
  finding that speed and stability move together in high performers.
- **Self-reported DORA numbers:** introduces exactly the bias the framework
  was designed to eliminate.
- **Using DORA metrics in individual performance reviews:** breaks the
  framework's statistical validity and invites strong gaming.
- **Comparing teams with inconsistent definitions:** produces comparisons
  that look fair but are not.
- **Chasing the elite-performer tier as a target rather than an honest
  orientation:** reintroduces the exact gaming risk DORA's own research
  methodology guards against.
- **Treating DORA as diagnostic rather than summary:** leaves a team unable
  to explain why a number moved.

## Maturity model

- **Level 1, Initiate:** DORA metrics, if tracked at all, are self-reported,
  inconsistently defined, and rarely reviewed as a paired set.
- **Level 2, Develop:** Some teams instrument speed metrics from the
  pipeline, but stability metrics are informal or missing, and definitions
  vary across teams.
- **Level 3, Standardize:** All four metrics are instrumented consistently
  from pipeline and incident data, with shared, documented definitions
  organization-wide.
- **Level 4, Manage:** DORA metrics are reviewed as a paired set at every
  level of the organization, flow-metric diagnostics explain movement, and
  the metrics are never used for individual evaluation.
- **Level 5, Orchestrate:** DORA data directly informs platform investment
  and prioritization decisions, benchmarking against industry data
  (chapter 8.4) is routine, and the organization can trace specific
  investments to specific, evidenced improvements in the four metrics.

## Ideas for discussion

1. Where do our four DORA metrics currently place us on the performance-tier spectrum, honestly?
2. Which of our four metrics is least reliably instrumented today?
3. Has anyone ever used a DORA number to judge an individual, even informally?
4. What would it take to link every deploy to its downstream incident record automatically?
5. If a competitor's engineering team published its DORA numbers, would ours compare favourably?

## Key takeaways

- DORA's four metrics, **deployment frequency, lead time, change failure
  rate, and recovery time**, pair speed with stability by design.
- The framework is **research-validated** as a system-level indicator; it is
  not built or intended for individual evaluation.
- **Consistent definitions** matter more than the raw numbers when comparing
  across teams.
- Use DORA as the **summary layer** and flow metrics (chapters 2.6, 2.7) as
  the diagnostic layer underneath it.
- Chase genuine delivery improvement, not the performance-tier label itself;
  the moment the tier becomes the target, it stops being a good measure
  (chapter 1.2).

## References and further reading

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (the definitive source for the DORA research and
  framework).
- Google Cloud's DevOps Research and Assessment programme, [dora.dev](https://dora.dev/) (the
  ongoing State of DevOps reports and metric guides).
- *The Phoenix Project*, by Gene Kim, Kevin Behr, and George Spafford (a
  narrative introduction to the delivery and flow concepts DORA formalizes).
- *The DevOps Handbook*, by Gene Kim, Jez Humble, Patrick Debois, and John
  Willis (practical implementation guidance for the practices behind the
  DORA metrics).
