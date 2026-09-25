# 1.2 Goodhart's law and the psychology of metrics

## Overview and motivation

[Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law), named for
the economist Charles Goodhart, is usually stated as: when a measure becomes
a target, it ceases to be a good measure. Goodhart's original 1975
observation was about monetary policy, but the anthropologist Marilyn
Strathern's later restatement is the version software teams actually need,
and it is the sentence this entire book is built on. Every metric in every
later chapter, deployment frequency, test coverage, satisfaction scores,
carries this risk, and every recommendation in this book is, in some form, a
strategy for managing it.

The mechanism is not mysterious. People respond to incentives, and a metric
attached to a reward, a review, or a reputation is an incentive whether
anyone intended it as one. Once a team knows "deployment frequency" is being
watched, the cheapest way to move that number is not always the intended
one: split one meaningful change into five trivial deploys, and the number
goes up while nothing real improved. This is not a story about bad actors.
Ordinary, well-meaning engineers respond exactly this way to badly designed
incentives, because the incentive, not the intent behind it, is what shapes
behaviour under pressure.

For large organizations the stakes are higher because the distance between
the metric's designer and the person whose behaviour it shapes grows with
scale. A team lead who builds a metric for their own eight-person team can
watch for gaming directly and correct course quickly. A metric rolled out
across a six-hundred-person division, or published in a government
performance report read by a legislature, travels through layers of people
who never met its author and have every reason to treat the letter of the
metric as the goal. The distortion compounds with distance, which is exactly
why this chapter, not a later one, is where the book puts its center of
gravity.

## Key principles

- **Assume every incentivized metric will be gamed.** Design against it from
  the first version, not after the distortion is discovered.
- **The gaming is rational, not malicious.** People are responding sensibly
  to the incentive you built; blaming them for it fixes nothing.
- **Distance from the metric's owner increases distortion risk.** The
  further a number travels from the person who understands its intent, the
  more it becomes the letter of the rule rather than the spirit.
- **Ratios and ranges resist gaming better than raw counts.** A raw count
  rewards volume; a well-chosen ratio rewards the actual behaviour you want.
- **A guardrail is not optional on an incentivized metric.** Every metric you
  attach a reward to needs a paired counter-metric that must not degrade.

## Recommendations

### Classify every metric by incentive exposure

Before publishing a metric anywhere visible, ask directly: does anyone's
reward, review, reputation, or budget depend on this number moving in a
particular direction? If yes, it is an incentivized metric and needs a
guardrail (below) before it goes live. If no, it is a diagnostic metric
(chapter 1.1) and carries lower gaming risk, though never zero, because
people can still shape a number they merely expect to be judged on later even
without a formal incentive attached today.

### Prefer ratios, rates, and cohorts over raw counts

A raw count like "tickets closed" is gameable by doing more of something
low-value. A ratio like "percentage of tickets resolved on first contact"
rewards the underlying behaviour instead of the volume. A **cohort**, a group
defined by a shared starting point such as all deploys in a given week,
prevents a bad recent trend from hiding inside a flattering long-run
aggregate. Wherever you are choosing between a count and a rate that captures
the same underlying behaviour, choose the rate.

### Pair every incentivized metric with a guardrail

A **guardrail metric** is a paired counter-metric that must not degrade while
the primary metric improves. Deployment frequency pairs with change failure
rate; lead time pairs with defect escape rate; a support team's handle time
pairs with customer satisfaction. The guardrail is what makes cheap gaming
visibly expensive: a team that improves the incentivized number by degrading
the guardrail gets caught by the pairing, not by luck. Design the guardrail
at the same time as the primary metric, never as an afterthought once gaming
is already discovered.

### Watch for the four classic gaming patterns

Distortion under Goodhart's law tends to fall into a small number of
recognizable shapes. **Threshold gaming** optimizes right up to a target and
stops (a 95% test-coverage target produces trivial tests to reach exactly
95%, not genuine coverage). **Definition gaming** changes what counts rather
than what happens (redefining "resolved" to exclude hard cases). **Timing
gaming** shifts when work is recorded rather than when it occurred (batching
deploys just before a reporting window closes). **Substitution gaming**
delivers the letter of the metric while abandoning its intent (splitting one
real change into many trivial ones to inflate deployment frequency). Naming
these patterns to your team, explicitly, makes them far easier to spot when
they appear in your own numbers.

### Separate measurement from reward wherever you can

