# 6.3 On-call, capacity, and operational load metrics

## Overview and motivation

The reliability chapter 6.1 introduced and the incident response chapter
6.2 measured both depend on a human system that this chapter measures
directly: the on-call rotation, the engineers who carry a pager and respond
when something breaks, and the infrastructure capacity that determines how
much load a system can absorb before it starts breaking in the first place.
An organization can have excellent SLOs, well-designed error budgets, and a
genuinely blameless incident culture, and still burn out its on-call
engineers through an unsustainable load that eventually degrades the very
reliability those other practices were built to protect.

This chapter treats operational load as a metric family in its own right,
directly connected to chapter 3.2's well-being and [burnout](https://en.wikipedia.org/wiki/Occupational_burnout) measurement but
specific to the particular, acute stress of carrying a pager: interrupted
sleep, the psychological cost of being on call even when nothing happens,
and the cumulative toll of frequent, poorly distributed incident load. An
organization that measures its systems' reliability meticulously while
never measuring the sustainability of the humans keeping those systems
reliable is measuring only half the picture, and the unmeasured half tends
to surface eventually as attrition, degraded incident response quality from
exhausted responders, or both.

For large teams, on-call and capacity metrics reveal load-balancing
problems that mirror chapter 3.5's knowledge-concentration concerns: a
small number of engineers absorbing a disproportionate share of pages,
often the most experienced people precisely because they can resolve
incidents fastest, which creates both a burnout risk and a bus-factor risk
simultaneously. Enterprise and government organizations running
around-the-clock critical services depend on this chapter's metrics to
staff on-call rotations sustainably rather than discovering the true cost
only through attrition.

## Key principles

- **On-call load is a measurable, manageable resource**, not an unavoidable,
  unlimited burden that engineers simply have to absorb.
- **Page frequency and page distribution are both important.** A team-wide
  average can hide severe concentration on a small number of individuals.
- **Interruption during on-call carries a cost even when no incident
  actually occurs**, the psychological weight of being reachable and
  responsible.
- **Capacity planning and on-call load are connected.** Under-provisioned
  infrastructure generates more pages, directly increasing on-call burden.
- **A sustainable on-call system protects reliability itself**, since
  exhausted responders make slower, more error-prone decisions during
  incidents.

## Recommendations

### Track page frequency and distribution, not just a team-level average

Measure how many pages each individual on-call engineer receives, not just
a team-wide average that can hide severe concentration. Similar to chapter
3.5's bus-factor and chapter 2.9's reviewer-load concerns, on-call load
often concentrates on a small number of experienced people who can resolve
incidents fastest, precisely the pattern that creates both burnout risk and
a dangerous single point of failure. Rebalance rotations deliberately when
this concentration appears.

### Measure the psychological cost of being on call, not just active
incident time

Being on call carries a real cost even during a shift with zero actual
pages: reduced sleep quality from anticipating a possible interruption,
constrained personal activities, and the low-grade stress of ongoing
responsibility. Where feasible, capture this through survey data (chapter
3.7) specifically about on-call experience, separate from general
satisfaction, since a team can report reasonable general satisfaction while
on-call specifically is quietly eroding well-being.

### Set explicit limits on sustainable on-call frequency

Establish a maximum reasonable frequency for how often any individual
should be on call, commonly no more than one week in four or five, and
track actual rotation frequency against that limit. A rotation that
technically has enough people listed but effectively relies on two or three
of them due to skill gaps or availability constraints is not actually
meeting the limit, regardless of what the nominal schedule shows.

### Connect capacity planning directly to on-call load

Under-provisioned infrastructure, insufficient headroom for traffic spikes,
inadequate auto-scaling configuration, generates more pages by definition,
directly increasing on-call burden. Track infrastructure capacity
utilization and correlate it with page frequency: a service that regularly
runs near its capacity ceiling and generates a disproportionate share of
pages is a direct, quantifiable argument for capacity investment, not just a
vague operational complaint.

### Use on-call metrics to inform staffing and hiring decisions, not
individual evaluation

Aggregate on-call load data at the team level to make the case for
additional headcount, better tooling to reduce false-positive pages, or
architectural investment to reduce genuine incident frequency. Following
this book's consistent guidance for any metric touching individuals
directly (chapter 1.2, chapter 3.4), never use individual page-response
metrics to evaluate a specific engineer's performance; the goal is
sustainable staffing and system design, not individual scorekeeping.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| No formal on-call load tracking | No overhead | Burnout risk and bus-factor concentration stay invisible until they surface as attrition |
| Team-average page frequency only | Simple to compute | Hides severe individual concentration |
| Individual-level page distribution tracking | Reveals concentration and burnout risk directly | Requires care to use only in aggregate, never for individual evaluation |
| Capacity investment to reduce page volume at the source | Addresses the root cause, reduces burden sustainably | Requires upfront infrastructure investment |

