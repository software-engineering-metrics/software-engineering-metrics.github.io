# 2.2 Deployment frequency

## Overview and motivation

**Deployment frequency** measures how often a team successfully releases
code to production. It is the most visible, most easily instrumented of the
four DORA metrics (chapter 2.1), and often the first one an organization
adopts, because a [CI/CD](https://en.wikipedia.org/wiki/CI/CD) pipeline already logs every release with a
timestamp. Elite performers, in DORA's research, deploy on demand, multiple
times a day; low performers deploy less than once a month. That range is not
a matter of team size or ambition alone; it reflects how much manual
process, batching, and risk aversion stands between a finished change and a
running system.

The reason this metric matters goes beyond speed for its own sake. A team
that deploys small changes frequently ships less risk per deploy, because
each change is smaller and easier to reason about, easier to roll back, and
easier to attribute a problem to if something goes wrong. A team that
batches weeks of work into a single release multiplies the blast radius of
any single mistake and makes root-causing a failure dramatically harder. High
deployment frequency, in other words, is usually a symptom of a genuinely
lower-risk delivery process, not a cause of risk in itself, which is the
opposite of the intuition many risk-averse organizations start with.

For large teams, deployment frequency exposes exactly where batching and
manual gatekeeping accumulate: a platform team may deploy dozens of times a
day, while a compliance-heavy team three organizational layers over deploys
monthly because of a manual approval chain nobody has questioned in years.
Enterprise and government organizations use this metric to find and justify
investment in the specific process bottlenecks, not just the abstract goal
of "moving faster."

## Key principles

- **Frequency is a proxy for batch size and process friction, not an end
  goal in itself.** Small, frequent deploys reduce risk per deploy; that is
  the actual value being measured.
- **Only successful production deployments count.** A deploy that fails
  before reaching production, or that gets immediately rolled back, is not
  a genuine data point for this metric.
- **This metric is exposed to substitution gaming.** Splitting one
  meaningful change into many trivial deploys inflates the number without
  reducing real batch size or risk.
- **Deployment frequency pairs with change failure rate.** Never report one
  without the other (chapter 2.1).
- **The right target depends on context, not a universal number.** A safety-
  critical embedded system and a consumer web app have legitimately
  different achievable frequencies.

## Recommendations

### Define "deployment" precisely and consistently

Decide, in writing, whether a deployment counts as any push to any
environment, or only a release that reaches production and serves real user
traffic. DORA's research uses the latter definition, and this book
recommends the same: only count production deploys that actually go live.
Document this in your metrics charter (chapter 1.4) so that teams comparing
their numbers are comparing the same thing.

### Instrument from the deployment pipeline, never from self-report

The pipeline already has an authoritative, timestamped record of every
production release. Building a lightweight aggregation on top of that data
is far more reliable than asking teams to self-report how often they deploy
(chapter 1.5). This also removes any incentive to round a number up in a
retrospective or a review.

### Watch for substitution gaming through trivial splitting

The cheapest way to inflate deployment frequency without doing real work is
to split one meaningful change into several trivial ones, a comment change,
a whitespace fix, deployed separately purely to raise the count. This is a
textbook example of chapter 1.2's substitution gaming pattern. The guardrail
is change failure rate: trivial splitting alone does not move it, but it
also does not reduce real batch size, so watch deploy size (lines changed,
files touched) alongside frequency to catch this pattern specifically.

### Investigate low frequency as a process signal, not a team failing

When a team's deployment frequency is low, the productive response is to ask
what stands between a finished change and production: a manual approval
step, an infrequent release train, a slow or flaky test suite, an
under-resourced release engineering function. Treating low frequency as a
personal or team failing, rather than a system constraint to investigate,
both misdiagnoses the problem and creates exactly the incentive-exposure
risk chapter 1.2 warns about.

### Compare a team against its own history, not against an unrelated team

A compliance-critical financial system and a marketing landing page have
legitimately different safe deployment cadences, and comparing their raw
frequency numbers directly produces an unfair and unhelpful conclusion.
Track each team's trend against its own baseline over time, and use
cross-team comparison only among teams working on genuinely comparable
systems.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Counting all environment pushes | Simple, captures full pipeline activity | Inflates the number with non-production activity; not comparable to DORA research |
| Counting only production releases | Matches DORA's validated definition, meaningful comparison | Requires reliable production-deploy instrumentation |
| Cross-team raw comparison | Simple to present | Unfair between systems with different risk profiles |
| Trend-against-own-baseline comparison | Fair, meaningful for each team's own improvement | Loses the cross-team comparability that makes DORA valuable at scale |

The central tension is **comparability versus fairness**. Comparing raw
deployment frequency across very different systems is easy but often unfair;
tracking every team only against its own baseline is fair but sacrifices the
organization-wide comparability that makes the metric valuable for
investment decisions. Resolve the tension by grouping teams into
genuinely comparable cohorts (similar system criticality, similar release
model) before making any cross-team comparison, and always pairing the
comparison with change failure rate so a higher number is never read as
better without also checking it was not bought with more risk.

## Questions to discuss with your team

1. **Does our definition of "deployment" match DORA's research definition
   (a successful release to production), or are we counting something
   broader that inflates the number?** Check your instrumentation against
   this definition specifically, because a mismatch here invalidates any
   comparison to published DORA benchmarks.

2. **Have we seen deploy size shrink suspiciously alongside a rising deploy
   count, suggesting trivial splitting rather than genuine batch-size
   reduction?** Pull actual deploy diffs for a sample period and check
   whether the composition of what is being deployed has meaningfully
   changed, or whether the same amount of real work is just being sliced
   more finely to move the number.

3. **What specific process step is the biggest bottleneck between a
   finished change and a production release for our lowest-frequency team?**
   Low frequency is a system signal, not a verdict on the team. Walk the
   actual pipeline stage by stage and name the slowest step honestly.

4. **Are we comparing deployment frequency fairly across teams working on
   genuinely comparable systems, or are we holding a safety-critical team to
   the same bar as a low-risk one?** An unfair comparison here damages trust
   in the metric and can push a team toward risky shortcuts just to look
   comparable.

5. **Is deployment frequency ever discussed without change failure rate in
   the same conversation?** If your reviews or retrospectives routinely
   celebrate a rising frequency number without checking the paired stability
   metric, that is the exact incentive-exposure pattern chapter 1.2 warns
   against taking hold in practice, not just in theory.

6. **What would genuinely improving our deployment frequency require, versus
   what would gaming it look like, and could we currently tell the two
   apart from the dashboard alone?** This question forces a concrete,
   team-specific answer to the abstract gaming risk this chapter names.

## Sector lens

**Startup.** High deployment frequency usually comes naturally because there
is little process to strip away in the first place. The risk is the
opposite of most organizations: deploying so casually that change failure
rate goes unmeasured, because nothing has broken badly enough yet to force
the discipline of tracking it.

**Small business.** Most modern hosting and CI/CD platforms make frequent
small deploys the path of least resistance by default. The main discipline
worth adopting is simply confirming your platform's built-in deploy count
actually reflects production releases, not staging pushes, before trusting
the number.

**Enterprise.** This is where the gap between platform teams and
compliance-heavy teams is starkest, and where the process-bottleneck
investigation this chapter recommends earns the most return. Invest in
finding and removing the specific manual gates slowing the lowest-frequency
teams, rather than setting a blanket frequency target across teams with very
different risk profiles.

**Government.** Deployment frequency can be a genuinely useful, evidence-based
argument for modernizing a legacy, manual release process, but the metric
needs careful framing for stakeholders who may equate "frequent deploys"
with "reckless changes." Always present it paired with change failure rate,
and be explicit that frequent, small, low-risk deploys are safer than rare,
large, high-risk ones, not the reverse.

## Examples

**Enterprise.** A large e-commerce platform's checkout team deployed roughly
twice a month through a manual, change-advisory-board-gated release process,
while a comparable platform feature team on the same product deployed
several times a day. An investigation found the checkout team's low
frequency was driven entirely by an approval step originally designed for a
now-decommissioned legacy payment gateway. Removing the obsolete step, while
adding automated pre-deploy risk checks to replace the manual review's
actual safety value, raised the team's deployment frequency roughly
fifteenfold within two months, with change failure rate held flat.

**Government.** A federal benefits agency's engineering team was under
pressure to increase deployment frequency to match an internal target set
after benchmarking against private-sector DORA data. Rather than
investigate process bottlenecks, the team began splitting routine changes
into many smaller deploys purely to hit the number, a clear case of
substitution gaming. An internal audit caught the pattern by comparing
average lines changed per deploy against the historical baseline, which had
dropped sharply even as total code shipped stayed flat, and the agency
replaced the raw frequency target with a paired frequency-and-failure-rate
review instead.

## Business case: motivations, ROI, and TCO

The return on improving genuine deployment frequency is reduced risk per
change and faster feedback: smaller, more frequent deploys are easier to
review, easier to roll back, and easier to root-cause when something goes
wrong, which compounds into fewer and shorter incidents over time. That
return is real and well documented in the DORA research base.

The cost of chasing the number itself, without the underlying process
change, is wasted engineering effort on trivial splitting that produces no
real risk reduction and erodes trust in the metric once discovered. The
total cost of ownership of this metric is low, since it is cheaply
instrumented from existing pipeline data; the real investment is in the
process changes the metric points toward, not in the measurement itself.

## Anti-patterns and pitfalls

- **Counting non-production pushes:** inflates the number and breaks
  comparability with DORA benchmarks.
- **Trivial splitting to inflate the count:** substitution gaming that adds
  no real risk reduction.
- **Setting a blanket frequency target across teams with different risk
  profiles:** unfair and can push risky behaviour on safety-critical
  systems.
- **Treating low frequency as a team failing rather than a process
  signal:** misdiagnoses the actual bottleneck.
- **Discussing frequency without its paired change failure rate:** the exact
  incentive-exposure gap chapter 1.2 warns against.
- **Using self-reported deploy counts instead of pipeline data:** introduces
  avoidable bias.

## Maturity model

- **Level 1, Initiate:** Deployment frequency is not tracked, or is
  self-reported and inconsistently defined.
- **Level 2, Develop:** Some teams instrument frequency from the pipeline,
  but definitions vary and it is rarely paired with change failure rate.
- **Level 3, Standardize:** All teams instrument frequency consistently from
  production-deploy pipeline data, always reviewed alongside change failure
  rate.
- **Level 4, Manage:** Low-frequency teams are investigated for specific
  process bottlenecks, not judged; deploy size is monitored alongside
  frequency to catch substitution gaming.
- **Level 5, Orchestrate:** Deployment frequency directly informs platform
  investment prioritization, and the organization can point to specific
  process changes that measurably improved frequency without degrading
  stability.

## Ideas for discussion

1. What is the biggest single process bottleneck standing between a finished change and production for our slowest team?
2. Has our deployment frequency ever risen while our average deploy size shrank suspiciously?
3. Do we compare deployment frequency fairly across teams with genuinely different risk profiles?
4. Is deployment frequency ever celebrated in a review without its paired change failure rate?
5. What would it take to move our slowest team's deployment frequency up by an order of magnitude, safely?

## Key takeaways

- Deployment frequency measures **batch size and process friction**, not
  speed for its own sake; small, frequent deploys are usually lower-risk,
  not higher-risk.
- Count only **successful production releases**, instrumented from the
  pipeline, never self-reported.
- Watch for **substitution gaming** through trivial splitting; track deploy
  size alongside frequency to catch it.
- Investigate low frequency as a **process signal**, not a team judgement,
  and compare fairly across teams with genuinely comparable risk profiles.
- Never report deployment frequency without its guardrail, **change failure
  rate** (chapter 2.4).

## References and further reading

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (the original research on deployment frequency as
  a delivery-performance indicator).
- Google Cloud's DevOps Research and Assessment programme, [dora.dev](https://dora.dev/guides/dora-metrics/) (metric
  definitions and the annual State of DevOps report).
- *Continuous Delivery*, by Jez Humble and David Farley (the engineering
  practices that make frequent, small, safe deployments possible).
- *The DevOps Handbook*, by Gene Kim, Jez Humble, Patrick Debois, and John
  Willis (batch-size reduction as a core delivery-performance lever).
