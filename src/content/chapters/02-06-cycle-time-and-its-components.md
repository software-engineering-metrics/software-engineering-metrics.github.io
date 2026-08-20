# 2.6 Cycle time and its components

## Overview and motivation

**Cycle time** is the internal breakdown of lead time (chapter 2.3) into its
constituent stages: coding time, review time, testing time, and deploy time,
sometimes further split into pickup time (how long a change waits before
anyone starts working on it) and active time (how long it takes once
someone does). Where lead time gives you a single number for how long a
change takes end to end, [cycle time](https://en.wikipedia.org/wiki/Cycle_time) tells you where that time actually goes,
which is the diagnostic layer chapter 2.1 promised sits underneath DORA's
summary metrics.

This distinction matters because "lead time is too long" is not actionable
on its own. A team whose lead time is dominated by coding time needs a
different intervention than a team whose lead time is dominated by a
three-day review queue, which needs a different intervention again than a
team losing most of its time to a flaky, slow test suite. Without cycle-time
decomposition, teams tend to guess at the bottleneck, and the guess is
wrong often enough that fixing the wrong stage wastes real effort while the
actual constraint stays untouched.

For large teams, cycle-time decomposition is what turns an organization-wide
lead-time regression from a mystery into a specific, addressable problem.
When dozens of teams share common infrastructure, a shared review bottleneck
or a shared slow CI pipeline can be dragging every team's lead time down
identically, and only a cross-team cycle-time comparison reveals that shared
root cause, rather than each team independently guessing at its own local
explanation.

## Key principles

- **Cycle time explains lead time; it does not replace it.** Report both
  together, with cycle time as the diagnostic and lead time as the summary.
- **Wait time usually dominates active time.** Most delay in software
  delivery comes from work sitting idle in a queue, not from active effort
  (chapter 2.7 covers this directly through flow efficiency).
- **Decompose by stage before proposing a fix.** A fix aimed at the wrong
  stage wastes effort and can demoralize a team asked to "work faster" when
  the real bottleneck was elsewhere.
- **A shared bottleneck across many teams is a platform investment
  opportunity,** not just a series of individual team problems.
- **Cycle-time data is exposed to the same gaming risks as lead time**
  (chapter 2.3): watch for stage boundaries that quietly shift to flatter a
  number.

## Recommendations

### Instrument every stage boundary explicitly

Break a change's journey into named stages with clear, instrumentable
boundaries: coding (first commit to pull request opened), pickup (pull
request opened to first review), review (first review to approval), and
deploy (approval to production). Capture timestamps for every transition
automatically from version control and CI/CD events, not from
self-reported stage tracking, applying the same instrumentation-over-self-report
principle from chapter 1.5.

### Separate wait time from active time within each stage

Within review, for example, distinguish the time a pull request sits
untouched waiting for a reviewer to start (wait time) from the time an
active review conversation takes once it begins (active time). This
distinction usually reveals that the dominant cost is queueing, not effort,
which points toward a very different fix (more reviewer capacity, better
notification, smaller pull requests to review) than a fix aimed at making
review conversations themselves faster.

### Look for a shared bottleneck before diagnosing team by team

When multiple teams show the same stage as their dominant delay, a slow
shared CI pipeline, an overloaded shared review pool, an infrequent shared
release train, that shared cause is a platform-level investment
opportunity, not a series of unrelated local problems. Aggregate cycle-time
data across teams specifically to look for this pattern before assuming
each team's bottleneck is unique to that team.

### Use cycle time to set realistic, stage-specific improvement targets

Rather than a single "reduce lead time by 20%" target, which gives a team no
guidance on where to focus, use cycle-time decomposition to set a
stage-specific target: "reduce median review wait time from two days to
four hours." A specific, stage-targeted goal is both easier for a team to
act on and easier to verify was actually achieved through real process
change rather than an unrelated shift elsewhere.

### Watch for stage-boundary gaming

Just as lead time's start and end points can drift (chapter 2.3), individual
cycle-time stage boundaries can shift in ways that flatter a specific
stage's number without any real improvement, for example, marking a review
"started" the moment a reviewer is assigned rather than when they actually
begin reading the change. Periodically audit stage-boundary instrumentation
against its documented definition.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Coarse-grained cycle time (two or three stages) | Simple to instrument and explain | May not pinpoint the actual bottleneck precisely enough to act on |
| Fine-grained cycle time (many stages, wait vs. active split) | Precise diagnosis, actionable stage-specific targets | More instrumentation effort; more numbers to maintain and explain |
| Team-by-team cycle-time review | Tailored to each team's actual workflow | Can miss a shared, cross-team bottleneck hiding behind similar local numbers |
| Cross-team aggregated cycle-time review | Reveals shared platform-level bottlenecks | Requires standardized stage definitions across teams to be meaningful |

The central tension is **diagnostic precision versus instrumentation cost**.
Finer-grained cycle-time tracking gives a more actionable diagnosis but
costs more to build and maintain, and adds more numbers a team has to
understand and trust. Resolve the tension by starting coarse (coding,
review, deploy) and adding finer splits, wait versus active time within a
specific stage, only once that stage is confirmed as a genuine, recurring
bottleneck worth the extra instrumentation investment.

## Questions to discuss with your team

1. **If lead time regressed today, could we say within an hour which
   specific stage was responsible, using data rather than guesswork?** This
   is the core test of whether your cycle-time instrumentation is actually
   serving its diagnostic purpose. If the honest answer is no, that gap is
   worth closing before the next regression happens.

2. **Within our dominant bottleneck stage, how much of the delay is wait
   time versus active time?** Most teams assume active effort is the
   constraint before checking, when queueing is usually the larger cost.
   Pull the actual split for your slowest stage and see if the assumption
   holds.

3. **Do multiple teams share the same dominant bottleneck stage, suggesting
   a platform-level fix rather than a team-level one?** Aggregate your
   cycle-time data across teams and look explicitly for this pattern before
   assuming every team's slowness is locally caused.

4. **Have we set stage-specific improvement targets, or only a single
   overall lead-time target with no guidance on where to focus?** A vague
   target leaves a team guessing where to invest effort; a stage-specific
   one does not. Check your current goals against this distinction.

5. **Has any cycle-time stage boundary in our instrumentation drifted from
   its documented definition over time?** Stage boundaries are exposed to
   the same definitional drift as lead time itself (chapter 2.3). Audit a
   sample of recent stage-transition events against the written definition.

6. **How does a review-heavy culture versus a trust-heavy culture show up
   differently in our cycle-time data?** A team with very thorough,
   multi-round review will show longer review-stage time than a team that
   trusts single-approval merges; discuss whether your current balance
   reflects a deliberate choice or an unexamined default.

## Sector lens

**Startup.** Cycle time is usually dominated by coding time rather than
review or deploy stages, simply because process is minimal. As the team
grows past a handful of engineers, start watching for review wait time
specifically, since that is usually the first stage to slow down as more
people's work needs to pass through fewer available reviewers.

**Small business.** Basic version-control platform analytics usually expose
enough stage-level timing (time to first review, time to merge) without
custom instrumentation. Focus on the review stage first, since it is the
most common early bottleneck and the easiest to fix with a small process
change like a reviewer rotation.

**Enterprise.** Shared bottlenecks across dozens of teams are common and
high-leverage to find: a single overloaded shared CI queue or a mandatory
central review step can be quietly taxing lead time organization-wide.
Invest specifically in cross-team cycle-time aggregation to surface these
shared constraints rather than leaving each team to diagnose independently.

**Government.** Cycle-time data is a strong, concrete tool for justifying
process modernization to skeptical stakeholders, since "review wait time
averages four days because of a single bottlenecked approval role" is a
much more persuasive, specific case for investment than an abstract "our
process is slow" claim.

## Examples

**Enterprise.** A cloud infrastructure company's engineering leadership
noticed lead time creeping up across nearly every team simultaneously.
Cross-team cycle-time aggregation revealed that review wait time, not
active review time, was the dominant and shared cause: a small, centralized
security-review team had become a bottleneck as the number of teams
requiring their sign-off grew faster than the team itself. Expanding and
training a wider pool of security-certified reviewers, rather than asking
individual teams to somehow code or test faster, resolved the shared
bottleneck and brought lead time back down across the board within one
quarter.

**Government.** A state government's digital services team was under
pressure to reduce lead time, and initially responded by asking engineers to
work faster, a natural but ultimately unhelpful instinct. Cycle-time
decomposition showed active coding time had barely changed year over year;
nearly all of the regression came from a growing queue in a mandatory
architecture-review stage introduced eighteen months earlier as a
compliance measure. The team redesigned that review to a lighter,
risk-tiered process for low-risk changes, cutting review wait time
substantially while preserving full review rigor for genuinely high-risk
changes.

## Business case: motivations, ROI, and TCO

The return on cycle-time decomposition is targeted, effective investment: an
organization that knows exactly which stage is the bottleneck can fix that
specific stage rather than spreading effort thinly across a whole process in
the hope that something helps. The security-review example above is
typical: a precisely targeted fix, expanding one specific bottlenecked
resource, resolved an organization-wide problem far more cheaply than a
broad, unfocused "speed up delivery" initiative would have.

The total cost of ownership is the instrumentation effort to capture
stage-level timestamps reliably and the ongoing discipline of periodically
auditing stage boundaries for drift. That cost is worthwhile because the
alternative, guessing at bottlenecks and fixing the wrong stage, wastes far
more engineering effort over time than the instrumentation itself costs.

## Anti-patterns and pitfalls

- **Reacting to a lead-time regression without cycle-time diagnosis:**
  frequently leads to fixing the wrong stage.
- **Assuming active effort, not wait time, is the dominant cost:** usually
  wrong; queueing dominates in most real delivery pipelines (chapter 2.7).
- **Missing a shared, cross-team bottleneck by only reviewing cycle time
  team by team:** leaves a high-leverage platform fix undiscovered.
- **Setting a vague overall lead-time target with no stage-specific
  guidance:** leaves teams guessing where to focus effort.
- **Stage-boundary definitional drift:** flatters a specific stage's number
  without real improvement.
- **Instrumenting every possible fine-grained stage before confirming any
  of them is a genuine bottleneck:** wastes instrumentation effort on detail
  that does not yet inform a decision.

## Maturity model

- **Level 1, Initiate:** Cycle time is not decomposed at all; teams guess at
  bottlenecks when lead time regresses.
- **Level 2, Develop:** Some teams track coarse-grained stage timing
  informally, but there is no consistent instrumentation or cross-team
  comparison.
- **Level 3, Standardize:** Stage boundaries are consistently instrumented
  organization-wide, with wait time separated from active time in the
  dominant bottleneck stages.
- **Level 4, Manage:** Cross-team cycle-time aggregation actively surfaces
  shared bottlenecks; stage-specific improvement targets replace vague
  overall lead-time goals.
- **Level 5, Orchestrate:** Cycle-time data directly drives platform
  investment prioritization, and the organization can point to specific,
  targeted fixes, an expanded review pool, a faster shared pipeline, that
  measurably improved lead time across many teams at once.

## Ideas for discussion

1. What is our current dominant bottleneck stage, and how confident are we in that answer?
2. How much of that bottleneck stage's time is wait time versus active time?
3. Do any of our teams share the same bottleneck, suggesting a platform-level fix?
4. When did we last set a stage-specific, rather than overall, delivery improvement target?
5. Has a stage-boundary definition in our tooling ever changed without documentation?

## Key takeaways

- Cycle time **decomposes lead time** into stages, coding, review, testing,
  deploy, and is the diagnostic layer underneath DORA's summary metrics.
- Separate **wait time from active time** within each stage; queueing
  usually dominates active effort (chapter 2.7).
- Look for **shared bottlenecks across teams** before assuming a slowdown is
  team-specific; a shared cause is often a platform investment opportunity.
- Set **stage-specific improvement targets**, not vague overall goals, so
  teams know exactly where to focus.
- Stage boundaries are exposed to the same **definitional drift** risk as
  lead time itself; audit them periodically.
- Chapter 2.9 gives the underlying mathematics, Little's law, for why work
  in process and cycle time move together.

## References and further reading

- *The Principles of Product Development Flow*, by Donald G. Reinertsen
  (queueing theory and batch-size reasoning underlying cycle-time analysis).
- *Actionable Agile Metrics for Predictability*, by Daniel S. Vacanti
  (cycle-time and flow-based measurement for software delivery).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (lead time and its relationship to delivery
  performance).
- *The Goal*, by Eliyahu M. Goldratt (theory of constraints, and the
  principle of finding and fixing the actual bottleneck rather than
  optimizing everywhere).
