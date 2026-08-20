# 2.0 Introduction to Part 2: Flow Metrics

If Part 1 is the philosophy of measurement, Part 2 is where that philosophy
meets delivery itself: the metrics that describe not just how fast and how
safely a team moves code from an idea to a running system, but what kind of
value is moving through that pipeline at all. This part is organized around
the **Flow Framework**, a model created by Mik Kersten in his 2018 book
*Project to Product* that treats software delivery as a value stream and
gives that value stream a shared vocabulary: four flow item types and five
flow metrics that connect engineering activity to business strategy in
terms a non-technical stakeholder can actually use.

That choice of organizing framework is deliberate. The DORA metrics,
deployment frequency, lead time, change failure rate, and recovery time,
are genuinely research-validated and remain one of the best-evidenced
delivery frameworks available, but they measure the pipeline's mechanics,
not what is flowing through it. A team can post excellent DORA numbers
while its actual delivered value has quietly drifted toward rework or away
from the debt and risk work that protects a system's future. This part
covers DORA in full, but as a single, consolidated reference chapter at the
end (chapter 2.9), because the more urgent, more commonly missing question
for most organizations is not "how fast is our pipeline" but "what is our
pipeline actually delivering." Every chapter in this part still follows the
same discipline established in Part 1: state the metric, name how it gets
gamed, and pair it with the guardrail that catches that gaming.

For large teams, flow metrics are what make cross-team comparison possible
without losing sight of value. A platform team, a mobile team, and a data
team can have almost nothing in common in their day-to-day work, but flow
velocity and flow distribution, computed consistently, let leadership ask a
fair question across all three: is this team delivering the kind of value
its current phase actually calls for. Enterprise and government
organizations rely on this part's metrics to justify platform investment,
to compare the return on competing modernization efforts, and to
demonstrate, with evidence rather than anecdote, that engineering capacity
is allocated the way leadership believes it is.

## Chapters in this part

- **2.1 The Flow Framework:** The framework's origin, its value stream
  model, and why this book uses it, rather than DORA alone, to organize
  delivery and flow metrics.
- **2.2 Flow items: features, defects, risks, and debt:** The framework's
  four-type taxonomy, its zero-sum capacity allocation, and how
  classification gets gamed if applied retroactively.
- **2.3 Flow velocity and flow distribution:** How much shipped and what
  kind of value it was, always read together.
- **2.4 Flow time and flow load:** How Little's law proves that an
  overloaded value stream mathematically slows down, not just probably.
- **2.5 Flow efficiency and work in process:** Why busy is not the same as
  fast, and how limiting work in process improves throughput
  counterintuitively.
- **2.6 Cycle time and its components:** Breaking a change's engineering
  time down into its constituent stages so a team knows exactly where time
  is actually going.
- **2.7 Queueing theory:** The mathematics underneath flow load, flow time,
  cycle time, and work in process, and why wait time on a shared resource
  explodes as utilization approaches its limit.
- **2.8 Pull request and code review metrics:** The metrics that live
  inside a single stage of the delivery pipeline, and how they can distort
  review quality if used carelessly.
- **2.9 The DORA metrics framework:** The four DORA metrics in full, placed
  last deliberately because they measure the pipeline, not the value
  flowing through it.

## How these chapters interrelate

Chapter 2.1 introduces the Flow Framework as a whole; chapter 2.2 gives its
taxonomy of flow items, and chapters 2.3 and 2.4 cover its five flow
metrics between them, velocity and distribution together, then time and
load together, with load and time tied directly to Little's law. Chapters
2.5 through 2.7 zoom in on the mechanics underneath flow time and cycle
time specifically: flow efficiency and work in process explain why
engineering stages are often slower than they look, cycle time decomposes
that engineering portion into its stages, and queueing theory formalizes,
in provable mathematical terms, why all of the preceding chapters' claims
about load, wait time, and utilization are true. Chapter 2.8 covers the
single pipeline stage most teams can improve fastest. Chapter 2.9 closes
the part with the DORA metrics in full, presented as a well-evidenced but
narrower reference layer once the broader, business-facing picture from the
earlier chapters is already in view.

This part's guardrail discipline connects directly back to chapter 1.2:
flow velocity is never reported without flow distribution alongside it, and
DORA's speed metrics remain paired with its stability metrics, so that a
team cannot improve a speed number by quietly shipping riskier code or a
narrower mix of value. That pairing is not incidental to either framework;
it is each framework's central insight, and Part 6's reliability metrics
extend the same stability half of that pairing into production operations
once code has already shipped.
