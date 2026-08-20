# 3.5 Communication and collaboration metrics

## Overview and motivation

**Communication and collaboration**, the C in SPACE (chapter 3.1), measures
how information actually flows between people and teams: how discoverable
documentation is, how evenly knowledge spreads across a team, how well
cross-team dependencies get coordinated, and how new team members onboard
into the flow of shared understanding. This dimension is often the least
instrumented of the five, precisely because it is harder to observe than
delivery data and less personal than satisfaction data, and that gap is a
mistake, because breakdowns here are frequently the root cause of problems
that show up, misattributed, in every other dimension.

A rising change failure rate (chapter 2.9) that looks like a testing problem
is sometimes actually a communication problem: a team that did not know
about a dependency's change until it broke in production. A declining
satisfaction trend (chapter 3.2) that looks like a workload problem is
sometimes actually an isolation problem: an engineer who has been quietly
excluded from the conversations where decisions get made. This chapter's
central argument is that communication and collaboration deserve direct
measurement precisely because their failures masquerade as other problems,
and a team chasing the wrong root cause wastes real effort fixing the wrong
thing.

For large teams, this dimension becomes structurally harder to sustain
exactly as it becomes more important. A five-person team's coordination
happens through daily proximity and needs almost no deliberate measurement;
a five-hundred-person organization spread across time zones and business
units depends on documentation, discoverability, and cross-team coordination
mechanisms that have to be deliberately designed and actively monitored,
because the informal channels that worked at small scale simply do not
reach that far.

## Key principles

- **Communication breakdowns often masquerade as other problems.** A
  quality or satisfaction issue may have a collaboration root cause.
- **This dimension is the hardest to instrument automatically**, and the
  temptation is to skip it entirely; resist that temptation deliberately.
- **Knowledge concentration is a measurable risk, not just a vague worry.**
  Track how narrowly critical knowledge is held.
- **Cross-team dependency friction is often invisible to the teams
  involved** until someone measures it directly.
- **Onboarding speed is a direct, measurable proxy for how well shared
  understanding actually flows** in an organization.

## Recommendations

### Measure knowledge concentration directly

Track how many people can competently review, modify, or operate each
critical system component: a component with only one qualified person is a
**[bus factor](https://en.wikipedia.org/wiki/Bus_factor)** of one, a severe and often invisible risk (the sibling
`software-engineering-guide` book's chapter on sustaining long-lived systems
covers this in more depth). Version control blame data, combined with
on-call rotation records,
can surface this concentration automatically: look for components where a
single author or a single on-call responder accounts for a disproportionate
share of changes or incident responses over a meaningful period.

### Measure cross-team dependency friction with a direct signal

Track how long a cross-team request, a needed API change, a shared library
update, a coordinated release, takes from being raised to being resolved,
similar in spirit to the cycle-time decomposition in chapter 2.6 but applied
specifically to inter-team, rather than intra-team, coordination. A team
that consistently waits weeks for a dependency another team owns has a
collaboration problem that will not show up cleanly in either team's own
internal delivery metrics.

### Use documentation discoverability, not just documentation existence, as
the signal

A wiki full of outdated or unfindable pages is not evidence of good
communication just because content technically exists somewhere. Where
possible, track how often documentation is actually accessed, how often a
new team member reports being unable to find an answer they needed, or how
often the same question gets asked repeatedly in a chat channel because the
answer, though documented, was not discoverable. This directly connects
documentation quality (chapter 4.6) to this dimension's collaboration
concerns.

### Track onboarding time to productive contribution as a direct proxy

The time from a new team member joining to their first meaningful,
independent contribution is a strong, practical proxy for how well shared
understanding actually flows in an organization: a team where knowledge
lives entirely in people's heads onboards slowly and unpredictably; a team
with genuinely good documentation, clear ownership, and accessible
mentorship onboards faster and more consistently. Track this metric
explicitly and treat a long or highly variable onboarding time as a
collaboration signal, not just an HR concern.

### Map actual communication networks periodically, not just org charts

