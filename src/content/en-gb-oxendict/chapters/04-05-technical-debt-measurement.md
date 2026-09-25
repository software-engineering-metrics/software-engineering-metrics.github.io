# 4.5 Technical debt measurement

## Overview and motivation

**[Technical debt](https://en.wikipedia.org/wiki/Technical_debt)**, a
metaphor coined by Ward Cunningham, describes the accumulated cost of past
shortcuts, expedient decisions that shipped something sooner but left the
codebase harder to change afterward, in the same way that financial debt
lets you spend now at the cost of interest later. Every codebase carries
some technical debt, and that is not automatically a failure; the metaphor's
real value is that it frames debt as a manageable trade-off rather than
either a shameful secret or an unavoidable, permanent burden. This chapter
is about making that trade-off visible and manageable through measurement,
rather than leaving it as a vague, perpetually deprioritized worry that
every engineer senses but no one can act on with evidence.

The chapters preceding this one, complexity (4.1), coverage (4.2), churn
and hotspots (4.3), and static analysis (4.4), each surface one facet of
technical debt. This chapter's job is synthesis: turning those separate
signals, plus items that never show up in any automated scan (an
undocumented architectural shortcut, a deliberately deferred migration), into
a single, prioritized, visible backlog that competes fairly for investment
against feature work, rather than losing that competition by default simply
because it has no metric attached and no advocate in planning meetings.

For large teams, unmanaged technical debt compounds in a way that is
genuinely dangerous and easy to underestimate: each new shortcut makes the
next change slightly harder, which creates pressure for more shortcuts,
which compounds further. Enterprise and government organizations
maintaining systems over many years are especially exposed to this
compounding effect, and this chapter's central recommendation, a visible,
quantified, prioritized debt backlog, is the mechanism that lets an
organization actually manage the trade-off deliberately instead of drifting
into crisis.

## Key principles

- **Technical debt is a deliberate metaphor for a manageable trade-off, not
  a shameful secret.** Some debt, taken on knowingly, is a reasonable
  business decision.
- **Unmeasured debt loses the prioritization competition against feature
  work by default,** not because it matters less, but because it has no
  visible advocate.
- **Quantify debt in terms decision-makers can weigh: cost to fix versus
  cost of carrying it.** A vague "the code is messy" claim rarely competes
  well against a concrete feature request.
- **Debt compounds.** Each new shortcut makes future changes marginally
  harder, and that effect accelerates if left unmanaged.
- **Not all debt should be paid down.** Some is worth carrying
  indefinitely if the cost of fixing it exceeds the cost of living with it.

## Recommendations

### Build a visible, single technical debt backlog

Consolidate the signals from this part's earlier chapters, complexity
outliers, low mutation-kill-rate areas, hotspots, unresolved static
analysis findings, alongside debt items that only a human can identify (an
architectural shortcut, a deferred dependency upgrade, an undocumented
workaround), into one visible backlog, tracked with the same rigor and
visibility as your feature backlog. Debt that lives only in individual
engineers' memory or in scattered code comments effectively does not exist
for prioritization purposes.

### Quantify each debt item's cost and its carrying cost

For each item, estimate two figures: the cost to fix it (engineering time,
risk of the fix itself) and the cost of carrying it unfixed (how much
slower does related work go, how much additional defect risk does it carry,
how much does it block other work). This framing, borrowed directly from
the financial debt metaphor's own logic, gives decision-makers a real basis
for comparison against feature work's cost and expected value, rather than
an abstract, unquantified complaint.

### Prioritize using impact, not age or loudest advocate

Rank debt items by their combination of carrying cost and how frequently
the affected code is touched (chapter 4.3's churn data is directly useful
here): an item in a rarely modified corner of the codebase, however
unpleasant, matters far less than one sitting directly in the path of your
most active development. Resist prioritizing by which item has been on the
backlog longest or which engineer advocates for it most persistently,
neither of which reliably correlates with actual business impact.

### Allocate dedicated, protected capacity for debt remediation

A debt backlog that must compete item by item against every incoming
feature request in every planning cycle tends to lose consistently, because
feature work usually has a clearer, more immediate business champion.
Allocate a protected percentage of engineering capacity, a common pattern is
somewhere between 10% and 20%, specifically for debt remediation, decided
in advance rather than negotiated fresh every sprint, so debt paydown
happens as a matter of course rather than only in the aftermath of a crisis.

### Accept some debt as permanent, and say so explicitly

Not every item belongs on an active remediation plan. Where the cost to fix
genuinely exceeds the cost of carrying an item indefinitely, particularly
for code in a stable, rarely touched, soon-to-be-retired system, document
that decision explicitly and move the item to a deliberately deprioritized
category rather than letting it sit indefinitely on an active backlog where
its continued presence quietly implies work that will never actually
happen.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| No formal debt tracking | No overhead | Debt loses the prioritization competition by default; compounds invisibly |
| Informal, ad hoc debt awareness | Low overhead, some visibility | Inconsistent; relies on individual memory and advocacy |
| Formal, quantified debt backlog | Competes fairly for investment; enables informed trade-offs | Requires ongoing maintenance and quantification discipline |
| Protected, dedicated remediation capacity | Ensures paydown happens consistently, not just reactively | Reduces capacity available for feature work in the short term |

The central tension is **immediate delivery pressure versus long-term
maintainability**. Feature work almost always has a clearer, more
immediate business champion than debt remediation, which creates
structural pressure for debt to lose every individual prioritization
decision even when its cumulative cost is high. Resolve the tension by
removing debt remediation from the item-by-item competition entirely
through protected, pre-allocated capacity, so the trade-off gets decided
deliberately and in advance rather than being re-litigated, and usually
lost, in every single planning cycle.

## Questions to discuss with your team

1. **Do we have a single, visible technical debt backlog, or does debt
   awareness live mostly in individual engineers' heads?** If the honest
   answer is the latter, that is the single biggest gap this chapter
   recommends closing first.

2. **For our top debt item, could we state its cost to fix and its cost to
   carry in terms specific enough to compare fairly against a feature
   request?** If not, practice this quantification together as a group
   exercise using a real, current item.

3. **What percentage of our engineering capacity actually goes toward debt
   remediation, and was that percentage decided deliberately or does it
   just happen to be whatever survives after feature work is allocated?**
   Look at your actual recent sprints and calculate the real number rather
   than relying on impression.

4. **Is our debt backlog prioritized by genuine business impact, or by
   whichever item has been raised most persistently or has sat there
   longest?** Cross-reference your current prioritization against churn
   data (chapter 4.3) and see whether the two align.

5. **What debt items should we explicitly accept as permanent, rather than
   letting sit indefinitely on an active backlog?** Identify at least one
   real item where the cost to fix genuinely exceeds the cost to carry, and
   discuss moving it to an explicitly deprioritized status.

6. **How has our debt backlog changed over the last year, growing,
   shrinking, or staying flat, and does that trend match our intuition?**
   Track this over time rather than only ever looking at a single snapshot;
   the trend is often more informative than the absolute size at any given
   moment.

## Sector lens

**Startup.** Deliberate, informed debt is often a reasonable strategy at
this stage: shipping fast to validate a hypothesis, with a clear plan to
revisit specific shortcuts if the product proves out, is a legitimate trade,
not a failure. The risk is losing track of which shortcuts were deliberate
and reversible versus which have quietly become permanent, unexamined
liabilities as the codebase grows.

**Small business.** A simple, shared list, even an informal one, naming
your known shortcuts and their rough cost to fix is usually sufficient at
this scale. The main discipline worth adopting is periodically revisiting
that list rather than letting it accumulate silently and become invisible
through familiarity.

**Enterprise.** Protected, pre-allocated remediation capacity matters most
here, since the individual prioritization competition between debt and
feature work reliably favours features across dozens of teams
simultaneously without a structural counterweight. Standardize debt
quantification practice organization-wide so debt items can be compared
fairly across teams for portfolio-level investment decisions.

**Government.** Long-lived systems accumulate debt over years or decades of
incremental, individually reasonable requirement changes, often without any
formal debt tracking at all until a crisis forces the issue. A quantified,
visible debt backlog is a genuinely persuasive tool for justifying
modernization budget to oversight bodies, since it turns a vague "the
system is old" claim into a specific, costed case for investment.

## Examples

**Enterprise.** A telecommunications company's billing platform had
accumulated over a decade of informally acknowledged but never formally
tracked technical debt, with engineers routinely citing "the billing
engine is a mess" in retrospectives with no follow-through. A new
engineering director required every team to build a quantified debt
backlog, estimating fix cost and carrying cost for each item, and allocated
a fixed 15% of engineering capacity to debt remediation going forward. Within
a year, the top five highest-carrying-cost items, representing a small
fraction of the total backlog by count, had been resolved, and change
failure rate (chapter 2.10) for billing-related deploys measurably improved,
demonstrating the disproportionate impact of targeting the highest-carrying-cost
items first rather than working through the backlog in arbitrary order.

**Government.** A national statistics agency's core data-processing system,
originally built over twenty years earlier, had never had a formal debt
assessment despite widespread informal acknowledgement among staff that
significant portions were fragile and poorly understood. A structured debt
assessment, combining static analysis findings, hotspot data, and
interviews with the few remaining engineers who understood the oldest
components, produced a quantified, prioritized backlog that directly
supported a multi-year modernization budget request. Critically, the
assessment also explicitly identified several stable, rarely touched
legacy components as reasonable to leave unchanged, avoiding an
unnecessarily broad and expensive full-system rewrite in favour of a
targeted investment in the specific areas the data showed carried the
highest ongoing cost.

## Business case: motivations, ROI, and TCO

The return on managing technical debt deliberately is avoided compounding
cost: each unaddressed shortcut makes future changes marginally harder, and
that effect accelerates without intervention, eventually producing a
codebase so fragile that even simple changes become slow and risky. The
telecommunications example above shows the return concretely: targeting a
small number of the highest-carrying-cost items produced a measurable
delivery and quality improvement, disproportionate to the modest fraction
of the total backlog those items represented.

The total cost of ownership is the protected capacity allocated to
remediation, typically 10% to 20% of engineering time, which is a real,
visible cost that competes with feature velocity in the short term. That
cost is worth paying because the alternative, unmanaged, compounding debt,
eventually costs far more in slowed delivery and elevated defect rates
across the entire codebase, not just the specific items left unaddressed.

## Anti-patterns and pitfalls

- **No visible, tracked debt backlog:** debt loses the prioritization
  competition by default and compounds invisibly.
- **Vague, unquantified debt claims:** rarely compete well against
  concrete, quantified feature requests in planning.
- **Prioritizing debt by age or advocacy volume rather than impact:**
  misdirects limited remediation capacity.
- **No protected capacity for remediation:** debt paydown only happens
  reactively, after a crisis, rather than as routine, deliberate practice.
- **Treating all debt as equally worth fixing:** wastes effort on
  low-impact items while high-carrying-cost items remain unaddressed.
- **Letting debt sit indefinitely on an active backlog without ever
  deciding it is permanent:** implies future work that will never actually
  happen and clutters genuine prioritization.

## Maturity model

- **Level 1, Initiate:** Technical debt is discussed informally, with no
  tracked backlog and no quantification; it consistently loses to feature
  work.
- **Level 2, Develop:** Some teams track debt informally, but there is no
  consistent quantification, cross-team visibility, or protected
  remediation capacity.
- **Level 3, Standardize:** A visible, quantified debt backlog exists
  organization-wide, with protected remediation capacity allocated
  consistently.
- **Level 4, Manage:** Debt items are prioritized by measured impact
  (carrying cost combined with churn), and permanently accepted debt is
  explicitly documented rather than left ambiguous.
- **Level 5, Orchestrate:** The organization can point to specific,
  measurable delivery or quality improvements traced to targeted debt
  remediation, and debt management is a routine, trusted input to
  engineering investment decisions alongside feature work.

## Ideas for discussion

1. What is our single highest-carrying-cost debt item right now, and could we quantify it?
2. What percentage of our capacity actually goes to debt remediation today?
3. What debt item should we explicitly accept as permanent rather than leave ambiguously on our backlog?
4. Has our debt backlog grown, shrunk, or stayed flat over the last year?
5. What would a quantified debt assessment reveal that our current informal awareness is missing?

## Key takeaways

- Technical debt is a **manageable trade-off, not a shameful secret**;
  quantify it rather than leaving it as a vague, perpetually deprioritized
  concern.
- **Quantify cost to fix versus cost to carry** for each item so it
  competes fairly against feature work.
- **Prioritize by impact** (carrying cost combined with churn), not by age
  or advocacy volume.
- Allocate **protected, dedicated remediation capacity**, decided in
  advance, since debt reliably loses item-by-item competition against
  feature work otherwise.
- **Explicitly accept some debt as permanent** where the cost to fix
  exceeds the cost to carry, rather than leaving it ambiguously on an
  active backlog.

## References and further reading

- Cunningham, Ward, "The WyCash Portfolio Management System" (OOPSLA
  experience report, 1992): the origin of the technical debt metaphor.
- *Managing Technical Debt: Reducing Friction in Software Development*, by
  Philippe Kruchten, Robert Nord, and Ipek Ozkaya (a comprehensive treatment
  of technical debt measurement and management).
- *Refactoring: Improving the Design of Existing Code*, by Martin Fowler
  (the remediation techniques a debt backlog ultimately draws on).
- *Your Code as a Crime Scene*, by Adam Tornhill (hotspot analysis as an
  input to debt prioritization, chapter 4.3).
