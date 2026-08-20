# 2.5 Failed deployment recovery time

## Overview and motivation

**Failed deployment recovery time**, often called mean time to recovery
(MTTR) in this specific DORA context, measures how long it takes a team to
restore service after a deployment causes a failure. It is the fourth and
final DORA metric (chapter 2.1), and it answers the question the other three
cannot: when something does go wrong, and something eventually always does,
how quickly does the organization recover. Elite performers restore service
in under an hour; low performers can take a week or more.

This metric matters because perfect prevention is not a realistic goal for
any system operating at real scale and speed. Chapter 2.4's change failure
rate measures how often something breaks; this chapter measures what happens
next. An organization that accepts a nonzero failure rate but recovers in
minutes is, in a very real sense, safer for users than one with a lower
failure rate but week-long outages when something does slip through,
because total user-facing downtime is a function of both frequency and
duration. DORA's research treats recovery speed as equally important to
prevention, which is a deliberate corrective to organizations that pour all
their safety investment into prevention and none into recovery capability.

For large teams, recovery time reveals whether an organization has actually
invested in the operational capability, rollback tooling, [feature flags](https://en.wikipedia.org/wiki/Feature_toggle),
clear on-call ownership, practiced incident response, that turns a failure
from a crisis into a routine, quickly resolved event. This metric connects
directly forward to Part 6 of this book, where incident metrics (chapter
6.2) and on-call practices (chapter 6.3) go deeper into the operational
mechanics that determine recovery speed.

## Key principles

- **Recovery time measures capability, not luck.** A fast recovery reflects
  investment in rollback tooling, on-call readiness, and clear escalation,
  not chance.
- **This is the metric that makes a nonzero change failure rate acceptable.**
  Prevention and recovery are both necessary; neither alone is sufficient.
- **Measure from detection, or from the failure event, not from when someone
  finally notices casually.** A slow-to-notice failure inflates recovery
  time for reasons unrelated to actual recovery capability.
- **This metric overlaps with, but is distinct from, general incident MTTR**
  (chapter 6.2); this one is specifically scoped to deployment-caused
  failures.
- **A fast rollback capability is the single highest-leverage investment**
  for improving this metric.

## Recommendations

### Define the clock's start and end points precisely

Start the clock at the moment the failure is detected, either by automated
monitoring or by a human, whichever comes first, not at the moment the
deploy itself occurred. Stop the clock at the moment service is genuinely
restored to normal, not at the moment a fix is merged or a rollback is
initiated. This distinction matters: a rollback that is triggered quickly
but takes twenty minutes to actually propagate should count the full twenty
minutes, not just the decision time.

### Invest in rollback capability as the primary lever

The single fastest way to improve this metric is making rollback fast,
safe, and low-friction: automated one-click or fully automatic rollback
triggered by health-check failures, feature flags that can disable a
problematic change without a full redeploy, and database migration
practices that do not block a quick reversal. Teams that must manually
diagnose a root cause before they can even begin recovering will always
have slower recovery times than teams that can revert first and diagnose
calmly afterward.

### Practice incident response before you need it

Recovery speed under real pressure depends heavily on whether a team has
practiced the process before a real incident forces it to improvise. Regular
incident response drills, sometimes called game days or fire drills, build
the muscle memory that turns a stressful, ambiguous situation into a
practiced routine. Chapter 6.2 covers incident-response practice in more
depth; this chapter's point is narrower: recovery time is a trained
capability, and organizations that never practice should expect their real
numbers to be worse than their processes on paper suggest.

### Separate detection speed from recovery speed if you can

A slow overall recovery time can be driven by slow detection (the failure
happened but nobody noticed for twenty minutes) or by slow remediation
(the team noticed immediately but took an hour to fix it). These have
completely different fixes, better monitoring and alerting for the first,
better tooling and practiced runbooks for the second. Where your
instrumentation allows it, decompose the total recovery time into these two
phases so you diagnose the right problem.

### Do not let recovery-time pressure produce a worse fix

Under pressure to minimize recovery time, there is a real risk of a team
declaring "resolved" prematurely, restoring surface-level service while an
underlying problem persists and recurs shortly after. Pair this metric with
a recurrence check: did the same failure reappear within a short window
after being marked resolved. A fast but incomplete fix that recurs is worse
than a properly diagnosed one that took slightly longer, and this guardrail
catches the difference.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Automated rollback capability | Fastest possible recovery, removes human bottleneck | Requires upfront engineering investment; not always safe for stateful changes |
| Manual diagnose-then-fix process | More thorough, catches root cause immediately | Slower under pressure; more prone to error in a stressed state |
| Measuring from detection | Reflects true operational recovery capability | Requires reliable, fast detection instrumentation to be meaningful |
| Measuring from the deploy event itself | Simpler to instrument | Conflates detection delay with recovery delay, muddying diagnosis |

The central tension is **speed versus thoroughness**. A team optimizing hard
for recovery time alone risks favouring a fast, superficial fix over a
slower, more complete one. Resolve the tension by pairing recovery time with
a recurrence-rate guardrail, so that a fast fix which does not actually
solve the problem gets caught, and by decomposing recovery time into
detection and remediation phases so the team can improve the right half of
the problem rather than trading thoroughness for speed indiscriminately.

## Questions to discuss with your team

1. **Do we measure recovery time from detection or from the original deploy
   event, and does that choice reflect what we actually want to know?**
   Measuring from the deploy event conflates detection delay with recovery
   delay and can hide a real monitoring gap behind an apparently reasonable
   number. Check your current instrumentation against this distinction.

2. **What is our actual rollback capability today: automated, one-click
   manual, or a full manual redeploy process?** This single capability is
   usually the highest-leverage lever for improving recovery time. Be honest
   about where your organization currently sits and what the next
   investment would be.

3. **When did we last practice incident response through a deliberate drill,
   rather than only experiencing it during a real incident?** Recovery speed
   under real pressure is a trained capability, and an organization that has
   never drilled should expect its real numbers to underperform its
   documented process.

4. **Have we ever marked an incident resolved prematurely, only to see the
   same failure recur shortly after?** This is the specific risk of
   optimizing recovery time without a recurrence guardrail. Look back
   through recent incidents for this pattern honestly.

5. **Could we decompose a recent slow recovery into detection delay versus
   remediation delay, and which was the bigger contributor?** If you cannot
   answer this for a specific past incident, that is a gap in your
   diagnostic capability worth closing before the next one.

6. **How does our recovery time for deployment-caused failures compare to
   our general incident MTTR (chapter 6.2), and should they be different?**
   Deployment-caused failures are often more clearly attributable and
   therefore faster to diagnose than a general production incident with
   unclear root cause; a large, unexplained gap between the two numbers is
   worth investigating.

## Sector lens

**Startup.** With a small system and a small team, recovery is often fast by
default simply because there is little bureaucracy standing between
noticing a problem and fixing it. The risk is under-investing in rollback
tooling specifically, assuming manual redeploys will always be fast enough,
an assumption that breaks down as the system and the team both grow.

**Small business.** Feature flags and simple rollback mechanisms are usually
achievable even without a dedicated platform team, and are worth the modest
upfront investment; most modern hosting platforms support at least basic
rollback-to-previous-version functionality out of the box.

**Enterprise.** Recovery time here is heavily shaped by organizational
structure: who has the authority to trigger a rollback, how many approvals
stand between detection and action, and whether on-call ownership is clear
across a complex system with many owning teams. Invest in removing approval
friction specifically for rollback actions, which are inherently
lower-risk than forward deploys and rarely need the same gating.

**Government.** A published or audited recovery-time figure needs a
documented measurement methodology (chapter 1.5), and the underlying
capability, automated rollback, practiced incident response, is often a
genuinely strong, evidence-based justification for modernization investment
that resonates with oversight bodies focused on citizen-facing service
reliability.

## Examples

**Enterprise.** A media streaming company's recovery time for
deployment-caused failures averaged under ten minutes for most services, but
one legacy billing system averaged over four hours. Investigation found the
billing system had no automated rollback capability at all; recovery
required a manual database migration reversal that only two engineers in
the entire organization knew how to perform safely. Building an automated,
tested rollback path and cross-training a wider on-call rotation brought the
system's recovery time down to under thirty minutes within two months, a
direct, measurable return on a specific, well-targeted investment.

**Government.** A national benefits portal experienced a deployment-caused
outage that took nearly six hours to fully resolve, though the team had
declared it "resolved" twice during that window, only to see the same
underlying error recur each time within twenty minutes. A postmortem found
the team had prioritized minimizing the visible recovery-time clock over
correctly diagnosing the root cause, restoring surface service repeatedly
without fixing the actual database connection-pool exhaustion issue
underneath. The agency's revised incident process now requires a documented
root-cause hypothesis before declaring an incident resolved, even at the
cost of a longer measured recovery time, specifically to prevent this
premature-declaration pattern.

## Business case: motivations, ROI, and TCO

The return on fast recovery capability is bounded user-facing downtime: an
organization that recovers in minutes, even with an unavoidable nonzero
failure rate, delivers a materially better user experience than one with a
lower failure rate but week-long outages when something does go wrong. This
metric is often the single best justification for investment in rollback
tooling and incident-response practice, because the return, hours or days
of downtime avoided per incident, is easy to make concrete to leadership.

The total cost of ownership is the upfront engineering investment in
rollback automation and the recurring cost of incident-response drills.
That cost is modest relative to the cost of even a single extended outage on
a customer-facing or citizen-facing system, which is why this metric
consistently justifies its own investment case more easily than most others
in this book.

## Anti-patterns and pitfalls

- **Measuring from the deploy event instead of detection:** conflates
  monitoring gaps with genuine recovery delay.
- **No automated rollback capability:** the single most common root cause of
  a slow recovery time.
- **Never practicing incident response before a real incident forces it:**
  produces worse real-world numbers than documented process suggests.
- **Declaring an incident resolved prematurely to minimize the clock:**
  trades thoroughness for a better-looking number and risks recurrence.
- **Approval gates on rollback actions as heavy as those on forward
  deploys:** unnecessarily slows an inherently lower-risk action.
- **No recurrence guardrail paired with this metric:** cannot catch a fast
  but incomplete fix.

## Maturity model

- **Level 1, Initiate:** Recovery from a failed deployment is manual, ad
  hoc, and not consistently measured.
- **Level 2, Develop:** Some services have rollback capability and some
  recovery-time tracking, but practice is inconsistent and drills are rare
  or nonexistent.
- **Level 3, Standardize:** Automated or low-friction rollback exists for
  most services, recovery time is measured consistently from detection, and
  incident drills happen on a regular cadence.
- **Level 4, Manage:** Recovery time is decomposed into detection and
  remediation phases for diagnosis; a recurrence guardrail catches premature
  resolution.
- **Level 5, Orchestrate:** The organization can point to specific
  investments, automated rollback for a previously slow system, expanded
  drilling, that measurably and sustainably improved recovery time, and
  recovery capability is treated as a first-class engineering investment
  area.

## Ideas for discussion

1. What is our current rollback capability for our slowest-to-recover system?
2. When did we last run a deliberate incident-response drill?
3. Has an incident ever been declared resolved and then recurred shortly after?
4. How much of our recovery time is typically detection delay versus remediation delay?
5. What is the single highest-leverage investment we could make to improve recovery time this quarter?

## Key takeaways

- Recovery time measures **operational capability**, chiefly rollback
  tooling and practiced incident response, not luck.
- Measure from **detection**, not from the deploy event, and decompose into
  detection versus remediation phases where possible.
- **Automated rollback capability** is usually the single highest-leverage
  investment for improving this metric.
- Pair recovery time with a **recurrence guardrail** to catch a fast but
  incomplete fix.
- This metric is what makes a nonzero **change failure rate** (chapter 2.4)
  acceptable; prevention and recovery are both necessary.

## References and further reading

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (recovery time as a validated stability
  indicator).
- Google Cloud's DevOps Research and Assessment programme, [dora.dev](https://dora.dev/guides/dora-metrics/) (metric
  definitions and benchmarks).
- *Site Reliability Engineering*, by Betsy Beyer, Chris Jones, Jennifer
  Petoff, and Niall Richard Murphy, eds. (incident response and recovery
  practice).
- *The Site Reliability Workbook*, by Betsy Beyer, Niall Richard Murphy,
  David K. Rensin, Kent Kawahara, and Stephen Thorne, eds. (practical
  incident-response drilling guidance).
