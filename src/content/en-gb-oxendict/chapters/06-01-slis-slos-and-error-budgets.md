# 6.1 Service level indicators, objectives, and error budgets

## Overview and motivation

**[Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering)
(SRE)**, the discipline pioneered at Google and documented in the *Site
Reliability Engineering* book, contributed a vocabulary this chapter builds
on directly: a **service level indicator (SLI)** is a directly measured
signal of a service's health, request latency, error rate, availability. A
**service level objective (SLO)** is the target range for that indicator,
99.9% of requests succeed within 200 milliseconds, for example. And an
**error budget** is the allowed shortfall, the 0.1% of requests permitted to
fail, treated not as a defect to eliminate but as a spendable resource that
can be used deliberately to take on risk: shipping a risky change, running
an experiment, or simply accepting that perfect reliability is neither
achievable nor, past a certain point, worth its cost.

This last idea, the error budget as a spendable resource rather than a
number to minimize toward zero, is the single most important concept in
this chapter and arguably in this entire part. It resolves a tension that
plagues many organizations: engineering wants to ship features and take
reasonable risks; operations wants maximum stability. Without a shared,
quantified error budget, this becomes an endless, politically charged
negotiation. With one, it becomes a simple, objective rule: spend freely
while budget remains, slow down and prioritize stability work automatically
once it is exhausted. This turns an philosophical disagreement into an
arithmetic one.

For large teams, SLOs and error budgets are what make reliability
measurable and negotiable rather than an unattainable, unstated absolute
that every team quietly fails to meet while feeling vaguely guilty about it.
Enterprise organizations use SLOs to set clear, contractual expectations
between teams and with customers; government organizations operating
critical public infrastructure use them to set defensible, publicly
justifiable reliability targets rather than an impossible standard of
perfection that no real system can sustain.

## Key principles

- **100% reliability is the wrong target for almost any system.** It is
  usually unachievable, and pursuing it past a certain point actively
  trades away velocity for no meaningful user benefit.
- **An SLO should reflect what users actually notice and care about**, not
  an arbitrary round number chosen because it sounds reassuring.
- **The error budget turns reliability into a spendable resource**, giving
  both engineering and operations a shared, objective rule for when to ship
  fast and when to slow down.
- **SLIs must be measured from the user's actual experience** wherever
  possible, not just from an internal system's self-reported health.
- **Exhausting the error budget triggers a predetermined, agreed response**,
  not an ad hoc argument every time it happens.

## Recommendations

### Choose SLIs that reflect genuine user experience

Select indicators measured as close to the actual user experience as
possible: request success rate and latency measured at the edge or load
balancer, not just internal service health checks that can report "healthy"
while users experience real problems. An SLI that measures something the
user never actually notices, an internal component being technically up
while the overall request still fails, is measuring the wrong thing however
easy it might be to instrument.

### Set the SLO target based on what users actually need, not an arbitrary
round number

Resist the reflex to set a target like "99.99% uptime" simply because it
sounds impressively rigorous. Instead, research what reliability level
users genuinely notice and care about, informed by historical incident data,
user research, and the demonstrated cost of achieving each additional
increment of reliability, since going from 99.9% to 99.99% often costs far
more engineering effort than going from 99% to 99.9% did, for
diminishing and eventually negligible user-perceptible benefit.

### Treat the error budget as a spendable resource with a predetermined
response to exhaustion

Calculate the error budget directly from the SLO (a 99.9% availability
target over 30 days permits roughly 43 minutes of allowed downtime) and
track spending against it continuously. Agree, in advance and before any
specific incident, what happens when the budget is exhausted: a common,
effective policy is that feature work pauses and the team's priority shifts
automatically to reliability work until the budget recovers. This
predetermined rule removes the need to relitigate the trade-off under
pressure during every individual incident.

### Use the error budget to make deliberate, informed risk decisions

A healthy, unspent error budget is not something to hoard; it is
permission to take reasonable risks, ship a change with elevated but
acceptable risk, run a chaos engineering experiment (the sibling
`software-engineering-guide` book's chaos engineering chapter covers this
directly), or accept a riskier
architecture change, because the budget exists specifically to be spent
deliberately rather than preserved untouched. An error budget that never
gets spent suggests either an overly conservative team or an SLO set too
loosely relative to actual achieved reliability, both worth investigating.

### Review and revise SLOs periodically, based on evidence, not inertia

