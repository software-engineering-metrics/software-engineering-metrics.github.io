# 1.4 Metrics governance and ownership

## Overview and motivation

A metric without an owner is a standing argument waiting to happen. Two teams
compute "active users" differently and spend a meeting reconciling numbers
instead of managing the trend; a dashboard tile nobody maintains quietly goes
stale for months before anyone notices; a metric originally built for one
team's diagnosis gets adopted by another team for a purpose its original
definition was never designed to support. None of this is a measurement
problem in the statistical sense. It is a governance problem, and it is
solvable with the same discipline organizations already apply to code:
explicit ownership, a documented [source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth), and a review process.

Governance is not bureaucracy for its own sake. It is what makes a metrics
programme survive contact with organizational scale. A single team can keep
its metric definitions in someone's head and correct drift through daily
conversation. An organization with dozens of teams, each producing and
consuming metrics, cannot. Without governance, definitions drift silently,
metrics multiply without anyone pruning them, and by the time leadership
notices two reports disagree, the cost of reconciling them has already been
paid many times over in wasted meetings and eroded trust.

For enterprise and government organizations, governance carries additional
weight because metrics increasingly feed decisions with real consequences,
budget allocation, public performance reporting, vendor contracts, that
outlive any single person who built the original dashboard. A metrics charter
that survives staff turnover, that any new team member can read and
understand, is what keeps an organization's numbers meaning the same thing
five years from now as they do today.

## Key principles

- **Every metric has exactly one owner.** Shared ownership is no ownership;
  when everyone owns a definition, no one maintains it.
- **A metric has one source of truth.** Two systems computing the same
  metric differently is a governance failure waiting to surface.
- **Governance is written down, not tribal knowledge.** A metrics charter
  that lives only in someone's memory does not survive their departure.
- **Retirement is as important as adoption.** A healthy metrics programme
  prunes as deliberately as it grows.
- **Governance scales with consequence, not with metric count.** A metric
  feeding a public report needs heavier governance than one a single team
  uses to debug its own sprint.

## Recommendations

### Write a metrics charter for every metric set that crosses a team boundary

A **metrics charter** is a short, living document that states a metric set's
purpose, its explicit non-goals (chapter 1.1's diagnostic-versus-evaluative
distinction belongs here), each metric's owner and source of truth, and a
review cadence. Keep it to one page. The docs/examples/metrics-charter-example.md
file in this book's companion repository shows the shape. A charter this
short gets read; a charter that sprawls into a policy document does not.

### Assign a named owner to every metric, not a team

"The platform team owns this metric" diffuses responsibility until nobody
actually maintains it. Name a person or a specific, accountable role. That
owner is responsible for the metric's definition staying accurate, its
instrumentation staying healthy, and for answering the question "why does
this number look wrong" when it inevitably comes up. Ownership can and should
rotate as people change roles, but the charter should always name a current
owner, never leave the field blank.

### Establish one source of truth per metric and forbid parallel computation

When two systems compute the same nominally named metric differently, for
example one team's "active users" counting logins and another's counting
API calls, the resulting disagreement costs far more in reconciliation
meetings than it would have cost to agree on one source of truth up front.
Name the authoritative system for each metric in the charter, and treat any
other computation of the same metric as either a bug to fix or a
differently-named metric to rename.

### Build a retirement review into the governance cadence

A metrics programme that only ever adds metrics accumulates dashboard sprawl
that no one can act on (chapter 1.1). At every governance review, alongside
proposing new metrics, ask which existing ones have not informed a decision
in the last two cycles and are candidates for retirement. Retirement is not
failure; it is the same discipline a healthy codebase applies to dead code.

### Scale governance rigor to consequence, not to volume

Not every metric needs the same process. A metric a single team invents to
debug its own sprint needs almost no governance beyond the team knowing what
it means. A metric that feeds an executive scorecard, a public performance
report, or an individual's compensation needs a documented definition,
a named owner, an audit trail, and sign-off before it goes live. Match the
weight of your process to the consequence of the metric being wrong, not to
how many metrics exist.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| No formal governance | Fast, low overhead for small teams | Definitions drift; ownership diffuses; dashboards sprawl unchecked |
| Lightweight charter per metric set | Cheap, readable, scales with the organization | Requires discipline to keep current; can be skipped under deadline pressure |
| Heavy central metrics governance board | Strong consistency, strong audit trail | Slow to approve new metrics; can become a bottleneck teams route around |
| Governance scaled to consequence | Matches effort to actual risk | Requires judgement to classify consequence correctly; can be gamed by understating stakes |

