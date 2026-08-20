# 3.4 Activity metrics and their limits

## Overview and motivation

**Activity**, the A in SPACE (chapter 3.1), counts the volume of engineering
work observable from system telemetry: commits, pull requests opened, lines
of code changed, code review comments left. It is the easiest SPACE
dimension to measure, because every one of these events is already logged
automatically by tools engineering teams use daily, and that ease of
measurement is exactly what makes this dimension the most dangerous one to
over-weight. Activity is a real, legitimate signal used carefully. Used as a
standalone productivity proxy, it is the single most gamed, most misleading
metric family in the entire history of [software engineering](https://en.wikipedia.org/wiki/Software_engineering) measurement.

The core problem is that activity measures motion, not value. A commit count
does not distinguish between a commit that solved a hard problem elegantly
and a commit that split one meaningful change into five to look more
productive (chapter 1.2's substitution gaming, applied directly to this
metric family). Lines of code changed rewards verbosity over the far more
valuable skill of deleting unnecessary code. An engineer spending a full day
in deep, uninterrupted thought before writing ten elegant, well-tested lines
looks less "active" by these metrics than one committing shallow, unreviewed
changes every twenty minutes, even though the first is very often producing
far more real value.

For large teams, the temptation to use activity metrics for individual
evaluation is constant and well documented, because activity is easy to
attribute to a specific person and easy to compute automatically, unlike the
harder, more honest signals in the other SPACE dimensions. This chapter
exists specifically to name that temptation and give teams language and
evidence to resist it, because once an organization starts individually
ranking engineers by commit count or lines of code, the damage to
collaboration, code quality, and morale is well documented and hard to
reverse.

## Key principles

- **Activity measures motion, not value.** It is a legitimate contextual
  signal, never a standalone productivity proxy.
- **This is the single most historically misused metric family in software
  engineering measurement.** Treat that history as a warning, not a
  coincidence.
- **Individual activity ranking is close to always harmful.** It damages
  collaboration, rewards visible busywork, and invites gaming almost
  immediately.
- **Activity data is most useful in aggregate, as context for other
  dimensions,** not as an independent signal about any one person or team.
- **Deep, valuable work often looks quiet on an activity dashboard.** The
  metric family is structurally biased against exactly the kind of thinking
  that produces the best engineering outcomes.

## Recommendations

### Never rank or evaluate individuals by raw activity counts

This is the single hardest, most important rule in this chapter. Commit
count, lines of code, and pull request count should never appear in an
individual performance review, a comparative ranking, or any context where
an engineer's compensation, standing, or reputation depends on the number.
This directly follows chapter 1.2's incentive-exposure principle: the
moment activity becomes an incentivized individual metric, gaming follows
almost immediately, and the resulting behaviour, padding commits, splitting
changes trivially, avoiding deep, unglamorous work that produces few visible
events, actively harms the organization.

### Use activity data in aggregate, as context, not as a verdict

Activity data becomes genuinely useful when aggregated at the team level
and read alongside the other SPACE dimensions: a sharp drop in team-level
commit activity that coincides with a rise in satisfaction might indicate
the team finally had breathing room to think deeply and pay down technical
debt, a positive pattern, not a negative one. Read in isolation, the same
drop looks alarming. Context from the other dimensions is what makes
activity data interpretable rather than misleading.

### Prefer quality-adjacent activity signals over raw volume

Where activity data is useful at all, prefer signals adjusted for quality
over raw counts: pull request size relative to review depth (chapter 2.8),
or the ratio of new code to code removed, which can reveal whether a team is
accumulating complexity or actively simplifying. These adjusted signals are
still activity-dimension data but resist the crudest gaming that raw counts
invite.

### Watch specifically for the substitution-gaming pattern in activity data

The most common way activity metrics get gamed is exactly chapter 1.2's
substitution pattern: splitting genuinely meaningful work into many small,
trivial events to inflate a count. If commit or pull request frequency
rises while the underlying complexity or size of changes falls sharply,
investigate before crediting a real productivity improvement, using the
same diagnostic discipline chapter 2.9 recommends for deployment frequency.

### Explicitly name and discourage activity theater

**Activity theater** is work performed, consciously or not, primarily
because it is visible and countable rather than because it is valuable:
frequent small commits, conspicuous late-night activity, or visible
busyness in shared channels. Naming this pattern explicitly to your team,
and being transparent that leadership does not use raw activity to judge
contribution, removes much of the incentive for it to occur in the first
place.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Individual activity ranking | Simple, easy to compute, feels directly actionable | Gamed almost immediately; damages collaboration and morale; measures the wrong thing |
| No activity measurement at all | Avoids the misuse risk entirely | Loses genuinely useful contextual signal for team-level pattern spotting |
| Team-level aggregate activity, read in context | Provides useful context without individual risk | Requires discipline to interpret alongside other dimensions rather than in isolation |
| Quality-adjusted activity signals | Resists the crudest raw-count gaming | More complex to compute and explain than a simple count |

The central tension is **usefulness versus misuse risk**. Activity data,
read carefully in aggregate and in context, is genuinely useful for
spotting patterns like unsustainable pace or a team quietly finding room to
address technical debt. The same data, used as an individual scorecard, is
close to uniformly harmful. Resolve the tension not by avoiding activity
data entirely but by building a hard organizational rule against individual
use, while permitting and even encouraging thoughtful, contextualized
team-level use.

## Questions to discuss with your team

1. **Has anyone in our organization ever been evaluated, formally or
   informally, using a raw activity count like commits or lines of code?**
   Ask this directly and be prepared for an uncomfortable but necessary
   answer; this misuse often happens quietly, through an offhand comment
   from a manager, without ever becoming official policy.

2. **What would activity theater look like on our team specifically, and
   have we seen signs of it?** Naming the specific, plausible form this
   pattern could take on your own team makes it far easier to recognize if
   it starts happening.

3. **When our team-level activity data moves, do we interpret it alongside
   the other SPACE dimensions, or in isolation?** A drop in activity read in
   isolation looks concerning; the same drop read alongside a satisfaction
   or performance improvement can look like a genuinely positive pattern.
   Check your actual review practice against this distinction.

4. **Have we ever seen a rise in commit or pull request frequency
   accompanied by a shrinking average change size, suggesting trivial
   splitting rather than genuine productivity gain?** Pull real data and
   check for this specific substitution-gaming pattern.

5. **How do we currently talk about "who is contributing the most" on our
   team, and does that conversation implicitly lean on activity data even
   without a formal metric?** Informal, unmeasured bias toward visible
   busyness can shape perception and reward even without an explicit
   activity-based policy; surface this honestly.

6. **What does genuinely valuable but quiet work, deep thinking, careful
   design, mentoring, look like on our team, and how do we make sure it is
   recognized despite generating little visible activity data?** This
   question is the positive complement to the previous ones: naming what
   good, quiet work looks like helps protect it from being overlooked in
   favour of louder, more countable work.

## Sector lens

**Startup.** With a small, tightly collaborating team, activity data is
usually visible without needing a dashboard at all, and the individual-ranking
risk this chapter warns against is less likely simply because everyone
already knows what everyone else is working on. The risk instead is a
founder unconsciously favouring visibly "busy" behaviour when making early
hiring or equity decisions.

**Small business.** Activity data from your existing tools is fine to glance
at for a general sense of team throughput, but resist using it to compare
individual contributors directly; a small team's real value often concentrates
in a few people doing quiet, high-leverage work that a commit-count view
would systematically undervalue.

**Enterprise.** This is where the individual-ranking temptation is strongest
and most damaging, because activity data is the easiest signal to pull for
a performance review process spanning thousands of engineers, and the
pressure to find *some* quantifiable input is real. Build an explicit,
communicated, enforced policy against individual activity ranking, and
audit performance-review practices periodically to confirm the policy is
actually being followed in practice, not just stated.

**Government.** Activity metrics can be tempting to cite in a public report
as evidence of productivity ("ten thousand commits this year"), but this
kind of headline is close to meaningless and can invite exactly the wrong
scrutiny once a knowledgeable reviewer points out that raw activity says
nothing about outcomes. Report outcome and performance data (chapter 3.3)
instead, and avoid activity counts in any externally facing communication.

## Examples

**Enterprise.** A software company's engineering leadership had, without
formal policy, begun informally referencing individual commit-frequency
data in promotion discussions. An internal review, prompted by an
unrelated attrition-analysis project, found that engineers working on the
company's most complex, highest-value systems, requiring long periods of
careful design work before any code was written, had systematically lower
commit counts than engineers on simpler, more incrementally developed
systems, and were being subtly disadvantaged in promotion conversations as
a result. Leadership issued an explicit, communicated policy prohibiting
activity-count references in performance and promotion discussions, and
shifted promotion evidence toward the multi-signal performance approach
from chapter 3.3.

**Government.** A digital services agency, under pressure to demonstrate
productivity to a legislative oversight committee, initially proposed
reporting total commits and lines of code written across its engineering
programme as evidence of value delivered. An internal technical advisor
pushed back, correctly noting that this framing invited the exact wrong
scrutiny, since a technically literate committee member could easily point
out that raw code volume says nothing about whether the code worked or
mattered. The agency's revised report instead used outcome metrics (chapter
5.3): reduction in citizen-reported errors and increase in successful
self-service completion, which held up far better under committee
questioning than the activity numbers would have.

