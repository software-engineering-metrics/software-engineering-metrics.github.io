# 2.3 Lead time for changes

## Overview and motivation

**Lead time for changes** measures the time from a code change being
committed to that change running successfully in production. It is DORA's
other speed metric (chapter 2.1), and it answers a different question from
deployment frequency: not how often a team ships, but how long any single
piece of work waits before it delivers value. A team can deploy frequently
while individual changes still sit for weeks before merging, if the
frequency comes from a small subset of fast-moving work while everything
else queues. Lead time catches that pattern where deployment frequency alone
cannot.

The value of a short lead time compounds beyond convenience. A change that
reaches production quickly gets real feedback quickly: a bug surfaces while
the context is still fresh in the author's mind, a wrong assumption gets
corrected before more work is built on top of it, and a customer's reaction
informs the next iteration while the team still remembers what they built and
why. A long lead time delays every one of those feedback loops, and in large
organizations, that delay compounds across every team waiting on every other
team's slow-moving dependency.

Lead time is also the DORA metric most often measured inconsistently, because
"first [commit](https://en.wikipedia.org/wiki/Commit_(version_control))" and "production" both hide real definitional choices. This
chapter spends real effort on getting the definition right, because an
imprecise lead-time definition is one of the fastest ways to produce numbers
that look meaningful but are not actually comparable, either across teams
or across time for the same team, undermining the entire point of tracking
it.

## Key principles

- **Measure from the first commit, not from ticket creation or planning.**
  Lead time is about engineering flow, not the upstream discovery process.
- **A short lead time is a proxy for low friction, not for how hard someone
  worked.** It reflects batch size, review speed, test speed, and approval
  overhead.
- **The metric is exposed to definition gaming.** Changing what counts as
  the start or end point can flatter the number without any real
  improvement.
- **Report the median and the 85th or 90th percentile together, never a
  single average.** Lead time is heavily right-skewed (chapter 1.6); most
  changes are fast, a long tail is not.
- **Lead time pairs with change failure rate, exactly like deployment
  frequency.** Speed without a stability guardrail is an incomplete picture.

## Recommendations

### Fix the start and end points precisely, and document them

