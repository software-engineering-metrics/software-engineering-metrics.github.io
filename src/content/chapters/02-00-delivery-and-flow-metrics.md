# 2.0 Introduction to Part 2: Delivery and Flow Metrics

If Part 1 is the philosophy of measurement, Part 2 is where that philosophy
meets the most widely adopted, most researched metric family in software
engineering: the metrics that describe how fast and how safely a team moves
code from an idea to a running system. These are the numbers most
engineering organizations reach for first, because delivery is visible,
frequent, and directly instrumentable from systems that already exist:
version control, CI/CD pipelines, and incident trackers.

That visibility is a double-edged advantage. Delivery metrics are easy to
instrument, which makes them easy to adopt, and easy to adopt makes them easy
to over-index on, exactly the risk chapter 1.2 warned about. This part
presents the four DORA metrics, the industry's most validated delivery
framework, alongside the flow metrics that explain their internal mechanics,
cycle time, work in process, and the pull request and review dynamics that
determine how fast code actually moves through a team. Every chapter follows
the same discipline established in Part 1: state the metric, name how it
gets gamed, and pair it with the guardrail that catches that gaming.

For large teams, delivery and flow metrics are what make cross-team
comparison possible at all. A platform team, a mobile team, and a data team
can have almost nothing in common in their day-to-day work, but deployment
frequency, lead time, and change failure rate, computed consistently, let
leadership ask a fair question across all three: is this team's delivery
capability improving. Enterprise and government organizations rely on this
part's metrics to justify platform investment, to compare the return on
competing modernization efforts, and to demonstrate, with evidence rather
than anecdote, that a major delivery transformation actually worked.

## Chapters in this part

- **2.1 The DORA metrics framework:** The four metrics together, where they
  come from, and why speed and stability are measured as a pair rather than
  separately.
- **2.2 Deployment frequency:** How often a team successfully releases to
  production, what counts as a deployment, and how the metric gets gamed
  through trivial splitting.
- **2.3 Lead time for changes:** The time from first commit to production,
  what to measure it from, and why definition consistency matters more than
  the number itself.
- **2.4 Change failure rate:** The percentage of deployments that cause a
  failure, the hardest DORA metric to define consistently, and why that
  definition needs to be agreed before the number means anything.
- **2.5 Failed deployment recovery time:** How fast a team restores service
  after a failure, and its relationship to incident metrics covered again in
  Part 6.
- **2.6 Cycle time and its components:** Breaking delivery down into its
  constituent stages so a team knows exactly where time is actually going.
- **2.7 Flow efficiency and work in process:** Why busy is not the same as
  fast, and how limiting work in process improves throughput counterintuitively.
- **2.8 Pull request and code review metrics:** The metrics that live inside
  a single stage of the delivery pipeline, and how they can distort review
  quality if used carelessly.

## How these chapters interrelate

Chapter 2.1 introduces the DORA framework as a whole; chapters 2.2 through
2.5 then take each of its four metrics in turn, at the depth a metric this
consequential deserves. Chapters 2.6 through 2.8 zoom in on the mechanics
underneath lead time specifically: cycle time decomposes it into stages, flow
efficiency and work in process explain why those stages are often slower
than they look, and pull request metrics cover the single stage most teams
can improve fastest. Read together, this part moves from the framework level
down to the practical, team-level levers a group can pull this quarter.

This part's guardrail discipline connects directly back to chapter 1.2:
every speed metric here (deployment frequency, lead time, cycle time) is
explicitly paired with a stability metric (change failure rate, recovery
time) so that a team cannot improve its speed number by quietly shipping
riskier code. That pairing is not incidental to the DORA framework, it is
the framework's central insight, and Part 6's reliability metrics extend the
same stability half of that pairing into production operations once code has
already shipped.