The central tension is **consistency versus speed**. Heavy central
governance produces trustworthy, consistent metrics but slows a team down
exactly when it wants to instrument something quickly to answer an urgent
question. Resolve the tension by scaling governance weight to consequence: let
teams instrument freely for their own diagnostic use, and require the full
charter, ownership, and sign-off discipline only once a metric crosses a team
boundary or feeds an evaluative or public use.

## Questions to discuss with your team

1. **Does every metric that crosses a team boundary have a named owner, and
   would that owner recognize themselves as accountable if asked today?**
   "The platform team owns it" is not an answer; a specific person or role
   is. Audit your cross-team metrics and check whether the named owner, if
   one exists at all, actually knows they hold that responsibility.

2. **Where do we currently compute the same nominally named metric two
   different ways, and how much time have we spent reconciling the
   disagreement?** This is one of the most expensive and most common
   governance failures in large organizations, and it is entirely
   preventable with a documented single source of truth. Bring a real
   example if you have one and trace its cost.

3. **When did we last retire a metric, and what triggered that decision?**
   An organization that can only describe how it adds metrics, never how it
   removes them, is accumulating dashboard debt. If you cannot recall a
   retirement, that absence is itself the answer to this question.

4. **Is our governance process proportional to consequence, or does every
   metric go through the same weight of review regardless of stakes?**
   Overly heavy governance on a low-stakes team metric slows work for no
   safety benefit; overly light governance on a metric feeding a public
   report or a compensation decision is a real risk. Map your current
   metrics by consequence and check the process weight against it honestly.

5. **What happens to a metric's ownership when the person who built it
   changes roles or leaves?** A metrics charter that only exists in one
   person's head disappears with them. Test this by picking a metric and
   asking whether a new hire could, from written documentation alone,
   understand its definition, source of truth, and purpose.

6. **How would we know if a metric's definition had silently changed?** A
   change to how a number is computed, without a change to its name or a
   note in its history, is nearly invisible until someone compares old and
   new data and finds a discontinuity they cannot explain. Discuss whether
   your metrics carry any form of change log today.

## Sector lens

**Startup.** Formal governance is usually overkill for a five-person team
where everyone already knows what every number means. The one discipline
worth adopting early anyway is naming a single owner per metric in writing,
because it costs almost nothing and prevents confusion as the first few
hires join and start asking what a number means.

**Small business.** Governance here mostly means choosing, and sticking with,
one tool as the source of truth for each metric rather than letting
spreadsheets and a platform's built-in dashboard silently diverge. Write the
charter as a single shared document, even an informal one, so a new employee
can find out what a number means without asking around.

**Enterprise.** This is where governance earns its keep. Standardize
definitions across business units, require a charter for anything feeding
an executive scorecard, and build retirement review into a recurring
governance cadence, because dashboard sprawl at this scale becomes expensive
fast, both in maintenance cost and in the credibility loss when two divisions
report contradictory numbers for the same thing.

**Government.** Governance here often has a legal or audit dimension:
published performance measures may need to satisfy statutory reporting
requirements, and a definition change can have real political consequences.
Document methodology publicly, freeze definitions across reporting periods
unless a change is itself publicly justified, and treat an independent audit
of the metric's definition, not just its current value, as a standing
governance practice.

## Examples

