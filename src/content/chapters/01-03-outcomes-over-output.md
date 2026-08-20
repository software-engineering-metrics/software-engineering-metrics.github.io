# 1.3 Outcomes over output: choosing what to measure

## Overview and motivation

Every engineering metric falls into one of three categories, and confusing
them is the second most common failure mode in this book, after ignoring
[Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) entirely. An **input metric** measures effort spent: engineer
hours, dollars deployed, story points committed. An **output metric**
measures what the system produced: features shipped, pull requests merged,
tickets closed. An **outcome metric** measures the change that actually
mattered: revenue retained, incidents avoided, time saved for a user. Teams
gravitate toward inputs and outputs because they are easy to count and fully
within a team's control. The value, almost always, lives in outcomes, which
are slower to appear, noisier to measure, and harder to attribute to any one
team's work.

This chapter is about resisting that gravity deliberately. A dashboard built
entirely from inputs and outputs can look impressively busy while producing
no real value at all: a team can ship dozens of features nobody uses, close
hundreds of tickets that reopen a week later, or hit every story-point
estimate while the product's actual outcomes, retention, satisfaction,
revenue, stay flat or decline. None of that busyness shows up as a problem on
an output-only dashboard, because output-only dashboards are not built to see
it.

At enterprise and government scale, this distinction determines whether
leadership can tell the difference between a team that is productive and a
team that is merely active. A division can post excellent output numbers for
years, features shipped, sprints closed, while the outcome a funder or a
legislature actually cares about, retained revenue, reduced citizen wait
times, quietly erodes underneath. "We delivered the roadmap" is not the same
claim as "the roadmap made things better," and only an outcome-weighted
metric set can tell the two apart.

## Key principles

- **Inputs and outputs are proxies; outcomes are the thing itself.** Weight
  your metric set toward outcomes wherever you can reach them.
- **Ease of measurement is not a reason to measure something.** The
  easiest-to-count things are usually inputs and outputs, not because they
  matter most but because they are mechanically simple to capture.
- **Attribution gets harder as you move toward outcomes.** Accept that
  trade-off deliberately rather than retreating to outputs because outcomes
  are harder to attribute.
- **A team can control its inputs and outputs but only influence outcomes.**
  Design accountability accordingly: hold teams responsible for what they
  can actually control, and track outcomes as shared, cross-team signals.
- **A single north-star outcome, with a small set of drivers, beats a wall of
  output tiles.** Coverage should come from structure, not from sheer
  dashboard volume.

## Recommendations

### Classify every metric before you adopt it

For any candidate metric, ask which of the three categories it falls into.
"Pull requests merged per week" is an output. "Percentage of merged pull
requests that caused a production incident within a week" is closer to an
outcome, because it measures a consequence rather than a volume. This
classification takes thirty seconds and should be mandatory before a metric
is added to any team or organizational dashboard, because it is the fastest
way to catch a dashboard quietly filling up with easy-to-count outputs while
believing it measures value.

### Build a metric tree under a single outcome

Do not track a flat list. Arrange metrics as a **metric tree** (sometimes
called a KPI tree): a top outcome metric broken down into the drivers that
causally or mathematically feed it, down to the operational output and input
measures individual teams actually own. When the top outcome moves, the tree
tells you which lower-level driver to investigate, turning "the number is
down" into "this specific step in the pipeline is the cause." Name a single
**north-star metric** at the top wherever your domain supports one: the
measure that best captures the value delivered, deployment frequency paired
with change failure rate for a platform team, or weekly active use of a core
feature for a product team.

### Weight outcomes in review, not just on the dashboard

A metric tree is only as good as how it gets used in practice. In sprint
reviews, quarterly business reviews, and leadership updates, lead with the
outcome-level number and use the output and input metrics beneath it only to
explain movement, not to substitute for it. A team that reports "we closed
40 tickets this sprint" without any outcome context has told you nothing
about whether the work mattered; a team that reports "escaped defects fell
30% and here is the testing investment that drove it" has told you something
real.

### Accept slower feedback for outcome metrics, and pair them with faster
leading indicators

Outcome metrics are often lagging: they confirm a result after enough time
has passed to be sure. That lag is a genuine cost, since it delays learning.
Pair every outcome metric with at least one leading indicator, a metric that
moves earlier and predicts the outcome, so a team can steer before the slow,
authoritative number finally lands. Deployment frequency is a leading
indicator for delivery outcomes; a rising defect-escape trend is a leading
indicator for a coming reliability outcome. Use leading indicators to act
early and lagging outcome metrics to confirm you were right.

