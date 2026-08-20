# 6.2 Incident metrics: detection, response, and recovery

## Overview and motivation

This chapter measures what happens when the error budget from chapter 6.1
gets spent through an actual failure: an **incident**, an unplanned event
that degrades or interrupts a service. Four metrics form the standard
vocabulary for measuring how well an organization handles this: **mean time
to detect (MTTD)**, how long before the organization notices something is
wrong; **mean time to acknowledge (MTTA)**, how long before someone takes
ownership of responding; **mean time to resolve** or **recover (MTTR)**, how
long until service is restored, the same concept chapter 2.5 covered
specifically for deployment-caused failures, now generalized to any
incident regardless of cause; and **incident frequency**, simply how often
incidents occur at all.

This chapter's central concern, echoing chapter 2.4's treatment of change
failure rate, is that these numbers are only as trustworthy as the
organizational culture around reporting and classifying incidents honestly.
A team that fears blame for an incident has every incentive to under-report,
delay acknowledgement to avoid being "on the clock," or classify a serious
event as minor to protect its own metrics. **[Blameless](https://en.wikipedia.org/wiki/Just_culture) postmortem**
practice, pioneered at organizations like Etsy and formalized in Google's
SRE literature, exists specifically to remove that incentive, and this
chapter treats it as a prerequisite for trustworthy incident data, not an
optional cultural nicety layered on top of the metrics.

For large teams, incident metrics reveal whether an organization's
detection and response capability, chapter 2.5's rollback tooling among
other investments, actually works under real, varied conditions, not just
the specific deployment-caused failure scenario that chapter covered.
Enterprise and government organizations operating critical infrastructure
depend on these metrics both internally, to drive genuine operational
improvement, and externally, to demonstrate to customers, regulators, or the
public that incidents are handled competently and improving over time.

## Key principles

- **Blameless culture is a prerequisite for trustworthy incident data**, not
  an optional addition; fear of blame corrupts reporting, acknowledgement
  speed, and severity classification alike.
- **Detection, acknowledgement, and resolution are distinct phases with
  distinct fixes.** A slow overall recovery time can hide very different
  underlying problems depending on which phase is actually slow.
- **Incident frequency and MTTR are a paired signal**, similar to DORA's
  change failure rate and recovery time (chapters 2.4, 2.5): neither alone
  tells the full story.
- **Severity classification needs the same rigor as escaped defect
  classification** (chapter 5.1): consistent, documented criteria, not ad
  hoc judgement.
- **A postmortem's value is in systemic learning, not in producing a
  number.** The metric is a byproduct of good practice, not the goal of it.

## Recommendations

### Decompose incident response time into its distinct phases

Measure and report detection time (from the failure's actual onset to
someone noticing), acknowledgement time (from notification to someone
taking ownership), and resolution time (from ownership to genuine recovery)
separately, rather than only a single, blended total. Each phase points to a
different fix: slow detection points to a monitoring and alerting gap, slow
acknowledgement points to an on-call process or escalation problem, and slow
resolution points to a tooling, runbook, or diagnostic capability gap
(chapter 2.5 covers this specifically for deployment-caused failures).

### Build and protect a genuinely blameless postmortem process

A **blameless postmortem** investigates what happened and why the system
allowed it to happen, explicitly avoiding attributing fault to an
individual for a mistake that any reasonable person in the same
circumstances, with the same information, could plausibly have made.
Protect this discipline actively: leadership modelling non-punitive
responses to incidents, an explicit written policy, and a habit of asking
"what about our system allowed this" rather than "who did this" are all
necessary, ongoing investments, not a one-time policy statement.

### Classify severity with consistent, documented, audited criteria

Apply the same discipline chapter 5.1 recommends for escaped defects to
incident severity classification: a fixed, documented scale based on actual
customer or business impact, applied consistently across teams, periodically
audited for drift. Inconsistent classification, some teams generous, some
strict, makes organization-wide incident data as unreliable for comparison
as inconsistently classified defect data would be.

### Track incident frequency and MTTR together, never in isolation

An improving MTTR alongside a rising incident frequency might indicate a
team getting better at firefighting while the underlying system reliability
actually degrades; a falling incident frequency alongside a worsening MTTR
might indicate rarer but more severe, harder-to-diagnose failures replacing
frequent minor ones. Review both together, exactly mirroring the
speed-and-stability pairing discipline from Part 2's DORA metrics, to get
an honest combined picture.

### Extract and track systemic action items from postmortems, not just
metrics

The real value of the postmortem process is the specific, systemic action
items it produces: a missing alert added, a runbook improved, a
single-point-of-failure removed. Track these action items to completion
with the same discipline as the technical debt backlog from chapter 4.5,
since a postmortem that produces insight but no follow-through wastes the
organizational learning the process is meant to capture.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Blended, single incident-response-time metric | Simple to report | Hides which specific phase, detection, acknowledgement, resolution, is the actual problem |
| Phase-decomposed incident metrics | Diagnostic, points directly to the right fix | Requires more careful instrumentation of each phase transition |
| Blame-oriented incident review | Feels accountable, satisfies a desire to assign responsibility | Corrupts future reporting honesty and rarely fixes the actual systemic cause |
| Blameless postmortem practice | Produces honest data and genuine systemic fixes | Requires sustained cultural investment and leadership discipline to maintain |

The central tension is **the appeal of individual accountability versus the
practical need for honest reporting**. Blaming an individual after an
incident can feel satisfying and can look like decisive leadership, but it
reliably corrupts every future incident's data, because people
under-report, delay acknowledgement, or misclassify severity once they fear
personal consequence. Resolve the tension in favour of blameless practice
deliberately and consistently, understanding that genuine accountability
comes from fixing the system that allowed a failure, not from punishing the
individual who happened to be present when it occurred.

## Questions to discuss with your team

1. **Do we decompose incident response time into detection, acknowledgement,
   and resolution phases, or only track a single blended number?** If only
   a blended number exists, pick a recent significant incident and try to
   reconstruct the phase breakdown retroactively to see what it would have
   revealed.

2. **Would our team genuinely believe our postmortem process is blameless,
   or does fear of consequence still shape how incidents get reported and
   discussed?** Ask this directly and honestly; a stated blameless policy
   that is not actually lived does not produce trustworthy data.

3. **Would two different teams classify the same incident's severity the
   same way?** Pick a real, ambiguous past incident and have
   representatives from different teams classify it independently, then
   compare results.

4. **Do we review incident frequency and MTTR together, or does one get
   more attention than the other?** Check your actual reporting practice
   and reviews for this pairing, mirroring the same discipline chapters 2.4
   and 2.5 recommend for the DORA stability metrics.

5. **What percentage of our postmortem action items from the last six
   months have actually been completed?** If you do not currently track
   this, that gap is worth naming; a postmortem process with a low
   action-item completion rate is producing insight without follow-through.

6. **Has fear of blame ever caused someone to delay reporting or
   acknowledging an incident?** This is an uncomfortable but important
   question; an honest "yes, and here is what happened" answer is far more
   valuable to the health of your incident process than a reflexive "no."

## Sector lens

**Startup.** Incident response is often informal by necessity with a small
team, and formal phase decomposition may be unnecessary at first. The habit
worth adopting early is blameless discussion norms from the very first
incident, since cultural habits set early are far easier to sustain than to
retrofit once a blame-prone pattern has taken hold.

**Small business.** A simple, shared incident log, even informal, with a
basic severity classification and a brief blameless retrospective for
anything significant, captures most of this chapter's value without needing
sophisticated tooling or a dedicated incident-management platform.

**Enterprise.** Consistent severity classification and genuine, sustained
blameless culture are both harder to maintain at scale, and both are
essential for trustworthy, comparable incident data across dozens of teams.
Invest in documented classification criteria, periodic auditing, and active
leadership modelling of blameless response, since cultural drift toward
blame tends to creep in gradually without deliberate, ongoing
counter-pressure.

**Government.** Incidents affecting public services or critical
infrastructure often face external scrutiny, media attention, or formal
inquiry, which creates strong pressure toward blame-seeking that can
directly undermine internal blameless practice if not actively managed.
Maintain a clear internal blameless discipline for genuine systemic
learning, separate from any external accountability process that may
follow a serious incident, and communicate that distinction clearly to
staff.

## Examples

**Enterprise.** A payments company's engineering culture had, for years,
informally treated incidents as something to minimize acknowledging quickly
to avoid looking responsible, leading to consistently poor detection and
acknowledgement times that leadership initially attributed to inadequate
monitoring tooling. A cultural shift toward genuinely blameless
postmortems, including leadership publicly and specifically praising fast,
honest incident acknowledgement rather than only praising fast resolution,
produced a measurable improvement in both detection and acknowledgement
time within two quarters, revealing that the original bottleneck had been
cultural, fear of blame, rather than technical, inadequate tooling, as
initially assumed.

**Government.** A public transit agency's operations centre had
historically classified nearly every service disruption as "minor" in its
internal incident log, a pattern a new safety director found suspicious
given persistent, informal complaints from field staff about serious
recurring problems. An investigation revealed that the "minor"
classification avoided a burdensome formal reporting process required for
higher severities, creating an unintended incentive to under-classify. The
agency simplified its formal reporting requirements for all severities and
explicitly protected staff from blame for honest severity reporting, and
subsequent incident data showed a more accurate, and substantially higher,
rate of genuinely significant disruptions, finally giving leadership an
honest picture to prioritize infrastructure investment against.

## Business case: motivations, ROI, and TCO

The return on genuinely blameless, well-classified, phase-decomposed
incident metrics is honest data that actually drives systemic improvement,
rather than a comforting but false picture produced by fear-driven
under-reporting or misclassification. The payments company example above
shows this concretely: a cultural fix, not a tooling investment, resolved
what leadership had misdiagnosed as a technical detection problem.

The total cost of ownership is mostly cultural and process investment:
sustained leadership commitment to blameless practice, documented and
audited severity classification criteria, and the discipline to track
postmortem action items to completion. That investment costs less than the
alternative, an incident metrics programme that produces confidently wrong
data because fear has corrupted every input into it.

## Anti-patterns and pitfalls

- **Blame-oriented incident review:** corrupts reporting honesty,
  acknowledgement speed, and severity classification for every future
  incident.
- **Tracking only a blended response-time number:** hides which specific
  phase, detection, acknowledgement, resolution, is actually the problem.
- **Inconsistent severity classification across teams:** makes
  organization-wide incident data unreliable for comparison.
- **Reviewing incident frequency and MTTR in isolation:** misses the
  combined, honest picture the paired signal provides.
- **A postmortem process that produces insight but no completed action
  items:** wastes the organizational learning the process is meant to
  capture.
- **A stated blameless policy that is not actually lived by leadership:**
  produces the same fear-driven data corruption as an openly blame-oriented
  culture.

## Maturity model

- **Level 1, Initiate:** Incident response is informal, reporting is
  inconsistent, and a blame-prone culture actively discourages honest
  reporting.
- **Level 2, Develop:** Some incident tracking exists, but severity
  classification is inconsistent and blameless practice is stated but not
  consistently lived.
- **Level 3, Standardize:** Phase-decomposed incident metrics with
  consistent, documented severity classification are tracked
  organization-wide, with genuinely blameless postmortem practice.
- **Level 4, Manage:** Incident frequency and MTTR are reviewed together,
  postmortem action items are tracked to completion, and classification is
  periodically audited for consistency.
- **Level 5, Orchestrate:** The organization has a demonstrated, sustained
  track record of blameless practice producing honest data and genuine
  systemic fixes, and incident metrics directly and reliably inform
  reliability investment decisions.

## Ideas for discussion

1. Would our postmortem process survive an honest test of whether it is genuinely blameless?
2. What is the phase breakdown, detection, acknowledgement, resolution, of our slowest recent incident?
3. Would two teams classify our last significant incident's severity the same way?
4. What percentage of our recent postmortem action items have actually been completed?
5. Has fear of blame ever shaped how an incident was reported or discussed on our team?

## Key takeaways

- **Blameless postmortem culture is a prerequisite** for trustworthy
  incident data; fear of blame corrupts reporting, acknowledgement speed,
  and classification alike.
- Decompose response time into **detection, acknowledgement, and
  resolution** phases, each pointing to a different fix.
- Classify severity with **consistent, documented, audited criteria**,
  mirroring chapter 5.1's escaped defect discipline.
- Review **incident frequency and MTTR together**, never in isolation, the
  same pairing discipline as DORA's stability metrics.
- Track **postmortem action items to completion**; the metric is a
  byproduct of good practice, not the goal of it.

## References and further reading

- *Site Reliability Engineering: How Google Runs Production Systems*, by
  Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy, eds.
  (blameless postmortem practice and incident metrics).
- *The Site Reliability Workbook*, by Betsy Beyer, Niall Richard Murphy,
  David K. Rensin, Kent Kawahara, and Stephen Thorne, eds. (practical
  incident-response and postmortem guidance).
- *The Field Guide to Understanding Human Error*, by Sidney Dekker (the
  foundational case for systemic, blameless failure investigation).
- Allspaw, John, "Blameless PostMortems and a Just Culture," Etsy
  Engineering Blog (2012): an early, influential articulation of blameless
  practice in software operations.