An organizational chart describes who is supposed to report to whom; it
rarely describes who actually talks to whom to get work done. Periodic,
lightweight analysis of communication patterns, code review networks (who
reviews whose work), or meeting attendance overlap, can reveal a real
collaboration structure that differs substantially from the formal
org chart, often exposing an informal bottleneck (one person everyone routes
through) or an isolated pocket (a subteam that has drifted out of the
broader information flow) that would otherwise stay invisible.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| No direct collaboration measurement | Low overhead | Root causes get misattributed to other dimensions; risks stay invisible |
| Knowledge-concentration tracking | Surfaces a real, severe risk (bus factor) directly | Requires combining data from multiple systems (version control, on-call) |
| Cross-team dependency friction tracking | Reveals coordination problems invisible within either team | Needs deliberate instrumentation; not automatic from existing tools |
| Communication-network mapping | Reveals the real, informal structure behind the org chart | Can feel invasive if not handled with the same care as satisfaction data |

The central tension is **instrumentation difficulty versus diagnostic
value**. This dimension is genuinely harder to measure automatically than
delivery or activity data, and that difficulty is exactly why many
organizations skip it, even though its failures are frequently the hidden
root cause of problems attributed to other dimensions. Resolve the tension
by starting with the highest-value, most tractable signals, knowledge
concentration and cross-team dependency friction, both of which can be
derived largely from existing version control and issue-tracking data,
before attempting more ambitious communication-network analysis.

## Questions to discuss with your team

1. **Do we know our bus factor for each critical system component, or would
   we only find out the hard way when the one person who understands it is
   unavailable?** Pull version control and on-call data for your most
   critical systems and check honestly how concentrated the knowledge
   actually is.

2. **How long does a typical cross-team dependency request take to
   resolve, and would either team involved have noticed that friction
   without deliberately measuring it?** Pick a recent cross-team dependency
   and trace its actual timeline; the answer is often longer, and less
   visible to those involved, than either team assumed.

3. **When we have had a quality or satisfaction problem recently, could a
   communication or collaboration breakdown have been part of the real root
   cause?** Look back at a recent incident or a satisfaction dip and ask
   this question specifically, rather than accepting the first, more
   obvious explanation.

4. **How long does it take a new team member to make their first
   meaningful, independent contribution, and how much does that time vary
   person to person?** A long or highly variable onboarding time is a
   direct, measurable symptom of how well shared understanding actually
   flows on your team.

5. **Does our informal communication network match our formal org chart, or
   has a hidden bottleneck or an isolated pocket developed that no one has
   named?** If you have never looked at this directly, that absence is
   itself worth discussing.

6. **Is our documentation actually discoverable, or does it merely exist
   somewhere that is hard to find?** Ask a recent new team member, or
   deliberately try to answer a real question using only your documented
   resources, and see how the experience actually goes.

## Sector lens

**Startup.** Communication happens naturally through proximity and daily
conversation in a small team, and formal measurement is usually unnecessary.
The risk to watch for is bus factor concentrating dangerously as the team
grows past the size where informal osmosis still reaches everyone, often
around eight to twelve people.

**Small business.** A simple, periodic, honest conversation, "who is the
only person who understands this system," often surfaces the most critical
knowledge-concentration risks without needing formal instrumentation.
Prioritize documenting the two or three most fragile, most concentrated
areas of knowledge first.

**Enterprise.** Cross-team dependency friction and knowledge concentration
both scale badly here, since more teams mean more coordination surface area
and more critical systems that can end up owned by a shrinking pool of
tenured experts. Invest in the instrumentation this chapter recommends
deliberately, since informal awareness genuinely cannot cover an
organization at this scale.

**Government.** Long-lived systems and long employee tenures common in
public-sector organizations can create severe bus-factor risk hiding behind
apparent stability, since a system that has not changed hands in a decade
may depend entirely on one or two people nearing retirement. Treat
knowledge-concentration measurement as a continuity-of-operations concern,
not just an engineering nicety.

## Examples

**Enterprise.** A logistics company's platform team discovered, only after
a critical incident during a key engineer's vacation, that a core routing
algorithm had an effective bus factor of one: version control history
showed a single person had authored over 90% of the component's recent
changes, and the on-call rotation record showed the same person had
personally resolved every related incident for the previous two years. The
team instituted a deliberate knowledge-spreading programme, pairing sessions
and rotating ownership of related incidents, and a follow-up analysis eight
months later showed the bus factor had risen to four, with the original
engineer freed to take on new, higher-leverage work instead of remaining a
permanent single point of failure.