The central tension is **acceptance versus investment**. It is easy to
treat a high page volume as simply the unavoidable cost of running a
reliable service and ask on-call engineers to absorb it, but that
acceptance eventually costs the organization through attrition and
degraded incident response quality from exhausted responders. Resolve the
tension by treating elevated on-call load as a signal calling for genuine
investment, capacity improvements, better alerting to reduce false
positives, expanded rotation staffing, rather than an unavoidable burden to
simply endure indefinitely.

## Questions to discuss with your team

1. **What is our actual page distribution across individuals in the
   rotation, not just the team average?** Pull the real, individual-level
   data; a reasonable-looking team average can hide one or two people
   absorbing a dramatically disproportionate share.

2. **Have we ever measured the psychological cost of being on call
   separately from general satisfaction?** If not, discuss whether a
   dedicated, short survey question specifically about on-call experience
   would surface something your general satisfaction survey (chapter 3.2)
   is currently missing.

3. **Does our nominal on-call rotation schedule reflect reality, or does it
   effectively rely on only two or three people due to skill gaps or
   availability?** Be honest about this; a schedule listing eight names but
   effectively depending on two is not meeting any reasonable sustainability
   limit.

4. **Which of our services generates a disproportionate share of pages
   relative to its capacity headroom, and would additional infrastructure
   investment reduce that load directly?** Cross-reference page frequency
   against capacity utilization data explicitly to build this case with
   real evidence.

5. **Has on-call load data ever been used, even informally, to evaluate an
   individual's performance rather than to inform staffing and
   architecture decisions?** This risks the same individual-evaluation trap
   chapter 3.4 warns against for activity data, applied here to operational
   load instead.

6. **What would it cost us to lose our most-paged on-call engineer to
   burnout or attrition, and how does that compare to the cost of
   rebalancing the rotation or investing in root-cause fixes now?** This
   concrete comparison often makes a stronger case for proactive investment
   than an abstract appeal to sustainability alone.

## Sector lens

**Startup.** On-call is often informal and concentrated on founders or a
small early engineering team by necessity. The risk is normalizing an
unsustainable pace early, before deliberate rotation design has ever been
considered, which becomes much harder to unwind once it has become the
default expectation for new hires joining later.

**Small business.** A simple, explicit rotation schedule with a clear
sustainability limit (no more than one week in four, for example) is
achievable even without dedicated on-call tooling. The main discipline is
simply making the rotation and its fairness visible and explicit rather
than leaving it as an informal, unstated arrangement.

**Enterprise.** Page-distribution concentration and its associated
burnout and bus-factor risks scale badly here, since more services and more
complexity generally mean more potential pages, and expertise concentration
compounds the problem. Invest in individual-level load tracking (used only
in aggregate for staffing decisions), capacity investment to reduce page
volume at the source, and deliberate rotation rebalancing.

**Government.** Critical public infrastructure often requires
around-the-clock on-call coverage with genuine consequences if response is
delayed, which raises both the importance of sustainable staffing and the
difficulty of achieving it under typical public-sector headcount
constraints. Use on-call load data explicitly and directly to justify
staffing requests, framing sustainable on-call capacity as a direct,
quantifiable reliability requirement rather than a discretionary staffing
preference.

## Examples

**Enterprise.** A cloud infrastructure company found, after finally
pulling individual-level page data for the first time, that two senior
engineers out of a fifteen-person on-call rotation had personally handled
over 60% of all pages in the previous year, both because they were the
fastest at resolving complex incidents and because other rotation members
had learned to informally defer to them rather than attempt resolution
themselves. Both engineers reported significant burnout symptoms in the
company's well-being survey (chapter 3.2) without leadership having
previously connected that survey signal to the specific, quantifiable
on-call concentration data. A deliberate rebalancing effort, including
targeted training to build resolution confidence across the wider rotation
and a formal cap on how many consecutive pages any individual could be
assigned, reduced the two engineers' share to under 25% within six months,
with a corresponding improvement in their reported well-being.