The strongest guardrail of all is structural: decouple the metric from
individual reward. A metric used purely to understand a system, with no
person's pay, rating, or standing riding on its direction, faces far weaker
gaming pressure than one tied to an evaluation. This is why chapter 1.1's
diagnostic-versus-evaluative distinction matters so much in practice: keeping
a metric diagnostic is often cheaper and more effective than any amount of
guardrail engineering applied after the fact.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Raw counts | Simple to compute and explain | Highly gameable by volume |
| Ratios and rates | Reward the right behaviour, resist volume gaming | Can hide a shrinking denominator problem |
| Guardrail pairing | Makes cheap gaming visibly expensive | Doubles the metrics to define, own, and maintain |
| Diagnostic-only (no individual reward) | Lowest gaming pressure of any option | Weaker direct motivational lever for leadership to pull |
| Heavily incentivized metrics | Strong, fast behavioural response | High distortion risk, often within one reporting cycle |

The central tension is **motivational power versus distortion risk**. The
metrics that move behaviour fastest, tying a number directly to reward, are
exactly the ones most exposed to Goodhart's law. Resolve the tension by
reserving strong incentives for outcome metrics that are genuinely hard to
game cheaply, and by pairing anything you do incentivize with a guardrail
designed at the same time, not bolted on after the first distortion appears.

## Questions to discuss with your team

1. **For each metric anyone's reward depends on, what is the cheapest way to
   game it, and would we catch that gaming today?** Sit down and deliberately
   design the exploit for every incentivized number on your dashboard: how
   would a rational, well-meaning team make this look good without doing the
   underlying work? If you cannot name a way you would catch that gaming,
   you are not ready to incentivize the metric yet. This exercise is
   uncomfortable and that discomfort is the point.

2. **Which of our current metrics have already drifted into one of the four
   gaming patterns, threshold, definition, timing, or substitution gaming,
   without anyone calling it out?** Distortion rarely announces itself; it
   shows up as a number that looks great while the underlying complaints,
   incidents, or customer feedback tell a different story. Walk your
   dashboard against each pattern by name and be honest about matches.

3. **Does every incentivized metric on our dashboard have a paired
   guardrail, and was that guardrail designed at the same time as the
   metric?** A guardrail added only after gaming is discovered is a repair,
   not a design choice, and it usually arrives too late to prevent the first
   round of damage to trust. Audit your incentivized metrics for this pairing
   specifically.

4. **How far does this metric travel from the person who understands its
   intent before it reaches the person whose behaviour it shapes?** A metric
   built by a platform team and consumed three management layers away, or
   published in a public report read by people who never saw the
   instrumentation, is far more exposed to letter-not-spirit gaming than one
   a team designed for itself. Map that distance for your most consequential
   metrics.

5. **Have we ever removed an incentive from a metric after discovering it was
   being gamed, and what did that cost us in trust to fix?** Organizations
   often discover Goodhart's law the hard way, after a quarter or a year of
   distorted behaviour, and the repair costs more than prevention would have.
   Bring a real incident, if you have one, and extract the lesson explicitly
   rather than quietly moving on.

6. **Where have we assumed gaming was a personal integrity problem rather
   than a rational response to a badly designed incentive?** Blaming
   individuals for responding predictably to an incentive you built rarely
   fixes anything and often damages trust further. Reframe every gaming
   incident you can recall as a design problem in the metric, not a
   character problem in the person, and ask what redesign would have
   prevented it.

## Sector lens

**Startup.** With a tiny team, the fastest guardrail is direct conversation:
everyone can see a number and immediately ask "wait, why did that jump."
The real risk is a founder attaching a metric to fundraising narrative
(growth at all costs) without a paired guardrail, because outside investors
apply exactly the kind of distant, high-stakes pressure that makes gaming
attractive.

**Small business.** Off-the-shelf tools often ship default dashboards built
around counts (tickets closed, calls handled) because counts are easy to
compute. Actively convert these to rates wherever the tool allows it, and
resist tying any single number to a bonus or a review without first
identifying its guardrail.

**Enterprise.** Distance is the dominant risk: a metric designed by a
platform team for internal diagnosis gets picked up three layers of
management later and turned into a KPI nobody who built it would recognize.
Govern this explicitly (chapter 1.4): require a documented guardrail before
any metric is approved for use in a performance review or an executive
scorecard.

**Government.** Published performance measures face the strongest gaming
pressure of any category in this book, because a missed target can carry
budget or political consequences. Audit the definition itself on a fixed
cadence, not just the number, since the classic public-sector gaming pattern
is quietly redefining who counts (a waiting list "resolved" by reclassifying
who is waiting) rather than improving the underlying service.

## Examples

**Enterprise.** A retail technology company set a target of 99% automated
test coverage across all services, tied to a team-level quality score used
in quarterly reviews. Within two quarters, coverage hit 99%, and the
incident rate rose. An audit found teams writing trivial tests, asserting
that a function returned without throwing, purely to satisfy the coverage
tool, while genuine edge-case testing had not improved at all. The fix
replaced the raw coverage target with a paired metric: coverage plus a
mutation-testing score (chapter 4.2) that measures whether tests actually
catch injected faults, which is far harder to game cheaply.

