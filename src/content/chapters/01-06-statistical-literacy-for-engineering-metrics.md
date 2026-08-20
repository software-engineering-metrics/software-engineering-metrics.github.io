# 1.6 Statistical literacy for engineering metrics

## Overview and motivation

You do not need a statistics degree to run a metrics programme well, but you
do need to avoid a small number of specific, common mistakes that make
otherwise well-governed, well-instrumented metrics actively misleading. A
team can do everything right, name a clear decision, avoid Goodhart's law,
weight toward outcomes, govern ownership, instrument reliably, and still draw
the wrong conclusion because it read an average where it needed a
percentile, mistook noise for a trend, or fell for a coincidence dressed up
as a cause. This chapter is the minimum statistical judgement this book
assumes every later chapter's reader already has.

The core problem is that engineering metrics are usually noisy, skewed, and
small-sample by the standards of formal statistics. A single team's weekly
deploy count is not a smooth bell curve; it is a handful of data points with
occasional large outliers (a big release, an incident-driven rollback
spree). Applying naive intuitions built for large, well-behaved datasets to
this kind of data produces confident, wrong conclusions on a regular basis.
Learning to spot when a number is too noisy to trust, when an average is
lying to you, and when two things moving together says nothing about
causation is not optional rigor, it is what separates a metrics programme
that teaches an organization something true from one that teaches it
something plausible-sounding and false.

At enterprise and government scale, statistical mistakes compound because a
misleading conclusion, once accepted by leadership, gets acted on across many
teams before anyone thinks to re-examine the underlying analysis. A
statistically naive comparison between two divisions, or between before and
after a major reorganization, can shape resourcing decisions for years based
on nothing more than noise or a confound nobody controlled for. This chapter
exists to make that failure less likely.

## Key principles

- **A median or percentile usually tells you more than an average.**
  Engineering data is routinely skewed by outliers that averages absorb and
  percentiles do not.
- **Small samples produce noisy numbers.** A percentage computed from a
  handful of events swings wildly for reasons that have nothing to do with
  real change.
- **Regression to the mean fools people constantly.** An unusually good or
  bad reading tends to be followed by a more normal one, with or without any
  intervention.
- **Correlation is not causation, and confounding variables are everywhere.**
  Two metrics moving together can share a hidden third cause instead of one
  driving the other.
