# 2.4 Change failure rate

## Overview and motivation

**Change failure rate** measures the percentage of deployments that cause a
failure in production requiring remediation, a rollback, a hotfix, or an
incident. It is the harder of DORA's two stability metrics to define
consistently (chapter 2.1), because "failure" is not self-evidently
objective the way a deployment timestamp is. Two teams can report identical
change failure rates while meaning very different things by "failure," which
makes this chapter's central concern definitional precision, not just
measurement mechanics.

Change failure rate exists specifically to guard against the risk built into
every speed metric in this part: that a team improves deployment frequency
or lead time by shipping riskier, less-tested changes. Without this metric
paired against the speed metrics, an organization has no way to tell genuine
delivery improvement from speed bought at the price of stability. DORA's
research finding that elite performers achieve low change failure rate
*alongside* high deployment frequency, not as a trade-off against it, is the
single most important empirical result behind this book's entire
guardrail-pairing philosophy from chapter 1.2.

For large teams, change failure rate reveals whether the confidence embedded
in a team's process (its test suite, its review practices, its rollout
strategy) is actually justified or merely assumed. A team with an
impressive-looking test suite but a high change failure rate has a test
suite that is not actually catching what matters; a team with a strong
process (feature flags, canary releases, progressive delivery) can often
sustain high deployment frequency and low change failure rate at the same
time, which is exactly the state DORA's research associates with elite
performance.

## Key principles

- **The definition of "failure" is the whole game.** Agree on it explicitly
  before comparing this metric across teams or over time.
- **This metric is the guardrail for deployment frequency and lead time,**
  not an independent statistic to review in isolation.
- **A low count of deploys makes this metric noisy.** Treat a percentage
  from a small underlying sample with appropriate caution (chapter 1.6).
- **The metric is exposed to definition gaming specifically.** Narrowing
  what counts as a "failure" flatters the number without reducing real
  risk.
- **Root cause matters more than the raw percentage.** A rising rate is a
  signal to investigate, not just a number to react to.

## Recommendations

### Agree on a precise, written definition of "failure" before measuring