An SLO set years ago may no longer reflect current user expectations,
system architecture, or business priorities. Review SLOs on a regular
cadence, checking historical achieved reliability, user feedback, and
whether the target still represents a meaningful trade-off point rather than
either an easily met target that could be tightened to enable more velocity
elsewhere, or an unrealistic one that the team has effectively given up on
meeting.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| No formal SLO (implicit "as reliable as possible") | No overhead to set up | Endless, ungrounded negotiation between velocity and stability; no shared rule |
| Aspirational, very high SLO (99.99%+) | Signals seriousness about reliability | Often unnecessary cost; diminishing returns past what users actually notice |
| Evidence-based, user-experience-grounded SLO | Reflects genuine value; defensible and achievable | Requires real data and analysis to set correctly |
| Error budget with predetermined exhaustion response | Removes ad hoc negotiation; objective, fast decision-making | Requires organizational buy-in and discipline to actually honour the predetermined rule |

The central tension is **aspiration versus achievability**. A high,
aspirational SLO feels like it signals seriousness about quality, but
pursuing reliability past what users actually notice trades away real
velocity for no genuine benefit, and an unrealistic target that the team
never actually meets teaches everyone to stop taking the SLO seriously at
all. Resolve the tension by grounding the SLO in actual evidence, what do
users notice, what has the system historically achieved, what does each
additional increment cost, rather than in aspiration or a desire to look
rigorous on a scorecard.

## Questions to discuss with your team

1. **Is our current SLO grounded in evidence about what users actually
   notice, or was it set aspirationally because a high number felt
   appropriately serious?** Trace your current target's origin, if you can,
   and assess honestly whether it reflects real user research or
   engineering intuition alone.

2. **Do we have a predetermined, agreed response to error-budget
   exhaustion, or does the trade-off get relitigated every time it
   happens?** If the honest answer is the latter, that gap is worth closing
   before the next incident forces the argument under pressure.

3. **Is our error budget ever actually spent deliberately, on a
   calculated-risk change or an experiment, or does it only ever get
   consumed accidentally through incidents?** A budget that is never
   deliberately spent might indicate an overly cautious team missing
   legitimate opportunities the budget exists to enable.

4. **Are our SLIs measured from genuine user experience, or from internal
   system health that might not reflect what users actually encounter?**
   Check your current instrumentation against this specific distinction; it
   is a common gap even in otherwise mature reliability programmes.

5. **When did we last review our SLO against current evidence, and has
   anything changed, user expectations, system architecture, business
   priorities, that would justify revising it?** If you cannot recall a
   recent review, that absence is itself worth discussing.

6. **What would it cost us, in engineering effort, to move our current SLO
   up by one additional "nine" of reliability, and would that cost be
   justified by any genuine user benefit?** This concrete cost-benefit
   framing helps ground the aspiration-versus-achievability tension in real
   numbers rather than abstract preference.

## Sector lens

**Startup.** Formal SLOs are often unnecessary very early, when the team
can respond to reliability problems directly and informally. Adopt at least
a rough, informal SLO once you have real paying customers depending on
uptime, since the discipline of an explicit target, even a loosely tracked
one, helps prioritize reliability work against feature pressure earlier
than most young companies think to.

**Small business.** Most modern hosting and observability platforms report
basic uptime and latency data with minimal setup; use this to set a simple,
achievable SLO rather than an aspirational one you cannot realistically
track or act on with limited operational capacity.

**Enterprise.** SLOs at this scale often underpin contractual service level
agreements with real financial consequences, which makes evidence-based
target setting and disciplined error-budget management especially
important. Invest in genuine user-experience-grounded SLIs rather than
convenient internal health checks, and establish the predetermined
exhaustion-response policy formally, with executive buy-in, before it is
needed under pressure.

**Government.** Public-sector reliability targets for critical
infrastructure sometimes carry legal or regulatory weight, and an
unrealistic, unachieved target discovered during an audit or a public
incident damages institutional credibility significantly. Set targets based
on genuine, documented user and mission need, and be transparent publicly
about the deliberate trade-off an error budget represents, rather than
implying an unattainable standard of perfection.

## Examples

**Enterprise.** A cloud storage company had, for years, targeted "maximum
uptime" without a formal SLO, leading to a chronic, unresolved tension
between the product team (wanting to ship features fast) and the
infrastructure team (wanting maximum caution), litigated fresh in every
release planning meeting. Adopting a formal 99.95% availability SLO with an
explicit error budget and a predetermined policy, feature work pauses
automatically when the budget is exhausted, resolved the recurring
negotiation entirely: both teams could see the same number and agree on the
same rule, and the company reported a measurable increase in shipped
features during periods of healthy budget alongside a measurable, deliberate
slowdown during the two periods over the following year when the budget was
genuinely exhausted, exactly as the policy intended.

