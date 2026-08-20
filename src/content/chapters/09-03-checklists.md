# 9.3 Checklists

Ready-to-use quick-reference checklists. Copy one into your own process and
adapt it; the point is coverage, not exact wording.

## New metric review checklist (before adding any metric to a dashboard)

- [ ] The metric has a named decision it informs (chapter 1.1)
- [ ] The metric is classified as diagnostic or evaluative, in writing
      (chapter 1.1)
- [ ] If incentivized, a guardrail metric is defined at the same time
      (chapter 1.2)
- [ ] The gaming vector has been named: how would a rational team make this
      number look good without improving the real outcome (chapter 1.2)
- [ ] The metric is classified as input, output, or outcome (chapter 1.3)
- [ ] The metric has a named owner and a documented source system and
      collection method (chapters 1.4, 1.5)
- [ ] The metric will use a median or percentile, not an average, if the
      underlying data is skewed (chapter 1.6)
- [ ] The metric is never used for individual evaluation, or that use is
      separately and explicitly disclosed (chapter 1.1)

## Dashboard launch checklist

- [ ] The dashboard has one named, specific audience and decision
      (chapter 8.1)
- [ ] Every incentivized metric appears on the same view as its guardrail
      (chapters 1.2, 8.1)
- [ ] Axes start at zero unless a stated, visible exception is documented
      (chapter 1.6)
- [ ] Trend over time is shown, not a single snapshot (chapter 1.6)
- [ ] The dashboard has a named owner and a review cadence (chapter 1.4)
- [ ] A visible statement declares what the dashboard is not for, if
      relevant (chapter 1.1)
- [ ] Data sources have basic health checks so a broken pipeline does not
      silently render as current (chapter 1.5)

## Metrics programme rollout checklist

- [ ] Purpose and explicit non-goals are communicated before launch, not
      reactively (chapter 8.3)
- [ ] The people being measured were involved in metric selection
      (chapter 8.3)
- [ ] The programme starts in diagnostic-only mode, with a committed
      minimum proving period (chapter 8.3)
- [ ] A fast, visible response protocol exists for any future misuse
      incident (chapter 8.3)
- [ ] A pilot team has been selected who genuinely volunteered, not one
      that was mandated (chapter 8.5)
- [ ] Foundational governance (charter, ownership, diagnostic policy) is in
      place before instrumentation begins (chapters 1.4, 8.5)

## Incident and postmortem checklist

- [ ] The postmortem investigates the system, not the individual
      (chapter 6.2)
- [ ] Severity was classified against documented, standardized criteria
      (chapter 6.2)
- [ ] Detection, acknowledgement, and resolution times are recorded
      separately (chapter 6.2)
- [ ] Action items are specific, assigned, and tracked to completion
      (chapter 6.2)
- [ ] The postmortem is shared without fear of individual consequence
      (chapters 6.2, 8.3)

## AI-era metric audit checklist

- [ ] Each dashboard metric has been tested against: "would a team using
      heavy AI assistance but producing no more real value show an
      improved reading here" (chapter 7.1)
- [ ] Change failure rate and defect rate are reviewed alongside any rise
      in AI-assisted deployment frequency or commit volume (chapter 7.1)
- [ ] Review capacity and depth are monitored as AI-generated code volume
      changes (chapter 7.1)
- [ ] Escaped defects are tagged by AI-assistance level to test, not
      assume, whether the historical defect-rate relationship still holds
      (chapters 7.1, 7.3)
- [ ] Detection methods resistant to "looks correct" defects (mutation
      testing, property-based testing) are in place for AI-heavy code paths
      (chapter 7.3)
- [ ] The metrics charter has been explicitly revisited and updated for
      this shift, not left to drift unexamined (chapters 1.4, 7.1)

## Metrics programme audit checklist (annual)

- [ ] Every metric still has a named owner (chapter 1.4)
- [ ] At least one metric has been retired in the last cycle if it stopped
      earning its keep (chapter 1.1)
- [ ] The five-dimension maturity assessment has been conducted honestly,
      scored by minimum, not average (chapter 8.4)
- [ ] No metric has drifted from diagnostic to evaluative use without an
      explicit, disclosed decision (chapter 1.1)
- [ ] Definitions have been spot-checked against actual instrumentation for
      drift (chapters 1.2, 2.4, 5.1, 6.2, 6.4)
- [ ] The outcome-to-output ratio on primary dashboards has been calculated
      and reviewed (chapter 7.4)
