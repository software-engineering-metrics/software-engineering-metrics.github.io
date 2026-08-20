# 9.1 Glossary

Definitions of terms and acronyms used across the book. Each entry names
the chapter where the term is introduced in depth.

**Activity metric.** A count of engineering motion (commits, pull requests,
lines of code) that measures volume, not value. See chapter 3.4.

**Bus factor.** The number of people who would need to become unavailable
before a system or piece of knowledge becomes unmaintainable. A bus factor
of one is a severe risk. See chapter 3.5.

**Change failure rate.** The percentage of deployments that cause a
production failure requiring remediation. One of the four DORA metrics.
See chapter 2.4.

**Control chart.** A chart showing a metric's normal range of variation
over time, used to distinguish a genuine shift from ordinary noise. See
chapter 1.6.

**Cycle time.** The internal breakdown of lead time into stages: coding,
review, testing, and deployment. See chapter 2.6.

**CVSS (Common Vulnerability Scoring System).** A standardized scale for
scoring the severity of a security vulnerability. See chapter 6.4.

**Cyclomatic complexity.** A count of the independent paths through a
piece of code's control flow, introduced by Thomas J. McCabe in 1976. See
chapter 4.1.

**DevEx (developer experience).** The broader, related framing to SPACE,
organized around feedback loops, cognitive load, and flow state. See
chapter 3.7.

**Deployment frequency.** How often a team successfully releases to
production. One of the four DORA metrics. See chapter 2.2.

**DORA metrics.** Four metrics from the DevOps Research and Assessment
programme: deployment frequency, lead time for changes, change failure
rate, and failed deployment recovery time. See chapter 2.1.

**Error budget.** The allowed shortfall between a service level objective
and 100% reliability, treated as a spendable resource. See chapter 6.1.

**Escaped defect.** A defect that reaches production and affects a real
user, as distinct from one caught in review or testing. See chapter 5.1.

**FinOps.** The discipline of bringing financial accountability to
variable cloud infrastructure spend. See chapter 5.4.

**Flow efficiency.** The ratio of active work time to total elapsed time
for a piece of work moving through a delivery pipeline. See chapter 2.7.

**Goodhart's law.** The principle that when a measure becomes a target, it
ceases to be a good measure. The central, governing idea of this book. See
chapter 1.2.

**Guardrail metric.** A paired counter-metric that must not degrade while
an incentivized metric improves, designed to catch gaming. See chapter 1.2.

**Hotspot.** A file or module that is both frequently changed (high churn)
and highly complex, identified through hotspot analysis. See chapter 4.3.

**Lead time for changes.** The time from a code change's first commit to
its successful deployment in production. One of the four DORA metrics. See
chapter 2.3.

**Little's law.** The proof that the average number of items in a stable
queue equals the average arrival rate multiplied by the average time an
item spends in the system. Applied to delivery, work in process equals
arrival rate times cycle time. See chapter 2.9.

**Metric tree.** A structure connecting a top-level outcome metric down
through its drivers to the operational metrics individual teams own. See
chapter 1.3.

**MTTA (mean time to acknowledge).** The time from an incident's
notification to someone taking ownership of responding. See chapter 6.2.

**MTTD (mean time to detect).** The time from an incident's actual onset
to someone noticing it occurred. See chapter 6.2.

**MTTR (mean time to recovery / mean time to resolve).** The time to fully
restore service after a failure. Used both for deployment-caused failures
(chapter 2.5) and general incidents (chapter 6.2).

**Mutation testing.** A technique that deliberately introduces small,
artificial faults into code to check whether a test suite actually catches
them, as a complement to coverage. See chapter 4.2.

**North-star metric.** The single measure that best captures the core
value an organization delivers, sitting at the top of a metric tree. See
chapter 1.3.

**Outcome telemetry.** Continuous, instrumented measurement of real
outcomes rather than activity or output. See chapter 7.4.

**Queueing theory.** The mathematical study of waiting lines, applied to
delivery pipelines to explain how work in process, arrival rate, and
utilization drive wait time. See chapter 2.9.

**ROI (return on investment).** The financial return of an initiative
relative to its cost, built here from documented cost and outcome evidence
rather than assumption. See chapter 5.5.

**SLI (service level indicator).** A directly measured signal of a
service's health, such as latency or error rate. See chapter 6.1.

**SLO (service level objective).** The target range for a service level
indicator. See chapter 6.1.

**SPACE framework.** A five-dimension framework for developer
productivity: Satisfaction and well-being, Performance, Activity,
Communication and collaboration, and Efficiency and flow. See chapter 3.1.

**SRE (site reliability engineering).** The discipline, pioneered at
Google, of applying software engineering approaches to operations and
reliability. See chapter 6.1.

**Technical debt.** The accumulated cost of past shortcuts in a codebase,
a metaphor for a manageable trade-off, not a shameful secret. See
chapter 4.5.

**TCO (total cost of ownership).** The full cost of an initiative or
system over its lifetime, including ongoing maintenance and infrastructure,
not just upfront cost. See chapter 5.5.

**Unit economics.** Cost expressed per meaningful unit of value delivered
(per customer, per transaction), rather than as an opaque total. See
chapter 5.4.

**Utilization.** The proportion of a resource's available capacity that is
busy, calculated as arrival rate divided by service rate. Wait time grows
sharply, not gradually, as utilization approaches full capacity. See
chapter 2.9.

**Vanity metric.** A metric that reliably rises, looks impressive, and
changes no decision. See chapter 1.1.

**Work in process (WIP).** The count of items actively being worked on at
any one time across a team or system. See chapter 2.7.