**Government.** A national weather service's public alert system had
operated for years under an informal expectation of "always available,"
with no documented target and significant, unaddressed operational stress
on the on-call team trying to meet an unstated, effectively impossible
standard. A newly adopted formal SLO, 99.9% availability with a clearly
communicated public error budget explanation, gave the operations team
explicit, defensible permission to schedule planned maintenance windows
within the budget, something the previous unstated "always available"
expectation had made politically difficult to do even when genuinely
necessary for long-term system health. Public communication explaining the
error budget concept directly, rather than hiding it, was received
favourably as a sign of honest, mature operational practice rather than a
weakening of commitment to service quality.

## Business case: motivations, ROI, and TCO

The return on adopting SLOs and error budgets formally is resolving an
otherwise endless, politically costly negotiation between velocity and
stability with a single, shared, objective rule. The cloud storage example
above shows this concretely: years of recurring, unresolved tension between
two teams were resolved by a single formal target and a predetermined
policy, freeing significant organizational energy that had previously gone
into re-litigating the same trade-off repeatedly.

The total cost of ownership includes the analysis effort to set an
evidence-based target correctly and the discipline to honour the
predetermined exhaustion response even under pressure to ship a
particularly desired feature anyway. That discipline cost is real, but it
is far lower than the ongoing cost of an unresolved, chronic negotiation
that consumes organizational energy in every planning cycle indefinitely.

## Anti-patterns and pitfalls

- **Setting an aspirational SLO with no evidence behind it:** produces an
  unrealistic target the team stops taking seriously, or an unnecessarily
  expensive one chasing benefit users do not notice.
- **No predetermined response to error-budget exhaustion:** forces the
  same difficult trade-off argument under pressure every time it happens.
- **Measuring SLIs from internal system health rather than genuine user
  experience:** can report "healthy" while users experience real problems.
- **Never actually spending a healthy error budget deliberately:** may
  indicate excessive caution and missed legitimate opportunity.
- **Setting a target once and never revisiting it:** an SLO can become
  stale as user expectations, architecture, and priorities change.
- **Treating the error budget policy as optional under pressure:** a
  predetermined rule that gets overridden whenever inconvenient provides no
  real decision-making value.

## Maturity model

- **Level 1, Initiate:** Reliability targets are implicit or aspirational,
  with no formal SLO, SLI, or error budget defined.
- **Level 2, Develop:** Some services have an informal SLO, but SLIs may
  not reflect genuine user experience and there is no predetermined
  exhaustion policy.
- **Level 3, Standardize:** Evidence-based SLOs with genuine
  user-experience SLIs and a predetermined error-budget exhaustion policy
  are established consistently across critical services.
- **Level 4, Manage:** Error budgets are actively and deliberately spent on
  calculated risk-taking, and SLOs are reviewed and revised on a regular,
  evidence-based cadence.
- **Level 5, Orchestrate:** SLOs and error budgets are integrated
  organization-wide as the shared, objective mechanism for balancing
  velocity and stability, and the organization can point to specific
  decisions the framework enabled that an ungrounded negotiation would not
  have resolved as effectively.

## Ideas for discussion

1. Is our current SLO grounded in evidence, or in aspiration?
2. Do we have a predetermined response to error-budget exhaustion that we would actually honour under pressure?
3. When did we last deliberately spend a healthy error budget on a calculated risk?
4. Are our SLIs measuring genuine user experience or convenient internal health checks?
5. What would it cost us to raise our SLO by one additional "nine," and would that cost be justified?

## Key takeaways

- A **service level indicator (SLI)** measures genuine user experience; a
  **service level objective (SLO)** is its evidence-based target; an
  **error budget** is the deliberately spendable allowed shortfall.
- **100% reliability is usually the wrong target**; ground your SLO in what
  users actually notice and what each additional increment genuinely costs.
- Treat the error budget as a **spendable resource with a predetermined
  exhaustion response**, removing the need to relitigate velocity-versus-stability
  under pressure every time.
- Measure SLIs from **genuine user experience**, not just convenient
  internal health checks.
- **Review and revise SLOs periodically**, based on evidence, since a
  stale target loses its usefulness as the system and its users change.

## References and further reading

- *Site Reliability Engineering: How Google Runs Production Systems*, by
  Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy, eds.
  (the foundational text defining SLIs, SLOs, and error budgets).
- *The Site Reliability Workbook*, by Betsy Beyer, Niall Richard Murphy,
  David K. Rensin, Kent Kawahara, and Stephen Thorne, eds. (practical
  guidance on implementing SLOs and error budgets).
- *Implementing Service Level Objectives*, by Alex Hidalgo (a comprehensive,
  practitioner-focused guide to designing and operationalizing SLOs).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (the relationship between reliability practice
  and delivery performance).
