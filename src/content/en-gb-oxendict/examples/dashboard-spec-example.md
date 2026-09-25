# Example: dashboard specification for a delivery-metrics dashboard

A worked dashboard specification, following
[chapter 8.1, Designing an engineering metrics dashboard](../chapters/08-01-designing-an-engineering-metrics-dashboard.md).
The point is the shape: a named audience, a small number of tiles, an honest
visualization standard, and a stated refresh cadence.

## Audience

Engineering leadership and the platform team, reviewed at the biweekly
delivery review. Not intended for individual performance evaluation.

## Tiles (in display order)

1. **Deployment frequency**, trailing 4 weeks, by team. Line chart, weekly
   buckets, axis starts at zero.
2. **Lead time for changes**, median and 90th percentile, trailing 4 weeks.
   Bar chart with both series shown, not just the median.
3. **Change failure rate**, trailing 4 weeks, with the team's agreed
   definition of "failure" linked from the tile.
4. **Failed deployment recovery time**, median, trailing 4 weeks.
5. **Error budget remaining**, current quarter, per service, as a percentage.

## Visualization rules

- Every trend chart shows at least eight data points, never a single
  snapshot.
- Axes start at zero unless a stated exception is documented on the tile.
- Deploys, incidents, and holidays are annotated on the timeline so a reader
  can tell a real shift from noise.
- No dual axes, no 3-D effects, no cherry-picked date ranges.

## Refresh cadence

Pipeline-sourced tiles (deployment frequency, lead time) refresh hourly.
Incident-sourced tiles (change failure rate, recovery time) refresh on
postmortem close. The dashboard states its own last-refreshed time.

## What this dashboard deliberately excludes

Individual commit counts, individual pull request counts, and lines of code.
These are activity metrics with a well-documented history of being gamed and
of measuring effort rather than outcome (chapter 3.4).