Define lead time as the interval from the first commit on a change (not the
ticket's creation, not the start of design discussion) to that change
running successfully in production. This matches DORA's research
definition and excludes upstream product-discovery time, which the
sibling `software-engineering-guide` book's discovery-pipeline chapter
covers as its own, separate concern. Document this precisely in your
metrics charter
(chapter 1.4), because "lead time" is used loosely enough elsewhere in the
industry that ambiguity here is the default, not the exception.

### Report percentiles, not a single average

Because lead time is right-skewed, most changes moving quickly with an
occasional very slow outlier, an average understates the typical experience
and can be dragged around by a small number of long-tail changes (chapter
1.6). Report the median lead time alongside the 85th or 90th percentile, so
a reader sees both the typical case and how bad the worst-case tail actually
gets.

### Decompose lead time using cycle time before reacting to a change

A rising or falling lead-time number tells you something changed, not what.
Use the cycle time breakdown from chapter 2.6, coding time, review time,
test time, deploy time, to find the specific stage responsible before
proposing a fix. A team that responds to "lead time went up" by pressuring
engineers to code faster, when the actual bottleneck was a slow review
queue, has misdiagnosed the problem and may make morale worse without
improving the metric at all.

### Watch for definition gaming at the boundaries

The two most common ways lead time gets gamed without a real underlying
improvement: starting the clock later than the true first commit (for
example, only counting commits after a change is marked "ready for review,"
hiding earlier iteration time), or stopping the clock earlier than genuine
production readiness (marking a deploy "complete" before a feature flag is
actually enabled for real users). Both are instances of chapter 1.2's
definition gaming pattern. Audit your instrumentation periodically against
the documented definition to catch drift.

### Treat a long tail as a signal to investigate, not to hide

Some changes will always take longer, a complex migration, a
cross-team-dependent feature, and that is not automatically a problem. The
useful discipline is investigating what the long-tail changes have in
common: do they share a dependency on a specific slow-moving team, a
specific kind of approval, a specific class of technical complexity. That
pattern, not the raw percentile number alone, is where the actionable
insight usually lives.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Measuring from first commit | Matches DORA's validated definition, captures true engineering flow | Requires reliable version-control instrumentation |
| Measuring from ticket creation | Captures more of the end-to-end delivery experience | Conflates discovery and delivery time; not comparable to DORA benchmarks |
| Reporting a single average | Simple to present | Misleading on right-skewed data (chapter 1.6) |
| Reporting median plus percentile | Shows typical case and worst-case tail together | Slightly more complex to explain to a non-technical audience |

The central tension is **simplicity of the number versus fidelity to what it
actually measures**. A single average lead time is easy to put in a slide
but routinely misrepresents the experience most changes actually have.
Resolve the tension by defaulting to the more faithful representation,
median plus a high percentile, and investing a small amount of effort in
explaining the pair to any audience unfamiliar with it, since the honesty
gained is worth the modest extra complexity.

## Questions to discuss with your team

1. **Does our lead-time instrumentation start the clock at the true first
   commit, or has the definition drifted to start later and flatter the
   number?** Trace your actual instrumentation logic against the documented
   definition and check for drift, particularly around any "ready for
   review" or "work started" markers that might exclude genuine early
   iteration time.

2. **Are we reporting a single average lead time anywhere, and what would
   the median and 90th percentile show instead?** Pull both numbers for a
   recent period and compare; a large gap between the average and the
   median is itself diagnostic of how skewed your distribution actually is.

3. **When lead time last moved significantly, could we explain which stage
   of the cycle-time breakdown was responsible?** If the honest answer is
   no, that is a gap in your diagnostic tooling (chapter 2.6), not just a
   one-time miss.

4. **What do our slowest-moving changes, the long tail beyond the 90th
   percentile, have in common?** Pull a sample of the slowest changes from
   the last quarter and look for a shared cause: a specific team dependency,
   a specific type of approval, a specific technical pattern.

5. **Have we ever responded to a lead-time regression by pressuring
   individuals to work faster, rather than investigating the system
   bottleneck?** This response misdiagnoses a system-level metric as an
   individual performance issue and risks real harm to morale and trust
   without fixing the underlying cause.

6. **Is lead time ever discussed in isolation from change failure rate in
   our reviews?** As with deployment frequency, a speed metric discussed
   without its stability guardrail is an incomplete, and potentially
   misleading, picture of delivery health.

## Sector lens

**Startup.** Lead time is usually naturally short with a small team and
little process, and the main risk is losing that speed as the team grows
and adds review steps and approval chains without noticing the cumulative
effect on the metric. Start tracking it early so you can see the trend as
process gets added.

**Small business.** Most modern version-control and CI/CD platforms can
report first-commit-to-deploy timestamps with minimal setup; the main
discipline is confirming the platform's default definition matches this
chapter's recommendation rather than assuming it does.

**Enterprise.** Long lead times here are usually driven by cross-team
dependencies and approval chains that no single team owns end to end.
Instrument lead time consistently across teams, decompose it with cycle
time to find shared bottlenecks (a particular approval gate several teams
route through), and prioritize fixing the shared bottleneck rather than
asking each team to improve its own number in isolation.

**Government.** Lead time is a strong, evidence-based argument for
modernizing a slow, manual change-approval process, but a headline "lead
time reduced from weeks to days" claim needs the percentile detail and
definition documented clearly, since oversight bodies asking follow-up
questions will want to know exactly what was measured and how.

## Examples

**Enterprise.** A healthcare technology company's median lead time held
steady around three days for a year, but the 90th percentile crept from
five days to over three weeks without anyone noticing, because dashboards
showed only the median. A cycle-time breakdown of the long-tail changes
found nearly all of them waiting on a single, overloaded compliance-review
step shared across twelve teams. Adding a second reviewer and a clearer
triage process for that shared bottleneck brought the 90th percentile back
under a week within one quarter, with no change to the median at all.

**Government.** A digital services agency reported lead time had "improved
dramatically" after a process change, but an internal review found the
apparent improvement came entirely from redefining the start point to
exclude an early internal-approval stage that had not actually gotten any
faster, a clear case of definition gaming (chapter 1.2). The agency's
corrected report restored the original definition, showed the true,
smaller improvement, and documented the definition explicitly in its public
methodology notes going forward.

## Business case: motivations, ROI, and TCO

The return on shortening lead time is faster feedback throughout the
organization: bugs caught while context is fresh, wrong assumptions
corrected before more work builds on them, and customer reaction informing
the next iteration sooner. In a large organization, this compounds because
every team waiting on another team's slow-moving dependency benefits from
that dependency moving faster.

The total cost of ownership is mostly the instrumentation and the
diagnostic work of cycle-time decomposition; the actual process
improvements that reduce lead time, removing a redundant approval step,
speeding up a test suite, are frequently cheaper than the organizational
inertia that has let the slow step persist unquestioned. The real
investment is often the political capital to remove a legacy gate, not the
engineering cost.

## Anti-patterns and pitfalls

- **Measuring from ticket creation instead of first commit:** conflates
  discovery time with engineering delivery time.
- **Reporting a single average on skewed data:** misrepresents the typical
  experience.
- **Definition drift at the start or end point:** flatters the number
  without any real improvement (chapter 1.2's definition gaming).
- **Responding to a regression by pressuring individuals rather than
  investigating the system:** misdiagnoses a system-level signal.
- **Discussing lead time without change failure rate:** an incomplete,
  potentially misleading picture.
- **Ignoring the long tail because the median looks fine:** hides a real and
  growing problem from view.

## Maturity model

- **Level 1, Initiate:** Lead time is not tracked, or is measured
  inconsistently with no documented definition.
- **Level 2, Develop:** Some teams track lead time, usually as a single
  average, with definitions that vary team to team.
- **Level 3, Standardize:** Lead time is measured consistently from first
  commit to production across the organization, with median and percentile
  reported together.
- **Level 4, Manage:** Lead-time regressions are routinely diagnosed with
  cycle-time decomposition before any response, and shared cross-team
  bottlenecks are actively identified and fixed.
- **Level 5, Orchestrate:** Lead time is a stable, trusted, well-understood
  metric that directly informs process-improvement investment, with
  documented before-and-after evidence of specific fixes.

## Ideas for discussion

1. What is the gap between our median and 90th-percentile lead time right now, and why?
2. What single shared bottleneck, if removed, would most improve lead time across the most teams?
3. Has our lead-time definition ever changed without a documented reason?
4. When did we last diagnose a lead-time change down to a specific pipeline stage?
5. Would our lead-time numbers survive an external audit of the underlying definition?

## Key takeaways

- Measure lead time from the **first commit** to **successful production
  deployment**, matching DORA's validated definition, and document that
  definition precisely.
- Report the **median and a high percentile together**, never a single
  average, since the distribution is right-skewed.
- Use **cycle-time decomposition** (chapter 2.6) to diagnose a lead-time
  change before reacting to it.
- Watch for **definition gaming** at the start and end points, and audit
  instrumentation periodically against the documented definition.
- Always pair lead time with its stability guardrail, **change failure
  rate** (chapter 2.4).

## References and further reading

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (lead time as a validated delivery-performance
  indicator).
- Google Cloud's DevOps Research and Assessment programme, [dora.dev](https://dora.dev/guides/dora-metrics/) (metric
  definitions and benchmarks).
- *The Principles of Product Development Flow*, by Donald G. Reinertsen
  (queueing and batch-size theory underlying why lead time behaves the way
  it does).
- *Continuous Delivery*, by Jez Humble and David Farley (engineering
  practices that shorten lead time safely).
