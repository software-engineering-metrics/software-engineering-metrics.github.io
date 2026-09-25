# 8.2 Tooling landscape: build versus buy

## Overview and motivation

Every organization implementing this book's guidance eventually faces a
practical infrastructure decision: build metrics tooling internally, buy a
commercial engineering analytics platform, or, most commonly in practice,
some combination of both. This chapter treats that decision with the same
rigor chapter 5.5 applies to any other engineering investment: an honest
cost-benefit analysis specific to your organization's scale, existing data
sources, and the specific metrics from this book you actually intend to
track, rather than a default answer that applies uniformly regardless of
context.

The commercial engineering analytics tooling market has matured
considerably, and many platforms now offer solid, largely automated
instrumentation for the DORA metrics (Part 2), pull request and review
data (chapter 2.9), and increasingly, developer experience survey
infrastructure (chapter 3.7). This maturity has shifted the calculus for
many organizations toward buying at least the foundational layer, but it
has not eliminated the build option's genuine advantages for specific,
customized needs, particularly around the outcome telemetry chapter 7.4
argues is now the necessary center of a metrics programme, which is
frequently the least standardized, most organization-specific category of
measurement this book covers.

For large teams, this decision has real, ongoing budget and engineering
capacity consequences. Enterprise organizations often need to integrate
metrics tooling across a genuinely heterogeneous landscape of legacy and
modern systems, which shapes the build-versus-buy calculus significantly;
government organizations frequently face procurement constraints and data
sovereignty or security requirements that materially affect which
commercial options are even viable, sometimes tilting the decision toward
building or toward specific, vetted vendors regardless of what a pure
cost-benefit analysis alone would suggest.

## Key principles

- **This is rarely an all-or-nothing decision.** Most mature metrics
  programmes combine bought tooling for well-standardized metrics with
  built tooling for organization-specific outcome telemetry.
- **Buy for well-standardized, widely needed metrics; build for
  genuinely organization-specific ones.** DORA metrics and pull request
  analytics are commodity territory; your specific business-outcome
  correlation (chapter 5.3) usually is not.
- **Data ownership and portability matter as much as feature
  comparison.** A tool that locks your metrics data in is a durable risk,
  not just an inconvenience.
- **Integration cost is frequently underestimated** in a build-versus-buy
  analysis, for both options.
- **Procurement, security, and data sovereignty constraints can override a
  pure cost-benefit calculation**, particularly for government
  organizations.

## Recommendations

### Buy for the commodity layer: DORA, review, and survey infrastructure

For metric families with mature, widely available commercial tooling,
DORA metrics instrumentation (Part 2), pull request and code review
analytics (chapter 2.9), and developer experience survey platforms
(chapter 3.7), buying is usually the better economic choice for most
organizations below a certain scale, since building equivalent
infrastructure duplicates engineering effort many vendors have already
invested heavily in, with limited genuine differentiation available from
building your own version.

### Build for genuinely organization-specific outcome telemetry

For the outcome metrics chapter 7.4 argues should be your metrics
programme's center of gravity, business outcome correlation (chapter 5.3),
feature adoption tied to your specific product (chapter 5.2), unit
economics tied to your specific cost structure (chapter 5.4), commercial
tooling is far less standardized and often cannot capture your organization's
specific business logic and data model without extensive, expensive
customization that may end up costing more than building the equivalent
capability internally with full control over the result.

### Evaluate data ownership and portability before committing to a vendor

Before signing a commercial contract, confirm you can export your full
historical metrics data in a usable, standard format, and understand what
happens to that data and its history if you switch vendors or discontinue
the service. A vendor relationship that becomes difficult to exit due to
data [lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) is a durable organizational risk, not merely an inconvenience,
and this evaluation deserves the same seriousness as any other significant,
multi-year infrastructure commitment.

### Budget realistically for integration cost on both sides of the
decision

Whether building or buying, integration cost, connecting the tool to your
actual version control, CI/CD, incident tracking, and business systems, is
frequently underestimated in the initial planning for either path. Budget
explicitly for this integration effort as a distinct, significant line
item in your build-versus-buy analysis, rather than assuming a commercial
tool will work out of the box with minimal setup, or that a homegrown
solution's integration cost is a minor addition to its development cost.

### Account for procurement, security, and sovereignty constraints
explicitly and early