A **failure**, for this metric, should mean any change that required an
immediate remediation: a full or partial rollback, a hotfix deployed within
a short window, or a directly attributable production [incident](https://en.wikipedia.org/wiki/Incident_management). Explicitly
exclude issues discovered and fixed through normal iteration that did not
require emergency remediation, since including every minor imperfection
would make the metric so noisy it stops being useful. Write this definition
into your metrics charter (chapter 1.4) and apply it identically across
every team measured.

### Link deploys to incidents automatically, not through manual attribution

Manual, after-the-fact attribution of "was this incident caused by that
deploy" is slow, inconsistent, and vulnerable to a team's own bias about its
own work. Where possible, instrument the link directly: a deploy pipeline
event tagged against the incident tracker's record, so an engineer or a team
cannot quietly decide, in a stressed post-incident moment, that a given
issue does not really count. This connects directly to the instrumentation
discipline in chapter 1.5.

### Treat a rising rate as an investigation trigger, not a verdict

A change failure rate that climbs is a signal to look at what changed in the
team's process: did test coverage on a critical path slip (chapter 4.2), did
review rigor drop under deadline pressure, did a new dependency introduce
instability (chapter 2.8's review metrics and chapter 4.4's static analysis
metrics are useful companions here). Treat the number as the start of a
diagnostic conversation, not the end of one.

### Watch for definition gaming when the number improves suspiciously fast

If change failure rate drops sharply with no corresponding change in testing
practice, review rigor, or deployment strategy, the more likely explanation
is that the definition of "failure" quietly narrowed, not that risk
genuinely fell. This is chapter 1.2's definition gaming pattern in its most
common real-world form for this specific metric. Periodically re-audit a
sample of recent deploys against the written definition to confirm
consistent application.

### Account for small-sample noise before reacting

A team deploying only a handful of times a week will see this percentage
swing wildly from a single incident, a single bad week can look like a
crisis when it is really just noise (chapter 1.6). Show the underlying
deploy count alongside the percentage, and avoid drawing strong conclusions
from any period with fewer than roughly twenty to thirty underlying deploys.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Broad failure definition (any post-deploy issue) | Captures more real risk | Noisy, includes minor issues that do not warrant the label |
| Narrow failure definition (rollback or incident only) | Cleaner, more stable signal | Can miss genuine but less dramatic problems |
| Manual incident-to-deploy attribution | Flexible, allows human judgement | Slow, inconsistent, vulnerable to bias under pressure |
| Automated deploy-to-incident linkage | Objective, consistent, hard to quietly narrow | Requires real integration engineering work upfront |

The central tension is **precision versus completeness**. A narrow, clean
definition produces a stable, comparable metric but may miss genuine risk
that does not rise to a full incident; a broad definition captures more but
becomes noisy and harder to interpret consistently. Resolve the tension by
starting with a narrow, well-defined failure criterion tied to automated
incident linkage, and adding a separate, complementary metric (such as a
near-miss or minor-issue count) rather than broadening the primary
definition and sacrificing its stability.

## Questions to discuss with your team

1. **Do we have a single, written, agreed definition of "failure" for this
   metric, or does each team apply its own judgement?** Inconsistent
   definitions make cross-team comparison meaningless and invite exactly the
   definitional drift chapter 1.2 warns about. Write the definition down if
   it does not already exist, and check every team's current practice
   against it.

2. **Is our deploy-to-incident linkage automated, or does it rely on manual
   attribution made under the stress of an active incident?** Manual
   attribution made in the moment is exactly when bias toward
   under-reporting is strongest. Discuss whether your linkage could be
   automated and what that would take.

3. **Has our change failure rate ever improved suspiciously fast with no
   corresponding change in testing or review practice?** This is the
   clearest tell that the definition, not the underlying risk, moved.
   Review your history for any sharp, unexplained improvement and audit it.

4. **How many deploys underlie our current change failure rate percentage,
   and is that sample large enough to trust?** A rate from a handful of
   deploys is noise dressed as signal. Check your underlying counts before
   reacting to any recent movement.

5. **When change failure rate rises, do we have a standard investigation
   process, or does the response vary by whoever notices first?** An ad hoc
   response risks inconsistent root-causing and repeated mistakes. Discuss
   whether a documented investigation playbook exists.

6. **Are we confident our change failure rate reflects real risk, or could a
   team with a strong incentive to look good be under-reporting near-miss
   and rollback events?** This question tests whether the metric's
   incentive exposure (chapter 1.2) has actually been designed against, not
   just discussed abstractly.

## Sector lens

**Startup.** With few deploys, this metric is highly noisy in raw percentage
terms; track it, but interpret single bad weeks cautiously and focus more on
whether a specific incident revealed a real, fixable gap than on the
percentage itself.

**Small business.** A simple, written definition of "failure" tied to your
existing incident or support-ticket system is usually enough; you likely do
not need sophisticated automated linkage at this scale, but you do need the
definition to be consistent every time you apply it.

**Enterprise.** Automated deploy-to-incident linkage pays for itself quickly
here, because manual attribution across dozens of teams under incident
pressure produces wildly inconsistent, hard-to-trust data. Standardize the
failure definition organization-wide and audit it periodically for drift.

**Government.** A published or contractually referenced change failure rate
needs a definition that would survive an external audit, since a narrow or
selectively applied definition discovered after the fact damages credibility
in a way that is hard to repair. Document the criteria publicly if the
metric is reported externally.

## Examples

**Enterprise.** A ride-sharing platform's payments team reported a change
failure rate near zero for six consecutive months, an unusually good result
that prompted a routine audit. The audit found the team had been informally
excluding any issue resolved through a "fast-follow" fix deployed within an
hour, reasoning that a quick fix meant it was not a "real" failure, a
narrowing of the definition no one had approved. Restoring the original,
broader definition put the team's true rate closer to the organizational
median, and the team then focused on genuinely reducing risk, canary
releases and expanded automated testing on the payment-critical path, which
produced a real, sustained improvement over the following two quarters.

**Government.** A federal digital-services team's change failure rate had
been climbing for several months. Rather than react by slowing deployment
frequency across the board, an investigation using linked deploy and
incident data found the failures concentrated almost entirely in changes
touching a single legacy integration with an external agency's system. The
team added a dedicated integration test suite for that specific dependency
and required an extra review step only for changes touching it, bringing
the overall change failure rate back down within one quarter without
slowing unrelated work at all.

## Business case: motivations, ROI, and TCO

The return on tracking change failure rate accurately is the ability to tell
genuine delivery improvement from speed bought at the price of stability,
which is the single most important guardrail role any metric plays in this
book. Without it, an organization celebrating rising deployment frequency
has no way to know whether it is also quietly accumulating production risk.

The total cost of ownership includes the integration work to link deploys
to incidents automatically and the ongoing discipline of auditing the
definition for drift. That cost is modest compared to the cost of
discovering, after a serious incident, that a team's apparently excellent
stability numbers had been quietly narrowed in definition for months.

## Anti-patterns and pitfalls

- **No written, agreed definition of "failure":** makes cross-team
  comparison meaningless.
- **Manual attribution under incident-response pressure:** biases toward
  under-reporting.
- **Suspiciously fast improvement with no process change behind it:** the
  clearest sign of definition gaming.
- **Reacting to a percentage from a tiny sample as if it were stable:**
  overreacts to noise (chapter 1.6).
- **Treating change failure rate as a team scorecard rather than a
  diagnostic trigger:** invites concealment instead of investigation.
- **Reviewing deployment frequency without this guardrail in the same
  conversation:** breaks the entire pairing principle this metric exists to
  serve.

## Maturity model

- **Level 1, Initiate:** Change failure rate is not tracked, or "failure" is
  defined informally and inconsistently by whoever is reporting it.
- **Level 2, Develop:** Some teams track a change failure rate, but
  definitions vary and attribution is largely manual.
- **Level 3, Standardize:** A single, written failure definition applies
  organization-wide, with automated deploy-to-incident linkage.
- **Level 4, Manage:** Rising change failure rate triggers a documented
  investigation process; the definition is periodically audited for drift
  against actual practice.
- **Level 5, Orchestrate:** Change failure rate and deployment frequency are
  reviewed together as a matter of course at every level of the
  organization, and specific process investments (canary releases, expanded
  testing) can be traced to measurable, sustained improvement.

## Ideas for discussion

1. Would our written definition of "failure" survive an external audit?
2. Has any team's change failure rate ever improved without a corresponding process change?
3. How much of our incident-to-deploy attribution today is manual versus automated?
4. What is the smallest number of deploys we would trust a change-failure-rate percentage from?
5. What specific process investment would most reduce our change failure rate right now?

## Key takeaways

- Agree on a **precise, written definition of "failure"** before measuring,
  and apply it identically across every team.
- **Automate deploy-to-incident linkage** rather than relying on manual
  attribution made under incident-response pressure.
- Treat a rising rate as an **investigation trigger**, and treat a
  suspiciously fast improvement as a signal to audit the definition, not to
  celebrate.
- Watch the **underlying deploy count**; a percentage from a small sample is
  noise, not signal (chapter 1.6).
- This metric exists as the **guardrail** for deployment frequency and lead
  time; never review it in isolation.

## References and further reading

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (change failure rate as a validated stability
  indicator, paired with speed metrics).
- Google Cloud's DevOps Research and Assessment programme, [dora.dev](https://dora.dev/guides/dora-metrics/) (metric
  definitions and benchmarks).
- *Site Reliability Engineering*, by Betsy Beyer, Chris Jones, Jennifer
  Petoff, and Niall Richard Murphy, eds. (incident classification and
  postmortem practices relevant to failure attribution).
- *Release It!*, by Michael T. Nygard (deployment risk patterns and
  stability engineering).
