# 4.6 Documentation and knowledge metrics

## Overview and motivation

This chapter closes Part 4 by measuring whether the knowledge needed to
safely maintain a codebase is actually documented and findable, not just
whether documentation technically exists somewhere. Chapter 3.5 covered
communication and collaboration as a developer-experience concern;
this chapter covers the same underlying issue, knowledge availability, from
the code side: does a new engineer, or an existing one working on unfamiliar
code, have what they need to make a safe change, or does that knowledge
live only in the heads of a shrinking number of tenured people.

The measurement challenge here is genuinely hard, harder than most other
metrics in this book, because documentation quality and usefulness are
inherently more subjective than a coverage percentage or a complexity score.
This chapter's approach is to measure proxies for usefulness rather than
existence: how often documentation is actually accessed, how often the same
question gets asked repeatedly despite a documented answer existing, and how
long it takes someone unfamiliar with a system to become productive in it.
None of these proxies is perfect alone, but together they give a far more
honest picture than counting the number of wiki pages or README files a
codebase contains.

For large teams, this chapter's concerns compound with organizational
tenure and turnover in ways that are easy to underestimate until a crisis
forces the issue: a system maintained for years by the same two engineers
can function perfectly well with almost no written documentation, right up
until both of those engineers leave within the same year, at which point
the organization discovers the knowledge was never actually captured
anywhere durable. Enterprise and government organizations, with typically
longer system lifespans and less certain staff continuity than a startup,
carry this risk more acutely than most.

## Key principles

- **Documentation existence is not the same as documentation usefulness.**
  Measure whether it actually helps, not just whether it is present.
- **Repeated questions despite documented answers reveal a discoverability
  problem, not a documentation-effort problem.** More content is not always
  the fix.
- **Onboarding time to productive contribution is a strong, practical
  proxy** for overall knowledge health, connecting directly to chapter
  3.5's collaboration metrics.
- **Knowledge that lives only in people's heads is a durability risk,** not
  a stable, sustainable state, however well it currently functions.
- **Documentation decays.** A page that was accurate a year ago may now be
  actively misleading, and staleness itself needs to be tracked.

## Recommendations

### Track documentation access and staleness, not just existence

Where your documentation platform supports it, track how often pages are
actually viewed, and separately, how long since a page was last updated
relative to how often the underlying system it describes has changed
(cross-referencing churn data from chapter 4.3 is directly useful here). A
page describing a system that has changed substantially since the page was
last edited is a strong candidate for being actively misleading rather than
merely unhelpful, and this staleness signal deserves at least as much
attention as tracking whether documentation exists at all.

### Watch for repeated questions as a discoverability signal

If the same question gets asked repeatedly in a team chat channel or during
onboarding, despite a documented answer technically existing somewhere,
that pattern reveals a discoverability problem, the answer is not where
people naturally look for it, rather than a documentation-effort problem
that more writing would fix. Track recurring questions explicitly, and use
them to prioritize reorganizing or better surfacing existing content over
writing more of it.

### Measure onboarding time to first meaningful, independent contribution

This metric, introduced in chapter 3.5 as a collaboration signal, is
equally a documentation and knowledge-health signal from the code side. A
consistently short, predictable onboarding time suggests genuinely
accessible, accurate knowledge; a long, highly variable time, especially
one that depends heavily on which specific person happens to onboard a new
team member, suggests knowledge that lives dangerously concentrated in
individual memory rather than durable, written form.

### Identify and prioritize undocumented critical-knowledge areas
explicitly

