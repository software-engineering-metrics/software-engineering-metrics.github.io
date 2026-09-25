# 2.5 Flow efficiency and work in process

## Overview and motivation

**Flow efficiency** is the ratio of active time to total time for a piece of
work: if a change spends ten hours actively being coded, reviewed, and
tested, but sits idle in queues for ninety hours total across its whole
journey, flow efficiency is 10%. Most software delivery pipelines, measured
honestly, land somewhere between 10% and 25% flow efficiency, which surprises
people expecting effort to dominate. The dominant cost in most delivery
systems is not how long work takes to do, it is how long work waits to be
started.

**[Work in process](https://en.wikipedia.org/wiki/Work_in_process)** (WIP) is the count of items actively being worked on at
any one time, across a team or a system, the same quantity chapter 2.4 calls
"flow load." The counterintuitive finding behind
this chapter, backed by decades of research in operations management and
formalized for software delivery through kanban and queueing theory, is that
limiting WIP tends to *increase* throughput, not decrease it, because less
work in flight at once means less context switching, shorter queues, and
faster completion per item, even though it feels like doing less work
simultaneously should produce less output overall.

For large teams, understanding flow efficiency reframes almost every
delivery problem from "people need to work faster" to "work needs to wait
less." That reframe matters because the first framing invites pressure on
individuals, exactly the trap chapter 2.6 warns against, while the second
invites investigation into queueing structure, review capacity, and how much
work is started simultaneously, which is where the real, sustainable
improvement usually lives. Enterprise organizations juggling many concurrent
initiatives across shared teams are especially prone to high WIP and low
flow efficiency, because starting new work always feels like progress even
when it is quietly slowing down everything already in flight.

## Key principles

- **Wait time, not active effort, dominates most delivery pipelines.** Flow
  efficiency below 25% is typical, not a sign of a broken team.
- **Limiting work in process tends to increase throughput,** not decrease
  it, by reducing context switching and shortening queues.
- **Starting new work feels like progress; finishing work is what actually
  delivers value.** These are not the same thing, and organizations
  routinely confuse them.
- **High WIP is often invisible until measured.** A team can be juggling far
  more concurrent work than anyone individually realizes.
- **This is a system-level metric, not an individual one.** Applying WIP
  limits to punish individuals misreads the entire point of the technique.

## Recommendations

### Measure flow efficiency before assuming effort is the bottleneck

Calculate the ratio of active time to total elapsed time for a representative
sample of recent changes, using the cycle-time stage data from chapter 2.6.
Most teams measuring this for the first time are surprised by how low the
number is, and that surprise is itself valuable: it redirects attention from
"work harder" toward "reduce queueing," which is almost always the more
productive lever.

### Set an explicit work-in-process limit and enforce it visibly

Cap the number of items a team or an individual can have actively in
progress at once, visible on a shared board (a physical or digital kanban
board is the classic implementation). When the limit is reached, the team's
next action is to help finish something already in flight, not to start
something new. This single practice, borrowed from lean manufacturing and
formalized in kanban, is one of the most consistently effective flow
improvements available to a software team, and it costs almost nothing to
implement.

### Treat a WIP limit as a system constraint, not an individual quota

A WIP limit governs how much work the *system* (a team, a shared review
queue, a shared environment) has in flight at once, not how much any one
person is allowed to touch. Applying the limit as an individual performance
quota, "you may only have two tickets open," misapplies the technique and
risks exactly the kind of individual-level gaming this book warns against
throughout. The limit exists to protect flow through the whole system, and
its enforcement should be a team norm, not a personal ceiling.

### Investigate why work sits idle, not just how long

When flow efficiency analysis reveals long wait times, ask specifically why:
is work waiting because a reviewer is unavailable, because a shared test
environment is booked, because a dependency on another team has not landed
yet. Each of these has a different fix. A generic "reduce wait time"
directive without this specific investigation tends to produce generic,
ineffective responses.

### Watch for WIP creeping back up after an initial improvement

Teams that successfully adopt a WIP limit often see it erode over time as
pressure to start new initiatives returns, "just this once, we need to start
this urgent thing too." Treat every WIP-limit exception as a deliberate,
visible decision with a stated reason, not a quiet, routine override, so the
limit's discipline does not silently decay back to its original state.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| No WIP limit | Feels flexible; no friction when starting new work | Context switching and queueing quietly slow everything down |
| Team-level WIP limit | Improves throughput and flow efficiency measurably | Requires discipline to enforce, especially under deadline pressure |
| Individual-level WIP quota | Simple to state | Misapplies the technique; risks individual gaming |
| Strict, unbending WIP limit | Maximum flow-efficiency benefit | Can feel rigid in genuinely urgent, exceptional situations |

The central tension is **flexibility versus flow**. Starting new work
whenever it seems urgent feels responsive, but the flow-efficiency and WIP
research consistently shows that this flexibility comes at the cost of
finishing anything quickly, since more concurrent work means longer queues
and more context switching for everything already in flight. Resolve the
tension by adopting a team-level WIP limit as the default, with a
deliberate, visible, and rare exception process for genuine emergencies,
rather than either a rigid, no-exceptions rule or an unlimited, flexible
free-for-all.

## Questions to discuss with your team

1. **What is our actual flow efficiency, measured from real cycle-time data,
   and does that number surprise us?** Most teams have never calculated
   this and assume it is much higher than it turns out to be. Pull a sample
   of recent changes and compute the ratio honestly before discussing
   anything else in this chapter.

2. **How much work in process do we actually have right now, across the
   whole team, and did anyone know that number before counting?** High WIP
   is often invisible until measured explicitly, because each individual
   only sees their own slice of it. Count everything currently in progress,
   including work no one is actively touching today.

3. **If we adopted a WIP limit, what would need to change about how we
   respond to a new urgent request?** This question surfaces the real
   organizational habit, starting new work reflexively, that a WIP limit is
   designed to interrupt, and it is worth discussing before, not after,
   trying to enforce a limit.

4. **When work sits idle in our pipeline, what is the specific reason, and
   is it the same reason every time?** A generic sense that "things wait
   around" is less useful than a specific, recurring cause: an unavailable
   reviewer, a booked shared environment, a cross-team dependency. Name the
   actual pattern from real recent examples.

5. **Have we ever adopted a WIP limit and then watched it quietly erode
   through exceptions?** This is extremely common and worth discussing
   honestly: what pressure caused the first exception, and did the
   exceptions become the new normal without anyone deciding that
   explicitly.

6. **Would a WIP limit in our context need to be applied at the individual,
   team, or shared-resource level (like a review queue or test
   environment)?** Different bottlenecks call for limits at different
   levels, and applying a limit at the wrong level, individual quotas
   instead of a shared-queue cap, can misapply the whole technique.

## Sector lens

**Startup.** With few people, WIP is often naturally low simply because
there are not enough engineers to start much work simultaneously. The risk
is the opposite: a founder or lead engineer personally juggling far more
concurrent initiatives than they realize, which is worth measuring even
without formal kanban tooling.

**Small business.** A simple visible board, physical or a basic digital
tool, with an explicit column-limit is enough to get most of the benefit
without investing in sophisticated flow-metrics tooling. Start with a
generous limit and tighten it gradually as the team gets comfortable with
the discipline.

**Enterprise.** High WIP is especially common and especially costly here,
because many concurrent strategic initiatives compete for the same shared
engineering capacity, and starting a new one always looks like progress to
whoever sponsored it. Make WIP visible at the portfolio level, not just the
team level, so leadership can see the cost of starting yet another
initiative before finishing the current ones.

**Government.** Multi-year programmes often accumulate enormous implicit
WIP across many workstreams, each individually justified, with no
organization-wide visibility into the total. Introducing portfolio-level WIP
visibility, even informally, is often the single most persuasive argument
for sequencing work rather than running everything in parallel, since the
flow-efficiency cost of high WIP compounds visibly once measured.

## Examples

**Enterprise.** A financial services company's platform team was juggling
eighteen concurrent initiatives with only twelve engineers, a WIP-to-capacity
ratio no one had actually calculated until a new engineering director asked
for it directly. Flow efficiency across the team's work measured under 12%.
The team adopted an explicit WIP limit of one active initiative per two
engineers, deliberately pausing several lower-priority initiatives rather
than continuing to spread capacity thin. Throughput, measured as initiatives
genuinely completed per quarter, more than doubled within two quarters, even
though the team was visibly "doing less" at any given moment.

**Government.** A national infrastructure agency's digital transformation
programme had accumulated over forty concurrent workstreams across its
portfolio, each with its own sponsor and its own justification, with no
single view of total work in process. A programme-level flow-efficiency
review found that the median workstream spent less than 15% of its elapsed
time in active development, the rest waiting for shared resources: a small
central architecture-review team, a shared testing environment, and
cross-agency sign-off. The programme introduced explicit portfolio-level WIP
limits, sequencing workstreams rather than running all forty in parallel,
and the agency's own tracking showed measurably faster completion for the
workstreams that remained active, even as the total number running at once
fell sharply.

## Business case: motivations, ROI, and TCO

The return on managing flow efficiency and WIP deliberately is
counterintuitive but well documented: throughput tends to rise, not fall,
when an organization does less at once, because less context switching and
shorter queues mean each individual piece of work finishes faster. The
financial services example above, doubled throughput from deliberately
reducing concurrent work, is a common pattern once organizations actually
measure and act on flow efficiency rather than assuming more parallel work
always means more progress.

The total cost of adopting this discipline is mostly organizational, not
technical: a visible board, an agreed WIP limit, and the discipline to say
no to starting new work when the limit is reached. That discipline is
harder to sustain than to adopt, which is why the "watch for WIP creeping
back up" recommendation above matters as much as the initial adoption
itself.

## Anti-patterns and pitfalls

- **Assuming active effort dominates delivery time without measuring flow
  efficiency:** usually wrong, and it misdirects improvement effort toward
  the wrong lever.
- **Applying a WIP limit as an individual quota rather than a system
  constraint:** misapplies the technique and risks individual gaming.
- **Starting new work reflexively because it feels like progress:** the
  core habit flow efficiency and WIP limits are designed to interrupt.
- **Letting WIP-limit exceptions become routine and invisible:** erodes the
  discipline back to its original state without anyone deciding that on
  purpose.
- **Measuring WIP only at the team level, missing portfolio-level
  overload:** common in large organizations running many concurrent
  strategic initiatives.
- **Treating a low flow-efficiency number as a sign of a bad team:** it is
  typical of most delivery pipelines and is a starting point for
  investigation, not a verdict.

## Maturity model

- **Level 1, Initiate:** Work in process is not tracked; teams start new
  work reflexively with no visibility into total concurrent load.
- **Level 2, Develop:** Some teams use an informal board, but WIP limits are
  not enforced consistently and flow efficiency is never calculated.
- **Level 3, Standardize:** Teams have explicit, visible WIP limits at the
  system level, and flow efficiency is measured periodically from real
  cycle-time data.
- **Level 4, Manage:** WIP-limit exceptions are tracked as deliberate,
  visible decisions; flow efficiency is monitored for erosion over time and
  investigated when it drops.
- **Level 5, Orchestrate:** WIP is visible and managed at the portfolio
  level, not just the team level, and the organization can point to specific
  throughput improvements that resulted from deliberately reducing
  concurrent work.

## Ideas for discussion

1. What is our actual flow efficiency, calculated honestly from real data?
2. How much work in process do we currently have that no one had counted before this discussion?
3. What would we need to say no to in order to enforce a real WIP limit?
4. What is the single most common reason work sits idle in our pipeline?
5. Where in our organization is portfolio-level WIP invisible and probably too high?

## Key takeaways

- **Flow efficiency**, the ratio of active time to total time, is typically
  under 25% in real delivery pipelines; wait time, not effort, dominates.
- **Limiting work in process tends to increase throughput**, not decrease
  it, by reducing context switching and shortening queues.
- Apply a **WIP limit as a system constraint**, never as an individual
  quota.
- Investigate the **specific reason** work sits idle rather than issuing a
  generic "reduce wait time" directive.
- Watch for WIP limits **eroding through routine exceptions**; treat every
  exception as a deliberate, visible decision.
- Chapter 2.4 names this quantity **flow load** and chapter 2.7 formalizes
  the relationship as Little's law: work in process equals arrival rate
  times cycle time, for any stable queue.

## References and further reading

- *The Principles of Product Development Flow*, by Donald G. Reinertsen
  (queueing theory, batch size, and WIP limits in product development).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, by
  David J. Anderson (the foundational text on WIP limits and flow for
  software teams).
- *Actionable Agile Metrics for Predictability*, by Daniel S. Vacanti
  (flow efficiency measurement and flow-based forecasting).
- *The Goal*, by Eliyahu M. Goldratt (theory of constraints and the
  counterintuitive relationship between local busyness and system
  throughput).