- **A [control chart](https://en.wikipedia.org/wiki/Control_chart) beats a single before-and-after comparison.** Seeing the
  normal range of variation is what lets you tell a real shift from noise.

## Recommendations

### Default to medians and percentiles for skewed data

Engineering time-based metrics, lead time, incident recovery time, response
latency, are almost always right-skewed: most values cluster low, with a
long tail of occasional large outliers. An average pulled by that tail can
paint a picture no typical case actually looks like. Report the **median**
(the middle value, where half the observations are above and half below)
alongside the **90th** or **95th percentile** (the value below which 90% or
95% of observations fall), which together show both the typical case and the
worst-case tail a team actually experiences. The KPI chapter of the sibling
`software-engineering-guide` book, and every delivery metric chapter in
Part 2 of this book, assumes this habit throughout.

### Know when a sample is too small to trust

A change failure rate computed from three deploys in a slow week is not a
meaningful signal; a single failure moves the percentage from 0% to 33%
overnight for reasons that may have nothing to do with underlying risk.
Before reacting to a percentage-based metric, check the underlying count.
As a practical rule of thumb, treat a rate computed from fewer than roughly
twenty to thirty underlying events as noisy and requiring a longer
observation window before drawing a conclusion, and say so explicitly on the
dashboard rather than presenting a volatile small-sample percentage with the
same confidence as a stable large-sample one.

### Watch for regression to the mean before crediting an intervention

If a team's worst-ever week for incidents is followed by leadership
attention and a subsequent improvement, it is tempting to credit the
intervention. Often, some of that improvement would have happened anyway,
because an unusually extreme reading tends to be followed by a more typical
one purely as a statistical artefact, a phenomenon called **regression to
the mean**. Guard against this by comparing against a longer historical
baseline rather than the single extreme data point that triggered attention,
and by being appropriately humble about how much of any observed improvement
to attribute to a specific action.

### Look for confounding variables before claiming a metric caused an
outcome

When two metrics move together, deployment frequency rising alongside
customer satisfaction, resist the reflex to claim one caused the other
before considering a **confounding variable**: a hidden third factor driving
both. A new feature launch might independently boost both deploy frequency
(more follow-up fixes) and satisfaction (the feature itself), with no causal
link between the two metrics at all. Before presenting a correlation as
evidence of causation, actively ask what else changed at the same time that
could explain both movements.

### Use a control chart, not a single before-and-after snapshot

A **control chart** plots a metric over time with its normal range of
variation shown explicitly, typically as bands around a central average.
This lets you distinguish a genuine shift, a data point or sustained run
outside the normal range, from ordinary noise that a single before-and-after
comparison cannot tell apart. Before declaring "the number improved after
the change," plot enough historical data to see what normal variation looks
like, and check whether the post-change reading actually falls outside it.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Averages | Simple, familiar, easy to compute | Distorted by outliers on skewed engineering data |
| Medians and percentiles | Robust to outliers, show typical case and tail together | Slightly less familiar to non-technical audiences |
| Single before-and-after comparison | Fast, intuitive, easy to present | Vulnerable to regression to the mean and to noise |
| Control charts and longer baselines | Distinguishes real shifts from noise reliably | Requires more historical data and more explanation to a non-technical audience |

The central tension is **simplicity versus rigor**. Averages and single
before-and-after comparisons are easier to compute and explain, which is
exactly why they dominate casual reporting, but they are also the two
techniques most likely to produce a confident, wrong conclusion on the kind
of noisy, skewed data this book's metrics generate. Resolve the tension by
defaulting to the more rigorous techniques, medians, percentiles, and control
charts, for any decision with real consequence, and reserving the simpler
techniques for low-stakes, exploratory looks where a mistaken read costs
little.

## Questions to discuss with your team

1. **Which of our dashboard tiles report an average where a median or
   percentile would tell a truer story?** Time-based engineering metrics are
   almost always skewed, and an average on skewed data can look fine while
   the typical case, or the worst-case tail, tells a different story
   entirely. Audit your time-based tiles specifically for this substitution.

2. **How small is the underlying sample behind our percentage-based
   metrics, and do we treat a metric from ten events with the same
   confidence as one from a thousand?** A volatile small-sample rate
   presented without its underlying count invites overreaction to noise.
   Check your change-failure-rate and similar percentage tiles for this gap.

3. **Have we ever credited an intervention for an improvement that
   regression to the mean would have produced anyway?** This is one of the
   easiest statistical mistakes to make and one of the hardest to notice
   after the fact, because the intervention and the improvement really did
   happen in that order. Look back at a recent "we fixed it" story and ask
   honestly whether the baseline comparison was long enough to rule this out.

4. **Where have we assumed one metric caused another without checking for a
   confounding variable?** Two things moving together is common; one causing
   the other is a stronger claim that needs more evidence. Pick a
   correlation your team currently believes in and try to name a plausible
   confound that would explain it without any causal link at all.

5. **Do we have enough historical data to know what normal variation looks
   like for our most important metrics, or are we comparing single points?**
   Without a sense of normal range, any single reading looks alarming or
   reassuring depending on mood rather than evidence. Discuss whether your
   most-watched metric has ever been plotted as a control chart rather than
   a single number.

6. **How do we currently communicate uncertainty to non-technical
   stakeholders, and does our dashboard imply more precision than the data
   actually supports?** A chart with no indication of normal variation or
   sample size can make a leadership team overreact to noise or, just as
   often, dismiss a real signal as noise. Discuss how your reporting could
   communicate this honestly without becoming unreadable.

## Sector lens

**Startup.** Small teams generate small samples almost everywhere, which
means the small-sample caution in this chapter matters constantly. Resist
drawing strong conclusions from a single bad week or a single great one;
with only a handful of data points, the honest answer to "is this a trend"
is often "we don't know yet."

**Small business.** Built-in dashboards from off-the-shelf tools often
default to averages and single-period comparisons because those are simplest
to compute and display. Where the tool allows it, switch to medians for
time-based metrics, and be skeptical of any "up 40% this month" headline
computed from a small underlying count.

**Enterprise.** Statistical mistakes at this scale get baked into resourcing
and reorganization decisions that affect hundreds of people. Invest in
analysts or embedded data practitioners who can build proper control charts
and check for confounds before a comparison between business units or
before-and-after a major change gets presented to leadership as settled
fact.

**Government.** A statistically naive comparison feeding a public report or
a budget justification can have outsized real-world consequences and
invites exactly the kind of scrutiny that exposes sloppy analysis publicly.
Apply the more rigorous techniques, control charts, documented sample sizes,
confound checks, as a standing practice for anything published externally,
not just as an occasional best effort.

## Examples

**Enterprise.** A software company's leadership team celebrated a 25%
improvement in change failure rate the month after rolling out a new code
review policy, crediting the policy directly. A closer look found the
"before" month had been an unusually bad one, driven by a single team's
migration gone wrong, and the underlying sample size in both months was
under thirty deploys company-wide. A control chart using twelve months of
history showed the new reading was well within normal variation, not a
genuine step change, and the policy's actual effect, while real, was far
smaller than the headline number suggested.

**Government.** A public transit agency reported a large year-over-year
improvement in on-time performance for a newly digitized scheduling system,
comparing a single "before" quarter to a single "after" quarter. An
independent review found that the "before" quarter had coincided with an
unrelated construction closure that had depressed performance across the
whole network, and a longer baseline showed on-time performance had already
been recovering before the new system launched. The agency's revised report
used a full multi-year control chart and attributed a more modest, but more
defensible, improvement to the new system specifically.

## Business case: motivations, ROI, and TCO

The return on statistical literacy is avoided misdirection: an organization
that correctly attributes an improvement, or correctly recognizes noise as
noise, spends its next investment where it will actually help rather than
chasing a phantom effect. The retail example above is typical: a company
that believed its review policy alone drove a 25% improvement might
underinvest in other real contributors, or overstate the policy's value in a
way that misleads future decisions.

The total cost of statistical rigor is mostly a shift in habit rather than
new tooling: choosing a median over an average, checking a sample size
before reacting, plotting a longer baseline before declaring victory. These
habits cost little to adopt and prevent the much larger, harder-to-detect
cost of decisions made on confident, wrong conclusions.

## Anti-patterns and pitfalls

- **Reporting an average on skewed time-based data:** hides the typical case
  and the tail behind a single misleading number.
- **Reacting to a percentage with no visible sample size:** treats noise
  from a handful of events as if it were a stable, meaningful trend.
- **Crediting an intervention without ruling out regression to the mean:** a
  common, easy-to-make, hard-to-notice mistake.
- **Claiming causation from correlation without considering confounds:**
  overstates what the data actually supports.
- **Comparing a single before-and-after snapshot instead of plotting a
  longer baseline:** cannot distinguish a real shift from ordinary
  variation.
- **Implying more precision than the data supports in leadership-facing
  reporting:** invites overreaction to noise or dismissal of a real signal.

## Maturity model

- **Level 1, Initiate:** Metrics are reported as raw averages and single
  before-and-after snapshots with no attention to sample size, skew, or
  baseline variation.
- **Level 2, Develop:** Some analysts apply medians or percentiles
  informally, but there is no consistent organizational practice and
  confounds are rarely checked.
- **Level 3, Standardize:** Medians and percentiles are the default for
  skewed time-based metrics; sample sizes are shown alongside
  percentage-based metrics organization-wide.
- **Level 4, Manage:** Control charts with historical baselines are standard
  practice for any claim of a genuine shift; confounding variables are
  actively considered before causal claims are made in reporting.
- **Level 5, Orchestrate:** Statistical rigor is built into the tooling
  itself, dashboards render percentiles and control bands by default, and
  the organization can demonstrate that a specific past decision was
  corrected because a statistically naive read was caught before it shaped
  strategy.

## Ideas for discussion

1. Which of our current dashboard headlines would look different if we replaced an average with a median?
2. Have we ever changed a decision because a percentage turned out to be based on a much smaller sample than we assumed?
3. What is a recent "we improved this metric" story we should re-examine for regression to the mean?
4. Where might two of our metrics be correlated through a hidden third cause rather than one driving the other?
5. Do our most important charts show a normal range of variation, or just a single trend line?

## Key takeaways

- Prefer **medians and percentiles** over averages for skewed, time-based
  engineering metrics.
- Treat a **percentage from a small sample** as noisy, and say so explicitly
  rather than reacting to it as a stable trend.
- Watch for **regression to the mean** before crediting an intervention for
  an improvement that followed an unusually bad reading.
- **Correlation is not causation**; actively look for confounding variables
  before making a causal claim.
- Use a **control chart with a real historical baseline**, not a single
  before-and-after snapshot, to tell a genuine shift from ordinary noise.

## References and further reading

- *The Signal and the Noise*, by Nate Silver (distinguishing real signal
  from noise in imperfect data).
- *How to Measure Anything*, by Douglas W. Hubbard (statistical reasoning
  for organizational measurement).
- *Understanding Variation: The Key to Managing Chaos*, by Donald J.
  Wheeler (control charts and the distinction between common-cause and
  special-cause variation).
- *Thinking, Fast and Slow*, by Daniel Kahneman (cognitive biases including
  regression to the mean and the illusion of causal narrative).
- *The Visual Display of Quantitative Information*, by Edward R. Tufte
  (honest, high-integrity presentation of quantitative data).
