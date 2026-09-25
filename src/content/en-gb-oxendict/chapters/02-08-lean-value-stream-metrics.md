# 2.8 Lean value stream metrics

## Overview and motivation

Every metric this part has covered so far, flow time, flow load, cycle
time, utilization, descends from a much older toolkit: the five baseline
measurements of classical **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)**
value stream mapping, developed at Toyota and generalized across
manufacturing, operations, and service delivery long before software
adopted them. **Lead time (LT)** is the total clock time from when work is
requested to when it is delivered. **Process time (PT)** is the actual
hands-on time spent working on a single unit. **Cycle time (CT)** is the
average time required to complete a single node or phase within the
stream. **Percent complete and accurate (%C/A)** is the percentage of
units a downstream team can process without needing rework. **Takt time**
is the maximum acceptable time to complete a unit to cleanly match customer
demand.

This chapter exists because software engineering did not invent these
ideas, it borrowed them, and the borrowing sometimes reused the same words
for slightly different things. This book's own cycle time (chapter 2.6)
measures a change's engineering stages specifically, coding, review, test,
deploy, while Lean's classical CT is the more general "average time per
node" applied to any process. Flow time (chapter 2.4) is this book's name
for what Lean calls lead time. Knowing the mapping matters because a reader
coming from a Lean Six Sigma background, common in manufacturing,
logistics, healthcare, and government operations, will use these exact
terms with their original meanings, and a software team that does not
speak the same language forfeits an easy, evidence-backed bridge to
colleagues outside engineering.

For large teams, %C/A is this chapter's most underused metric. It captures
something the flow metrics in chapters 2.3 and 2.4 do not: how much of what
a stage produces is actually usable by the next stage without being sent
back. Rolled up across a multi-stage value stream, a concept manufacturing
calls **rolled throughput yield**, %C/A reveals how rework compounds
invisibly across handoffs, a pattern enterprise organizations with long,
multi-team pipelines and government programmes with multiple approval
gates are especially prone to and rarely measure directly.

## Key principles

- **These five metrics predate software and generalize beyond it.** They
  are the common vocabulary a Lean Six Sigma-trained stakeholder, common in
  large enterprises and government operations, already speaks fluently.
- **Terminology collision is real and worth naming explicitly.** This
  book's cycle time (chapter 2.6) and Lean's classical CT are related but
  not identical; document the mapping so cross-functional conversations do
  not quietly talk past each other.
- **%C/A must be rolled up across every stage, not measured once at the
  end.** Rework introduced early in a stream and caught late is invisible
  to a metric measured only at final delivery.
- **Takt time reframes capacity planning around demand, not effort.** The
  question shifts from "how fast can we go" to "how fast do we need to go,"
  which connects directly to utilization (chapter 2.7) and flow load
  (chapter 2.4).
- **These are diagnostic metrics, not vanity metrics.** Each one exists to
  answer a specific operational question, not to produce an impressive
  number for a dashboard.

## Recommendations

### Map your value stream with all five Lean metrics before adopting a software-specific framework

Compute lead time, process time, cycle time, %C/A, and takt time for a
representative sample of work moving through your value stream before
layering the Flow Framework's own metrics (chapters 2.3 and 2.4) on top.
This gives you a baseline any Lean Six Sigma-literate stakeholder can
immediately understand, and it frequently surfaces the same wait-time
dominance chapter 2.5 describes, expressed in a vocabulary that predates
and outlasts any particular software framework.

### Roll up percent complete and accurate multiplicatively across every stage

Measure %C/A at each stage individually, then multiply the stage-level
percentages together to get the value stream's rolled throughput yield.
Three stages each individually running at 90% complete and accurate
compound to roughly 73% overall, a number that looks nothing like any
single stage's own report and is usually the more honest one. This single
calculation is the fastest way to reveal how much rework a multi-stage
pipeline is genuinely absorbing.

### Set takt time explicitly from real customer demand data, not from capacity

Calculate takt time as available working time divided by customer demand
over that period, deliberately independent of how fast your team happens
to be able to work today. Compare your measured process time and cycle
time against this number: a process time comfortably below takt time
indicates healthy slack, while a cycle time exceeding takt time is
concrete, quantified evidence of a capacity shortfall, not just a feeling
that things are behind.

### Document the mapping between Lean terms and this book's own vocabulary

Where your organization already runs a Lean Six Sigma programme outside
software, or where engineering reports to leadership fluent in that
vocabulary, write the mapping down explicitly in your metrics charter
(chapter 1.4): this book's flow time is Lean's lead time, this book's
cycle time (chapter 2.6) is a specific application of Lean's more general
CT, and this book's active time (chapter 2.5) is Lean's process time. This
single document prevents a recurring, low-value argument about whose
numbers are "real."

### Use %C/A as a guardrail alongside flow velocity, not a replacement for it