For government and regulated enterprise organizations, data sovereignty
requirements, security certification needs, and procurement processes can
materially narrow or eliminate certain commercial options regardless of
their feature quality, sometimes tilting the decision toward building or
toward a smaller set of specifically vetted vendors. Identify these
constraints explicitly and early in the evaluation process, rather than
discovering them only after significant evaluation effort has already gone
into an option that turns out to be non-viable for reasons unrelated to its
actual capability.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Buy commercial tooling | Fast to deploy, mature feature set, vendor-maintained | Less customizable for organization-specific outcome metrics; potential lock-in |
| Build internal tooling | Fully customized, full data ownership and control | Significant, ongoing engineering investment; duplicates effort for commodity metrics |
| Hybrid: buy commodity layer, build outcome layer | Balances cost efficiency with genuine customization where it matters most | Requires integration work to connect bought and built components coherently |
| Buy everything, including outcome telemetry, via extensive vendor customization | Single vendor relationship, potentially simpler procurement | Can become as expensive as building, with less ultimate control over the result |

The central tension is **customization need versus development cost**. The
metrics that most benefit from customization, outcome telemetry tied
specifically to your business, are also the most expensive to build well;
the metrics that are cheapest to buy, DORA and review analytics, are also
the ones where genuine customization matters least. Resolve the tension by
matching the decision to this pattern directly: buy where standardization
serves you well, build where your specific context genuinely requires it,
and budget integration cost realistically on both sides of that split.

## Questions to discuss with your team

1. **For each metric family this book covers, would we genuinely benefit
   from customization, or would a standardized commercial tool serve us
   just as well?** Walk through Parts 2 through 6 explicitly and sort each
   metric family into a buy or build column based on this specific test.

2. **Have we evaluated our current or prospective vendor's data export and
   portability options, or are we assuming we could leave easily if we
   needed to?** Check this directly rather than assuming; data lock-in is
   often discovered only when an organization actually tries to switch.

3. **Did our original build-versus-buy analysis account realistically for
   integration cost, or did it focus primarily on licensing fees versus
   development hours?** Revisit a recent tooling decision and check whether
   integration cost was genuinely estimated or significantly underestimated.

4. **Do we face procurement, security, or data sovereignty constraints that
   would eliminate certain commercial options regardless of their feature
   quality?** Identify these constraints explicitly before, not after,
   investing significant evaluation effort in options that may turn out to
   be non-viable.

5. **Is our current tooling landscape a deliberate hybrid, matching build
   and buy to where each makes sense, or did it accumulate through
   ad hoc, individually reasonable decisions over time?** Be honest about
   which pattern actually describes your current situation.

6. **What would it cost us, in effort and risk, to switch our current
   metrics tooling vendor today if we needed to?** This concrete question
   tests your actual current exposure to data lock-in risk, beyond whatever
   the vendor's contract terms nominally promise.

## Sector lens

**Startup.** Buy commodity tooling by default at this scale; building
custom metrics infrastructure is rarely a good use of scarce early
engineering capacity when mature, inexpensive commercial options exist for
DORA and review metrics specifically. Reserve any build effort for the
single outcome metric (chapter 5.3) that most directly reflects your
product's core value.

**Small business.** Most commercial tooling options scale down reasonably
well and are priced accessibly for smaller organizations; buying the
commodity layer is almost always the right choice, and building anything
custom is rarely justified until your organization has grown considerably
and developed genuinely specific needs.

**Enterprise.** The hybrid approach this chapter recommends earns its
complexity here: buy the commodity layer at scale (often with meaningful
negotiating leverage for favourable terms), and invest deliberately in
building the organization-specific outcome telemetry layer, since your
business logic and data model complexity at this scale usually exceeds what
generic commercial tooling can accommodate without extensive, expensive
customization.

**Government.** Procurement processes, security certification requirements,
and data sovereignty constraints frequently dominate this decision more
than pure feature or cost comparison would suggest. Engage procurement and
security stakeholders early in the evaluation process, and be prepared for
the build option to be genuinely more attractive here than in a comparable
private-sector context, specifically because of these constraints rather
than because building is inherently better.

## Examples

**Enterprise.** A software company initially attempted to build a fully
custom metrics platform covering every metric family from Part 2 through
Part 6, a multi-year effort that consumed significant engineering capacity
and still lagged behind mature commercial offerings for the standardized
DORA and review metrics specifically. A revised strategy adopted a
commercial platform for these commodity metrics, freeing the internal
platform team to focus exclusively on building the business-outcome
correlation and unit-economics telemetry (chapters 5.3, 5.4) genuinely
specific to the company's business model, which no commercial tool could
have provided out of the box. This hybrid approach delivered a more
complete, more genuinely useful metrics programme within a single year than
the all-build strategy had achieved after two.