**Enterprise.** A multinational software company discovered, during a
post-acquisition integration, that its two largest business units defined
"deployment frequency" differently: one counted every push to a staging
environment, the other counted only production releases. Leadership had been
comparing the two units' delivery performance for over a year using numbers
that were not actually comparable. The fix was a company-wide metrics
governance board that published a single glossary of metric definitions
(mirrored in this book's chapter 9.2), required every team to certify
compliance, and retired the ambiguous local definitions within one quarter.

**Government.** A national statistics office responsible for publishing a
digital-services performance dashboard found that a change in how "resolved
within SLA" was calculated, made quietly by an engineering team fixing what
they saw as a bug, had shifted a headline compliance figure by several
percentage points with no public documentation of the change. The office
established a formal change-control process for any metric definition
feeding a public report: proposed changes require a documented rationale, a
before-and-after comparison published alongside the change, and sign-off
from a named accountable official, closing the gap that had let the earlier
change pass unnoticed.

## Business case: motivations, ROI, and TCO

The return on governance is avoided reconciliation cost. Every hour spent in
a meeting where two teams argue about whose number is right is an hour that
disciplined governance, a single source of truth, a named owner, would have
prevented entirely. At enterprise scale, this cost compounds across dozens
of teams and can consume a genuinely significant share of leadership's
attention on a problem that a one-page charter per metric set would have
avoided.

The total cost of ownership of a lightweight governance practice, a charter,
a named owner, a periodic review, is modest and mostly upfront. The
alternative, discovering a year into a major initiative that the numbers
leadership has been trusting were never actually comparable, costs
dramatically more, both in wasted analysis and in the credibility damage of
correcting the public or internal record after the fact.

## Anti-patterns and pitfalls

- **Team ownership instead of named-person ownership:** diffuses
  accountability until no one actually maintains the definition.
- **Parallel computation of the same nominal metric:** guarantees eventual
  disagreement and expensive reconciliation.
- **A charter that only exists in someone's head:** disappears the moment
  that person changes roles.
- **A metrics programme that only ever adds, never retires:** produces
  dashboard sprawl no one can act on.
- **Uniform governance weight regardless of consequence:** slows low-stakes
  work while under-protecting high-stakes public or compensation-linked
  metrics.
- **Silent definition changes:** a metric's meaning shifts with no change
  log, and historical comparisons quietly become invalid.

## Maturity model

- **Level 1, Initiate:** Metrics have no formal owners; definitions live in
  individual memory and drift silently across teams.
- **Level 2, Develop:** Some teams write informal documentation for their
  own metrics, but there is no shared charter format or cross-team
  consistency.
- **Level 3, Standardize:** Every metric crossing a team boundary has a
  documented charter, a named owner, and a single agreed source of truth,
  enforced organization-wide.
- **Level 4, Manage:** A recurring governance cadence reviews metrics for
  continued relevance, retires ones that no longer earn their keep, and
  tracks definition changes with a visible history.
- **Level 5, Orchestrate:** Governance is proportional to consequence,
  automated where possible (a metrics catalogue that flags undocumented or
  unowned metrics), and the organization can demonstrate, on demand, the full
  provenance of any published number.

## Ideas for discussion

1. Could a new hire find out, from documentation alone, what our three most important metrics actually mean?
2. Which of our metrics do two different systems currently compute differently?
3. When did we last retire a metric, and how did we decide to?
4. Is our governance process heavier where the consequence is highest, or is it uniform?
5. Who owns our organization's single most consequential public-facing metric, by name?

## Key takeaways

- Every metric needs **one named owner**, not a team, and **one source of
  truth**, not parallel computation.
- Write a short, living **metrics charter** for any metric set that crosses
  a team boundary, stating purpose, non-goals, ownership, and review cadence.
- **Retirement** is as important a governance discipline as adoption; prune
  deliberately.
- Scale governance rigor to **consequence**, not to metric count: heavier
  process for public, evaluative, or compensation-linked metrics.
- A metric definition can drift silently; track changes with a visible
  history so trust in a number survives staff turnover.

## References and further reading

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data
  Governance Program*, by John Ladley (governance structures applicable to
  metrics programmes).
- *Measuring and Managing Performance in Organizations*, by Robert D. Austin
  (organizational dysfunction around metric ownership and use).
- *Key Performance Indicators*, by David Parmenter (metric ownership,
  definition discipline, and review cadence).
- U.S. Government Accountability Office (GAO) guidance on performance
  measurement and the GPRA Modernization Act: public-sector metric
  governance and change control.