**Government.** A state benefits agency's engineering team measured
cross-team dependency friction for the first time after repeated, informally
noticed delays in a shared eligibility-verification service. The data
showed the median wait for a dependency change from the shared service team
was eleven days, far longer than either team had assumed when asked
informally, and the root cause turned out to be an unclear, undocumented
request process rather than any capacity shortage. Publishing a clear,
simple request process and a committed response-time target for the shared
service brought the median wait down to under two days within one quarter,
with no additional staffing required.

## Business case: motivations, ROI, and TCO

The return on measuring communication and collaboration directly is
catching root causes other dimensions misattribute: a quality problem that
looks like a testing gap but is actually a communication breakdown wastes
effort when a team tries to fix it by adding more tests rather than fixing
the underlying coordination failure. The bus-factor example above shows the
starkest version of this return: an organization that discovers and fixes a
severe knowledge-concentration risk proactively avoids the catastrophic cost
of discovering it during an actual crisis, when the one person who
understood a critical system is genuinely unavailable.

The total cost of ownership is mostly instrumentation effort, combining
version control, on-call, and issue-tracking data in ways that are not
automatic out of the box, plus the periodic discipline of reviewing
knowledge concentration and dependency friction explicitly. That cost is
modest compared to the cost of a genuine bus-factor crisis or a chronic,
unaddressed cross-team coordination failure.

## Anti-patterns and pitfalls

- **Skipping this dimension because it is hard to instrument
  automatically:** leaves root causes misattributed to other, easier-to-measure
  dimensions.
- **Treating an org chart as an accurate picture of real communication
  patterns:** frequently wrong, and the gap is exactly where hidden
  bottlenecks live.
- **Ignoring bus factor until a crisis forces the discovery:** the single
  most damaging failure mode this chapter warns against.
- **Assuming documentation existence equals documentation usefulness:**
  outdated or unfindable content provides little real communication value.
- **Measuring cross-team friction but not acting on a clear, fixable root
  cause once found:** wastes the diagnostic investment.
- **Treating slow, variable onboarding as purely an HR issue rather than an
  engineering collaboration signal:** misses a genuinely useful, measurable
  proxy.

## Maturity model

- **Level 1, Initiate:** Communication and collaboration are not measured
  at all; bus factor and cross-team friction are discovered only through
  crisis.
- **Level 2, Develop:** Some informal awareness of knowledge concentration
  exists, but there is no consistent measurement or proactive
  investigation.
- **Level 3, Standardize:** Bus factor and cross-team dependency friction
  are measured consistently for critical systems and shared services
  organization-wide.
- **Level 4, Manage:** Communication-network mapping periodically reveals
  hidden bottlenecks and isolated pockets, and onboarding time is tracked as
  a direct proxy for shared-understanding health.
- **Level 5, Orchestrate:** The organization proactively reduces
  knowledge-concentration risk and cross-team friction before they cause
  incidents, and can point to specific interventions, deliberate knowledge
  spreading, clarified dependency processes, that measurably improved this
  dimension.

## Ideas for discussion

1. What is our bus factor for our single most critical system, honestly?
2. What cross-team dependency has caused the most friction in the last quarter, and did we measure it?
3. Would a new team member find our documentation, or just find that it technically exists somewhere?
4. Does our informal communication network match our org chart?
5. What quality or satisfaction problem might actually have a collaboration root cause we have not investigated?

## Key takeaways

- Communication and collaboration failures often **masquerade as other
  problems**; a root cause misattributed to the wrong dimension wastes
  effort.
- Track **knowledge concentration (bus factor)** directly using version
  control and on-call data, rather than waiting for a crisis to reveal it.
- Measure **cross-team dependency friction** explicitly; it is usually
  invisible to the teams involved until measured.
- Use **onboarding time to productive contribution** as a direct,
  practical proxy for how well shared understanding flows.
- Periodically map **real communication networks**, since they often differ
  substantially from the formal org chart.

## References and further reading

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Team Topologies*, by Matthew Skelton and Manuel Pais (team interaction
  modes and cross-team dependency design).
- *Peopleware: Productive Projects and Teams*, by Tom DeMarco and Timothy
  Lister (informal communication structures and their effect on
  productivity).
- Conway, Melvin E., "How Do Committees Invent?" (1968): the origin of
  Conway's Law, on the relationship between communication structure and
  system structure.
