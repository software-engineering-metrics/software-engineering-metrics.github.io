# 3.3 Performance metrics and outcome proxies

## Overview and motivation

**Performance**, the P in SPACE (chapter 3.1), is the dimension most often
confused with activity, and that confusion is exactly what this chapter
exists to prevent. Performance asks whether an engineer's or a team's work
actually produced a good [outcome](https://en.wikipedia.org/wiki/Outcome_(probability)):
a feature that shipped and worked, a system that stayed reliable, a change
that moved a business or user metric in the right direction. Activity (chapter 3.4) asks only how much motion
occurred. A team can be highly active and low performing, shipping constant
small changes that never move an outcome, and the reverse is equally
possible: a team that ships rarely but whose changes reliably land exactly
right.

The difficulty with this dimension is that outcome is often not attributable
to a single person or even a single team; software outcomes emerge from
collaboration, from decisions made months earlier by people who have since
moved to other projects, from market conditions no engineer controls. SPACE
researchers were explicit about this: performance should be measured at the
system or team level using multiple, converging signals, not reduced to a
single number and certainly not attributed to an individual engineer in
isolation. This chapter takes that guidance seriously and treats individual
performance attribution as a trap to be actively avoided, not a shortcut to
be taken when convenient.

For large teams, getting performance measurement right is what separates a
metrics programme that actually improves outcomes from one that merely
rewards visible busyness. Enterprise organizations comparing performance
across many teams need signals that resist gaming through raw output volume;
government organizations justifying technology investment to oversight
bodies need to demonstrate that engineering effort produced real outcomes,
not just delivered artefacts, which is precisely chapter 1.3's
outcomes-over-output principle applied to this specific dimension.

## Key principles

- **Performance measures whether work produced a good outcome, not how much
  work occurred.** This is the core distinction from the activity dimension.
- **Use multiple, converging signals, never a single performance number.**
  No individual proxy is reliable enough to stand alone.
- **Measure at the team or system level.** Individual outcome attribution is
  usually unreliable and invites exactly the gaming this book warns against
  throughout.
- **Quality is part of performance, not a separate concern.** Work that
  ships but breaks something else did not really perform well.
- **A performance signal without a decision attached is decoration**,
  exactly per chapter 1.1's general principle applied to this dimension.

## Recommendations

### Combine several converging signals rather than one performance score

Draw performance evidence from multiple sources: change failure rate
(chapter 2.9) and defect-escape rate (chapter 5.1) for quality, deployment
outcomes tied to actual feature adoption (chapter 5.2) for whether the work
mattered, and qualitative peer or manager assessment of a team's
contribution to strategic goals for context a pure metric cannot capture.
No single one of these is reliable alone; together, when they converge on
the same conclusion, they are far more trustworthy than any single number
could be.

### Measure at the team level, resist individual attribution

Software outcomes are rarely the product of one person's work alone; they
emerge from design decisions, review feedback, prior work by people who may
have since left the team, and collaboration across boundaries. Attributing
an outcome to a single engineer is usually a false precision that ignores
this reality and creates a strong incentive for individuals to protect
credit rather than collaborate freely, exactly the kind of incentive
distortion chapter 1.2 warns against.

### Fold quality into the definition of performance directly

A feature that ships on time but causes a wave of production incidents did
not perform well, even though a naive output-only view would count it as
delivered. Build change failure rate, defect-escape rate, and post-release
incident data directly into how you assess performance, rather than
treating quality as a separate, disconnected concern measured only in
Part 4 and Part 6 of this book.

### Use performance data to inform investment and process decisions, not
individual rankings

The productive use of performance data is deciding where to invest further
(a team consistently delivering strong outcomes deserves more resources and
autonomy) and where to investigate (a team whose work consistently fails to
land deserves help, not blame, per chapter 1.1's diagnostic framing).
Ranking individuals or teams competitively against each other on
performance data invites exactly the gaming and morale damage this book
warns against and rarely produces better outcomes than the diagnostic use
does.

### Be honest about attribution limits, especially for platform and
enabling teams

Teams that build shared infrastructure, internal tools, or platform
capabilities (the sibling `software-engineering-guide` book's platform
engineering chapter covers this directly) often have their contribution to
outcomes several
steps removed from any single customer-facing metric. Measure these teams'
performance through their effect on the teams they enable, adoption of their
platform, reduction in friction reported by consuming teams, rather than
forcing an ill-fitting direct-outcome metric onto work that is inherently
indirect.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Single performance score per team | Simple to present and compare | False precision; hides which underlying signal actually drove the score |
| Multiple converging signals | More trustworthy, resists single-metric gaming | Harder to summarize in one number; requires more context to interpret |
| Team-level performance measurement | Matches how software outcomes actually emerge | Cannot directly answer questions about individual contribution |
| Individual-level performance attribution | Feels more directly actionable for reviews | Usually a false precision; strong gaming and credit-protection risk |

The central tension is **precision versus honesty**. A single performance
number per team, or worse, per individual, is easy to compare and rank, but
that precision is usually false, hiding real uncertainty about attribution
and quality behind a clean-looking figure. Resolve the tension by accepting
a less tidy, multi-signal picture as the honest one, and by resisting
pressure from leadership or performance-review processes to collapse it back
into a single, falsely precise score.

## Questions to discuss with your team

1. **Does our current performance measurement combine multiple converging
   signals, or does it rely on a single number that feels more precise than
   it actually is?** Audit whatever you currently call a "performance
   metric" and check how many independent, converging signals actually feed
   into it.

2. **Have we ever attributed a team's or an individual's performance without
   accounting for the collaborative, cross-team nature of how the outcome
   actually happened?** Pick a recent success story and trace how much of
   it depended on people, decisions, or prior work outside the credited
   team or individual.

3. **Does our performance measurement include quality, or only delivery
   speed and output volume?** A shipped feature that later caused
   significant production incidents should not score as high performance;
   check whether your current measurement would actually catch this case.

4. **How do we measure the performance of platform or enabling teams whose
   contribution to outcomes is indirect?** If the honest answer is "we
   don't, well," that gap is worth naming and addressing directly rather
   than leaving those teams effectively unmeasured or unfairly measured
   against customer-facing outcome metrics that do not fit their work.

5. **Has performance data ever been used to rank individuals competitively
   against each other, formally or informally?** This drift, similar to the
   satisfaction-data risk in chapter 3.2, damages both the data's honesty
   and the team's willingness to collaborate openly.

6. **When our converging signals disagree, high delivery speed but rising
   defect rate, for example, what do we conclude, and does our process
   handle that disagreement well?** Disagreement between signals is itself
   valuable information; discuss whether your team currently treats it as
   noise to ignore or as a genuine finding worth investigating.

## Sector lens

**Startup.** Performance is usually visible directly: did the feature work,
did customers adopt it, did the metric move. Formal multi-signal
measurement is often unnecessary at this scale; the risk is instead
attributing success or failure too quickly to one person in a fast-moving,
highly collaborative small team where credit and blame rarely belong to
just one individual.

**Small business.** Combine whatever delivery and quality data you already
have (chapter 2.9, chapter 5.1) with direct, honest conversation about
whether recent work actually helped the business, rather than building
formal multi-signal instrumentation you lack the capacity to maintain.

**Enterprise.** This is where the discipline of team-level, multi-signal
measurement earns its investment, since the pressure to reduce performance
to a single comparable number across dozens of teams is strongest here, and
the damage from false precision compounds across the whole organization's
resourcing decisions. Resist that pressure explicitly and build the
multi-signal case for why it matters.

**Government.** Demonstrating that engineering investment produced real
outcomes, not just delivered artefacts, is often the central question an
oversight body asks. Multi-signal performance measurement, tied explicitly
to outcome metrics (chapter 5.3) rather than delivery-only proxies, gives a
much stronger, more defensible answer than an activity or delivery count
alone.

## Examples

**Enterprise.** A retail technology company's leadership had been informally
ranking engineering teams by story points completed per sprint, treating
this as a performance proxy. After adopting a multi-signal approach,
combining delivery data, change failure rate, and post-release feature
adoption, leadership found that the team with the highest story-point
completion rate had the lowest feature-adoption rate in the company: they
were shipping fast but building things customers did not use. Reallocating
that team's roadmap priorities based on the fuller performance picture,
rather than the misleading single-number ranking, redirected significant
engineering capacity toward higher-impact work within one quarter.

**Government.** A national tax agency's engineering programme needed to
demonstrate to an oversight committee that a major systems investment had
improved performance, not just delivered the contracted scope. Rather than
report story-point or milestone completion alone, the programme presented a
converging set of signals: reduced processing error rate, reduced median
processing time, and increased successful self-service completion rate, all
tied to the specific system components delivered. The multi-signal,
outcome-tied presentation satisfied the committee's scrutiny in a way that a
simple "delivered on schedule" report from a prior programme had failed to
do the year before.

## Business case: motivations, ROI, and TCO

The return on measuring performance through converging, outcome-tied
signals rather than a false-precision single number is better resourcing
decisions: an organization that can see which teams' work genuinely moves
outcomes can invest further where it matters and investigate where it does
not, rather than rewarding whichever team happens to look busiest. The
retail example above is typical: a misleading single-number ranking had
been directing investment attention away from where it would actually have
helped.

The total cost of ownership is higher than a single-metric approach,
because it requires combining data from multiple sources (delivery, quality,
outcome) and resisting organizational pressure to collapse the picture back
into one comparable number. That cost is worth paying because the
alternative, a falsely precise single score, actively misleads the
resourcing decisions performance data is meant to inform.

## Anti-patterns and pitfalls

- **Confusing activity with performance:** the most common error this
  dimension is specifically designed to prevent.
- **Individual performance attribution for collaborative, cross-team
  outcomes:** usually a false precision that discourages collaboration.
- **Excluding quality from the definition of performance:** rewards work
  that ships but breaks something else.
- **Forcing a direct-outcome metric onto platform or enabling teams:**
  measures the wrong thing for work that is inherently indirect.
- **Collapsing multiple converging signals back into one falsely precise
  number under organizational pressure:** loses the honesty the multi-signal
  approach was built to provide.
- **Using performance data to rank individuals competitively:** damages
  both data honesty and team collaboration.

## Maturity model

- **Level 1, Initiate:** Performance is conflated with activity or output
  volume, measured with a single, unexamined number.
- **Level 2, Develop:** Some quality signals are considered alongside
  output, but there is no consistent multi-signal approach and individual
  attribution still happens informally.
- **Level 3, Standardize:** Performance is measured at the team level using
  multiple, converging signals including quality, consistently
  organization-wide.
- **Level 4, Manage:** Disagreement between converging signals is actively
  investigated; platform and enabling teams have appropriately indirect
  performance measures suited to their actual work.
- **Level 5, Orchestrate:** Performance data directly informs resourcing and
  investment decisions, and the organization can point to specific
  reallocation decisions that a multi-signal view enabled and a single-number
  view would have missed.

## Ideas for discussion

1. What single number are we currently using as a performance proxy that we should retire in favour of a converging set?
2. Have we ever credited an outcome to the wrong team or person because attribution was unclear?
3. How do we currently measure the performance of a platform or enabling team?
4. What would it look like if our converging signals disagreed with each other next quarter?
5. Where has a story-point or delivery-count ranking misdirected our investment attention?

## Key takeaways

- Performance measures whether work produced a **good outcome**, not how
  much motion occurred; do not confuse it with activity (chapter 3.4).
- Use **multiple, converging signals**, never a single performance number,
  and be suspicious of false precision.
- Measure at the **team or system level**; individual outcome attribution is
  usually unreliable and damages collaboration.
- **Quality is part of performance**, not a separate, disconnected concern.
- Give platform and enabling teams **appropriately indirect** performance
  measures rather than forcing an ill-fitting direct-outcome metric onto
  their work.

## References and further reading

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (outcome-based performance measurement).
- *Team Topologies*, by Matthew Skelton and Manuel Pais (platform and
  enabling team structures and how to measure their contribution).
- *Measuring and Managing Performance in Organizations*, by Robert D. Austin
  (the risks of false-precision performance metrics).
