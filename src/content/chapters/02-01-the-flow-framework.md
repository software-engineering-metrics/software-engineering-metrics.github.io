# 2.1 The Flow Framework

## Overview and motivation

The **Flow Framework** is a managerial and structural model created by Mik
Kersten and published in his 2018 book *Project to Product*. It exists to
answer a question that pure pipeline metrics cannot: not just how fast and
how safely code moves from commit to production, but what kind of value is
moving through the pipeline at all, and whether that mix reflects the
business's actual strategy. The framework treats software delivery as a
**[value stream](https://en.wikipedia.org/wiki/Value_stream)**, the
end-to-end sequence of activities that turns an idea into value a customer
receives, borrowing directly from the value stream mapping tradition of
lean manufacturing.

This book uses the Flow Framework as Part 2's organizing structure. Chapter
2.2 introduces its four flow items, chapters 2.3 and 2.4 introduce its five
flow metrics, and chapter 2.9 covers the DORA metrics as a narrower,
pipeline-focused reference framework this part no longer leads with. That
is a deliberate choice, not a dismissal of DORA's research. DORA measures
system throughput and stability with genuine statistical rigor, but it is
silent on the question a business leader actually cares about most: given
everything the engineering organization shipped this quarter, how much of
it was new customer value, and how much was quietly consumed by fixing
defects, managing risk, or paying down debt. The Flow Framework exists
specifically to make that mix visible.

For large teams, this distinction is not academic. A platform organization
running dozens of value streams can have excellent DORA numbers, fast,
frequent, stable deployments, while its actual product output has quietly
drifted toward almost pure maintenance work, a pattern invisible to a
dashboard that only measures pipeline mechanics. Enterprise and government
organizations, which must justify engineering investment to stakeholders
who think in business terms, not pipeline terms, need a vocabulary that
connects delivery activity to strategic intent. That is what this framework
provides.

## Key principles

- **A value stream is the unit of measurement, not a team or a pipeline.**
  It spans from a customer or business need to the delivered outcome,
  crossing whatever team boundaries the work actually crosses.
- **Flow items make the "what" visible, not just the "how fast."** Chapter
  2.2's four categories, features, defects, risks, and debt, turn an
  implicit prioritization decision into an explicit, measurable one.
- **Capacity allocation across flow items is zero-sum.** More capacity spent
  on one item type is less capacity available for the others; the framework
  makes that trade-off visible instead of leaving it implicit.
- **The five flow metrics answer business questions, not just engineering
  ones.** They are designed to be presented to a non-technical stakeholder,
  not kept inside an engineering team.
- **Value stream management should be continuous, not a one-time mapping
  exercise.** Static value stream maps go stale; the framework is built to
  be instrumented from the tools teams already use.

## Recommendations

### Map your value stream before you instrument anything

Before adopting any flow metric, walk the actual path a piece of work takes
from a business need being identified to a customer receiving value,
naming every stage and every handoff between teams. This is the classic
[value stream mapping](https://en.wikipedia.org/wiki/Value_stream_mapping)
exercise, adapted from lean manufacturing, and skipping it is the most
common reason a Flow Framework adoption produces numbers nobody trusts:
metrics computed against an unexamined, informally understood process
rarely match what is actually happening.

### Connect flow metrics to the tools your teams already use

The Flow Framework is built for continuous, automated value stream
management, not a periodic manual mapping exercise. Integrate flow-item
tracking directly into the tools work already flows through, Jira, Azure
DevOps, GitHub, rather than building a parallel tracking system teams have
to update by hand. A flow item's state should update itself as the
underlying ticket or pull request moves, the same instrumentation-over-
self-report discipline chapter 1.5 recommends for every metric in this
book.

### Present flow distribution to business stakeholders directly, not just engineering leadership

The single biggest missed opportunity with this framework is treating it as
an internal engineering tool. Flow distribution, the proportion of work
going to features versus defects, risk, and debt (chapter 2.3), is
specifically designed to be a conversation you have with product and
business leadership, because it makes an implicit prioritization decision,
how much capacity goes to new value versus keeping the lights on, explicit
and negotiable instead of assumed.

### Treat the four flow items as a genuine taxonomy, not a formality

Require every unit of work to be classified into exactly one of the four
flow item types at intake, not retroactively. A classification applied
after the fact, or applied loosely because "it's basically a feature,"
erodes the entire value of the taxonomy, because the whole point is an
honest, consistent record of where capacity actually went.

### Revisit your value stream map when the organization changes, not on a fixed schedule

A value stream map goes stale the moment team boundaries, tooling, or the
product itself changes meaningfully, not on some arbitrary annual cadence.
Treat a reorganization, a major tooling migration, or a significant product
pivot as a trigger to re-walk the value stream, because a flow metric
computed against a stale map quietly measures the wrong thing.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Pipeline metrics only (DORA, chapter 2.9) | Simple, well-validated, cheap to instrument from existing CI/CD data | Silent on what kind of value is being delivered |
| Full Flow Framework adoption | Connects delivery to business strategy; makes value mix visible and negotiable | Requires an honest value stream map and consistent flow-item classification discipline |
| Static, one-time value stream mapping | Cheap, quick to run as a workshop exercise | Goes stale quickly; produces a snapshot, not a live metric |
| Continuous, tool-integrated value stream management | Live, always-current data; scales across many value streams | Requires real tooling integration work up front |

The central tension is **business legibility versus instrumentation
effort**. Pipeline metrics are cheap because the pipeline already produces
the data; value stream metrics require an honest map of the whole process
and a disciplined, intake-time classification habit that pipeline metrics
never demanded. Resolve the tension by starting with one value stream, not
the whole organization at once, mapping it properly, and only then
integrating flow-item tracking into existing tools, rather than attempting
a big-bang rollout across every team simultaneously.

## Questions to discuss with your team

1. **Could we draw an accurate value stream map for our most important
   product right now, or would we be guessing at several of the handoffs?**
   Most organizations have never actually walked this path end to end.
   Attempt the exercise honestly and note every place where the group
   disagrees about what actually happens, because that disagreement is
   itself diagnostic.

2. **If we classified everything our team shipped last quarter into
   features, defects, risk, and debt, would the result surprise our
   product leadership?** Most teams have never made this split explicit,
   and the answer often reveals a maintenance burden or a debt problem that
   was previously invisible in a simple "story points delivered" count.

3. **Do we have a genuine, tool-integrated way to track flow items, or
   would this require someone to manually classify and re-classify work by
   hand?** A manual system decays quickly under real workload; a
   tool-integrated one does not. Assess honestly which one you are actually
   prepared to sustain.

4. **When did our value stream map last change, and have we updated our
   metrics to reflect that?** Reorganizations and tooling migrations
   silently invalidate a value stream map, and few organizations remember
   to revisit it when that happens.

5. **Are our flow metrics ever presented directly to business or product
   stakeholders, or do they stay inside engineering?** The framework's
   biggest advantage over pipeline-only metrics is exactly this
   conversation, and skipping it forfeits most of the framework's value.

6. **What would it take for someone to game our flow-item classification
   without doing anything dishonest on paper?** Walk through how a team
   under delivery pressure might quietly relabel debt or risk work as
   features to look more productive, and discuss whether you would
   currently notice.

## Sector lens

**Startup.** A full value stream map is usually overkill for a five-person
team where everyone already knows the whole process by heart. The useful
habit at this scale is simply naming the four flow item types out loud in
planning conversations, so debt and risk work do not silently disappear
from view the moment a feature deadline looms.

**Small business.** Adopt flow-item classification inside whatever
lightweight tracking tool you already use, a labelled column or a custom
field, rather than any dedicated value stream management product. The
discipline of consistent classification matters far more than the
sophistication of the tooling behind it.

**Enterprise.** This is where the framework earns its keep, because a large
organization running dozens of value streams across many product lines has
no other reliable way to see, in one place, how engineering capacity is
actually being allocated across features, defects, risk, and debt. Invest
in the tooling integration; the manual alternative does not survive contact
with real scale.

**Government.** Flow distribution gives a public-sector engineering
organization a defensible, business-legible answer to "why isn't more new
functionality shipping," when the honest answer is a growing share of
capacity going to security remediation or legacy debt. Making that trade-off
visible and explicit, rather than absorbing the pressure silently, is often
the single most useful thing this framework offers a government technology
leader.

## Examples

**Enterprise.** A large insurance carrier's claims platform organization
believed it was primarily shipping new features, based on its sprint
velocity reports. A first value stream mapping and flow-item classification
exercise revealed that debt and risk work, much of it undocumented technical
debt from a decade-old core system, actually consumed close to half of
total engineering capacity, a fact no prior reporting had surfaced because
that work had always been folded into generic "engineering tasks."
Presenting this split to the executive committee secured a dedicated debt-
reduction budget for the first time in the platform's history, rather than
debt work continuing to compete silently against every feature request.

**Government.** A national tax authority's digital services division used
value stream mapping to diagnose why a flagship citizen-facing feature had
been "in progress" for over a year despite steady sprint completion. The
map revealed the value stream actually spanned five separate teams with
three handoffs the organization chart did not reflect, and flow-item
classification showed the feature's actual engineering time was a small
fraction of its total flow time, the rest consumed by handoff delays between
teams that no single team's own metrics could see. The division restructured
around the value stream rather than the org chart for that specific product
line, cutting flow time substantially within two quarters.

## Business case: motivations, ROI, and TCO

The return on adopting the Flow Framework is a defensible, business-legible
answer to a question pipeline metrics cannot answer: is engineering capacity
allocated the way leadership believes it is. The insurance example above,
surfacing nearly half of capacity going to previously invisible debt work,
is a common pattern once an organization actually classifies its work
honestly, and that visibility routinely unlocks investment that a vague
"we need more time for technical debt" request never could.

The total cost of ownership is concentrated in two places: the initial value
stream mapping exercise, which takes real facilitation time to do honestly,
and the tooling integration needed to keep flow-item data current without
manual upkeep. Both costs are one-time or low-maintenance once done well,
which makes the framework considerably cheaper to sustain than it is to
adopt.

## Anti-patterns and pitfalls

- **Treating value stream mapping as a one-time workshop, never revisited:**
  the map goes stale the moment the organization changes, and a metric
  computed against a stale map measures the wrong thing.
- **Building a parallel, manually maintained flow-item tracking system:**
  decays quickly under real workload; integrate into existing tools instead.
- **Classifying flow items retroactively rather than at intake:** the
  gaming vector at the heart of this chapter. Under delivery pressure, a
  team can quietly relabel debt or risk work as features after the fact to
  look more productive to stakeholders who only see the flow distribution
  chart, without anyone ever making an explicit, visible decision to do so.
  The guardrail is to require classification at intake, before the outcome
  is known, and to periodically audit a sample of classified items against
  what the underlying change actually did, the same audit discipline
  chapter 1.2 asks for with every metric in this book.
- **Keeping flow metrics inside engineering only:** forfeits the framework's
  main advantage, a shared vocabulary with business stakeholders.
- **Mapping the org chart instead of the actual value stream:** hides
  cross-team handoffs that are often the largest source of delay.
- **Adopting the framework organization-wide before validating it on one
  value stream:** risks a large investment in metrics nobody trusts because
  the underlying map was never confirmed accurate.

## Maturity model

- **Level 1, Initiate:** No value stream map exists; work is tracked as
  generic tickets with no flow-item classification.
- **Level 2, Develop:** One value stream has been mapped and flow items are
  classified informally, but tracking is manual and inconsistently applied.
- **Level 3, Standardize:** Flow-item classification is integrated into
  existing tooling and applied consistently at intake across major value
  streams.
- **Level 4, Manage:** Flow distribution is reviewed regularly with business
  stakeholders, and value stream maps are actively kept current as the
  organization changes.
- **Level 5, Orchestrate:** The organization allocates engineering
  investment deliberately across value streams using flow data, and can
  point to specific strategic decisions, a debt-reduction budget, a team
  restructuring, made because the framework made a previously invisible
  trade-off visible.

## Ideas for discussion

1. Could we draw an accurate value stream map for our flagship product today, without guessing?
2. What percentage of last quarter's capacity would an honest flow-item classification reveal went to debt and risk, versus features?
3. Do our flow metrics currently reach business stakeholders, or do they stay inside engineering?
4. What is the biggest cross-team handoff in our value stream that our org chart does not reflect?

## Key takeaways

- The **Flow Framework**, from Mik Kersten's *Project to Product*, measures
  what kind of value moves through a delivery pipeline, not just how fast
  the pipeline itself runs.
- A **value stream**, not a team or a pipeline, is the framework's unit of
  measurement, and mapping it honestly comes before instrumenting anything.
- **Flow-item classification at intake, not after the fact**, is the
  guardrail against this chapter's central gaming vector: quietly relabeling
  debt or risk work as features to look more productive.
- **Connect flow metrics to existing tools**, Jira, Azure DevOps, GitHub,
  rather than a parallel manual tracking system that will not survive real
  workload.
- Present flow data **directly to business stakeholders**; that
  conversation, not an internal engineering dashboard, is the framework's
  main advantage over pipeline-only metrics.

## References and further reading

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of
  Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
