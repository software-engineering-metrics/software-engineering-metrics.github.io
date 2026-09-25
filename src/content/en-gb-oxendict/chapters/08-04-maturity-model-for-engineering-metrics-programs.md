# 8.4 Maturity model for engineering metrics programs

## Overview and motivation

Every chapter in Parts 1 through 7 of this book ends with its own
five-level [maturity model](https://en.wikipedia.org/wiki/Capability_Maturity_Model),
scoped to that chapter's specific metric family.
This chapter does something different: it steps back and asks what
maturity looks like for the metrics *programme* as a whole, the
organizational capability that produces, governs, and acts on all of those
individual metrics together. An organization can be at Level 4 on
individual DORA metric maturity while still being at Level 1 on programme
maturity overall, if, for instance, it has excellent instrumentation but no
governance (chapter 1.4), or excellent individual metrics but a
fear-driven rollout (chapter 8.3) that has corrupted the underlying data
regardless of how well each metric was designed.

This chapter's model is built around five dimensions that cut across every
individual metric family this book covers: governance and ownership
(chapter 1.4), instrumentation quality (chapter 1.5), outcome-versus-output
balance (chapter 1.3, chapter 7.4), cultural trust (chapter 8.3), and
continuous improvement (the retirement and revision discipline chapter 1.1
established at the very start of this book). An organization's overall
programme maturity is realistically the minimum, not the average, across
these five dimensions, since a serious weakness in any one, particularly
cultural trust, can undermine the value of strength in all the others,
exactly as chapter 8.3 argued directly.

For large teams, this consolidated model gives leadership a single,
honest instrument for organizational self-assessment, distinct from and
complementary to the chapter-by-chapter maturity checks this book provides
throughout. Enterprise organizations comparing metrics maturity across
business units, and government organizations reporting programme maturity
to oversight bodies, both benefit from this single, cross-cutting
assessment rather than needing to synthesize forty-five separate
chapter-level maturity readings into a coherent overall picture themselves.

## Key principles

- **Programme maturity is the minimum across its dimensions, not the
  average.** A serious weakness in cultural trust undermines strength
  everywhere else.
- **The five cross-cutting dimensions are governance, instrumentation,
  outcome balance, cultural trust, and continuous improvement.** Each
  dimension draws together threads from many individual chapters.
- **This model complements, not replaces, the individual chapter-level
  maturity models.** Use both together for a complete picture.
- **Self-assessment should be honest and specific, not aspirational.**
  Score where you actually are, using concrete evidence, not where you
  intend to be.
- **Movement between levels requires deliberate investment**, not just
  time passing; maturity does not accrue automatically.

## Recommendations

### Assess each of the five dimensions independently, using concrete
evidence

For governance, check whether every consequential metric has a named owner
and a documented charter (chapter 1.4). For instrumentation, check whether
metrics come from automated sources rather than self-report wherever
possible (chapter 1.5). For outcome balance, calculate the actual ratio of
outcome-weighted to output-weighted metrics on your primary dashboards
(chapter 7.4). For cultural trust, assess honestly whether your rollout
history has ever included a mishandled, punitive use of a metric and how it
was addressed (chapter 8.3). For continuous improvement, check whether your
organization has a documented history of retiring metrics that stopped
earning their keep (chapter 1.1). Score each dimension independently before
combining them.

### Take the minimum across dimensions as your honest overall score

Resist the temptation to average your five dimension scores into a single,
more flattering composite. A programme with excellent instrumentation
(Level 4) but weak cultural trust (Level 1) is not, in any meaningful
sense, a Level 2 or 3 programme; the weak dimension actively undermines the
value of the strong ones, since untrustworthy data corrupted by fear-driven
gaming is not rescued by having been collected with excellent
instrumentation. Report the minimum honestly, even though it produces a
less flattering overall picture than an average would.

### Use this model alongside, not instead of, the chapter-level models

This consolidated model answers "how mature is our overall programme";
the individual chapter-level models throughout Parts 2 through 8 answer
"how mature is our practice for this specific metric." Use both together:
the consolidated model to prioritize which cross-cutting dimension most
needs investment, and the chapter-level models to identify which specific
metric families most need attention within that dimension.

### Revisit the assessment on a fixed cadence, not merely when prompted by a
crisis

Following this book's consistent governance discipline (chapter 1.4),
reassess programme maturity on a regular cadence, annually is common,
rather than only after a crisis (a discovered gaming incident, a
credibility-damaging public report) forces the question. A programme that
only examines its own maturity reactively misses the chance to catch and
address a weakening dimension before it produces a real, costly incident.

### Treat a low score honestly as a starting point for investment, not a
failing grade

Following the diagnostic, not evaluative, framing chapter 1.1 established
for this entire book, use a low maturity score, on any dimension, as the
starting point for a deliberate investment plan (chapter 8.5's adoption
roadmap is the direct next step), not as a verdict to feel bad about. Most
organizations, honestly assessed, will find real weaknesses somewhere in
this model; the productive response is targeted investment, not defensiveness
about the score.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Averaging the five dimension scores | Produces a single, simple, more flattering number | Hides a critical weakness in one dimension undermining the rest |
| Taking the minimum across dimensions | Honest, actionable, correctly identifies the real constraint | Can feel discouraging if one dimension lags significantly behind the others |
| Using only chapter-level models | Detailed, metric-specific guidance | Misses the cross-cutting view of overall programme health |
| Using only this consolidated model | Simple, high-level | Misses the specific, actionable detail the chapter-level models provide |

The central tension is **simplicity versus honesty**, echoing chapter
5.5's caution against a falsely precise single number. An averaged score is
simpler and more comfortable to report, but it actively hides the real
constraint on your programme's overall trustworthiness and value. Resolve
the tension in favour of honesty: report the minimum, and use both this
consolidated model and the individual chapter-level models together for a
complete, accurate, and actionable picture.

## Questions to discuss with your team

1. **Assessed honestly and independently, what level does each of our five
   dimensions, governance, instrumentation, outcome balance, cultural
   trust, and continuous improvement, actually score?** Walk through each
   dimension explicitly, using concrete evidence rather than impression,
   before combining them into an overall assessment.

2. **What is our weakest dimension, and does that match our intuition about
   our programme's overall health, or does it reveal something we had not
   previously named directly?** A low score in cultural trust specifically,
   for instance, might undermine confidence in data that otherwise looks
   technically excellent.

3. **Have we been averaging our strengths and weaknesses into a more
   flattering overall picture, rather than honestly reporting our weakest
   dimension as the real constraint?** Be honest about how your
   organization has previously talked about its own metrics maturity.

4. **When did we last formally reassess our overall programme maturity, and
   was it prompted by a crisis or by a deliberate, regular cadence?** If
   only crisis-prompted, discuss what a regular assessment cadence would
   look like going forward.

5. **What would targeted investment in our weakest dimension actually look
   like, concretely, for the next quarter?** Move directly from
   assessment to action, connecting this chapter's diagnostic to chapter
   8.5's adoption roadmap.

6. **How would our self-assessment compare to an honest external review by
   someone outside our organization?** This question tests whether your
   internal assessment might itself be subject to some of the same
   optimistic bias this book has warned against throughout, worth checking
   periodically with genuinely outside perspective.

## Sector lens

**Startup.** Formal five-dimension assessment is likely unnecessary at
very small scale, where informal awareness usually covers most of what this
model would reveal. The habit worth adopting early is simply being honest
about cultural trust specifically, since a young company's early metrics
culture sets a foundation that becomes much harder to change once the
organization has grown significantly.

**Small business.** A simple, honest, informal walk through the five
dimensions once a year, even without formal scoring, captures most of this
chapter's value without needing a structured assessment process at this
scale.

**Enterprise.** This consolidated model is particularly valuable for
comparing metrics maturity across many business units fairly, since a
chapter-by-chapter comparison across dozens of teams would be unwieldy.
Use it to prioritize organization-wide investment toward whichever
dimension shows the most widespread weakness across units.

**Government.** A documented, honest maturity self-assessment, using this
consolidated model, is a genuinely useful artefact for demonstrating
programme rigor to an oversight body, provided the assessment is
conducted honestly rather than aspirationally. Consider periodic external
review of the self-assessment itself, particularly for the cultural-trust
dimension, which is the hardest to assess accurately from purely internal
perspective.

## Examples

**Enterprise.** A logistics technology company's initial self-assessment
scored its instrumentation dimension at Level 4 (automated, comprehensive
data sourcing from pipelines and systems) but its cultural-trust dimension
at Level 1, following an unaddressed metric-misuse incident from two years
earlier that had never been directly acknowledged or repaired (echoing
chapter 8.3's government example directly). Leadership's initial instinct
was to average these into a respectable Level 2 or 3 overall picture; a
more honest application of this chapter's minimum-based scoring
correctly identified cultural trust as the real constraint on the whole
programme's value, since even excellent instrumentation was producing data
that engineers, aware of the past incident, still did not fully trust or
report honestly into. Targeted investment specifically in cultural trust
repair, following chapter 8.3's guidance directly, was prioritized over
further instrumentation investment as a direct result of this honest,
minimum-based assessment.

**Government.** A national statistics agency conducting its first formal
maturity self-assessment, using this consolidated model as part of a
broader technology governance review, found its governance dimension
scored well (clear ownership, documented charters) but its outcome-balance
dimension scored poorly, with the overwhelming majority of tracked metrics
being output and activity-based despite Part 7's argument for
outcome-weighting having been well understood intellectually within the
agency's technical leadership. This honest, specific finding, rather than
a vague general sense that "we should measure outcomes more," gave the
agency's subsequent investment plan (chapter 8.5) a concrete, evidence-based
starting point, and follow-up reporting to the agency's oversight board
specifically cited this maturity assessment as the basis for a redirected
metrics investment strategy.

## Business case: motivations, ROI, and TCO

The return on an honest, minimum-based maturity self-assessment is
correctly identifying the actual constraint on a metrics programme's value,
rather than investing further in an already-strong dimension while a weak
one continues to undermine the whole programme's trustworthiness, exactly
the pattern both examples above illustrate. This targeting effect is the
model's primary value: it directs limited improvement investment toward
where it will genuinely move the overall programme's maturity, rather than
toward wherever investment happens to be easiest or most familiar.

The total cost of ownership is the assessment effort itself, modest and
periodic, weighed against the risk of continuing to invest in an already-strong
dimension while an unaddressed weak one, particularly cultural trust,
continues to quietly corrupt the value of everything else the programme has
built.

## Anti-patterns and pitfalls

- **Averaging dimension scores into a more flattering composite:** hides
  the real constraint on the programme's overall value.
- **Assessing only aspirationally, based on stated policy rather than
  actual practice:** produces an inaccurate, overly optimistic picture.
- **Using this consolidated model as a replacement for, rather than a
  complement to, the chapter-level models:** loses the specific, actionable
  detail those individual models provide.
- **Only reassessing after a crisis forces the question:** misses the
  chance to catch and address a weakening dimension proactively.
- **Treating a low score as a failing grade rather than an investment
  starting point:** invites defensiveness rather than the productive,
  diagnostic response this book recommends throughout.
- **Never seeking an honest external perspective on the self-assessment:**
  risks the same optimistic bias this book warns against throughout
  affecting the assessment itself.

## Maturity model

- **Level 1, Initiate:** No formal cross-cutting assessment exists;
  individual metric families may be assessed independently, but overall
  programme health is unexamined.
- **Level 2, Develop:** Some informal awareness of overall programme
  strengths and weaknesses exists, but no structured, five-dimension
  assessment has been conducted.
- **Level 3, Standardize:** A structured, honest, minimum-based
  five-dimension assessment is conducted, using concrete evidence,
  organization-wide.
- **Level 4, Manage:** The assessment is repeated on a regular cadence, and
  its findings directly and consistently inform targeted investment
  priorities.
- **Level 5, Orchestrate:** The organization has a demonstrated, sustained
  practice of honest self-assessment, including periodic external review,
  and can point to specific investment decisions the assessment's findings
  directly drove.

## Ideas for discussion

1. What is our honest, evidence-based score on each of the five dimensions right now?
2. Which dimension is our real constraint, and does that match our intuition?
3. Have we ever averaged our scores into a more flattering picture than the minimum would show?
4. When did we last formally reassess, and was it proactive or crisis-driven?
5. What would an honest external review of our self-assessment likely reveal?

## Key takeaways

- Programme maturity spans five cross-cutting dimensions: **governance,
  instrumentation, outcome balance, cultural trust, and continuous
  improvement**.
- Overall maturity is the **minimum across dimensions, not the average**;
  a weakness in cultural trust undermines strength everywhere else.
- Use this consolidated model **alongside, not instead of**, the individual
  chapter-level maturity models throughout this book.
- **Reassess on a regular cadence**, rather than waiting until a crisis
  forces the question.
- Treat a low score as an **honest investment starting point**, not a
  failing grade, following this book's diagnostic framing throughout.

## References and further reading

- *Capability Maturity Model Integration (CMMI)*, Software Engineering
  Institute (the general maturity-model methodology this chapter's approach
  draws structural inspiration from).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (the research basis for the individual
  chapter-level maturity models this consolidated model draws together).
- *Measuring and Managing Performance in Organizations*, by Robert D.
  Austin (organizational assessment of metrics programme health and
  dysfunction).
- *The Fifth Discipline: The Art and Practice of the Learning
  Organization*, by Peter M. Senge (systems-level organizational
  self-assessment and continuous improvement).
