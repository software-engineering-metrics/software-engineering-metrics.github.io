# 9.4 Templates

Copy-paste templates for recurring documents. Worked, filled-in examples
of the first two live in [`docs/examples/`](../examples/index.md).

## Metrics charter template

```markdown
# Metrics charter: [team or metric set name]

- **Team:** [owning team]
- **Owner:** [named person or role]
- **Reviewed:** [cadence, e.g. quarterly]

## Purpose

[One or two sentences: what this charter governs and why.]

## What we track

| Metric | Source of truth | Owner |
| --- | --- | --- |
| [metric] | [system] | [named owner] |

## Non-goals

[Explicit statement of what these metrics are not used for, e.g.
individual performance evaluation, cross-team ranking without context.]

## Guardrails

[For each incentivized metric, name its paired guardrail and what gaming
pattern it catches.]

## Review cadence

[When and how this charter gets revisited; what triggers a metric's
retirement.]
```

## Dashboard specification template

```markdown
# Dashboard specification: [dashboard name]

## Audience

[Who this dashboard is for, and what decision it informs. State
explicitly if not for individual evaluation.]

## Tiles (in display order)

1. **[Metric name]**, [time window], [chart type]. [Any specific
   visualization notes: axis rules, annotations.]
2. ...

## Visualization rules

- Axes start at zero unless stated otherwise, with the exception
  documented on the tile.
- [Any other project-specific honesty rules.]

## Refresh cadence

[How often each tile updates, and from what source.]

## What this dashboard deliberately excludes

[Name anything intentionally left off, and why, e.g. individual activity
counts.]
```

## Metric review meeting agenda template

```markdown
# Metric review: [date]

## Attendees

[Names and roles]

## Metrics reviewed

For each metric:
- Current reading and trend
- Any movement outside normal variation (chapter 1.6)
- Paired guardrail status, if applicable
- Decision this reading informs, if any

## New metrics proposed

[Run each through the new metric review checklist, chapter 9.3.]

## Metrics considered for retirement

[Which metrics have not informed a decision in the last two cycles?]

## Action items

| Item | Owner | Due |
| --- | --- | --- |
| | | |
```

## Blameless postmortem template

```markdown
# Postmortem: [incident name], [date]

## Summary

[One paragraph: what happened, user impact, duration.]

## Timeline

- Detection: [time, how detected]
- Acknowledgement: [time, who responded]
- Resolution: [time, what fixed it]

## Severity

[Classification against documented criteria, chapter 6.2.]

## Root cause

[What allowed this to happen, framed as a system question, not an
individual one.]

## What went well

[Specific things that worked in the response.]

## Action items

| Item | Owner | Due |
| --- | --- | --- |
| | | |

## Follow-up

[Confirmation that action items were tracked to completion, per the
next review cycle.]
```

## ROI case template

```markdown
# ROI case: [initiative name]

## Cost (total cost of ownership, chapter 5.5)

- Upfront: [development cost]
- Ongoing: [maintenance, infrastructure, support, per year]
- Opportunity cost: [what else this capacity could have done]

## Benefit (documented evidence, chapters 5.1-5.3)

- [Benefit 1], evidenced by [data source]
- [Benefit 2], evidenced by [data source]

## Range and assumptions

- Conservative case: [figure]
- Optimistic case: [figure]
- Key assumption driving the range: [name it]

## Confounds considered and ruled out

[What else could explain the projected benefit, and why it was ruled
out or accounted for.]

## Post-completion check (fill in after the initiative completes)

- Actual outcome: [figure]
- Compared to projected range: [above / within / below]
- What this teaches us for the next estimate: [note]
```
