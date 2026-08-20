# Example: metrics charter for a payments platform team

A worked example of a metrics charter, the kind of one-page document
described in [chapter 1.4, Metrics governance and ownership](../chapters/01-04-metrics-governance-and-ownership.md).
The point is the shape: a stated purpose, an explicit non-goal, named owners,
and a review cadence. A charter this short is meant to be read, not filed.

- **Team:** Payments platform
- **Owner:** Platform engineering manager
- **Reviewed:** Quarterly, at the platform review

## Purpose

This charter governs the metrics the payments platform team tracks about its
own delivery and reliability. It exists so that everyone, inside and outside
the team, can see what is measured, why, and what it is not for.

## What we track

| Metric | Source of truth | Owner |
| --- | --- | --- |
| Deployment frequency | CI/CD pipeline | Platform lead |
| Lead time for changes | Git plus deployment pipeline | Platform lead |
| Change failure rate | Incident tracker, tagged by deploy | On-call lead |
| Failed deployment recovery time | Incident tracker | On-call lead |
| P99 API latency (SLI) | Observability platform | SRE lead |
| Error budget burn | Observability platform | SRE lead |

## Non-goals

These metrics are never used, individually or in combination, to rank
engineers, evaluate performance reviews, or compare this team against another
team's roadmap without also comparing scope, staffing, and system maturity.
Any use outside the purpose stated above requires sign-off from the
engineering director and the team itself.

## Guardrails

Every metric above that carries an incentive is paired with a guardrail. Lead
time for changes is watched alongside change failure rate, so a team cannot
improve its speed number by shipping riskier changes. Deployment frequency is
watched alongside error budget burn, for the same reason.

## Review cadence

The team reviews this charter every quarter. A metric that has not changed a
decision in two consecutive quarters is a candidate for retirement.