## Trade-offs: pros and cons

| Category | Pros | Cons |
| --- | --- | --- |
| Input metrics | Fully within team control, easy to count | Weakest link to actual value; easy to game by volume |
| Output metrics | Easy to count, clear ownership, fast feedback | Rewards activity over impact; can rise while value falls |
| Outcome metrics | Directly reflect what matters; hard to game cheaply | Slow, noisy, and hard to attribute to a single team |
| Metric tree structure | Connects daily work to strategic value; aids diagnosis | Requires real analytical work to build and maintain correctly |

The central tension is **controllability versus value**. Inputs and outputs
are fully within a team's control, which makes them tempting to hold teams
accountable for; outcomes carry the value but are only partially within any
single team's influence, since a good feature can still fail for reasons
outside engineering entirely. Resolve this by holding teams accountable for
the inputs and outputs they fully control, while tracking outcomes as shared
signals the whole organization owns together, connected through an explicit
metric tree rather than left as an unexplained gap between "we did the work"
and "did it help."

## Questions to discuss with your team

1. **For each metric on our current dashboard, is it an input, an output, or
   an outcome, and does the balance across the three tell an honest story?**
   Most dashboards, audited honestly, turn out to be almost entirely inputs
   and outputs, because those are what tooling reports by default. Classify
   every tile and count the split; a dashboard with no outcome tiles at all
   is measuring activity and presenting it as performance.

2. **What is our single north-star outcome metric, and can we trace it down
   through a metric tree to something each team actually owns?** Without
   this connective structure, a moving top-line number gives no clue where
   to look, and teams cannot see how their daily output metrics connect to
   anything that matters. Bring your current top-line metric, if you have
   one, and try to build the tree live.

3. **Where are we holding a team accountable for an outcome it can only
   influence, not control?** This is a common source of frustration and
   quiet gaming, because a team punished for an outcome shaped by factors
   outside its control has every incentive to protect itself rather than
   improve the real system. Identify these mismatches and either adjust the
   accountability or add the missing levers.

4. **What leading indicator do we have for each of our lagging outcome
   metrics, and how far in advance does it predict them?** A purely lagging
   metric set means you only find out you were wrong after it is too late to
   change course cheaply. Bring your outcome metrics and check whether a
   genuine leading indicator exists for each, or whether you are flying
   blind between reporting periods.

5. **How much of what we celebrate in reviews and retrospectives is output
   ("we shipped X") versus outcome ("X changed Y for the better")?** The
   language teams use to celebrate work shapes what they optimize for over
   time, often more than the dashboard does. Listen to your own review
   meetings for a sprint and count the split honestly.

6. **If our top output metrics doubled overnight, would our outcome metrics
   necessarily improve, or could they get worse?** This thought experiment
   exposes output metrics that have become disconnected from, or even
   actively opposed to, the outcomes they were meant to serve, such as
   feature volume that increases maintenance burden faster than it increases
   adoption.

## Sector lens

**Startup.** Pick one outcome, typically a proxy for whether customers keep
getting value, such as weekly retention or activation, and treat it as your
north-star from day one. Resist the pull toward output vanity metrics like
cumulative feature count, which are tempting to report to investors but tell
you nothing about whether the product actually works for anyone.

**Small business.** Your existing tools, point-of-sale, support desk,
analytics, usually already report an outcome-adjacent number, repeat
purchase rate, ticket reopen rate. Use those rather than building custom
outcome instrumentation you do not have the capacity to maintain, and resist
the temptation to fall back on raw activity counts just because they are the
default view.

**Enterprise.** The dominant failure mode is a portfolio of teams each
optimizing local output metrics that do not sum to any coherent
organizational outcome. Build the metric tree deliberately, standardize
outcome definitions across business units, and require every major
initiative to state its outcome hypothesis before funding, not just its
output plan.

**Government.** Oversight bodies and the public are increasingly literate in
the difference between "delivered the statement of work" and "improved the
outcome," and an output-only report invites exactly that scrutiny. Define
success as a citizen-facing outcome (wait time, error rate, satisfaction)
wherever legally and practically possible, and be explicit when only an
output metric is available and why.

## Examples

**Enterprise.** A logistics company's engineering division reported a
consistently rising count of "features shipped per quarter" for two years,
while the company's core customer satisfaction score quietly flattened. A
new VP of engineering built a metric tree rooted in on-time delivery rate,
the actual business outcome, broken down through hub dwell time and
last-mile success down to team-level engineering outputs. Within one
reporting cycle it became clear that several high-output teams were shipping
features in areas with no measurable effect on the north-star metric, and
investment shifted toward the drivers the tree showed actually mattered.

