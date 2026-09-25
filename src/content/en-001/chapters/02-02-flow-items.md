# 2.2 Flow items: features, defects, risks, and debt

## Overview and motivation

A **flow item** is the Flow Framework's unit of work, and every flow item
belongs to exactly one of four types: **features**, new business value or
capability delivered to a customer; **defects**, quality fixes for bugs
found by users or testing; **risks**, security, compliance, privacy, and
governance work that protects the business; and **debt**,
[technical debt](https://en.wikipedia.org/wiki/Technical_debt), architectural
improvement, and infrastructure work that enables future speed. Chapter 2.1
introduced the framework these four categories belong
to; this chapter goes deep on the taxonomy itself, because the categories
only deliver value if a team classifies its work into them honestly and
consistently.

The defining property of flow items is that allocation across the four
types is a **zero-sum game**: a fixed amount of engineering capacity exists
in any given period, and every hour spent on a feature is an hour not
spent on debt, risk, or defect work. This is not a new fact about software
delivery, every engineering leader already knows capacity is finite, but
most organizations have no consistent, honest way to see the actual split.
Sprint velocity counts story points regardless of type; a burned-down
backlog looks identical whether the work behind it was a new checkout flow
or three months of unglamorous security remediation. Flow items exist
specifically to make that invisible split visible.

For large teams, this visibility changes the nature of a resourcing
conversation. Instead of an engineering leader making an unquantified
argument that "we need more time for technical debt," flow-item
classification produces an actual number, debt consumed 30% of last
quarter's capacity, that can be discussed, defended, and adjusted
deliberately with business stakeholders. Enterprise organizations running
many concurrent product lines and government agencies balancing new
citizen-facing functionality against legacy system risk both depend on this
kind of defensible, quantified trade-off far more than a private, informal
sense that "we're spending too much time on maintenance."

## Key principles

- **Every flow item belongs to exactly one type.** Forcing a single
  classification, rather than allowing a blended or ambiguous one, is what
  makes the taxonomy usable for aggregate reporting.
- **Allocation is zero-sum, not additive.** More capacity for features is
  necessarily less capacity for defects, risk, and debt in the same period.
- **There is no universally healthy distribution.** A young product in a
  growth phase should legitimately skew toward features; a mature system
  carrying real technical risk should legitimately skew toward debt and
  risk work.
- **Debt and risk work is chronically underreported without this
  discipline.** It tends to happen quietly, absorbed into generic
  "engineering tasks," until flow-item classification forces it into the
  open.
- **Classification quality determines the taxonomy's entire value.** A
  taxonomy applied inconsistently or gamed after the fact produces numbers
  that actively mislead rather than inform.

## Recommendations

### Classify every item at intake, using a written definition for each type

Agree on a concise, written definition for what counts as a feature, a
defect, a risk, and debt in your specific context, and require every new
piece of work to be classified against that definition the moment it enters
the value stream, not after it is completed. A definition agreed in advance
resists the temptation to classify retroactively based on how a piece of
work turned out to look, which is exactly the gaming risk this chapter names
directly below.

### Report flow distribution as a trend, not a single snapshot

A single period's distribution tells you less than the trend across several
periods. A steady drift toward one item type, features climbing while debt
quietly shrinks quarter over quarter, is a much stronger signal than any
single period's number, and it is usually the pattern worth raising with
stakeholders before it becomes a crisis rather than after.

### Set a deliberate target distribution with business stakeholders, not just engineering

Decide, together with product and business leadership, what a healthy
distribution looks like for your specific value stream's current phase, and
revisit that target periodically rather than letting it drift by default.
A young, growth-phase product and a mature, stability-phase system have
legitimately different healthy targets, and the target itself should be a
negotiated business decision, not something engineering quietly decides
alone.

### Cross-check flow-item classification against independent evidence

Periodically compare your flow distribution against metrics that do not
depend on self-classification: escaped defect rate (chapter 5.1), technical
debt measurement (chapter 4.5), and vulnerability management metrics
(chapter 6.4). If defects or vulnerabilities are rising while the "defects"
and "risk" flow item shares stay flat or shrink, that mismatch is the
clearest available signal that classification has drifted from reality.

### Watch for the feature factory pattern specifically

When flow distribution shows features consistently absorbing nearly all
capacity, quarter after quarter, with debt and risk work never rising above
a token share, that pattern (sometimes called a "feature factory") usually
means debt and risk are being starved of capacity, not that the system
genuinely needs no maintenance. This pattern is comfortable in the short
term and expensive later, showing up eventually as a quality or security
crisis that arrives with no warning in the flow-distribution chart, because
the underlying accumulation was never visible.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| No formal classification (generic backlog) | No process overhead | Debt, risk, and defect work stays invisible; hard to defend resourcing decisions |
| Four-type flow-item classification | Makes capacity allocation visible and negotiable with stakeholders | Requires intake-time discipline and a written, agreed definition per type |
| Finer-grained classification (many subtypes) | More diagnostic detail | More classification effort; more numbers to explain to stakeholders |
| Retroactive classification | Easier to apply, no upfront process change | Highly exposed to gaming; classification drifts toward whatever looks best |

The central tension is **classification discipline versus process
overhead**. A four-type taxonomy is deliberately coarse, coarse enough that
classifying an item takes seconds, not a debate, but that coarseness only
holds if the discipline of classifying at intake, against a written
definition, is genuinely sustained. Resolve the tension by keeping the
taxonomy exactly this simple, four types, no more, and investing any extra
rigor in the audit step (cross-checking against independent evidence)
rather than in a more elaborate classification scheme that erodes under
real workload.

## Questions to discuss with your team

1. **If we classified everything our team shipped last quarter, what would
   the actual split across features, defects, risk, and debt look like, and
   would that surprise our stakeholders?** Most teams have never done this
   exercise honestly. Attempt it with real data before assuming you already
   know the answer.

2. **Do we have a written, agreed definition for what counts as a feature
   versus debt versus risk in our specific context, or does classification
   depend on whoever happens to be labelling the ticket?** An informal,
   inconsistent definition produces numbers that look precise but are not
   actually comparable period over period.

3. **Has our flow distribution ever drifted steadily toward one item type
   without anyone deciding that deliberately?** A slow drift is easy to
   miss period by period but obvious once plotted as a trend. Pull several
   periods of data, if you have it, and look honestly for this pattern.

4. **What would a healthy flow distribution look like for our product's
   current phase, and have we actually agreed on that target with business
   stakeholders?** Most organizations have never made this target explicit,
   which means there is no shared basis for noticing when the actual
   distribution drifts away from it.

5. **Does our flow distribution match independent evidence, like escaped
   defect rate or open vulnerability counts, or is there a mismatch worth
   investigating?** A mismatch here is the clearest available sign that
   classification has drifted from what the work actually is.

6. **Could someone on our team quietly relabel a debt or risk item as a
   feature under delivery pressure, and would we currently notice if they
   did?** This is the chapter's central gaming risk stated directly. Discuss
   whether your current process would actually catch this, not just whether
   anyone would deliberately do it.

## Sector lens

**Startup.** Formal classification often feels like overhead when the whole
team already knows what everyone is working on. The useful minimum at this
scale is simply naming the four categories out loud during planning, so
debt and risk work are not silently deprioritized every time a feature
deadline creates pressure, a pattern that compounds badly once the codebase
and team both grow.

**Small business.** A single custom field or label in your existing
tracking tool is enough to capture flow-item type without any dedicated
tooling investment. The discipline of classifying consistently at intake
matters far more than any tooling sophistication.

**Enterprise.** Flow-item classification is where this framework earns its
value at scale, because a large organization running many concurrent value
streams has no other reliable, aggregate way to see how capacity is
actually split across features, defects, risk, and debt. Invest in
tool-integrated classification and periodic cross-checks against
independent evidence; manual, ad hoc classification does not survive real
organizational scale.

**Government.** Flow distribution gives a public-sector technology leader a
defensible, quantified answer when asked why more new citizen-facing
features are not shipping, when the honest answer is that a legacy system's
risk and debt burden is consuming a genuine, justifiable share of capacity.
Making that trade-off explicit and negotiated, rather than absorbed
silently, tends to build more trust with oversight bodies than an
unquantified appeal to "technical necessity."

## Examples

**Enterprise.** A large retail company's e-commerce platform team believed,
based on sprint velocity, that it was delivering steady feature output.
A first honest flow-item classification exercise found that "features"
actually made up only 40% of completed work, with debt, much of it tied to
an ageing checkout system, consuming nearly a third of capacity without
ever having been named as such in any prior report. Presenting this split
to product leadership, alongside a rising escaped defect rate that
corroborated the debt burden, secured a dedicated modernization budget the
team had unsuccessfully requested for two years using only qualitative
arguments.

**Government.** A state motor vehicle agency's digital licensing team
classified its backlog for the first time after a public outage drew
scrutiny to the underlying system's stability. The exercise revealed that
"risk" work, primarily security patching that had been repeatedly
deprioritized in favour of visible citizen-facing features, had shrunk to
under 5% of capacity over the preceding year, a pattern that had never
been visible in the team's standard reporting. The agency's leadership used
the finding to mandate a minimum risk-work allocation going forward, backed
by the flow-distribution data rather than a general policy statement alone.

## Business case: motivations, ROI, and TCO

The return on flow-item classification is a defensible, quantified basis
for resourcing decisions that were previously argued qualitatively and
often lost to whatever work was most visible to stakeholders. The retail
example above, securing a modernization budget with actual capacity data
rather than a general appeal, is the pattern this discipline reliably
produces: a specific number is far harder to dismiss than a general
impression that "we need more time for maintenance."

The total cost of ownership is low once the taxonomy and its definitions
are agreed: classification adds seconds to intake, not a meaningful
process burden, and the tooling integration needed to track it is usually
a single custom field or label. The real, ongoing cost is the discipline of
sustaining honest classification under delivery pressure, which is why the
periodic cross-check against independent evidence matters as much as the
initial adoption.

## Anti-patterns and pitfalls

- **Classifying work retroactively, after the outcome is known:** the
  gaming vector at the heart of this chapter. Under delivery pressure, a
  team can quietly label debt or risk work as a feature after the fact, or
  round an ambiguous item toward whichever type looks better on the
  distribution chart, without any single decision ever looking dishonest
  on its own. The guardrail is intake-time classification against a
  written definition, combined with periodic audits comparing flow
  distribution against independent evidence like escaped defect rate
  (chapter 5.1) and vulnerability metrics (chapter 6.4), the same
  audit-against-independent-evidence discipline chapter 1.2 asks for with
  every metric in this book.
- **Letting features consistently absorb nearly all capacity (the feature
  factory pattern):** starves debt and risk work quietly until it surfaces
  as a crisis.
- **Treating a single period's distribution as the whole picture:** misses
  the slow, cumulative drift that a trend view reveals clearly.
- **Setting a target distribution without business stakeholders:**
  forfeits the framework's main value, a shared, negotiated understanding
  of the trade-off.
- **Using an inconsistent or undocumented definition per type:** produces
  numbers that look precise but are not actually comparable over time.
- **Over-engineering the taxonomy with many subtypes:** adds classification
  overhead that erodes discipline without adding proportional insight.

## Maturity model

- **Level 1, Initiate:** Work is tracked generically, with no flow-item
  classification; debt and risk work is invisible in reporting.
- **Level 2, Develop:** Some teams classify flow items informally, but
  definitions are inconsistent and classification often happens
  retroactively.
- **Level 3, Standardize:** All teams classify at intake against a shared,
  written definition, and flow distribution is tracked as a trend.
- **Level 4, Manage:** Flow distribution is cross-checked periodically
  against independent evidence, and target distributions are set
  deliberately with business stakeholders.
- **Level 5, Orchestrate:** Flow-item data directly informs resourcing and
  investment decisions across the organization, and leadership can point to
  specific decisions made because classification made a previously
  invisible trade-off explicit.

## Ideas for discussion

1. What would an honest flow-item split of last quarter's work show, and would it surprise anyone?
2. Do we have a written definition for each of the four flow item types, or does classification depend on who is labelling the work?
3. Has our flow distribution ever drifted toward one item type without a deliberate decision behind it?
4. What independent evidence could we cross-check our flow distribution against today?

## Key takeaways

- A **flow item** belongs to exactly one of four types, features, defects,
  risks, or debt, and capacity allocation across them is **zero-sum**.
- There is **no universally healthy distribution**; the right mix depends
  on a product's phase and should be a deliberate, negotiated target with
  business stakeholders.
- The chapter's central gaming vector is **retroactive classification**,
  quietly relabeling debt or risk work as a feature after the fact; the
  guardrail is intake-time classification plus periodic audits against
  independent evidence.
- Watch specifically for the **feature factory pattern**, features
  consistently absorbing nearly all capacity, which starves debt and risk
  work until it surfaces as a crisis.
- Flow distribution is most valuable as a **trend**, and its biggest payoff
  comes from sharing it directly with business stakeholders.

## References and further reading

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
