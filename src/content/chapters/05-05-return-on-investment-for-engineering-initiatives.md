# 5.5 Return on investment for engineering initiatives

## Overview and motivation

This chapter closes Part 5 by bringing together everything the preceding
four chapters measured, quality, adoption, outcomes, and cost, into the
single financial framing that ultimately governs most major engineering
investment decisions: **[return on investment](https://en.wikipedia.org/wiki/Return_on_investment)
(ROI)**. Whether an organization is deciding to fund a platform
modernization, a major refactoring effort, or a new product line, someone
eventually has to answer the question in financial terms: is this worth
what it costs. This chapter is about answering that question honestly, using
the metrics this book has already built, rather than either avoiding the
question (which cedes influence over investment decisions to people less
equipped to answer it well) or answering it with an inflated, unsustainable
case that damages credibility when it does not hold up.

The discipline this chapter recommends draws directly on chapter 5.4's unit
economics for the cost side of the equation, and chapter 5.3's outcome
metrics, with their honest treatment of attribution uncertainty, for the
benefit side. An ROI case built this way is necessarily more modest and more
hedged than a simple, appealing headline number, but it has the decisive
advantage this book has emphasized throughout: it survives scrutiny, and an
organization that consistently builds defensible ROI cases earns more trust,
and therefore more autonomy, in future investment decisions than one that
occasionally overpromises.

For large teams, ROI discipline is what separates an engineering
organization treated as a strategic partner from one treated as a cost
center whose spending is tolerated rather than actively invested in.
Enterprise organizations use rigorous ROI cases to compete successfully for
capital against other business investments; government organizations use
the equivalent discipline, often reframed as cost-benefit analysis, to
secure and sustain public technology funding against political and
budgetary pressure that has little patience for vague, unsubstantiated
promises.

## Key principles

- **An honest ROI case is built from this book's other metrics**, not
  invented separately; cost from chapter 5.4, benefit from chapters 5.1
  through 5.3.
- **Total cost of ownership, not just upfront cost, belongs on the cost
  side.** Ongoing maintenance, support, and infrastructure cost compound
  over a system's lifetime.
- **Benefit estimates carry uncertainty; state it explicitly** rather than
  presenting a single, falsely precise number.
- **A negative or marginal ROI finding is a legitimate, useful outcome.**
  The discipline exists to inform decisions honestly, not to justify
  decisions already made.
- **Track actual ROI after the fact, not just the projected case
  beforehand.** A projection that is never checked against reality teaches
  the organization nothing.

## Recommendations

### Build the cost side from total cost of ownership, not just upfront
investment

Include not just the initial development cost but the full **[total cost of
ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO)**:
ongoing maintenance, infrastructure (chapter 5.4's unit economics are
directly useful here), support, and the opportunity cost of the engineering
capacity the initiative consumes that could have gone toward alternative
work. A project that looks cheap based on upfront cost alone can be
expensive over its full lifetime once ongoing maintenance burden is
honestly accounted for.

### Build the benefit side from documented, honest outcome evidence

Draw benefit estimates from the outcome-measurement discipline of chapters
5.1 through 5.3: quality improvements translated into reduced incident and
support cost, adoption data translated into usage-driven value, and
business outcome correlations built with the honest, confound-checked
causal-chain approach from chapter 5.3. Avoid inventing a benefit estimate
from first principles or optimistic assumption when actual measured or
comparable historical data is available to ground it instead.

### State uncertainty explicitly, using a range rather than a single number

Present ROI estimates as a range (a conservative case and an optimistic
case) rather than a single, falsely precise figure, and explain what drives
the range: which specific assumption, if it proves optimistic or
pessimistic, would move the outcome most. This mirrors chapter 1.6's
statistical literacy principle directly, applied to financial projection,
and it protects the case's credibility, since a single point estimate that
turns out to be wrong damages trust far more than a well-explained range
that the actual outcome falls within.

### Treat a negative or marginal finding as a legitimate result

Build your ROI analysis process to be genuinely capable of concluding "this
is not worth it," and treat that conclusion, when the evidence supports it,
as a valuable outcome rather than a failure of the analysis. An
organization known for only ever producing positive ROI cases, regardless
of the initiative, quickly loses credibility, because stakeholders correctly
infer the analysis is not actually independent of the decision it is meant
to inform.

### Track actual outcomes against the projected case, and close the loop
publicly

After an initiative completes, or reaches a meaningful milestone, compare
actual measured outcomes against the original projected range, and publish
that comparison, including where the projection was wrong. This closing-the-loop
discipline, similar to chapter 3.7's recommendation for survey follow-up,
is what builds an organization's long-term ROI-forecasting credibility and
improves the accuracy of future estimates by creating a real, visible
feedback loop.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Simple, single-number ROI claim | Compelling, easy to communicate | Falsely precise; vulnerable to being wrong and damaging credibility |
| Range-based ROI with stated uncertainty | Defensible, survives scrutiny, honest about what drives the range | More complex to present; requires more analytical effort |
| Upfront-cost-only analysis | Simple, fast to produce | Understates true cost by omitting ongoing maintenance and support burden |
| Full total-cost-of-ownership analysis | Accurate, complete picture of true investment cost | Requires more data gathering, particularly for ongoing cost projection |

The central tension is **persuasive simplicity versus defensible honesty**,
the same tension chapter 5.3 named for outcome claims generally, now applied
specifically to the financial case. A simple, confident single-number ROI
claim is easier to sell to a decision-maker in the moment, but an honest,
range-based case with explicit uncertainty and full total-cost-of-ownership
accounting is what actually holds up over the life of the investment and
protects the organization's credibility for the next case it needs to make.

## Questions to discuss with your team

1. **For our last major engineering investment case, did we account for
   total cost of ownership, or only upfront development cost?** Revisit the
   original case and check whether ongoing maintenance and infrastructure
   cost were included, and if not, estimate what they would have added.

2. **Did our benefit estimate draw on documented, measured outcome
   evidence, or was it built from optimistic assumption?** Trace the
   benefit side of a recent case back to its actual evidentiary source and
   assess honestly how grounded it really was.

3. **Have we ever presented an ROI estimate as a single number when a range
   would have been more honest?** Discuss what the range would have looked
   like for a recent case, and what specific assumption drove the width of
   that range.

4. **Has our ROI analysis process ever concluded that an initiative was not
   worth pursuing, and how was that conclusion received?** If every past
   analysis has concluded positively, discuss honestly whether that
   reflects genuinely sound initiative selection or a process that only
   ever produces the answer stakeholders want to hear.

5. **For a completed initiative, did we ever go back and compare actual
   outcomes against the original projected case?** If not, pick one real,
   completed initiative and do this comparison now as a group exercise,
   however uncomfortable the gap between projection and reality might turn
   out to be.

6. **What would it take to make our next major ROI case defensible under
   genuine, skeptical scrutiny from someone outside engineering?** Walk
   through your next planned case and identify the weakest link in its
   current evidentiary chain before it goes to a decision-maker.

## Sector lens

**Startup.** Formal ROI analysis is often less relevant than a simpler
survival-and-growth question: does this investment help us reach the next
milestone or funding round. Still, apply the same honesty principle,
resist inflating a case to justify a decision the team has already
emotionally committed to, since investor scrutiny will eventually apply the
same skepticism this chapter recommends applying internally first.

**Small business.** Keep ROI analysis proportionate to the size of the
decision; a major, multi-year platform investment deserves the full
discipline this chapter recommends, while a small tooling purchase does
not need the same rigor. Focus formal analysis effort on your few largest,
most consequential decisions.

**Enterprise.** ROI discipline at this scale is what determines whether
engineering competes successfully for capital against other business
investments with more established financial-analysis traditions. Build the
full total-cost-of-ownership and range-based discipline this chapter
recommends as a standard practice, and invest in the closing-the-loop
tracking that builds long-term forecasting credibility.

**Government.** Cost-benefit analysis, the public-sector equivalent of ROI,
is frequently a formal, required part of budget justification, and honesty
about uncertainty and total cost of ownership is especially important where
findings may face external audit or legislative scrutiny. An analysis that
overstated benefit or understated cost, once discovered, causes lasting
damage to a programme's credibility with its funding body.

## Examples

**Enterprise.** A logistics technology company's engineering leadership
proposed a major investment in migrating a legacy monolith to a
microservices architecture, initially presenting a single, optimistic ROI
figure based primarily on projected deployment-frequency improvements. A
finance stakeholder's skeptical questioning exposed that the case had not
accounted for the substantial ongoing operational complexity and
infrastructure cost the new architecture would introduce. A revised case,
built with full total cost of ownership and a range reflecting both
conservative and optimistic delivery-improvement scenarios, showed a more
modest but still positive expected return, and critically, it survived the
finance team's scrutiny and secured funding, where the original,
overstated case likely would not have.

**Government.** A state government's court-records digitization programme
built its initial cost-benefit case around administrative cost savings
alone, with a single, precise ROI figure. An independent budget office
review found the projection had not accounted for citizen-side time savings
or reduced error rates in legal proceedings, benefits that were real but had
been omitted because they were harder to quantify than administrative cost.
A revised analysis incorporated these benefits with an explicitly stated
range reflecting the genuine measurement uncertainty involved, producing a
stronger and, importantly, more defensible case that the budget office
ultimately approved, precisely because it was transparent about what it did
and did not know with confidence.

## Business case: motivations, ROI, and TCO

The return on rigorous ROI discipline is, somewhat recursively, the ROI
discipline's own credibility: an organization that consistently builds
honest, defensible cases, including occasionally concluding an initiative
is not worth pursuing, earns greater trust and therefore more autonomy in
future investment decisions than one whose cases are viewed with
skepticism because they have overpromised before. The logistics company
example above shows this directly: the revised, more modest but honest case
succeeded where the inflated original likely would have failed under
scrutiny.

The total cost of ownership of this discipline is the analytical effort to
build full total-cost-of-ownership cost estimates, ground benefit estimates
in real evidence, state uncertainty explicitly, and track actual outcomes
after the fact. That effort is genuinely more work than a quick, confident
single-number pitch, and it is worth it specifically because the
alternative risks the organization's credibility for every future case it
will need to make.

## Anti-patterns and pitfalls

- **Upfront-cost-only analysis, omitting total cost of ownership:**
  understates true investment cost, particularly for long-lived systems.
- **Inventing benefit estimates from optimistic assumption rather than
  documented evidence:** produces a case that does not survive scrutiny.
- **Presenting a single, falsely precise ROI number instead of a stated
  range:** damages credibility when the actual outcome differs from the
  point estimate.
- **An analysis process that only ever produces positive conclusions:**
  correctly read by stakeholders as evidence the process is not genuinely
  independent.
- **Never tracking actual outcomes against the original projection:** loses
  the feedback loop that would improve future forecasting accuracy.
- **Building a case to justify a decision already emotionally committed
  to, rather than to genuinely inform the decision:** the root cause of
  most inflated ROI cases.

## Maturity model

- **Level 1, Initiate:** ROI cases are informal, unsupported by documented
  evidence, and almost always conclude positively regardless of the
  initiative.
- **Level 2, Develop:** Some cases include cost and benefit estimates, but
  total cost of ownership is inconsistently applied and uncertainty is
  rarely stated explicitly.
- **Level 3, Standardize:** ROI cases consistently use full total cost of
  ownership, documented benefit evidence, and a stated range reflecting
  genuine uncertainty, organization-wide.
- **Level 4, Manage:** Actual outcomes are tracked against original
  projections after completion, and the comparison is published and used
  to improve future forecasting.
- **Level 5, Orchestrate:** The organization has a demonstrated,
  multi-year track record of accurate, honest ROI forecasting, including
  cases that correctly concluded an initiative was not worth pursuing, and
  this track record earns engineering a trusted seat in strategic
  investment decisions.

## Ideas for discussion

1. What is our biggest current investment case, and could it survive genuinely skeptical scrutiny today?
2. Have we ever tracked a completed initiative's actual outcome against its original ROI projection?
3. What would our analysis process need to change to be genuinely capable of concluding "not worth it"?
4. What total-cost-of-ownership component is most often missing from our current cost estimates?
5. What is the single weakest evidentiary link in our next planned major investment case?

## Key takeaways

- Build ROI cases from this book's **other metrics**, cost from unit
  economics (chapter 5.4), benefit from documented outcome evidence
  (chapters 5.1 through 5.3), not from invented assumptions.
- Include **total cost of ownership**, not just upfront cost, and state
  benefit estimates as a **range with explicit uncertainty**, not a single,
  falsely precise number.
- Build a process genuinely capable of concluding an initiative **is not
  worth pursuing**; an analysis that only ever produces positive
  conclusions is not credible.
- **Track actual outcomes against the projection** after completion, and
  publish the comparison to build long-term forecasting credibility.
- Honest, defensible ROI discipline is what earns engineering a **trusted
  seat** in strategic investment decisions over time.

## References and further reading

- *How to Measure Anything*, by Douglas W. Hubbard (quantifying uncertain
  value and building defensible, range-based estimates).
- *Cloud FinOps*, by J.R. Storment and Mike Fuller (total cost of
  ownership discipline for cloud-based infrastructure investment).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (the research basis for connecting delivery
  practice investment to business return).
- U.S. Office of Management and Budget Circular A-94, guidance on
  cost-benefit analysis for federal programmes (public-sector ROI
  discipline).
