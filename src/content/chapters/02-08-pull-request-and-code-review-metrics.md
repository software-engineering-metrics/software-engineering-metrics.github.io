# 2.8 Pull request and code review metrics

## Overview and motivation

[Code review](https://en.wikipedia.org/wiki/Code_review) is usually the single largest wait-time contributor inside the
cycle-time breakdown from chapter 2.6, and it is also the stage most
directly under a team's own control to improve, unlike a shared platform
bottleneck or an external dependency. This chapter covers the specific
metrics that live inside the review stage: time to first review, pull
request size, review iteration count, and reviewer load distribution, and
how to use them to improve review speed without sacrificing the actual
quality benefit review is supposed to provide.

The risk this chapter is most alert to is one this book has not yet
covered directly: optimizing review speed can quietly erode review quality
if pursued carelessly. A team that halves its time-to-first-review by
approving everything with a rubber stamp has improved a metric while
destroying the practice's actual value. Every recommendation in this
chapter is written with that trade-off in view, because pull request
metrics are among the easiest in this book to game in a way that looks good
on a dashboard while making the underlying codebase measurably worse.

For large teams, review metrics reveal load-balancing problems that are
otherwise invisible: a small number of senior engineers absorbing a
disproportionate share of review load, a specific team or codebase area
where reviews consistently stall, or a pattern of oversized pull requests
that make thorough review practically impossible regardless of reviewer
diligence. These patterns compound at scale far more than they do on a
small team, where everyone can see the imbalance directly without needing a
metric to surface it.

## Key principles

- **Time to first review is usually the biggest lever, not review
  thoroughness itself.** Most delay comes from a pull request waiting to be
  looked at, not from the review conversation taking long once it starts.
- **Smaller pull requests get reviewed faster and more thoroughly, not just
  faster.** Size is a leverage point for both speed and quality
  simultaneously.
- **Review speed and review quality are not automatically in tension, but
  they can be traded off carelessly.** Guard against that trade explicitly.
- **Reviewer load imbalance is common and usually invisible without a
  metric.** A small number of people often absorb a disproportionate share.
- **These metrics are exposed to the rubber-stamp gaming risk.** A fast
  approval with no real scrutiny defeats the entire purpose of review.

## Recommendations

### Track time to first review as the primary speed metric

Measure the interval from a pull request being opened to a reviewer's first
substantive comment or approval, instrumented automatically from your
version control platform. This is usually the dominant wait-time
contributor within the review stage (chapter 2.6, chapter 2.7), and
improving it, through clearer review-assignment norms, notification
practices, or dedicated review time blocks, typically produces the largest
single improvement to overall cycle time available to a team.

### Track pull request size and actively encourage smaller changes

Measure lines changed or files touched per pull request, and treat a
persistently large median size as a signal worth addressing directly.
Smaller pull requests are reviewed faster, reviewed more thoroughly (a
reviewer can actually hold the whole change in their head), and are easier
to revert if something goes wrong, connecting directly back to the
batch-size principle behind deployment frequency in chapter 2.2. Encourage
splitting large changes into a sequence of smaller, independently reviewable
pull requests wherever the work allows it.

### Monitor reviewer load distribution explicitly

Track the number of reviews completed per person over a rolling window, and
watch specifically for a small number of people absorbing a
disproportionate share. This pattern is common, often falls on the most
senior or most trusted engineers, and creates both a bottleneck (their
availability caps the whole team's review throughput) and a burnout risk
(chapter 3.2 covers well-being metrics in more depth). Rotate review
responsibility deliberately rather than letting it concentrate by default
around whoever is fastest to respond.

### Guard against the rubber-stamp gaming risk explicitly

Pair time-to-first-review with a quality signal: the rate of defects or
incidents traced back to changes that were approved with zero review
comments, or the rate of post-merge fixes needed for recently reviewed
code. A team that improves review speed by approving without real scrutiny
should see this guardrail degrade, which is exactly the pairing principle
from chapter 1.2 applied to this specific metric family. Never chase review
speed without this counter-metric in view.

### Use review iteration count to spot friction, not to judge individuals

The number of review rounds a pull request goes through before merging can
signal genuine friction, unclear requirements, disagreement about approach,
inconsistent style expectations, worth investigating at the process level.
Avoid using this number to judge individual authors or reviewers directly;
a high iteration count is more often a system or communication signal than
a personal one, and treating it as an individual scorecard risks exactly
the evaluative drift chapter 1.1 warns against.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Optimizing purely for time to first review | Fast, clear signal, easy to instrument | Can incentivize superficial, rubber-stamp review if unguarded |
| Optimizing purely for pull request size reduction | Improves both speed and thoroughness simultaneously | Not all work splits cleanly into small increments |
| Rotating review load evenly | Reduces bottleneck and burnout risk | Can slow review for specialized, hard-to-review code needing specific expertise |
| Concentrating review among senior engineers | Deep domain expertise applied consistently | Creates a bottleneck and a burnout risk over time |

The central tension is **speed versus depth of scrutiny**. Every technique
in this chapter for speeding up review, faster first response, smaller
pull requests, more distributed reviewer load, carries some risk of
trading real scrutiny away if pursued without the quality guardrail this
chapter recommends. Resolve the tension by pairing every speed metric with
a quality signal, tracked over the same period, so a team can tell genuine
process improvement from a quietly eroding review standard.

## Questions to discuss with your team

1. **What is our actual time to first review, and how much of our overall
   cycle time does the review stage consume?** Pull the real number rather
   than relying on impression; review wait time is often larger than teams
   assume, precisely because it is easy to underestimate time spent waiting
   rather than actively working.

2. **What is our median pull request size, and how much of our review delay
   would shrink if that size came down?** Large pull requests are both
   slower to review and more likely to receive superficial review simply
   because a reviewer cannot hold the whole thing in their head at once.
   Look at your actual size distribution, not just the median.

3. **Is review load concentrated among a small number of people, and what
   would happen to our review throughput if one of them were unavailable
   for two weeks?** This question surfaces both a bottleneck risk and a
   burnout risk at the same time. Pull actual reviewer-load data rather than
   relying on impression.

4. **Have we ever improved a review-speed metric in a way that, on
   reflection, reduced actual scrutiny?** Be honest here; this is exactly
   the rubber-stamp risk this chapter names, and it is easy to slide into
   without any deliberate decision to do so.

5. **What does a high review iteration count usually signal on our team:
   genuine disagreement, unclear requirements, or inconsistent style
   expectations?** Look at a sample of pull requests with unusually high
   iteration counts and diagnose the actual pattern, rather than assuming
   it reflects poorly on either the author or the reviewer.

6. **Do we have a quality guardrail paired with our review-speed metrics, or
   are we tracking speed in isolation?** If the honest answer is that no
   such guardrail exists, that is a gap worth closing before pushing review
   speed any further, per chapter 1.2's pairing principle.

## Sector lens

**Startup.** Review is often fast by default with a small team, sometimes
almost too fast, single-approver review with minimal scrutiny because
everyone trusts everyone. The risk to watch for as the team grows is review
quality not scaling alongside team size, since informal trust that worked
for five engineers does not automatically work for fifty.

**Small business.** Most version-control platforms report time-to-merge and
review-count statistics out of the box; use these rather than building
custom instrumentation. The main discipline worth adopting is simply
noticing if review load has silently concentrated on one or two people as
the team has grown.

**Enterprise.** Reviewer load imbalance and specialized-knowledge
bottlenecks are especially common here, where deep domain expertise in a
critical system can concentrate review responsibility on a small group
regardless of team size. Invest in deliberate knowledge-sharing and review
rotation to spread expertise, reducing both the bottleneck and the
bus-factor risk of that expertise living in too few people.

**Government.** Review processes here often carry compliance weight
alongside quality goals, which can make pull requests larger and reviews
slower by design. Where genuine compliance requirements demand thorough
review, focus improvement effort on reducing wait time (faster review
assignment, clearer triage) rather than compromising the review's actual
depth, and document the trade-off explicitly if scrutiny must remain heavy
for regulatory reasons.

## Examples

**Enterprise.** A cybersecurity company's engineering organization found
that a handful of principal engineers were completing over 40% of all code
reviews across a two-hundred-person organization, an imbalance no one had
measured directly until reviewer-load data was pulled. This concentration
was both a bottleneck, since those engineers' availability capped review
throughput for the whole organization, and a burnout risk flagged
separately by an engagement survey (chapter 3.2). The organization
introduced a structured review-rotation programme paired with targeted
knowledge-sharing sessions, and within two quarters review load had spread
across a much wider group, with time to first review improving as a direct
side effect of the reduced bottleneck.

**Government.** A tax authority's engineering team, under pressure to
improve delivery speed, set a target to halve time to first review. Within
one quarter, the target was hit, but a subsequent quality audit found a
sharp rise in post-merge defect-fix pull requests, concentrated in changes
that had been approved with a single, brief comment. The team's fix paired
the speed target with an explicit quality guardrail, the rate of post-merge
fixes needed within two weeks of a review, and retrained the team on what a
substantive review actually required, restoring genuine scrutiny while
keeping most of the speed improvement that had come from better review
assignment and smaller pull request sizes.

## Business case: motivations, ROI, and TCO

The return on well-managed review metrics is faster delivery without
sacrificing quality, which is a rare combination: most delivery
improvements trade speed against risk somewhere, but review-stage
improvements, smaller pull requests, better load distribution, faster
first-response, genuinely improve both simultaneously when pursued with the
quality guardrail this chapter recommends. The cybersecurity example above
is typical: fixing a bottleneck improved speed while the underlying review
quality, if anything, improved as expertise spread more widely.

The total cost of ownership is low: most of these metrics come directly
from existing version-control platform data with minimal additional
instrumentation, and the process changes they point toward, review
rotation, encouraging smaller pull requests, cost mostly discipline rather
than tooling investment.

## Anti-patterns and pitfalls

- **Optimizing time to first review without a paired quality guardrail:**
  invites rubber-stamp approval that defeats review's purpose.
- **Ignoring reviewer load concentration:** creates both a bottleneck and a
  burnout risk that stays invisible until measured.
- **Treating review iteration count as an individual scorecard:** more
  often a system or communication signal than a personal one.
- **Accepting persistently large pull requests as unavoidable:** most large
  changes can be split further than teams initially assume.
- **Applying uniform review depth regardless of change risk:** wastes
  scrutiny on low-risk changes while potentially under-scrutinizing
  high-risk ones.
- **Measuring review speed but never checking whether real scrutiny
  declined alongside it:** the single most common way this metric family
  gets gamed unintentionally.

## Maturity model

- **Level 1, Initiate:** Review metrics are not tracked; review load
  distribution and pull request size are invisible.
- **Level 2, Develop:** Some review-speed data exists from platform
  defaults, but there is no quality guardrail and no active management of
  reviewer load.
- **Level 3, Standardize:** Time to first review, pull request size, and
  reviewer load are tracked consistently, with an explicit quality
  guardrail paired against speed improvements.
- **Level 4, Manage:** Reviewer load is actively rebalanced through
  rotation and knowledge sharing; iteration-count patterns are investigated
  at the process level rather than the individual level.
- **Level 5, Orchestrate:** Review-stage metrics directly inform process
  investment, and the organization can demonstrate simultaneous improvement
  in both review speed and review-linked quality outcomes over a sustained
  period.

## Ideas for discussion

1. What is our current median time to first review, and where does that time actually go?
2. Is our review load concentrated on a small number of people, and what is the risk if one is unavailable?
3. Have we ever improved review speed at the cost of real scrutiny, even unintentionally?
4. What is our median pull request size, and how much smaller could most changes realistically be?
5. Do we treat a high review iteration count as a system signal or an individual judgement?

## Key takeaways

- **Time to first review** is usually the biggest single lever inside the
  review stage, more than review conversation length itself.
- **Smaller pull requests** improve both review speed and review
  thoroughness simultaneously.
- **Reviewer load imbalance** is common and usually invisible without
  direct measurement; it creates both a bottleneck and a burnout risk.
- Pair every review-speed metric with an explicit **quality guardrail** to
  catch the rubber-stamp gaming risk this metric family is especially prone
  to.
- Use **review iteration count** to diagnose system-level friction, not to
  judge individual authors or reviewers.

## References and further reading

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (code review practices and their relationship to
  delivery performance).
- *Modern Code Review* research by Alberto Bacchelli and Christian Bird
  (empirical study of code review practices at scale).
- *Peer Reviews in Software: A Practical Guide*, by Karl E. Wiegers (review
  process design and its trade-offs).
- *The Principles of Product Development Flow*, by Donald G. Reinertsen
  (batch-size reasoning applied to pull request sizing).
