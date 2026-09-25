# 9.2 Metric definitions and formulas reference

Every formula from the book, gathered in one place. Each entry names the
chapter with the full discussion, including its gaming risk and guardrail.
Use this as a quick lookup, not a substitute for the chapter itself.

## Flow metrics (Part 2)

| Metric | Formula | Chapter |
| --- | --- | --- |
| Flow velocity | Count of flow items completed per unit time | 2.3 |
| Flow distribution | (Completed items of one flow item type) / (Total completed items) x 100% | 2.3 |
| Flow time | Time from a flow item entering the value stream to its delivery | 2.4 |
| Flow load | Count of flow items currently active or waiting in the value stream | 2.4 |
| Little's law | Flow load (work in process) = Arrival rate x Flow time (cycle time) | 2.4, 2.7 |
| Flow efficiency | Active work time / Total elapsed time x 100% | 2.5 |
| Cycle time | Sum of stage durations: coding + pickup + review + test + deploy | 2.6 |
| Utilization | Arrival rate / Service rate | 2.7 |
| Percent complete and accurate (%C/A) | (Units usable downstream without rework) / (Total units) x 100% | 2.8 |
| Rolled throughput yield | %C/A of stage 1 x %C/A of stage 2 x ... x %C/A of stage N | 2.8 |
| Takt time | Available working time / Customer demand over that period | 2.8 |
| Time to first review | Time from pull request opened to first substantive reviewer response | 2.9 |
| Deployment frequency | Count of successful production deployments per unit time | 2.10 |
| Lead time for changes | Time from first commit to successful production deployment (report median and 90th percentile) | 2.10 |
| Change failure rate | (Deployments causing a failure) / (Total deployments) x 100% | 2.10 |
| Failed deployment recovery time | Time from failure detection to genuine service restoration | 2.10 |

## Developer experience (Part 3)

| Metric | Formula | Chapter |
| --- | --- | --- |
| Focus time | Count and duration of uninterrupted two-hour-plus blocks per week, from calendar data | 3.6 |
| Response rate | (Survey responses received) / (Survey invitations sent) x 100% | 3.7 |

## Code and quality (Part 4)

| Metric | Formula | Chapter |
| --- | --- | --- |
| Cyclomatic complexity | Independent paths through control flow (edges − nodes + 2, per McCabe) | 4.1 |
| Test coverage | (Lines/branches executed by tests) / (Total lines/branches) x 100% | 4.2 |
| Mutation kill rate | (Mutants killed by test suite) / (Total mutants introduced) x 100% | 4.2 |
| Code churn | Lines added + modified + deleted per file over a time window | 4.3 |
| Hotspot score | Churn x Complexity, ranked per file | 4.3 |
| Debt carrying cost | Estimated ongoing cost of not fixing an item (slower related work, elevated defect risk) | 4.5 |

## Product and business (Part 5)

| Metric | Formula | Chapter |
| --- | --- | --- |
| Escaped defect rate | (Severity-weighted escaped defects) / (Unit of delivery or time) | 5.1 |
| Initial adoption | (Users who tried the feature at least once) / (Target audience) x 100% | 5.2 |
| Retained adoption | (Users still using the feature after N weeks) / (Users who initially tried it) x 100% | 5.2 |
| Unit cost | Total cost (people + infrastructure + tooling) / Meaningful unit (customer, transaction) | 5.4 |
| ROI | (Total benefit − Total cost of ownership) / Total cost of ownership, presented as a range | 5.5 |

## Reliability, operations, and security (Part 6)

| Metric | Formula | Chapter |
| --- | --- | --- |
| Error budget | (1 − SLO target) x Time window (e.g., 0.1% of 30 days ≈ 43 minutes) | 6.1 |
| Error budget burn rate | Error budget consumed / Error budget allotted, over a given window | 6.1 |
| MTTD | Time from incident onset to detection | 6.2 |
| MTTA | Time from incident notification to acknowledgement | 6.2 |
| MTTR (incident) | Time from acknowledgement to genuine service restoration | 6.2 |
| On-call page distribution | Pages received per individual, over a rolling window (not team average) | 6.3 |
| Vulnerability time-to-remediate | Time from discovery to genuine remediation, tracked by severity | 6.4 |

## Notes on using these formulas

- **Always pair a speed or output formula with its guardrail** (chapter
  1.2): change failure rate with deployment frequency and lead time; escaped
  defect rate with delivery speed; error budget burn with deployment
  activity.
- **Use medians and percentiles, not averages, for time-based formulas**
  (chapter 1.6) unless a formula explicitly calls for a mean.
- **Every formula needs a documented source system and collection method**
  (chapter 1.5) alongside its mathematical definition; two teams computing
  the same formula from different sources will not produce comparable
  numbers.
- **Severity weighting is not shown explicitly in every formula above** but
  applies wherever "severity-weighted" appears; see the relevant chapter for
  the full classification scheme.
