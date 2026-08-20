# 2.9 The DORA metrics framework

## Overview and motivation

The **[DORA metrics](https://dora.dev/guides/dora-metrics/)** come from the
[DevOps](https://en.wikipedia.org/wiki/DevOps) Research and Assessment
programme, a multi-year research effort, later published as the book
*Accelerate* by Nicole Forsgren, Jez Humble, and Gene Kim, that surveyed
tens of thousands of engineering professionals to find which delivery
practices correlate with organizational performance. The result was four
metrics, paired two and two: deployment frequency and lead time for changes
measure speed; change failure rate and failed deployment recovery time,
often shortened to mean time to recovery (MTTR), measure stability. The
research finding that made the framework significant was that elite
performers were fast and stable simultaneously, overturning the assumption
that speed and safety trade off against each other, and that finding is
still the clearest worked example this book has of chapter 1.2's
guardrail-pairing principle: an incentivized speed metric, paired with a
stability guardrail, is what the best-performing organizations actually do.

This book covers DORA last in this part, deliberately, rather than as the
part's organizing framework. That placement is not a rejection of the
research, which remains genuinely rigorous and worth using. It reflects a
specific, real limitation: DORA measures how fast and how safely a pipeline
moves, but it is silent on what is moving through the pipeline. A team can
post excellent DORA numbers while its actual output has quietly drifted
toward defect rework or has starved technical debt and security work of
capacity, a pattern chapters 2.1 through 2.4's Flow Framework is built
specifically to surface and DORA cannot see. Use DORA as this chapter
presents it: a well-validated, narrower reference measure of pipeline
mechanics, not the whole picture of delivery health.

For large teams, DORA's remaining, genuine value is comparability. A metric
computed consistently from pipeline and incident data lets an organization
compare delivery capability across many teams working in different domains
without the apples-to-oranges problem that plagues most cross-team
comparisons. Enterprise organizations still use it to prioritize platform
investment; government organizations still use it to demonstrate, with
evidence, that a modernization programme measurably improved delivery
mechanics. Treat that as DORA's proper, bounded job, and use the Flow
Framework chapters earlier in this part for the broader question of
whether the right things are being delivered at all.

## Key principles

- **DORA measures the pipeline, not the value flowing through it.** Chapter
  2.1 names this gap directly; use flow distribution (chapter 2.3) to see
  what DORA cannot.
- **Speed and stability are measured together, never separately.** A
  DORA-informed dashboard without both halves is not really using the
  framework.
- **Consistency of definition matters more than the raw number.** A team
  moving from "medium" to "high" performance on a consistently defined
  metric is a real signal; comparing two teams computed differently is not.
- **DORA measures the system, not individuals.** Applying these metrics to
  individual engineers breaks the framework's statistical basis and
  invites exactly the gaming chapter 1.2 warns against.
- **All four metrics are proxies, not goals.** They correlate with
  organizational performance; chasing the number itself, detached from
  genuine delivery improvement, defeats the framework's purpose.

## Recommendations

### Instrument deployment frequency from the pipeline, counting only production releases

**Deployment frequency** measures how often a team successfully releases to
production. Count only successful production deployments, instrumented
automatically from CI/CD pipeline data, never self-reported. Watch
specifically for substitution gaming, splitting one meaningful change into
several trivial deploys purely to inflate the count, by tracking deploy
size alongside frequency: a shrinking average size next to a rising count
is the clearest sign this is happening.

### Instrument lead time for changes from first commit to production

**Lead time for changes** measures the time from a code change's first
commit to its successful deployment in production. Report both the median
and a high percentile, not just a mean, following chapter 1.6's guidance on
skewed time-based data, and watch for definition drift at either endpoint,
which flatters the number without any genuine improvement.

### Define change failure rate in writing before comparing across teams

**Change failure rate** measures the percentage of deployments that cause a
failure requiring remediation, a rollback, a hotfix, or an incident. This
is the hardest of the four to define consistently, because "failure" is not
self-evidently objective. Agree on a written definition before comparing
teams; without it, an apparently fair comparison can badly mislead. Watch
for suspiciously fast improvement with no underlying process change behind
it, the clearest sign of definition gaming rather than genuine progress.

### Measure recovery time from detection, not from the deploy event

**Failed deployment recovery time** measures how long it takes to restore
service once a deployment causes a failure. Start the clock at detection,
not at the deploy event itself, so the number reflects genuine recovery
delay rather than a monitoring gap. Invest in automated rollback capability
specifically, the single most common lever for improving this metric
genuinely rather than by declaring an incident resolved prematurely.

### Use flow metrics, not DORA, to diagnose why a number moved

When a DORA metric shifts, the four numbers alone rarely explain why. Use
cycle time decomposition (chapter 2.6), flow load (chapter 2.4), and flow
distribution (chapter 2.3) as the diagnostic layer underneath DORA's
summary numbers, and never use a DORA metric in an individual performance
review, the single most damaging misuse this framework is exposed to.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Full DORA framework, all four metrics paired | Research-validated, resists gaming through pairing, enables fair cross-team comparison | Silent on what kind of value is being delivered; needs the Flow Framework alongside it for that picture |
| DORA as this part's sole organizing metric set | Simple, familiar to most engineering leaders | Misses the value-mix question entirely, this book's reason for deprioritizing it here |
| DORA plus Flow Framework together | Pipeline mechanics and value mix both visible | Requires maintaining two metric vocabularies instead of one |
| DORA applied at individual level | Feels directly actionable to some managers | Breaks the framework's statistical validity; strong Goodhart's law exposure |

The central tension is **mechanical rigor versus business legibility**.
DORA's four metrics are precisely defined and research-validated, which
makes them excellent for comparing pipeline performance across teams, but
that same precision is scoped narrowly to the pipeline itself and says
nothing about whether the right work is flowing through it. Resolve the
tension by keeping DORA as a reference layer for pipeline health, chapter
2.9's proper place in this book's structure, while using the Flow Framework
chapters earlier in this part for the business-facing question of value
mix, rather than trying to make DORA answer a question it was never
designed to.

## Questions to discuss with your team

1. **Are we instrumenting all four DORA metrics from the pipeline, or are
   some of them self-reported estimates?** A framework built on objective,
   research-validated measurement loses much of its value the moment a
   number becomes a best guess. Audit each metric's actual data source
   (chapter 1.5).

2. **Do all the teams we compare using DORA metrics share the same
   definitions of deployment, change, and failure?** A comparison between
   teams using different definitions is not really a comparison, and can
   produce unfair judgements about relative performance.

3. **Has anyone in our organization used a DORA metric in an individual
   performance review, formally or informally?** This is the single most
   damaging misuse of the framework and often happens quietly. Ask
   directly and be prepared for an uncomfortable but necessary answer.

4. **Could our DORA numbers be excellent while our flow distribution
   (chapter 2.3) has quietly drifted toward rework or away from features?**
   This is precisely the gap DORA alone cannot see. Pull both sets of
   numbers together and check whether they tell a consistent story.

5. **When one of our DORA metrics moves, do we have the flow-metric
   diagnostics to explain why?** A DORA number alone tells you that
   something changed, not what. Check whether your teams can answer "why
   did lead time increase this month" with data, or only with speculation.

6. **How would our four DORA numbers change if we deliberately tried to
   game each one, and would we notice?** Walk through deployment frequency,
   lead time, change failure rate, and recovery time one at a time, the
   practical application of chapter 1.2's core discipline to this specific
   framework.

## Sector lens

**Startup.** DORA's speed metrics usually come naturally to a small team
already deploying frequently; the harder discipline is instrumenting change
failure rate and recovery time honestly rather than assuming stability
because nothing has broken badly yet. Pairing DORA with even an informal
flow-item split (chapter 2.2) early avoids building a false sense of
delivery health around pipeline speed alone.

**Small business.** Most modern CI/CD and version control platforms export
deployment frequency and lead time data with minimal setup; linking deploys
to incidents for change failure rate typically needs more manual effort.
Start with the two speed metrics and add stability tracking as soon as an
informal incident log exists to link against.

**Enterprise.** DORA's greatest remaining value at this scale is fair,
consistent cross-team comparison for platform investment decisions.
Standardize definitions organization-wide (chapter 1.4), automate
instrumentation centrally, and pair every DORA report with a flow
distribution view so leadership sees both pipeline speed and value mix
together, not one without the other.

**Government.** DORA metrics still give a modernization programme a
defensible, research-backed way to demonstrate delivery-mechanics
improvement to oversight bodies. Report all four metrics together, never
cherry-picking the flattering half, and pair them with flow distribution
so the report also answers the harder, more important question of what the
faster pipeline is actually delivering.

## Examples

**Enterprise.** A large telecommunications company's platform modernization
programme instrumented all four DORA metrics consistently across forty
product teams and showed a genuine movement from low-performer to
high-performer bands over eighteen months, deployment frequency up
roughly tenfold, lead time down from weeks to days, change failure rate
held flat. A board member, reviewing the presentation, asked a question the
DORA numbers alone could not answer: how much of that faster delivery was
new customer value versus rework. The engineering organization had no
answer until it adopted flow-item classification the following quarter,
which showed feature work had actually fallen as a share of total output
even as DORA's speed numbers improved, a finding that reshaped the
programme's next-year priorities.

**Government.** A state government's IT modernization office adopted DORA
metrics as a contract condition to compare the delivery capability of
several competing vendor teams, an effective use of the framework's
comparability. One vendor's high deployment frequency was revealed, once
change failure rate was required alongside it, to correlate with a failure
rate nearly three times higher than its peers, information that directly
informed the office's contract renewal decision. The office later added a
flow-distribution requirement to the same contracts after discovering that
the vendor with the best DORA numbers was also the one spending the
smallest share of capacity on the security remediation work the contract
specifically required.

## Business case: motivations, ROI, and TCO

The return on adopting DORA well, within its proper scope, is a defensible,
evidence-based answer to "is our delivery pipeline getting faster and
safer," which remains one of the more tractable questions in engineering to
answer with confidence. That answer justifies platform and tooling
investment with real numbers, and lets leadership compare competing
investments on a fair, consistent basis, exactly as it always has.

The total cost of ownership is the integration work linking deploy events
to incident records for change failure rate and recovery time, nontrivial
across a large, heterogeneous tooling landscape. The additional cost of
pairing DORA with the Flow Framework chapters earlier in this part is
comparatively small, since flow-item classification is a reporting
convention layered on existing work, not a parallel measurement system, and
the return, catching exactly the value-mix blind spot the telecommunications
example above illustrates, is well worth that modest additional investment.

## Anti-patterns and pitfalls

- **Treating DORA as the whole picture of delivery health:** the gaming
  vector this chapter's placement is designed to counter. An organization
  can present genuinely excellent DORA numbers, fast, frequent, stable
  deployments, while its actual delivered value has quietly shifted toward
  rework or away from features, and DORA's four metrics alone will never
  reveal that shift because they were never designed to measure it. The
  guardrail is pairing every DORA report with flow distribution (chapter
  2.3), so a fast, stable pipeline delivering the wrong mix of work is
  visible rather than mistaken for genuine delivery health.
- **Reporting only the speed half of DORA:** defeats the framework's
  central finding that speed and stability move together in high
  performers.
- **Using DORA metrics in individual performance reviews:** breaks the
  framework's statistical validity and invites strong gaming.
- **Comparing teams with inconsistent definitions:** produces comparisons
  that look fair but are not.
- **Self-reported DORA numbers instead of pipeline-instrumented ones:**
  introduces exactly the bias the framework was designed to eliminate.
- **Treating DORA as diagnostic rather than summary:** leaves a team unable
  to explain why a number moved without the flow-metric layer underneath
  it.

## Maturity model

- **Level 1, Initiate:** DORA metrics, if tracked at all, are self-reported,
  inconsistently defined, and never paired with flow data.
- **Level 2, Develop:** Some teams instrument DORA from the pipeline, but
  definitions vary and there is no flow-distribution counterpart to check
  against.
- **Level 3, Standardize:** All four DORA metrics are instrumented
  consistently from pipeline and incident data, with shared definitions,
  and are routinely shown alongside flow distribution.
- **Level 4, Manage:** DORA and flow metrics are reviewed together as a
  standard pairing at every level of the organization, and DORA is never
  used for individual evaluation.
- **Level 5, Orchestrate:** The organization can point to specific cases
  where flow distribution caught a value-mix problem that excellent DORA
  numbers alone had concealed, and uses both frameworks deliberately for
  the distinct questions each answers.

## Ideas for discussion

1. Where do our four DORA metrics currently place us on the performance-tier spectrum, honestly?
2. Could our DORA numbers look excellent while our flow distribution has quietly drifted? Have we ever checked?
3. Has anyone ever used a DORA number to judge an individual, even informally?
4. If a competitor published its DORA numbers, would ours compare favourably, and would that comparison actually tell us who is delivering more real value?

## Key takeaways

- DORA's four metrics, **deployment frequency, lead time, change failure
  rate, and recovery time**, pair speed with stability by design and remain
  genuinely research-validated.
- This book places DORA **last in this part** because it measures the
  pipeline, not the value flowing through it; pair it with flow
  distribution (chapter 2.3) for the fuller picture.
- The chapter's central gaming vector is **mistaking excellent DORA numbers
  for complete delivery health**; the guardrail is always reporting DORA
  alongside flow distribution.
- **Never use DORA metrics in individual performance reviews**; the
  framework's validity depends on system-level, not individual,
  measurement.
- Use **flow metrics as the diagnostic layer** underneath DORA's summary
  numbers when one of them moves.

## References and further reading

- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment programme.
  [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