Cross-reference your knowledge-concentration data (chapter 3.5's
[bus-factor](https://en.wikipedia.org/wiki/Bus_factor) analysis) with
documentation coverage: a system with a bus factor of one
and no meaningful documentation is a severe, compounding risk that deserves
priority attention over a well-documented system with the same low bus
factor, since the documentation at least provides a partial mitigation
while a dedicated successor is trained.

### Treat documentation debt as a category within your technical debt
backlog

Rather than tracking documentation gaps separately and informally, fold
significant documentation gaps into the same visible, quantified backlog
described in chapter 4.5, particularly for critical, low-bus-factor
systems, so documentation work competes fairly for prioritized capacity
rather than being perpetually deferred as a lower-status task compared to
code-focused debt remediation.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| No documentation measurement | Low overhead | Knowledge risk stays invisible until a crisis forces discovery |
| Counting documentation existence (page count, README presence) | Simple, easy to report | Says nothing about usefulness, accuracy, or discoverability |
| Tracking access and staleness | Reveals actual usefulness and decay | Requires documentation-platform analytics and ongoing review discipline |
| Onboarding time as a proxy | Practical, concrete, ties directly to real business impact | Indirect; other factors besides documentation also affect onboarding speed |

The central tension is **measurability versus meaning**. Documentation
existence is trivially easy to count and tells you almost nothing useful;
genuine usefulness, whether someone can actually find and rely on
documented knowledge when they need it, is what actually matters but is
harder to measure directly. Resolve the tension by using the proxies this
chapter recommends, access patterns, staleness relative to churn, repeated
questions, and onboarding time, in combination, accepting that no single
one is perfect but that their convergence is far more meaningful than an
existence count alone.

## Questions to discuss with your team

1. **For our most critical, lowest-bus-factor system, does meaningful,
   accurate documentation actually exist, or would a departing expert take
   most of the real knowledge with them?** This is the sharpest, most
   concrete version of this chapter's central concern; answer it honestly
   for your single riskiest system first.

2. **What question gets asked repeatedly in our team chat despite a
   documented answer existing somewhere?** If you can name one immediately,
   that is a discoverability problem worth fixing directly, likely by
   reorganizing or better surfacing existing content rather than writing
   more.

3. **How long did our most recent new team member take to make their first
   meaningful, independent contribution, and how did that compare to the
   team member before them?** A large, unexplained variance between
   individuals often points to knowledge that depends heavily on who
   happens to onboard someone, rather than durable, accessible
   documentation.

4. **When did we last check whether a piece of documentation was still
   accurate, relative to how much the underlying system has changed since
   it was written?** If the honest answer is "we don't systematically check
   this," that staleness risk is likely larger than anyone currently
   assumes.

5. **Does our technical debt backlog (chapter 4.5) include documentation
   gaps, or does documentation work get perpetually deferred as a
   lower-status task compared to code fixes?** Check your actual backlog
   and see whether documentation debt is visible and competing for
   prioritized capacity or effectively invisible.

6. **What would it cost us if the one or two people who understand our
   most critical, least-documented system left within the same year?**
   This concrete, uncomfortable question is worth answering honestly rather
   than treating the risk as abstract or unlikely.

## Sector lens

**Startup.** Formal documentation metrics are usually unnecessary with a
small team where knowledge spreads through constant, direct conversation.
The risk to watch for is the same bus-factor concentration chapter 3.5
warns about, now specifically applied to documentation: as the team grows
past the size where everyone talks daily, undocumented knowledge that
worked fine informally becomes a real liability.

**Small business.** Prioritize documenting your single most critical,
least-redundant system first, even informally, rather than attempting
comprehensive documentation across everything. A short, accurate document
covering your riskiest single point of failure delivers more real value
than broad but shallow coverage everywhere.

**Enterprise.** Documentation staleness and discoverability both scale
badly here, since a large organization accumulates documentation across
many teams and platforms faster than anyone can keep it current or
consistently organized. Invest in documentation-platform analytics to track
access and staleness at scale, and treat documentation debt as a first-class
category in your organization-wide debt backlog.

**Government.** Long employee tenure common in public-sector organizations
can mask severe undocumented-knowledge risk behind apparent stability, since
a system maintained by the same person for fifteen years may function
perfectly well right up until that person retires. Treat documentation
health explicitly as a continuity-of-operations concern, connected directly
to workforce and succession planning, not merely an engineering nicety.

## Examples

**Enterprise.** A financial services company discovered, during an
unrelated reorganization, that its core risk-calculation engine had no
meaningful documentation beyond a few outdated code comments, and the two
engineers who understood it best were both being reassigned to a new
initiative simultaneously. An emergency documentation effort, conducted
under significant time pressure, extracted and recorded the critical
knowledge before the reassignment took effect, but the process took several
weeks of dedicated senior-engineer time that could have been spread more
gradually and cheaply if documentation health had been tracked and
prioritized proactively rather than discovered as an emergency.

**Government.** A state government's decades-old case-management system
had accumulated substantial documentation over the years, but a
discoverability audit found that new team members consistently could not
find relevant existing documentation and repeatedly asked the same handful
of questions in team channels, questions that were, in fact, already
answered somewhere in the agency's sprawling, poorly organized
documentation platform. Rather than writing more content, the agency
invested in reorganizing and improving the search and navigation structure
of its existing documentation, and a follow-up survey showed a measurable
reduction in repeated questions and a meaningfully faster reported
onboarding experience for new staff, without adding a single new page of
content.

## Business case: motivations, ROI, and TCO

The return on measuring and managing documentation health deliberately is
avoided crisis cost: the financial services example above shows the
difference between proactive, gradual knowledge capture and an expensive,
compressed emergency effort forced by unplanned staff movement. Undocumented
critical knowledge is a standing liability that costs nothing visibly until
the moment it becomes very expensive all at once.

The total cost of ownership is mostly the discipline of tracking the
proxies this chapter recommends, access patterns, staleness, repeated
questions, onboarding time, and the willingness to fold documentation gaps
into a prioritized backlog rather than treating them as perpetually
lower-status than code-focused work. That discipline costs far less than
the crisis-mode knowledge extraction the financial services example shows
as the alternative.

## Anti-patterns and pitfalls

- **Counting documentation existence rather than usefulness:** tells you
  almost nothing about whether knowledge is actually accessible when
  needed.
- **Writing more content in response to repeated questions, without first
  checking discoverability:** often addresses the wrong problem entirely.
- **Never checking documentation staleness relative to how much the system
  has changed:** risks actively misleading, out-of-date content.
- **Treating documentation debt as perpetually lower-status than code
  debt:** leaves it chronically deprioritized and invisible on the backlog.
- **Mistaking apparent stability, a system that has not changed in years,
  for low risk:** can mask a severe, undocumented bus-factor problem behind
  a system that simply has not yet needed its sole expert.
- **Discovering critical undocumented knowledge only during an emergency
  staff transition:** the expensive, avoidable failure mode this chapter is
  built to prevent.

## Maturity model

- **Level 1, Initiate:** Documentation health is not measured; knowledge
  concentration and staleness risk are discovered only through crisis.
- **Level 2, Develop:** Some documentation exists, but there is no
  systematic tracking of access, staleness, or discoverability.
- **Level 3, Standardize:** Access and staleness are tracked for critical
  systems, and onboarding time is measured as a proxy for knowledge health
  organization-wide.
- **Level 4, Manage:** Documentation gaps are folded into the prioritized
  technical debt backlog, cross-referenced with bus-factor risk to identify
  the most severe combined risks.
- **Level 5, Orchestrate:** The organization proactively identifies and
  addresses undocumented critical-knowledge risk before a staffing
  transition forces the issue, and can point to specific, measurable
  onboarding or incident-response improvements traced to documentation
  investment.

## Ideas for discussion

1. What is our single most severe combination of low bus factor and poor documentation right now?
2. What question gets asked repeatedly despite a documented answer existing?
3. How would we know if a piece of critical documentation had become stale and misleading?
4. Does our technical debt backlog include documentation gaps, or are they invisible?
5. What would it cost us if our most under-documented system's sole expert left this year?

## Key takeaways

- Measure **usefulness, not existence**: whether documentation actually
  helps, using proxies like access patterns, staleness, and repeated
  questions.
- **Repeated questions despite documented answers** reveal a
  discoverability problem, not necessarily a content-effort problem.
- **Onboarding time to productive contribution** is a strong, practical
  proxy for overall knowledge health.
- **Undocumented critical knowledge is a compounding risk**, especially
  combined with a low bus factor (chapter 3.5); it costs nothing visibly
  until it costs a great deal all at once.
- Fold **documentation gaps into your technical debt backlog** (chapter
  4.5) so they compete fairly for prioritized capacity.

## References and further reading

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, by
  Jared Bhatti, Zachariah Goldberg, Ted Kubaska, and Sarah Moir (practical
  documentation practices for engineering teams).
- *A Philosophy of Software Design*, by John Ousterhout (the relationship
  between documentation, complexity, and maintainability).
- *Team Topologies*, by Matthew Skelton and Manuel Pais (organizational
  design implications of concentrated versus distributed knowledge).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (documentation as one of the capabilities
  correlated with delivery performance).
