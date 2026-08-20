# 2.9 Queueing theory and Little's law

## Overview and motivation

**[Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)** is the
mathematical study of waiting lines. It sounds like an odd fit for a book
about software engineering metrics until you notice how much of a delivery
pipeline actually is a queue: a pull request waiting for a reviewer, a
commit waiting for a CI runner, a ticket waiting to be picked up, a customer
support message waiting for a response. Chapters 2.6 and 2.7 already showed
you that most delivery time is wait time, not work time, and that limiting
work in process improves throughput. Queueing theory is the underlying
mathematics that explains why both of those things are true.

The single most useful result is **[Little's law](https://en.wikipedia.org/wiki/Little%27s_law)**,
a theorem proved by the operations researcher John Little in 1961: the
average number of items in a stable system equals the average rate at which
items arrive, multiplied by the average time each item spends in the
system. Translated into this book's own vocabulary, work in process
(chapter 2.7) equals the arrival rate of new work multiplied by cycle time
(chapter 2.6). This is not a rule of thumb or a correlation observed in
some studies. It is a proof that holds for any stable queue, regardless of
what the queue is processing or how it decides what to work on next.

For a large team, that generality is the point. Little's law gives you a
sanity check that works identically whether the queue is a kanban board, a
message broker, or a shared CI pipeline. If your measured work in process,
arrival rate, and cycle time do not roughly satisfy the equation, one of
your three numbers is wrong, usually because of an inconsistent definition
of what counts as "in progress" or "arrived." Enterprise and government
organizations run dozens of such queues at once, shared code review pools,
shared test environments, shared approval boards, and Little's law is the
cheapest available tool for catching a bad metric definition before it
drives a bad staffing or process decision.

## Key principles

- **Little's law is a proof, not a heuristic.** Work in process equals
  arrival rate times cycle time, for any stable queue, and it is a fast
  check on whether your delivery metrics are internally consistent.
- **Utilization does not scale linearly with wait time.** As a shared
  resource approaches full utilization, queueing delay grows sharply, not
  gradually. A resource running at 95% busy is often waiting many times
  longer than one running at 80%, not just "a little worse."
- **A queue's average hides its worst case.** Reporting only the mean wait
  time conceals the long, painful tail near capacity, exactly what chapter
  1.6 warns against when it comes to using percentiles instead of averages.
- **How a queue is defined can be gamed as easily as any other metric.**
  Whether something counts as "arrived," "in progress," or "served" is a
  choice, and it can be tuned to flatter a dashboard without changing what
  actually happens to the work.
- **A pipeline is usually a queue of queues.** A delivery pipeline chains
  several stages together, and the slowest stage sets the pace for the
  whole chain regardless of how fast the others run.

## Recommendations

### Use Little's law to check your own numbers before trusting them

Take your team's measured average work in process, its average arrival rate
of new items per week, and its average cycle time, and check whether work
in process roughly equals arrival rate multiplied by cycle time. When it
does not, do not assume the theory is wrong. Look for the actual cause: a
stage boundary counted inconsistently, work that sits "blocked" but is
still counted as in process, or an arrival rate measured over a different
window than the cycle time. This single check catches more bad
instrumentation than most teams find any other way.

### Track utilization directly for every shared, capacity-constrained resource

Identify the resources your delivery pipeline shares across many teams, a
code review pool, a CI cluster, a staging environment, and measure how busy
each one runs as a proportion of its available capacity, before you plan to
run it near its limit. A shared reviewer group running near full capacity
produces review-queue wait times that grow far faster than the modest
increase in demand that caused them, exactly the dynamic behind chapter
2.8's advice to watch time-to-first-review as a leading indicator.

### Separate arrival rate, success rate, failure rate, and skip rate

Resist collapsing everything that leaves a queue into a single "throughput"
or "service rate" number. Track four things separately: how fast work
arrives, how much of it finishes successfully, how much fails and needs
rework, and how much is abandoned or silently dropped before anyone
finishes it. A pipeline that looks fast because its skip rate quietly
climbed is not actually delivering more, and only tracking these four
rates separately will show you that.

### Model multi-stage pipelines as a queue of queues

Treat a delivery pipeline, or any multi-stage process, an incident
lifecycle, a hiring pipeline, as a chain of queues rather than one
undifferentiated blob of "time." The overall arrival rate is set by the
first stage, the overall completion rate by the last stage, and the
pipeline's total error and skip counts are the sum of every stage's own.
This framing tells you immediately which stage is worth investing in: the
one with the worst combination of high utilization and high failure or
skip rate, not the one that happens to be easiest to instrument.

### Set staffing and WIP limits with utilization in mind, not just throughput

When you decide how many reviewers or CI runners a team needs, do not size
capacity to match the average arrival rate exactly. A queue running at 100%
utilization on average has effectively infinite wait time in practice,
because real arrivals are uneven, not perfectly smooth. Deliberately plan
for headroom, and treat "our reviewers are almost always busy" as a
warning sign about wait times to come, not as evidence of efficient
resourcing.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| No formal queueing model, gut-feel staffing | Fast to start; no new vocabulary for the team | Consistently underestimates how wait time explodes near full capacity |
| Little's law as a sanity check on existing metrics | Cheap, requires no new tooling, catches bad definitions fast | Only checks consistency, does not by itself diagnose the cause |
| Full queueing simulation (arrival distributions, multiple servers) | Most accurate prediction of wait-time behaviour under load | Requires real statistical skill and maintenance most teams will not sustain |
| Utilization tracking on shared resources without deeper modelling | Simple, actionable, catches the single biggest cause of runaway wait times | Says nothing about why utilization is high or what to do about the underlying cause |

The central tension is **rigour versus adoption**. A full queueing
simulation gives the most accurate answer, but almost no engineering team
will build and maintain one, and a model nobody trusts or updates is worse
than no model. Little's law and basic utilization tracking give up some
precision but require no specialized statistical skill and fit directly
into metrics a team already collects for chapters 2.6 and 2.7. Default to
those cheap, adoptable checks, and reserve full simulation for the rare
case where a single shared resource, a large CI fleet, a specialized
review pool, is expensive enough to justify the investment.

## Questions to discuss with your team

1. **Do our measured work in process, arrival rate, and cycle time actually
   satisfy Little's law, and if not, why not?** This is the single fastest
   diagnostic available for a bad metric definition. Walk through the
   actual numbers together, and if the equation does not roughly hold,
   trace the mismatch to a specific definitional inconsistency rather than
   dismissing the check.

2. **Which shared resources in our delivery pipeline are running close to
   full utilization, and do we actually know their utilization number?**
   Most teams can name a resource that "always feels busy" but have never
   measured its utilization directly. Identify the two or three most
   constrained shared resources and get a real number for each.

3. **Are we blending success, failure, and skip into one throughput number,
   and what would we see if we split them apart?** A single "items
   completed" count can rise even while quality falls or work is quietly
   abandoned. Recompute a recent period's throughput as three separate
   numbers and discuss what the split reveals that the blended number hid.

4. **Where in our pipeline is the true bottleneck, the slowest stage that
   sets the pace for everything downstream of it?** Teams often invest in
   speeding up the stage that is easiest to improve rather than the one
   that actually constrains total throughput. Identify the stage with the
   worst combination of high utilization and high failure or skip rate.

5. **If we added capacity to our most constrained shared resource, would
   wait time actually improve, or would demand simply expand to fill it?**
   This question separates a genuine capacity shortfall from a demand
   problem, and the answer changes whether the right fix is more headcount,
   a WIP limit, or a change to how work is prioritized before it enters the
   queue.

6. **Have we ever redefined what counts as "in progress" or "arrived" in a
   way that made a dashboard look better without changing what actually
   happened to the work?** This is worth asking honestly and specifically,
   with real examples from the last year, rather than treating it as a
   hypothetical concern.

## Sector lens

**Startup.** With a handful of engineers, most queues are short enough that
formal queueing analysis is overkill. The useful habit is smaller: notice
when one person, often the most senior engineer, has become a de facto
shared resource that everything else waits on, and treat that as a
utilization problem worth naming even without any formal model behind it.

**Small business.** A small business team rarely needs anything more
sophisticated than tracking utilization on its one or two genuinely shared
resources, often a single reviewer or a single deploy pipeline, and
watching for the point where "usually available" quietly becomes "usually
the bottleneck." A spreadsheet is enough; dedicated tooling is not
necessary at this scale.

**Enterprise.** Shared resources multiply fast at enterprise scale: a
central platform team, a shared security review board, a shared CI fleet
serving dozens of product teams. These are exactly the resources where
utilization tracking earns its keep, because a single overloaded shared
resource can quietly degrade delivery time for every team that depends on
it, and no individual team's own metrics will reveal a cause that lives
outside their own pipeline.

**Government.** Multi-agency and multi-vendor delivery programmes often
route work through shared approval boards, shared security accreditation
processes, and shared testing environments that no single team controls or
can resize on its own. Queueing analysis of these shared gates, arrival
rate, capacity, utilization, is frequently the clearest evidence available
for a business case to add capacity or to change how work is batched before
it reaches the gate.

## Examples

**Enterprise.** A cloud infrastructure provider's internal platform team
noticed that lead time for changes (chapter 2.3) had crept upward across
every product team that depended on its shared CI fleet, even though no
individual team had changed how it worked. A utilization analysis found
the fleet running above 90% busy during core hours, well past the point
where queueing theory predicts wait time grows sharply rather than
gradually. The platform team added CI capacity and introduced a fair-share
scheduling policy so no single team's burst of activity could monopolize
the queue. Median CI wait time fell by more than half within a month,
evidence that the bottleneck had been a shared, invisible queue all along.

**Government.** A national permitting agency's digital service team tracked
application processing as a single "cases closed per week" throughput
number for two years, and the number looked stable. A closer analysis,
splitting that number into cases approved, rejected, and abandoned by
applicants after long delays, found the abandonment rate had nearly tripled
over the same period while approvals held flat. Little's law, applied to
the caseworker queue, showed work in process had grown far beyond what the
team's stated average processing time implied, meaning cases were quietly
piling up in a status not counted as "waiting." The agency restructured its
case-tracking definitions to count every open case honestly and added
caseworker capacity sized to keep utilization below 85%, now tracked as a
standing operational target alongside the throughput number.

## Business case: motivations, ROI, and TCO

The return on applying basic queueing analysis is that it turns "the
pipeline feels slow" into a specific, defensible decision, add headroom to
this shared resource, split this blended metric into its real components,
rather than a vague push to "work faster" that misses the actual cause.
The cloud infrastructure example above, halved wait time from a capacity
and scheduling fix rather than any change to individual teams' behaviour,
is the pattern this analysis reliably produces: the fix is almost always
cheaper than asking every downstream team to move faster around a
bottleneck they cannot see.

The total cost of adoption is genuinely low. Little's law and utilization
tracking need no new tooling beyond what chapters 2.6 and 2.7 already ask
you to collect: arrival rate, work in process, and cycle time. The
investment is mostly analytical discipline, checking the numbers against
each other and periodically reviewing utilization on shared resources
before they become the organization's next unexplained lead-time
regression.

## Anti-patterns and pitfalls

- **Sizing a shared resource's capacity to match its average arrival rate
  exactly:** guarantees high utilization and runaway wait times whenever
  demand is even briefly uneven.
- **Reporting only mean wait time, never a percentile:** hides the long
  tail that matters most to the people waiting in it.
- **Blending success, failure, and skip into one throughput number:** the
  gaming vector at the heart of this chapter. A team under pressure can
  make throughput look healthy by quietly letting the skip rate rise,
  abandoned tickets, silently dropped requests, work that never gets
  counted as a failure. The guardrail is to track arrival, success,
  failure, and skip rate as four separate, visible numbers, the same
  discipline chapter 1.2 asks for with every metric in this book, so a
  rising skip rate cannot hide behind a flat throughput chart.
- **Treating "our people are always busy" as a compliment:** it is a
  symptom of high utilization, the leading cause of long, unpredictable
  wait times.
- **Redefining "in progress" to quietly shrink work in process:** moves
  work into an uncounted state, "blocked," "on hold," without changing how
  long it takes to finish, and breaks the Little's law check that would
  otherwise have caught it.
- **Assuming a queueing model needs no maintenance once built:** arrival
  patterns and capacity change constantly, and a stale model produces
  confidently wrong predictions.

## Maturity model

- **Level 1, Initiate:** No queue is measured explicitly; wait time is
  discussed anecdotally as "things feel slow."
- **Level 2, Develop:** Arrival rate, work in process, and cycle time are
  tracked for at least one pipeline, but never checked against Little's
  law or against utilization on shared resources.
- **Level 3, Standardize:** Little's law is a routine consistency check
  across delivery pipelines, and utilization is tracked explicitly for the
  most significant shared resources.
- **Level 4, Manage:** Success, failure, and skip rate are tracked
  separately for every significant queue, and capacity decisions use
  utilization targets, not just average demand.
- **Level 5, Orchestrate:** The organization models its major pipelines as
  queues of queues, identifies true bottlenecks systematically, and can
  point to specific capacity or process changes made because of queueing
  analysis, with measured wait-time improvement to show for it.

## Ideas for discussion

1. Pick one of our delivery pipelines and check whether its numbers satisfy Little's law today.
2. Name the single shared resource in our organization that most people would agree is "always busy," and find its actual utilization number.
3. What would our throughput chart look like if we split it into success, failure, and skip rates for the last quarter?
4. If we had to add capacity to exactly one shared resource this year, which one, and what evidence would justify it?

## Key takeaways

- **Little's law**, work in process equals arrival rate times cycle time,
  is a proof, not a heuristic, and it is the cheapest available check on
  whether your delivery metrics are internally consistent.
- **Wait time grows sharply, not gradually, as utilization approaches full
  capacity.** Treat "always busy" as a warning sign, not a compliment.
- Track **arrival rate, success rate, failure rate, and skip rate**
  separately; blending them into one throughput number is this chapter's
  central gaming vector.
- Model a multi-stage pipeline as a **queue of queues**, and invest in the
  stage with the worst combination of high utilization and high failure or
  skip rate, not the stage that is easiest to improve.
- Favour cheap, adoptable checks, **Little's law and utilization
  tracking**, over a full queueing simulation few teams will sustain.

## References and further reading

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*.
  Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and
  Solve Performance Problems on the Computer Systems You Work With*.
  CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