**Government.** A national health service's digital team had reported
"modules delivered against the statement of work" for a multi-year patient
records modernization programme. An oversight committee asked a different
question: did clinicians spend less time on administrative data entry. The
team retrofitted an outcome metric, median minutes of administrative time
per patient encounter, and found that early modules had actually increased
this time due to workflow friction, despite hitting every delivery milestone.
Later modules were redesigned around the outcome metric directly, and the
programme's public reporting shifted from a delivery checklist to a
before-and-after outcome comparison.

## Business case: motivations, ROI, and TCO

The return on outcome weighting is avoided waste: an organization that can
see, in near real time, that a stream of output is not moving any outcome
can redirect that investment before a full budget cycle is spent finding out
the hard way. The dominant hidden cost in large engineering organizations is
not underinvestment, it is well-executed work that never should have been
funded because it was disconnected from any real outcome, and an output-only
dashboard cannot see that disconnection at all.

The total cost of ownership of outcome measurement is higher than output
measurement, because outcomes are genuinely harder to define, attribute, and
instrument, and building a real metric tree takes deliberate analytical
effort rather than accepting whatever a tool exports by default. That cost
is worth paying for any initiative above a modest size, because the
alternative, discovering after the fact that a year of confidently reported
output produced no real value, costs far more than the up-front analysis.

## Anti-patterns and pitfalls

- **A dashboard that is entirely output tiles:** measures activity and
  presents it as performance.
- **Holding a team fully accountable for an outcome it cannot control:**
  breeds frustration and invites gaming to protect against unfair blame.
- **No leading indicator for a lagging outcome:** the team learns it was
  wrong only after it is too expensive to fix.
- **Celebrating output language in reviews while claiming to value
  outcomes:** the stated priority and the lived incentive diverge, and the
  lived incentive wins.
- **A flat list of metrics with no tree structure:** a moving top-line number
  gives no clue where to look.
- **Treating outcome measurement as too hard to attempt:** defaults an
  organization permanently back to easy-to-count inputs and outputs.

## Maturity model

- **Level 1, Initiate:** Metrics are almost entirely inputs and outputs;
  no one can name the organization's outcome metrics or trace a line to
  them.
- **Level 2, Develop:** Some teams have identified outcome metrics
  informally, but there is no shared metric tree and no consistent leading
  indicators.
- **Level 3, Standardize:** A documented metric tree connects a shared
  north-star outcome down to team-owned outputs, applied consistently across
  the organization.
- **Level 4, Manage:** Leading and lagging indicators are both tracked and
  reviewed together; teams are held accountable only for what they control,
  and outcome measurement is actively resourced.
- **Level 5, Orchestrate:** Outcome measurement is integrated into funding
  and prioritization decisions directly; the organization routinely redirects
  investment away from high-output, low-outcome work before a full budget
  cycle elapses.

## Ideas for discussion

1. Name our organization's single most important outcome metric. Can everyone agree on it?
2. What is our biggest current investment in output that we cannot yet trace to any outcome?
3. Where does our accountability structure punish a team for an outcome it cannot control?
4. What would our dashboard look like if we deleted every pure output tile?
5. How long does it currently take us to learn whether a shipped feature actually helped?

## Key takeaways

- Classify every metric as **input, output, or outcome**, and weight your
  set deliberately toward outcomes.
- Build a **metric tree** under a single **north-star metric** so a moving
  top-line number points to a cause.
- Hold teams accountable for what they **control** (inputs, outputs); track
  outcomes as shared signals the whole organization influences together.
- Pair every lagging **outcome metric** with a faster **leading indicator**
  so you can steer before the slow number confirms you were wrong.
- An output-only dashboard measures activity and calls it performance; treat
  that as a warning sign, not a comfort.

## References and further reading

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (outcome-based delivery measurement).
- *Lean Analytics*, by Alistair Croll and Benjamin Yoskovitz (the One Metric
  That Matters and the input/output/outcome distinction in a startup
  context).
- *Measure What Matters*, by John Doerr (outcome-oriented goal setting and
  the OKR framework's emphasis on results over activity).
- *The Lean Startup*, by Eric Ries (actionable versus vanity metrics and
  outcome validation).
- *Key Performance Indicators*, by David Parmenter (building a KPI or metric
  tree structure under a north-star measure).