## Business case: motivations, ROI, and TCO

The return on getting activity metrics right, using them contextually
rather than as individual scorecards, is avoided damage: organizations that
individually rank engineers by activity reliably see gaming behaviour,
reduced collaboration (engineers protecting their own visible output rather
than helping a teammate), and a systematic bias against the deep,
high-leverage work that often produces the most value while generating the
least visible activity. Reversing that damage, once entrenched in a
performance-review culture, is genuinely difficult and slow.

The total cost of avoiding this trap is mostly organizational discipline: an
explicit policy, consistently enforced, against individual activity ranking,
and a commitment to invest in the harder, more honest performance
measurement described in chapter 3.3 instead. That discipline costs less
than the misdirected promotion decisions, damaged collaboration, and gaming
behaviour that individual activity metrics reliably produce over time.

## Anti-patterns and pitfalls

- **Individual ranking by commit count or lines of code:** the single most
  damaging, most historically common misuse in this entire book.
- **Activity theater:** work performed primarily for visibility rather than
  value, an entirely predictable response to activity-based evaluation.
- **Interpreting a team-level activity drop in isolation, without checking
  the other SPACE dimensions:** can mistake a genuinely positive pattern for
  a concerning one.
- **Citing raw activity counts in external or leadership-facing
  communication:** invites exactly the wrong scrutiny and says little about
  actual value.