**Government.** A regional water utility's on-call engineering team had
been operating with a nominal four-person rotation for critical
infrastructure monitoring, but capacity-utilization data revealed that one
specific aging pumping station, running consistently near its operational
ceiling, generated nearly half of all pages across the entire rotation. A
capacity upgrade to that single pumping station, funded directly using the
page-frequency-versus-capacity correlation as concrete supporting evidence
in the budget request, reduced total organization-wide page volume by
roughly 40% within the following year, demonstrating that the on-call
burden had been substantially a capacity problem in disguise rather than
purely a staffing or process problem.

## Business case: motivations, ROI, and TCO

The return on managing on-call and capacity load deliberately is avoided
attrition and avoided reliability degradation from exhausted responders
making slower, more error-prone decisions. The cloud infrastructure example
above shows the compounding risk directly: unmanaged concentration created
simultaneous burnout and bus-factor exposure that a straightforward,
data-informed rebalancing effort resolved at a modest cost compared to the
risk of losing either senior engineer to attrition.

The total cost of ownership includes the instrumentation to track
individual-level page distribution (used carefully, only in aggregate) and,
where indicated, genuine capacity investment to reduce page volume at the
source. The water utility example shows this investment can pay for itself
directly and measurably, since a single, well-targeted capacity fix reduced
organization-wide operational burden substantially.

## Anti-patterns and pitfalls

- **Tracking only a team-level average page count:** hides severe
  individual concentration that drives both burnout and bus-factor risk.
- **Treating a nominal rotation schedule as reflecting reality:** a
  schedule that effectively depends on two or three people is not
  sustainable regardless of how many names are listed.
- **Using individual page-response data to evaluate performance:** repeats
  the individual-evaluation trap this book warns against throughout,
  applied here to operational load.
- **Accepting high page volume as an unavoidable cost of reliability
  rather than investigating capacity as a root cause:** misses a frequently
  available, direct fix.
- **Never connecting on-call load data to well-being survey data:**
  misses the chance to identify and act on a compounding burnout risk
  before it surfaces as attrition.
- **Ignoring the psychological cost of being on call with zero actual
  pages:** undercounts the true burden of a rotation.

## Maturity model

- **Level 1, Initiate:** On-call load is not tracked at all, or tracked
  only as a team-wide average that hides individual concentration.
- **Level 2, Develop:** Some individual-level page data exists, but it is
  not connected to well-being survey data or capacity investment decisions.
- **Level 3, Standardize:** Individual-level page distribution and
  capacity-utilization correlation are tracked consistently, with explicit
  sustainability limits on rotation frequency.
- **Level 4, Manage:** On-call load data is actively used to drive
  capacity investment and rotation rebalancing, connected explicitly to
  well-being survey signals.
- **Level 5, Orchestrate:** The organization can point to specific,
  measurable improvements in both operational load and well-being from
  targeted capacity investment and rotation redesign, and sustainable
  on-call staffing is a routine, well-justified input to headcount and
  infrastructure planning.

## Ideas for discussion

1. What does our actual, individual-level page distribution look like right now?
2. Does our nominal rotation schedule reflect who actually resolves most incidents?
3. What single capacity investment would most reduce our current page volume?
4. Have we ever connected on-call load data to well-being survey signals?
5. What would it cost us to lose our most heavily paged engineer to burnout?

## Key takeaways

- On-call load is a **measurable, manageable resource**; track
  individual-level distribution, not just a team-wide average that can hide
  severe concentration.
- Being on call carries a **psychological cost even with zero actual
  pages**; measure this separately from general satisfaction.
- **Capacity planning and on-call load are directly connected**;
  under-provisioned infrastructure generates more pages and more burden.
- Use on-call data for **staffing and capacity decisions**, never for
  individual performance evaluation.
- A sustainable on-call system **protects reliability itself**, since
  exhausted responders make slower, more error-prone decisions.

## References and further reading

- *Site Reliability Engineering: How Google Runs Production Systems*, by
  Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy, eds.
  (on-call practice and sustainable operational load).
- *The Site Reliability Workbook*, by Betsy Beyer, Niall Richard Murphy,
  David K. Rensin, Kent Kawahara, and Stephen Thorne, eds. (practical
  on-call rotation design guidance).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, by Christina Maslach and Michael P. Leiter (organizational
  causes and interventions for burnout, applicable to on-call stress).
- *Seeking SRE: Conversations About Running Production Systems at Scale*,
  edited by David N. Blank-Edelman (practitioner perspectives on
  sustainable operations practice).
