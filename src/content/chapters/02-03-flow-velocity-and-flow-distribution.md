# 2.3 Flow velocity and flow distribution

## Overview and motivation

**Flow velocity** is the number of flow items (chapter 2.2) completed over
a given period, the Flow Framework's measure of
[throughput](https://en.wikipedia.org/wiki/Throughput). **Flow
distribution** is the proportion of each flow item type, features,
defects, risk, and debt, among the items completed in that same period.
The two metrics are designed to be read together: velocity alone answers
"how much did we ship," and distribution alone answers "what kind of work
was it," but neither question means much without the other. A team can
raise its velocity while its distribution quietly shifts away from
features and toward defect rework, which looks like acceleration on a
velocity chart and is actually a symptom of declining quality.

This pairing is the same discipline chapter 1.2 asks of every metric family
in this book: never report a speed number without the guardrail that shows
what that speed cost. Flow velocity is this part's most direct generalization
of a throughput metric, closer in spirit to deployment frequency (chapter
2.9) than to any other single number in this book, but item-type-aware in a
way deployment frequency never was. Deployment frequency tells you how
often code reaches production; flow velocity, paired with distribution,
tells you how often value reaches production and what kind of value it is.

For large teams running many concurrent value streams, this pairing exposes
a pattern that a single throughput number hides completely: a value stream
whose velocity looks healthy while its distribution has quietly drifted
toward almost pure feature work, silently starving the debt and risk
capacity chapter 2.2 warned needs deliberate protection. Enterprise
organizations comparing throughput across product lines, and government
agencies reporting delivery output to oversight bodies, both need this
pairing to avoid mistaking raw output for genuine, sustainable progress.

## Key principles

- **Velocity without distribution hides what was actually shipped.** A
  rising item count says nothing about whether that count is healthy,
  gamed, or quietly skewed toward the easiest work available.
- **Distribution without velocity hides scale.** A healthy-looking
  percentage split means little if you do not also know how much total
  work it represents.
- **The two metrics must be reported together, always.** This is a direct
  application of chapter 1.2's guardrail-pairing principle to flow data
  specifically.
- **Velocity is exposed to the same substitution gaming as any item-count
  metric.** Splitting hard work into many small, easy items inflates the
  count without delivering proportionally more value.
- **A healthy distribution is context-dependent, not a fixed target.**
  Chapter 2.2 covers this in depth; velocity and distribution should always
  be interpreted against the target that context implies.

## Recommendations

### Report flow velocity as a trend line, never a single-period number

A single period's item count is noisy and easily misread. Plot flow
velocity across several consecutive periods and look at the trend, not any
one data point, the same discipline chapter 1.6 recommends for any
time-series metric prone to natural variation.

### Never present flow velocity without its distribution alongside it

Treat this as a hard rule for any dashboard or report, not a nice-to-have.
A velocity chart shown alone invites exactly the misreading this chapter
opens with: rising throughput that is actually a rising share of rework or
easy feature work crowding out debt and risk capacity. Put both on the
same view, always.

### Weight velocity by size or complexity when item sizes vary widely

Raw item count treats a one-line configuration change and a
multi-week architectural migration as equivalent, which invites the same
substitution gaming this book has already named for deployment frequency
(chapter 2.9): splitting hard work into many small items inflates the count
without delivering proportionally more. Where item sizes vary widely,
weight velocity by a rough size or complexity estimate, or track average
item size alongside the raw count, so a shrinking average size next to a
rising count is visible rather than hidden.

### Watch flow distribution for drift, not just its current snapshot

The most useful signal in flow distribution is rarely this period's exact
percentages; it is the direction of change over several periods. A steady
drift, features climbing while debt and risk quietly shrink, is worth
raising with stakeholders well before it becomes the kind of quality or
security problem chapter 2.2 warns accumulates invisibly under a feature
factory pattern.

### Compare flow velocity across value streams only with genuine care

Two value streams with different item granularity, different team sizes,
or different product phases are not directly comparable on raw velocity
alone, the same fairness problem chapter 2.9 names for deployment frequency
across teams. Use velocity for a value stream's own trend first, and only
attempt cross-value-stream comparison after confirming genuinely comparable
item definitions and granularity.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Raw item-count velocity alone | Simple to compute and explain | Exposed to substitution gaming; hides what kind of value shipped |
| Velocity paired with distribution | Shows both scale and value mix together | Requires disciplined flow-item classification (chapter 2.2) to be meaningful |
| Size-weighted velocity | Resists substitution gaming from item-size splitting | Requires a consistent, agreed sizing method across the team |
| Cross-value-stream velocity comparison | Useful for portfolio-level investment decisions | Easily unfair without confirming genuinely comparable item definitions |

The central tension is **simplicity versus resistance to gaming**. Raw item
count is the easiest number to compute and explain, but it is also the
easiest to inflate by splitting hard work into many small pieces. Resolve
the tension by keeping the primary metric simple, raw velocity paired with
distribution, and reserving size-weighting for value streams where item
sizes are known to vary widely enough that the simple count has become
actively misleading.

## Questions to discuss with your team

1. **When we report flow velocity, is flow distribution always shown
   alongside it, or does velocity sometimes stand alone?** A velocity
   number without its distribution is an incomplete picture by this
   chapter's own central principle. Check your actual dashboards and
   reports for this gap.

2. **Has our average item size changed alongside a rising velocity, and
   would we know if it had?** A shrinking average size next to a climbing
   count is the specific signature of substitution gaming applied to flow
   items. Pull the actual data rather than assuming the pattern is absent.

3. **Have we ever compared our velocity against another team's without
   confirming our item definitions and granularity actually match?** An
   unfair comparison here can pressure a team toward gaming its own numbers
   just to look comparable, echoing the same risk this book already names
   for deployment frequency.

4. **Has our flow distribution drifted in one direction over the last few
   periods, and did anyone decide that deliberately?** A slow drift is easy
   to miss period by period. Plot several periods together and look
   honestly for a trend before assuming the current split is stable.

5. **If someone wanted to inflate our flow velocity without doing more
   real work, what is the easiest way they could do it, and would our
   current reporting catch it?** Walk through the specific mechanics of
   splitting hard items into easy ones, and discuss whether your dashboard
   would actually reveal that pattern.

6. **Do our velocity and distribution numbers ever reach business
   stakeholders together, or does only the velocity headline travel
   upward?** The pairing principle only protects against misreading if both
   halves are actually seen by the people making decisions from the data.

## Sector lens

**Startup.** Flow velocity is usually easy to track informally at this
scale, since the whole team already has a rough sense of throughput. The
useful discipline is pairing it with distribution even informally, so a
founder does not mistake a rising ticket-closure count for genuine feature
progress when the count is actually dominated by early-stage bug fixing.

**Small business.** Track velocity and distribution together from whatever
lightweight tool you already use for flow-item classification (chapter
2.2); no dedicated analytics platform is needed at this scale. The habit of
always viewing them side by side matters more than any tooling
sophistication.

**Enterprise.** Cross-value-stream velocity comparison is tempting at this
scale for portfolio-level prioritization, and it is also where the fairness
risk is greatest, since different product lines legitimately have very
different item granularity. Invest in confirming comparable definitions
before using velocity comparisons to justify investment decisions between
teams.

**Government.** Flow velocity paired with distribution gives a
public-sector technology leader a much stronger evidence base for reporting
delivery output to oversight bodies than raw throughput alone, because it
can show not just how much shipped but that the mix reflects a deliberate,
defensible allocation across new functionality, defect remediation, and
risk management.

## Examples

**Enterprise.** A software vendor's platform team reported steadily rising
flow velocity for three consecutive quarters, a trend leadership
celebrated as accelerating delivery. A closer look at flow distribution,
requested only after a customer escalation about recurring bugs, revealed
that the "features" share of that rising velocity had actually fallen from
70% to 45% over the same period, with defect-fix items filling the gap.
The team had been shipping more items, but a shrinking proportion of them
were new value; the rest was rework the velocity chart alone had
completely obscured.

**Government.** A national statistics agency's data platform team tracked
flow velocity as its primary delivery metric for an annual report to its
oversight board. When a board member asked what proportion of that
velocity represented new public-facing capability, the team discovered it
had never broken the number down by flow-item type and could not answer
directly. The agency subsequently adopted paired velocity-and-distribution
reporting, which revealed that risk and compliance work, driven by a new
data-protection regulation, had legitimately consumed a growing share of
capacity, a defensible allocation the board accepted readily once it was
shown explicitly rather than left implicit in an unexplained velocity dip.

## Business case: motivations, ROI, and TCO

The return on pairing velocity with distribution is a more honest, more
defensible account of delivery output than either number provides alone.
The software vendor example above, discovering that rising velocity
actually reflected falling feature output, is exactly the kind of
misreading this pairing prevents, and catching that pattern early is far
cheaper than discovering it only after a customer-facing quality problem
forces the question.

The total cost of ownership is minimal once flow-item classification
(chapter 2.2) is already in place: distribution is a straightforward
aggregation of already-classified items, and the discipline of showing both
metrics together is a reporting convention, not a technical investment.
Most of the cost of this chapter's recommendations was already paid when
the organization adopted honest flow-item classification in the first
place.

## Anti-patterns and pitfalls

- **Reporting flow velocity without distribution:** the gaming vector at
  the heart of this chapter. A team under delivery pressure can raise item
  count by preferring small, easy feature work and avoiding harder debt,
  risk, or defect items, or by splitting large items into many small ones,
  and a velocity chart shown alone will read as acceleration rather than
  the actual shift in what is being delivered. The guardrail is the same
  pairing discipline chapter 1.2 asks for throughout this book: never show
  velocity without distribution, and periodically check average item size
  alongside the count to catch splitting specifically.
- **Comparing velocity across value streams with different item
  granularity:** produces an unfair, misleading comparison.
- **Treating a single period's distribution as stable:** misses a slow,
  meaningful drift that only a trend view reveals.
- **Letting only the velocity headline reach business stakeholders:**
  forfeits the pairing principle's entire protective value.
- **Ignoring average item size while celebrating rising velocity:** misses
  the specific signature of substitution gaming.
- **Setting a velocity target with no reference to distribution:** invites
  exactly the gaming this chapter warns against by name.

## Maturity model

- **Level 1, Initiate:** Flow velocity, if tracked, is reported alone with
  no distribution data, and no one has checked for substitution gaming.
- **Level 2, Develop:** Some teams track distribution, but it is not
  consistently paired with velocity in reporting or reviewed as a trend.
- **Level 3, Standardize:** Velocity and distribution are always reported
  together, viewed as trends, with average item size monitored to catch
  substitution gaming.
- **Level 4, Manage:** Distribution drift is investigated proactively
  before it becomes a quality or security problem, and cross-value-stream
  velocity comparisons are only made after confirming genuinely comparable
  item definitions.
- **Level 5, Orchestrate:** Velocity and distribution directly inform
  portfolio-level investment decisions, and the organization can point to
  specific cases where distribution drift was caught and corrected before
  it caused a visible failure.

## Ideas for discussion

1. Does our flow velocity reporting always include distribution, or have we ever shown one without the other?
2. Has our average flow-item size shifted alongside a change in velocity recently?
3. Would we know if our flow distribution had drifted steadily over the last few quarters?
4. What would it take for someone to inflate our velocity without delivering more real value, and would we notice?

## Key takeaways

- **Flow velocity** measures throughput; **flow distribution** measures
  what kind of work that throughput represents. Report them together,
  always.
- This pairing is a direct application of chapter 1.2's **guardrail
  principle**: never show a speed number without the context of what it
  cost.
- The chapter's central gaming vector is **reporting velocity alone**,
  which can hide a shift toward easy feature work or item-splitting that
  inflates count without delivering proportional value.
- **Distribution drift** is most visible as a trend across several
  periods, not in any single period's snapshot.
- **Cross-value-stream velocity comparisons** need genuinely comparable
  item definitions to be fair; without that, they mislead more than they
  inform.

## References and further reading

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
