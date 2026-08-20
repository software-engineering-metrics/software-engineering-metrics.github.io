# 1.1 Why measure software engineering

## Overview and motivation

Software engineering resists measurement in a way that manufacturing does
not. A factory line produces identical units, so counting them tells you
something real. Software work produces one-of-a-kind artefacts under
constantly changing requirements, so a naive count, of commits, of lines, of
tickets closed, tells you almost nothing about value delivered. That gap
between the difficulty of measuring software work and the very real need to
know whether it is going well is where this whole book lives. This chapter is
about closing that gap honestly: not by pretending software work is as
countable as widgets, but by being precise about what measurement can and
cannot do for an engineering organization.

Measurement exists to answer questions an organization cannot otherwise
answer with confidence: is our delivery getting faster or slower, is quality
improving or degrading, are engineers burning out, is this investment paying
off. Without metrics, those questions get answered by whoever speaks most
confidently in the room, usually the most senior or most persuasive person
present, and that answer is frequently wrong. [Software engineering](https://en.wikipedia.org/wiki/Software_engineering)
teams that skip measurement do not avoid making judgements about their own
performance. They just make those judgements on vibes, anecdote, and
recency bias instead of evidence.

For large teams, this stops being a nice-to-have and becomes structural. A
team of six can share a mental model of how things are going through daily
conversation. A department of six hundred, spread across time zones and
business units, cannot. At that scale, a shared, trusted set of numbers is
the only practical substitute for the informal awareness a small team gets
for free. Enterprise leadership needs metrics to allocate investment across
dozens of teams competing for the same budget. Government engineering
organizations need metrics to demonstrate to legislatures and the public that
appropriated funds produced real capability, not just activity. In both
settings, "we worked hard" is not evidence; a defensible number is.

## Key principles

- **Measure to learn, not to judge.** The primary purpose of an engineering
  metric is to inform a decision, not to score a person or a team.
- **A number without a decision attached is decoration.** If no reading of a
  metric would change what you do next, it does not belong on a dashboard.
- **Measurement is a means, not the goal.** The goal is better software,
  delivered more reliably, by a sustainable team. Metrics exist only to serve
  that goal.
- **Every metric has a cost.** Instrumentation, review time, and the
  behavioural distortion risk covered in chapter 1.2 all cost something. A
  metric has to earn that cost back.
- **Silence is also a decision.** Choosing not to measure something is a
  choice with consequences, not a neutral default.

## Recommendations

### Start from the decision, not the dashboard

Before instrumenting anything, name the decision the metric will inform. "We
want to know whether our new deployment pipeline reduced incident rates" is a
decision-shaped question; "let's track everything the tool can export" is
not. Working backward from a decision keeps the metric set small and keeps
every tile defensible when someone asks why it exists. If you cannot name the
decision a metric would inform, do not build it yet. Chapter 1.3 goes deeper
on the outcomes-over-output version of this discipline.

### Separate diagnostic use from evaluative use

A metric used to diagnose a system problem (why is our lead time creeping up)
behaves completely differently from the same metric used to evaluate a person
or team (whose lead time is worst). The first invites investigation and
improvement. The second invites concealment and gaming, because now the
number has a reputational or financial consequence attached to it. Decide
explicitly, in writing, which use a metric is for, and never let a diagnostic
metric slide into evaluative use without deliberately reconsidering the risk.
This distinction recurs constantly through this book and is formalized in the
non-goals section of the metrics charter described in chapter 1.4.

### Treat measurement as a hypothesis, not a fact

A metric is a proxy for something you actually care about, not the thing
itself. Deployment frequency is a proxy for delivery capability, not delivery
capability itself. Treat every metric as a hypothesis under ongoing test: does
this number still track the thing we care about, or has the world moved and
left the proxy behind? Revisit that question on a fixed cadence rather than
assuming a metric that was well chosen two years ago is still well chosen
today, especially as tooling, team structure, or (see Part 7) the nature of
the work itself changes.

### Make the absence of measurement visible

In large organizations, the riskiest gap is not a bad metric, it is an area
nobody is measuring at all because it is hard to instrument: developer
experience, cross-team dependency friction, the erosion of institutional
knowledge. Name these gaps explicitly in your metrics charter rather than
letting them stay invisible by default. An organization that knows what it is
not measuring, and why, is in a far stronger position than one that has
quietly forgotten those areas exist.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Heavy instrumentation, many metrics | Broad visibility, fewer blind spots | Dashboard fatigue, higher gaming surface, higher maintenance cost |
| Minimal, decision-driven metrics | Focus, low overhead, every metric defensible | Risk of missing an emerging problem outside the chosen set |
| Metrics for diagnosis only | Encourages honest reporting and investigation | Leadership may still informally use them evaluatively |
| Metrics tied to individual evaluation | Feels accountable, easy to explain to executives | Strong gaming incentive; damages trust; usually measures the wrong thing |

The central tension is **coverage versus focus**, and it is sharpened by
**diagnosis versus judgement**. Too few metrics and you develop blind spots
that surface only as a crisis; too many and no one can act on any of them,
while every one you attach evaluative weight to invites distortion. Resolve
it by starting minimal and decision-driven, adding a metric only when a
specific, named decision needs it, and by defending the diagnostic-only
boundary explicitly in the governance work of chapter 1.4 rather than letting
it erode by default.

## Questions to discuss with your team

1. **For each metric on our current dashboard, what decision would a good
   reading and a bad reading each trigger?** If both readings lead to the
   same action, or to no action at all, the metric is decoration. Walk your
   dashboard tile by tile and force an honest answer for each one. This
   exercise routinely halves a bloated dashboard in a single sitting, because
   most sprawl accumulates from metrics nobody ever removes rather than
   metrics anyone deliberately added for a reason that still holds.

2. **Which of our metrics are used diagnostically, and which have quietly
   become evaluative?** A metric built to understand a system constraint can
   drift into being used to rank teams or individuals without anyone
   deciding that on purpose, often through an offhand comment in a review
   meeting that becomes habit. Once that drift happens, the number stops
   being trustworthy, because people now have a reason to make it look good
   rather than to make it accurate. Name every metric's intended use in
   writing and check current practice against it.

3. **What are we not measuring because it is hard to instrument, and what is
   that gap costing us?** The most dangerous blind spots are the ones that
   never make it onto a dashboard precisely because they resist easy
   measurement: cross-team dependency friction, the erosion of institutional
   knowledge, or the quiet accumulation of fragile workarounds. Bring a list
   of the things everyone privately worries about but nobody tracks, and be
   honest about why.

4. **If we deleted this metric tomorrow, who would notice, and what would
   they lose?** A metric that nobody would miss is a metric that is not
   informing any decision. This question surfaces vanity tiles that survive
   purely through inertia. For a large organization with dozens of team
   dashboards, this pruning discipline matters as much as the discipline of
   adding new metrics in the first place.

5. **How much does each metric on our dashboard actually cost to produce and
   maintain, including the engineering time behind the instrumentation?**
   Metrics are not free. Pipelines, dashboards, and the review time spent
   discussing a number all carry a recurring cost that is easy to
   underestimate because it is distributed across many small tasks rather
   than one visible line item. Bring your actual instrumentation and
   maintenance effort and weigh it against the decision value from question
   1.

6. **Where has measurement become a substitute for judgement, and where has
   judgement become a substitute for measurement?** Both failure modes are
   real. A team that outsources every decision to a dashboard loses the
   contextual judgement that catches what the number misses; a team that
   ignores available data in favour of the loudest voice in the room repeats
   the very problem this chapter opens with. The goal is metrics that inform
   judgement, not metrics that replace it.

## Sector lens

**Startup.** With a handful of engineers, most of what this chapter warns
against, drift toward evaluative use, blind spots, dashboard bloat, is easy
to avoid simply because everyone talks daily. The risk is the opposite one:
skipping measurement entirely because it feels like overhead the team cannot
afford. Pick two or three decision-shaped questions (are we shipping fast
enough, is quality holding) and instrument only those.

**Small business.** Without a dedicated platform or data team, lean on
whatever your existing tools already report rather than building custom
instrumentation. A payment processor's dashboard, a support tool's response
metrics, and your CI provider's build history usually cover the decisions
that matter most. Resist the temptation to buy a dedicated engineering
analytics platform before you have proven you will act on what it tells you.

**Enterprise.** The core risk is metrics that drift silently from diagnostic
to evaluative use as they roll up through management layers, and dashboards
that grow by accretion because no one owns the job of pruning them. Governance
(chapter 1.4) is not optional at this scale. Standardize definitions across
business units, and build a regular retirement review into the metrics
programme itself.

**Government.** Metrics here often carry statutory or budgetary weight, which
raises both the value of getting them right and the cost of getting them
wrong. A number reported to a legislature or an oversight body needs a
documented methodology, a stable definition across reporting periods, and
honesty about its limitations. Treat "we don't currently measure this" as an
answer you may need to defend, not a private failing to hide.

## Examples

**Enterprise.** A global insurance company's engineering organization had
grown to over sixty scrum teams, each with its own informal dashboard, none
comparable to any other. Leadership could not answer a basic question: which
of our ten strategic platform investments is actually delivering faster
software. The fix was not more metrics, it was fewer, better ones: the
organization defined a shared, decision-driven core of DORA metrics
(chapter 2.10) computed identically everywhere from the same pipeline data,
retired forty team-specific dashboards, and could finally compare investment
areas on a common basis within two quarters.

**Government.** A national tax agency's digital service team had been asked
by an oversight committee to demonstrate the return on a multi-year
modernization programme. The team's existing metrics were entirely internal
and activity-based: story points completed, sprints closed. None of it
answered the committee's actual question. The team built a small set of
outcome metrics instead, median time to resolve a citizen's filing issue,
digital channel adoption rate, and escaped defect rate in the new system, and
reported those quarterly with a documented methodology. The committee's
questions shifted from "prove you are working" to "how do we replicate this
in the next agency," which is the outcome a well-chosen metric set is
supposed to produce.

## Business case: motivations, ROI, and TCO

The return on deliberate measurement is decision quality. An organization
that can say, with evidence, "our lead time improved 30% after the platform
investment" can defend that investment, repeat what worked, and stop what
did not. An organization relying on anecdote cannot do any of that with
confidence, and ends up re-litigating the same arguments every budget cycle
because no one can point to a number both sides trust.

The cost of measurement is not the dashboard. It is the ongoing discipline:
instrumentation, definition maintenance, and the periodic pruning this
chapter recommends. That total cost of ownership is real but modest compared
to the cost of the alternative, which is a large organization making
multi-million-dollar technology decisions on the basis of whoever argued most
persuasively in the room. The return on a metrics programme is not the
metrics themselves; it is the decisions made better because of them.

## Anti-patterns and pitfalls

- **Measuring everything the tool exports:** turns a dashboard into noise and
  invites gaming across a huge surface with no corresponding decision value.
- **Metrics with no named decision:** decoration that costs maintenance
  effort and tells no one anything actionable.
- **Silent drift from diagnostic to evaluative use:** the single fastest way
  to destroy trust in a number.
- **Treating a metric as fact rather than hypothesis:** a proxy that was
  right two years ago may be wrong today, and nobody checks.
- **Confusing the absence of a bad number with the presence of a good one:**
  a metric you never look at cannot tell you anything is wrong.
- **Building measurement capability before deciding what to decide:**
  instrumentation in search of a question wastes real engineering time.

## Maturity model

- **Level 1, Initiate:** Metrics, if they exist at all, are ad hoc, personal
  to whoever built them, and nobody can say what decision any of them
  inform.
- **Level 2, Develop:** A basic set of metrics exists for some teams, mostly
  copied from a framework or a tool's defaults, without a clear link back to
  a decision.
- **Level 3, Standardize:** Every tracked metric has a documented purpose and
  an explicit diagnostic-versus-evaluative classification, consistently
  applied across the organization.
- **Level 4, Manage:** Metrics are reviewed on a fixed cadence against the
  decisions they inform; metrics that stop earning their keep are retired,
  and the whole set is measured for cost as well as value.
- **Level 5, Orchestrate:** Measurement is a living capability: the
  organization routinely identifies its own blind spots, tests whether its
  proxies still track reality, and treats the metrics programme itself as
  something to improve, not just maintain.

## Ideas for discussion

1. Which metric on our dashboard would we most struggle to justify keeping if asked today?
2. What decision have we made in the last quarter using a metric, rather than an opinion?
3. Where in our organization has a diagnostic metric quietly become evaluative?
4. What are we afraid to measure, and why?
5. If our metrics programme disappeared tomorrow, what decisions would get worse?

## Key takeaways

- Measurement exists to serve **decisions**, not to exist for its own sake; a
  metric with no attached decision is decoration.
- Keep **diagnostic** use separate from **evaluative** use, in writing, and
  watch for silent drift between them.
- Treat every metric as a **hypothesis** about what it represents, not a
  settled fact, and revisit that hypothesis on a cadence.
- Silence, choosing not to measure something, is itself a decision with
  consequences; make blind spots visible rather than letting them stay
  invisible by default.
- The total cost of a metrics programme is real; weigh it explicitly against
  the decision value each metric provides.

## References and further reading

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (the research foundation for outcome-based
  engineering measurement).
- *How to Measure Anything*, by Douglas W. Hubbard (a general framework for
  quantifying things that seem unmeasurable).
- *Measuring and Managing Performance in Organizations*, by Robert D. Austin
  (the foundational analysis of dysfunction that measurement can introduce
  into an organization).
- *Thinking, Fast and Slow*, by Daniel Kahneman (the cognitive biases that
  make unaided judgement an unreliable substitute for measurement).
- Google's DevOps Research and Assessment (DORA) programme, [dora.dev](https://dora.dev/) (the
  ongoing State of DevOps research this book draws on throughout).
