# 1.5 Data sources and instrumentation

## Overview and motivation

A metric is only as trustworthy as the data underneath it, and most metrics
programmes spend far more effort designing dashboards than verifying the
pipeline that feeds them. This is backwards. A beautifully designed chart
built on inconsistent, self-reported, or silently broken instrumentation is
worse than no chart at all, because it looks authoritative while being
wrong. This chapter is about the unglamorous foundation the rest of this
book assumes: where engineering data actually comes from, when to trust
automated instrumentation over self-report, and the data-quality failures
that quietly invalidate a metric before anyone notices.

Software engineering data comes from a handful of source types, each with
different reliability characteristics. Version control and [CI/CD](https://en.wikipedia.org/wiki/CI/CD) pipelines
generate objective, timestamped, hard-to-fake records of what actually
happened. Issue trackers and project management tools generate records that
depend on humans updating state correctly and promptly, which they often do
inconsistently. Surveys generate self-reported data that is invaluable for
things no system can observe, like satisfaction, but is subject to recall
bias and social desirability effects. Observability platforms generate
system-level telemetry that is objective but only covers what was
instrumented. Knowing which category a given metric's data comes from tells
you how much to trust it and what failure modes to watch for.

At enterprise and government scale, data quality problems compound because
the distance between the data's origin and its final use in a dashboard
grows through multiple systems, integrations, and transformations. A field
that means one thing in the source system can mean something subtly
different by the time it reaches a reporting layer, and no one downstream
notices because the number still looks plausible. Getting instrumentation
right is less exciting than getting frameworks right, but it is the
foundation everything else in this book stands on.

## Key principles

- **Prefer instrumentation over self-report wherever the system can observe
  the event directly.** A deploy timestamp from the pipeline is more
  trustworthy than a team's self-reported deploy count.
- **Use self-report only for what cannot be observed directly.**
  Satisfaction, perceived friction, and well-being have no system-of-record
  substitute; ask directly and design the survey well (chapter 3.7).
  Reserve self-report specifically for that category.
- **Every metric's data has a source system, a collection method, and a
  known failure mode.** Document all three, not just the definition.
- **Data quality decays silently.** A pipeline that worked correctly a year
  ago can be quietly broken today, and a dashboard will keep rendering a
  wrong number without complaint.
- **Instrument at the point of truth, not downstream of a translation.**
  Every hop between the event and the dashboard is a chance for meaning to
  drift.

## Recommendations

### Map every metric to its actual source system before trusting it

For each metric on a dashboard, name the specific system that generates the
underlying event: the CI/CD pipeline for deploy events, the version control
host for commit and merge events, the incident tracker for outage records,
the survey platform for self-reported satisfaction. If you cannot name the
exact system, you do not actually know where the number comes from, and you
cannot evaluate its reliability. This mapping is a prerequisite for the
governance charter in chapter 1.4, not a separate exercise.

### Instrument at the event, not at the report

The most reliable data captures an event automatically at the moment it
happens: a pipeline records a deploy the instant it completes, a version
control system records a merge the instant it lands. Data that depends on a
human remembering to update a status field afterward, marking a ticket
"done," logging a deploy manually in a spreadsheet, degrades in accuracy the
further it sits from the actual event and the busier the person responsible
becomes. Wherever an automated event exists, prefer it over a human-reported
proxy for the same fact.

### Reserve surveys for what only a person can tell you

Some things genuinely cannot be observed from system telemetry: whether an
engineer feels their work is meaningful, whether a process feels
frustrating, whether burnout risk is rising. These require asking directly,
and a well-designed survey (chapter 3.7 covers the mechanics) is the right
tool. The mistake is using self-report for things a system could observe
directly instead, asking engineers to estimate their own deployment
frequency rather than pulling it from the pipeline, which introduces
unnecessary noise and bias into data that could have been objective.

### Build data-quality checks into the pipeline itself

Treat metric pipelines with the same rigor as production code: add
automated checks that flag when a source stops sending data, when a field's
distribution shifts unexpectedly, or when a count drops to zero
unexpectedly. A dashboard that silently renders stale or broken data as if
it were current is worse than a dashboard that visibly shows "data
unavailable," because the first erodes trust invisibly while the second at
least tells the truth about its own limitations.

### Document the collection method alongside the definition

A metric's definition ("lead time for changes") is not complete without its
collection method (measured from first commit timestamp in version control
to production deploy timestamp in the pipeline, excluding hotfix branches).
Two teams with the same definition but different collection methods will
still produce incomparable numbers. Record both in the metrics charter from
chapter 1.4, and treat a change to either as a change requiring the same
documented review.

## Trade-offs: pros and cons

| Source type | Pros | Cons |
| --- | --- | --- |
| Automated pipeline instrumentation (CI/CD, version control) | Objective, timestamped, hard to fake, low ongoing effort | Requires upfront engineering investment to build and maintain |
| Issue tracker and project management data | Widely available, familiar to teams | Depends on human diligence; often inconsistent across teams |
| Surveys and self-report | Only source for subjective experience (satisfaction, well-being) | Recall bias, social desirability bias, response fatigue |
| Observability and telemetry platforms | Rich, real-time, system-level signal | Only covers what was explicitly instrumented; can be expensive at scale |

The central tension is **objectivity versus coverage**. Automated
instrumentation is the most trustworthy source but cannot observe subjective
experience at all, while surveys can reach exactly what automation cannot but
carry real bias risk. Resolve the tension by using automated instrumentation
wherever an event can be observed directly, and reserving self-report
specifically and only for what genuinely requires asking a person, never as
a lazy substitute for data a system could have provided.

## Questions to discuss with your team

1. **For our five most important metrics, can we name the exact source
   system and collection method for each, or are we assuming a definition
   without knowing where the data actually comes from?** This is a
   surprisingly common gap: a metric gets adopted from a framework or a
   vendor's default dashboard, and no one on the current team actually knows
   which system generates the underlying data or how. Trace each one back to
   its origin as a group exercise.

2. **Which of our metrics rely on self-report for something a system could
   observe directly, and what would it take to replace that self-report with
   real instrumentation?** Self-reported deploy counts, self-reported hours
   worked, and self-estimated cycle time are all common examples of using
   the wrong data source for something automation could capture more
   reliably. Identify these and prioritize replacing the highest-stakes ones.

3. **How would we know if one of our data pipelines silently broke?** Most
   organizations discover a broken metrics pipeline only when someone
   notices a number looks implausible, which can take months. Discuss
   whether any of your pipelines have automated health checks today, and if
   not, which ones most need them first.

4. **Where has a translation between systems changed a metric's meaning
   without anyone deciding that on purpose?** A field that means one thing
   in a source system can mean something subtly different after an
   integration or migration, and the resulting number can look plausible
   while being wrong. Walk through your most consequential metric's full
   data path and look for translation points.

5. **Do we document collection methods, not just definitions, for our
   metrics charter?** Two teams can share a metric's name and definition
   while computing it from different collection methods, producing numbers
   that are not actually comparable. Audit a sample of your charters against
   this specific gap.

6. **How do we distinguish between a genuine trend and a data-quality
   artefact when a number moves unexpectedly?** A sudden shift in a metric
   is often the first sign of either a real change or a broken pipeline, and
   distinguishing the two requires knowing the data source well enough to
   investigate quickly. Discuss your team's actual process for the last
   unexplained metric shift you encountered.

## Sector lens

**Startup.** With a small stack, most of your metrics can come directly from
your CI/CD provider, version control host, and a lightweight survey tool,
without building custom pipelines. The risk is skipping even basic health
checks because the team is moving fast; a five-minute automated check that a
data source is still sending events is cheap insurance against silently
flying blind.

**Small business.** Lean on the built-in reporting of your existing tools
rather than building custom data pipelines you lack the capacity to
maintain. Be explicit about which numbers come from automated systems and
which are estimates someone types into a spreadsheet, because the two carry
very different reliability, even if they end up on the same page.

**Enterprise.** Data quality problems compound across integrations,
migrations, and business-unit boundaries. Invest in centralized,
well-monitored data pipelines for your most consequential metrics, build
automated data-quality checks as a standard practice, and audit collection
methods, not just definitions, whenever comparing metrics across business
units.

**Government.** Data provenance can carry legal and audit weight: a
published performance figure may need to survive an external audit of not
just its value but its entire collection chain. Document data lineage
explicitly, retain historical collection-method records even after a
methodology changes, and be prepared to demonstrate exactly how a number was
produced, not just what it currently reads.

## Examples

**Enterprise.** A financial services company's engineering leadership had
been tracking "lead time for changes" for two years before discovering that
a data pipeline migration eighteen months earlier had silently switched the
timestamp source from first commit to pull request creation, shortening the
apparent lead time by an average of several hours across every team without
anyone noticing or approving the change. The fix instituted a data-quality
check comparing each metric's distribution week over week and flagging
statistically unusual shifts for human review, catching two further silent
pipeline issues within the following year.

**Government.** A transportation agency's public-facing service-reliability
dashboard relied on a mix of automated sensor telemetry and manually
entered incident reports from regional offices. An audit found that regions
with less staff capacity were systematically under-reporting minor
incidents, not out of dishonesty but simply because manual entry competed
for time with more urgent work, which meant the published reliability figure
was better than reality in exactly the regions that could least afford
under-resourced maintenance to go unnoticed. The agency's fix replaced
manual incident entry with automated sensor-triggered logging wherever
feasible and added a documented estimate of manual-reporting coverage
alongside the published figure.

## Business case: motivations, ROI, and TCO

The return on solid instrumentation is confidence: a leadership team that
trusts its data can act on it decisively, while a team that has been burned
by a silently broken pipeline starts second-guessing every number, which
slows every decision that depends on metrics. That loss of confidence is
expensive and hard to repair, often taking far longer to rebuild than the
original instrumentation investment would have cost.

The total cost of ownership of good instrumentation includes the upfront
engineering work to build reliable pipelines and the ongoing cost of
data-quality monitoring, both of which are easy to underinvest in because
neither produces a visible dashboard tile of its own. That underinvestment
is a false economy: the cost of discovering a silently broken pipeline after
months of decisions were made on bad data is far higher than the cost of
building the health checks that would have caught it on day one.

## Anti-patterns and pitfalls

- **Trusting a number without knowing its source system:** a metric adopted
  from a framework or vendor default with no one tracing where the data
  actually comes from.
- **Self-reporting what a system could observe directly:** introduces
  unnecessary noise and bias into data that could have been objective.
- **No automated data-quality checks on a metric pipeline:** a silently
  broken pipeline can render wrong numbers for months undetected.
- **Documenting only the definition, not the collection method:** two teams
  with the same metric name can still be computing incomparable numbers.
- **A dashboard that renders "0" or stale data as if current, with no
  indication of a source failure:** worse than a visible "data unavailable"
  message.
- **Under-resourced regions or teams systematically under-reporting due to
  manual entry burden:** a data-quality gap that correlates with exactly the
  areas needing the most attention.

## Maturity model

- **Level 1, Initiate:** No one can reliably trace a metric back to its
  source system; pipelines have no health checks and failures go unnoticed.
- **Level 2, Develop:** Some metrics have documented sources, but collection
  methods are inconsistent and data-quality checks are ad hoc at best.
- **Level 3, Standardize:** Every governed metric documents its source
  system and collection method; automated pipelines are preferred over
  self-report wherever an event can be observed directly.
- **Level 4, Manage:** Automated data-quality checks monitor every
  consequential pipeline, flag anomalies for review, and data lineage is
  documented and auditable.
- **Level 5, Orchestrate:** The organization treats data quality as a
  first-class engineering discipline with its own monitoring and incident
  response, and can demonstrate full provenance for any published metric on
  demand.

## Ideas for discussion

1. Could we trace our top three metrics back to their exact source system right now, live, in this meeting?
2. Which of our current metrics rely on self-report for something a system could measure directly?
3. Do any of our metric pipelines have automated health checks today?
4. When did we last discover a silently broken data pipeline, and how long had it been wrong?
5. Where does manual data entry create a gap between reported and actual reality?

## Key takeaways

- Prefer **automated instrumentation** over self-report wherever a system can
  observe the event directly; reserve self-report for genuinely subjective
  experience.
- Every metric needs a documented **source system and collection method**,
  not just a definition.
- Data quality **decays silently**; build automated checks into the pipeline
  itself rather than discovering breakage by accident.
- Instrument **at the event**, not downstream of a translation, to minimize
  drift between what happened and what the dashboard shows.
- The cost of a silently broken pipeline, months of decisions made on bad
  data, far exceeds the cost of the health checks that would have caught it.

## References and further reading

- *Observability Engineering*, by Charity Majors, Liz Fong-Jones, and George
  Miranda (instrumentation and telemetry design principles).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (instrumentation approach behind the DORA
  metrics).
- *Data Quality: The Accuracy Dimension*, by Jack E. Olson (data-quality
  concepts applicable to metrics pipelines).
- *How to Measure Anything*, by Douglas W. Hubbard (measurement methods for
  quantities that seem hard to observe directly).