**Government.** A state's unemployment-insurance agency was measured on
median days to first payment, published to its legislature. Under pressure
to hit a target, one regional office began quietly reclassifying
harder-to-process claims as "incomplete" and excluding them from the
denominator, which made the published median look excellent while some
claimants waited far longer than the report suggested. An independent audit
of the definition itself, not just the number, uncovered the practice. The
agency's fix froze the definition, published the exclusion criteria publicly,
and added a guardrail metric tracking the incomplete-claims rate itself, so
that a spike in reclassification would now be visible rather than hidden.

## Business case: motivations, ROI, and TCO

The return on taking Goodhart's law seriously is avoided rework. An
organization that designs guardrails up front spends a modest amount of extra
effort defining a second metric alongside the first. An organization that
skips this step often spends a full quarter or more of misdirected effort
before the distortion surfaces, followed by the much harder cost of undoing
gamed behaviour and rebuilding trust in the number afterward. The retail
example above is typical: cheap to prevent, expensive to repair.

The total cost of ownership of a guardrail is not free: it is a second metric
to define, instrument, and review. But that cost is small and fixed compared
to the unbounded cost of an incentive that quietly rewards the wrong
behaviour for months before anyone notices. Every chapter after this one
prices that trade-off in, which is why guardrail pairing appears as a
recommendation throughout the rest of this book rather than only here.

## Anti-patterns and pitfalls

- **Publishing an incentivized metric with no guardrail:** the single most
  common root cause of a distorted dashboard in this book.
- **Treating gaming as a personal failing:** blames individuals for a
  rational response to a badly designed incentive, and fixes nothing.
- **Auditing the number but never the definition:** the classic
  public-sector failure mode, where the metric looks fine because who counts
  quietly changed.
- **Assuming a metric that worked as diagnostic will stay safe once it
  becomes evaluative:** the exposure changes the moment reward attaches,
  even if nothing else about the metric changes.
- **Designing the guardrail only after the first gaming incident:** a repair
  that arrives after the damage to trust is already done.
- **Ignoring distance:** assuming a metric will be read the way its designer
  intended once it travels several management layers or a public report away
  from them.

## Maturity model

- **Level 1, Initiate:** Metrics are incentivized ad hoc, with no
  consideration of gaming risk, and distortion is discovered only after
  quality or trust visibly suffers.
- **Level 2, Develop:** Some teams recognize gaming after the fact and adjust
  informally, but there is no consistent practice of designing guardrails
  in advance.
- **Level 3, Standardize:** Every incentivized metric organization-wide
  requires a documented guardrail before approval, and the four gaming
  patterns are named and taught.
- **Level 4, Manage:** Gaming risk is actively monitored: definitions are
  periodically audited, guardrail pairs are reviewed for whether they still
  catch distortion, and incidents of gaming are tracked as a metric in their
  own right.
- **Level 5, Orchestrate:** The organization treats Goodhart's law as a
  standing design constraint, reviewed automatically whenever a new metric is
  proposed, and it can point to specific redesigns that prevented distortion
  before it happened rather than only after.

## Ideas for discussion

1. What is the most consequential metric in our organization that has no guardrail today?
2. Have we ever seen a number improve while the underlying reality got worse?
3. Who would notice if a definition behind one of our public metrics quietly changed?
4. Which of the four gaming patterns (threshold, definition, timing, substitution) is our organization most prone to?
5. What would it cost us, in trust, to discover a major metric had been gamed for a year?

## Key takeaways

- **Goodhart's law:** a measure that becomes a target stops being a good
  measure, and this governs every metric in this book.
- Gaming is a **rational response to incentive**, not a character flaw; fix
  the incentive design, not the people.
- Prefer **ratios, rates, and cohorts** over raw counts wherever they capture
  the same behaviour.
- Every incentivized metric needs a **guardrail**, designed at the same time,
  not added after distortion is discovered.
- Watch for the four gaming patterns by name: **threshold, definition,
  timing, and substitution gaming**.
- **Distance** between a metric's designer and the person whose behaviour it
  shapes increases distortion risk; keep that distance short where you can.

## References and further reading

- Goodhart, C. A. E., "Problems of Monetary Management: The UK Experience"
  (1975): the origin of Goodhart's law.
- Strathern, Marilyn, "'Improving Ratings': Audit in the British University
  System" (1997): the widely cited restatement, "when a measure becomes a
  target, it ceases to be a good measure."
- *Seeing Like a State*, by James C. Scott (how legible metrics distort the
  systems they measure, at the scale of nations).
- *The Tyranny of Metrics*, by Jerry Z. Muller (a book-length treatment of
  metric fixation and its costs across many professions).
- *Lean Analytics*, by Alistair Croll and Benjamin Yoskovitz (vanity versus
  actionable metrics, and guardrail design in a startup context).
- U.S. Government Accountability Office (GAO) guidance on performance
  measurement and the GPRA Modernization Act: public-sector performance
  reporting and gaming risk.