Pair rolled throughput yield with flow velocity (chapter 2.3) the same way
this book pairs every speed metric with a stability guardrail. A rising
item count with a falling rolled %C/A means the value stream is delivering
more units that increasingly need rework later, exactly the kind of
speed-without-quality pattern chapter 1.2 warns every metric family to
guard against.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Classical Lean metrics only (LT, PT, CT, %C/A, takt time) | Universal vocabulary; works across software and non-software teams alike | Not software-specific; needs translation for engineering-specific stages |
| Flow Framework metrics only (chapters 2.3, 2.4) | Purpose-built for software value streams and item-type visibility | Unfamiliar to Lean Six Sigma-trained stakeholders outside engineering |
| Both, with an explicit mapping documented | Speaks both vocabularies; strongest cross-functional bridge | Requires the upfront discipline of writing the mapping down and keeping it current |
| %C/A measured only at final delivery | Simple, one number | Hides rework introduced and caught earlier in the stream |

The central tension is **universality versus specificity**. Classical Lean
metrics are instantly legible to anyone with manufacturing, operations, or
Six Sigma experience, but they were not designed with software's specific
stages, code review, automated testing, deployment approval, in mind.
Resolve the tension by using the Lean metrics as the shared baseline
vocabulary for cross-functional and executive conversations, and the
Flow Framework's own metrics (chapters 2.3 and 2.4) for the
software-specific diagnostic work engineering teams do day to day.

## Questions to discuss with your team

1. **Could we compute all five classical Lean metrics for our value stream
   today, or do we only have some of them?** Most software teams have
   flow time and cycle time equivalents but have never calculated process
   time, %C/A, or takt time explicitly. Identify which of the five are
   genuinely missing before assuming the gap is small.

2. **Have we ever rolled up %C/A across every stage of our value stream, or
   only measured it at final delivery?** A single end-of-stream measurement
   hides exactly the compounding rework this chapter's rolled throughput
   yield calculation is designed to reveal. Attempt the roll-up calculation
   with real data.

3. **Do we know our takt time, calculated from actual customer demand, and
   how does our measured cycle time compare to it?** Most teams have never
   made this comparison explicit, which means capacity conversations stay
   anecdotal rather than quantified.

4. **If a Lean Six Sigma-trained stakeholder from outside engineering asked
   about our cycle time, would we be confident we mean the same thing they
   do?** This book's cycle time (chapter 2.6) and Lean's classical CT are
   related but not identical. Discuss whether that distinction has ever
   caused a real misunderstanding in your organization.

5. **Has our rolled throughput yield ever been meaningfully lower than any
   single stage's own reported %C/A?** If you have never calculated the
   roll-up, discuss what you would expect to find and then check it against
   real data.

6. **Is our organization already running a Lean or Six Sigma programme
   outside software that we could align with instead of maintaining a
   separate, disconnected vocabulary?** Many enterprises and government
   agencies already have this infrastructure; check whether engineering has
   ever actually connected to it.

## Sector lens

**Startup.** Full Lean value stream mapping is rarely worth the ceremony at
this scale, but takt time is worth understanding informally: knowing
roughly how fast the team genuinely needs to move to match real customer
demand, rather than an arbitrary internal pace, prevents both overbuilding
capacity too early and underbuilding it once growth arrives.

**Small business.** %C/A is the most immediately useful of the five metrics
here, since it directly answers "how much of what we ship needs to be
redone," a question owners and small teams feel acutely without always
having a number attached to it. Track it informally for your one or two
critical processes before investing in anything more elaborate.

**Enterprise.** This is where the classical Lean vocabulary earns its
keep, because large enterprises very often already run a Lean Six Sigma
programme in operations, manufacturing-adjacent divisions, or shared
services, and engineering that speaks the same language gains an
immediate, credible bridge to those functions rather than needing to
justify a separate, software-only metric set from scratch.

**Government.** Government agencies, especially those with roots in
regulatory, manufacturing-adjacent, or logistics functions, frequently have
existing Lean or process-improvement mandates. Framing a digital service's
value stream in the same classical terms, lead time, process time, %C/A,
takt time, that an agency's process-improvement office already uses is
often the fastest way to secure genuine institutional support for a
software modernization effort.

## Examples

**Enterprise.** A manufacturing company's internal software division had
struggled for years to get its engineering metrics taken seriously by an
operations leadership team fluent in Lean Six Sigma from the factory floor.
Reframing the division's delivery pipeline using the same five classical
metrics, computing lead time, process time, cycle time, %C/A, and takt
time for its software value stream, immediately made the division's
numbers legible to operations leadership for the first time. A rolled
throughput yield calculation across the pipeline's four stages revealed an
actual %C/A of 61%, far below any individual stage's own reported number,
which became the evidence base for a rework-reduction initiative that
operations leadership funded within the same quarter.