- **Systematically undervaluing deep, careful work that generates few
  visible events:** a structural bias baked into this entire metric family.
- **Informal, unpolicied activity bias creeping into promotion or review
  conversations:** damaging even without an official metric behind it.

## Maturity model

- **Level 1, Initiate:** Activity metrics are used, formally or informally,
  to evaluate or rank individuals, with no awareness of the risk.
- **Level 2, Develop:** Some awareness of the risk exists, but no explicit
  policy prevents activity data from informally influencing reviews or
  promotion discussions.
- **Level 3, Standardize:** An explicit, communicated organization-wide
  policy prohibits individual activity ranking, and activity data is used
  only in aggregate, team-level context.
- **Level 4, Manage:** Performance-review and promotion practices are
  periodically audited to confirm the policy is followed in practice, and
  quality-adjusted activity signals replace raw counts where activity data
  is used at all.
- **Level 5, Orchestrate:** The organization has demonstrably shifted
  evaluation culture away from activity metrics toward the multi-signal
  performance approach of chapter 3.3, with visible improvement in
  collaboration and reduced gaming behaviour as evidence the shift worked.

## Ideas for discussion

1. Has anyone here ever felt evaluated, even informally, by how "busy" their activity looked?
2. What would activity theater look like specifically on our team?
3. Do we have an explicit, written policy against individual activity ranking, and is it actually followed?
4. What quiet, high-value work on our team currently generates the least visible activity data?
5. How would we redesign our performance-review evidence to remove activity counts entirely?

## Key takeaways

- Activity measures **motion, not value**; it is the single most historically
  misused metric family in software engineering.
- **Never rank or evaluate individuals** by raw activity counts; this is the
  hardest and most important rule in this chapter.
- Use activity data **in aggregate, as context** for the other SPACE
  dimensions, never as a standalone verdict.
- Watch for **activity theater** and the **substitution-gaming pattern**
  (chapter 1.2) specifically within this metric family.
- Deep, high-value work often generates the **least visible activity data**;
  protect it from being systematically undervalued.

## References and further reading

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, by Tom DeMarco and Timothy
  Lister (the case against measuring engineers by visible busyness).
- *Deep Work: Rules for Focused Success in a Distracted World*, by Cal
  Newport (the value of quiet, uninterrupted work that activity metrics
  systematically undercount).
- *The Tyranny of Metrics*, by Jerry Z. Muller (metric fixation and its
  costs, directly applicable to activity-based evaluation).