**Government.** A federal agency's initial evaluation of commercial
engineering analytics platforms found that none of the available vendors
could meet the agency's data sovereignty requirements, which mandated that
all engineering metrics data remain within specific, certified government
data centres. Rather than abandoning the buy option entirely, the agency
identified a smaller subset of vendors offering government-certified,
sovereign-cloud deployment options, at a modest cost premium over
standard commercial pricing, and successfully deployed a hybrid programme:
bought tooling for the commodity metric layer within the required
sovereignty boundary, and built internal tooling for the agency's specific
citizen-outcome telemetry needs, which no available commercial vendor
addressed regardless of sovereignty considerations.

## Business case: motivations, ROI, and TCO

The return on a deliberate, hybrid build-versus-buy strategy is avoiding
both failure modes this chapter's examples illustrate: the wasted,
multi-year engineering investment of building commodity capability that
already exists cheaply in the market, and the frustration and eventual
customization cost of forcing a genuinely organization-specific need into
an ill-fitting commercial tool. The enterprise example above shows this
concretely: the hybrid approach delivered more genuine value in one year
than the all-build strategy had in two.

The total cost of ownership for either path includes integration cost,
often underestimated, and, for bought tooling specifically, the ongoing
risk cost of potential vendor lock-in unless data portability is confirmed
and protected contractually upfront. Budgeting for both of these
realistically, rather than focusing narrowly on licensing fees or
development hours alone, produces a far more accurate total cost picture
for either option.

## Anti-patterns and pitfalls

- **Building custom tooling for well-standardized, commodity metrics:**
  duplicates engineering effort many vendors have already invested in
  heavily.
- **Buying commercial tooling for genuinely organization-specific outcome
  telemetry without checking fit first:** risks expensive, ill-fitting
  customization or an unmet need.
- **No evaluation of data export and portability before committing to a
  vendor:** risks durable, expensive lock-in discovered only when trying to
  leave.
- **Underestimating integration cost on either side of the decision:**
  produces an inaccurate total cost comparison and unrealistic timelines.
- **Ignoring procurement, security, or sovereignty constraints until late
  in the evaluation process:** wastes evaluation effort on options that
  turn out to be non-viable for reasons unrelated to capability.
- **Treating this as a single, all-or-nothing decision:** misses the hybrid
  approach that best matches most organizations' actual, mixed needs.

## Maturity model

- **Level 1, Initiate:** Tooling decisions are made ad hoc, with no
  deliberate build-versus-buy analysis or consideration of data
  portability.
- **Level 2, Develop:** Some analysis occurs, but integration cost is
  routinely underestimated and the hybrid approach is not deliberately
  considered.
- **Level 3, Standardize:** A deliberate, hybrid build-versus-buy strategy
  matches commodity metrics to bought tooling and organization-specific
  outcome telemetry to built tooling, consistently.
- **Level 4, Manage:** Data portability is confirmed and protected
  contractually for all bought tooling, and procurement, security, and
  sovereignty constraints are accounted for explicitly and early.
- **Level 5, Orchestrate:** The organization's tooling landscape reflects a
  mature, deliberate hybrid strategy, regularly reviewed as commercial
  offerings and organizational needs evolve, with demonstrated value from
  both the bought and built components.

## Ideas for discussion

1. Which of our current metrics would benefit most from customization we are not currently getting?
2. Have we confirmed we could export our full historical metrics data if we needed to switch vendors?
3. Did our last tooling decision account realistically for integration cost?
4. What procurement, security, or sovereignty constraint might we be underestimating?
5. What would a deliberate hybrid strategy look like for our specific metric set?

## Key takeaways

- This is rarely all-or-nothing; most mature programmes **combine bought
  tooling for commodity metrics with built tooling for organization-specific
  outcome telemetry**.
- **Buy for standardized metrics** (DORA, review analytics, survey
  infrastructure); **build for genuinely organization-specific** outcome
  measurement.
- Evaluate **data ownership and portability** before committing to a
  vendor; lock-in is a durable risk, not just an inconvenience.
- **Budget realistically for integration cost** on both sides of the
  decision; it is frequently underestimated.
- **Procurement, security, and sovereignty constraints** can override a
  pure cost-benefit calculation, particularly for government organizations.

## References and further reading

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (the metric families this chapter's
  build-versus-buy analysis is applied to).
- *Cloud FinOps*, by J.R. Storment and Mike Fuller (cost analysis
  principles applicable to tooling investment decisions).
- The FinOps Foundation's FinOps Framework, [finops.org](https://www.finops.org/) (practitioner
  guidance on evaluating and managing cloud and SaaS tooling costs).
- U.S. Federal Risk and Authorization Management Program (FedRAMP)
  documentation: authoritative guidance on government cloud tooling
  security and sovereignty requirements.