**Government.** A state transportation department's digital permitting
team, reporting into an agency with a long-standing Lean process-
improvement office, had never engaged that office because its own metrics
used software-specific language the office did not recognize. After
translating the permitting value stream into lead time, process time, and
%C/A, the process-improvement office identified that the team's real
constraint was not engineering speed but a downstream legal review stage
running far below its own effective takt time relative to permit demand, a
finding the office was equipped to act on immediately because it was
framed in familiar terms.

## Business case: motivations, ROI, and TCO

The return on adopting classical Lean vocabulary alongside this book's
software-specific metrics is a credible, immediate bridge to
process-improvement expertise and funding that often already exists
elsewhere in a large organization. The manufacturing company example
above, securing rework-reduction funding the same quarter reframing made
the case legible, is the pattern this chapter's approach reliably
produces: the insight was not new, but the vocabulary that made it
actionable to the right audience was.

The total cost of ownership is low: these five metrics require no new
instrumentation beyond what chapters 2.4 through 2.6 already collect, plus
a %C/A rework classification that is usually a simple addition to existing
defect and flow-item tracking (chapter 2.2). The main investment is
translation, writing down the mapping between this book's terms and Lean's
classical ones, which pays for itself the first time it prevents a
cross-functional misunderstanding.

## Anti-patterns and pitfalls

- **Measuring %C/A only at final delivery:** the gaming vector at the heart
  of this chapter. A team can report a high final-stage %C/A while earlier
  stages quietly produce rework that gets fixed before anyone measures it,
  making the whole value stream look healthier than it is. The guardrail is
  rolling %C/A up multiplicatively across every stage, the rolled
  throughput yield calculation, and auditing each stage's definition of
  "complete and accurate" periodically so it cannot narrow quietly over
  time.
- **Assuming this book's cycle time and Lean's classical CT mean exactly
  the same thing:** produces real cross-functional confusion when the two
  vocabularies meet without a documented mapping.
- **Setting takt time from current capacity instead of real customer
  demand:** defeats the purpose of the metric, which is to reveal a gap
  between demand and capacity, not to confirm whatever pace already exists.
- **Treating classical Lean metrics as obsolete once a software-specific
  framework is adopted:** discards a credible, evidence-backed bridge to
  process-improvement expertise that may already exist in the
  organization.
- **Ignoring an existing Lean Six Sigma programme elsewhere in the
  organization:** forfeits funding, expertise, and institutional credibility
  that reframing delivery metrics in shared language could unlock.
- **Reporting %C/A without pairing it against flow velocity:** allows a
  rising throughput number to hide a falling rework rate, the same
  guardrail gap this book warns against throughout.

## Maturity model

- **Level 1, Initiate:** None of the five classical Lean metrics are
  computed; delivery is discussed without reference to lead time, process
  time, or %C/A.
- **Level 2, Develop:** Lead time and cycle time are tracked informally, but
  process time, %C/A, and takt time are not calculated, and no mapping to
  this book's own vocabulary exists.
- **Level 3, Standardize:** All five classical metrics are computed
  consistently, and the mapping to this book's flow and cycle-time
  vocabulary is documented in a shared metrics charter.
- **Level 4, Manage:** Rolled throughput yield is calculated across every
  stage of the value stream, and takt time is compared against measured
  cycle time to quantify capacity gaps explicitly.
- **Level 5, Orchestrate:** The organization has connected its software
  delivery metrics to an existing Lean or Six Sigma programme elsewhere in
  the business, and can point to specific investment or process decisions
  made because the shared vocabulary made an insight actionable to a
  non-engineering audience.

## Ideas for discussion

1. Could we compute lead time, process time, cycle time, %C/A, and takt time for our value stream today?
2. What would our rolled throughput yield be if we multiplied every stage's %C/A together?
3. Does our organization already run a Lean or Six Sigma programme we have never connected engineering metrics to?
4. How does our measured cycle time compare to our takt time, calculated from real customer demand?

## Key takeaways

- The five classical Lean metrics, **lead time, process time, cycle time,
  percent complete and accurate, and takt time**, predate software and
  remain the common vocabulary of Lean Six Sigma-trained stakeholders.
- This book's own **flow time and cycle time map onto, but are not
  identical to**, Lean's lead time and classical CT; document the mapping
  explicitly to avoid cross-functional confusion.
- The chapter's central gaming vector is **measuring %C/A only at final
  delivery**; the guardrail is rolling it up multiplicatively across every
  stage as rolled throughput yield.
- **Takt time reframes capacity around real customer demand**, not
  existing pace, and pairs directly with utilization (chapter 2.7) and
  flow load (chapter 2.4).
- Reframing software delivery in classical Lean terms is often the fastest
  way to connect with **existing process-improvement expertise and
  funding** already present in a large organization.

## References and further reading

- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., and Daniel T. Jones. *Lean Thinking: Banish Waste and
  Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones, and Daniel Roos. *The Machine That
  Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and
  Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill,
  2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*.
  Productivity Press, 1988.
