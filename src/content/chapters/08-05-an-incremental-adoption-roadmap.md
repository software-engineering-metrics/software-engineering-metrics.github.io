# 8.5 An incremental adoption roadmap

## Overview and motivation

This chapter closes Part 8, and this book's substantive content, with the
question every reader who has made it this far is likely asking: given
everything this book covers, forty-five chapters spanning delivery,
developer experience, code quality, business outcomes, reliability,
security, and the AI-era shift, where does an organization actually start.
The honest answer this chapter gives is: not everywhere at once. A
[big-bang](https://en.wikipedia.org/wiki/Big_bang_adoption) rollout of this
book's full scope, attempted all at once, violates
chapter 8.3's core guidance directly, since a sweeping, comprehensive metrics
programme introduced overnight is exactly the kind of change that provokes
fear and gaming rather than trust.

This chapter provides a concrete, phased sequence instead, built on a
simple, consistent principle repeated throughout this book: start with
foundations, prove value in a narrow scope, then expand deliberately, never
skipping the governance and cultural-trust work covered in chapter 1.4 and
chapter 8.3 in favour of jumping straight to sophisticated, comprehensive
metrics. This sequencing is not arbitrary; it follows the dependency
structure this book's own parts establish, Part 1's foundations genuinely
have to come first, because every later part assumes the governance,
outcome-orientation, and statistical literacy chapter 1.1 through chapter
1.6 establish.

For large teams, a phased roadmap is what makes this book's full scope
achievable rather than overwhelming. Enterprise organizations can use this
chapter's sequencing to plan a genuinely multi-quarter or multi-year
metrics programme rollout with realistic milestones; government
organizations, often needing to justify metrics investment to a budget or
oversight process incrementally rather than as a single large request, can
use this chapter's phases as natural checkpoints for demonstrating value
and requesting continued investment.

## Key principles

- **Foundations first, always.** Governance (chapter 1.4), outcome
  orientation (chapter 1.3), and cultural trust-building (chapter 8.3)
  cannot be skipped in favour of jumping straight to sophisticated metrics.
- **Prove value in a narrow scope before expanding.** A single team or a
  single metric family, done well and trusted, is a stronger foundation
  than a comprehensive rollout done poorly.
- **Sequence by dependency, not by perceived importance.** Some metric
  families in this book depend on groundwork other chapters establish
  first.
- **Each phase should produce a demonstrable, reportable result** that
  justifies continued investment in the next phase.
- **This is a roadmap to adapt, not a rigid, universal prescription.**
  Your organization's specific starting point and priorities should shape
  the actual pacing.

## Recommendations

### Phase 1: Foundations and governance (Part 1)

Before instrumenting a single metric family, establish the governance
discipline chapter 1.4 describes: a metrics charter template, a clear
diagnostic-versus-evaluative policy (chapter 1.1), and the statistical
literacy basics from chapter 1.6 shared across whoever will interpret the
data. This phase produces no dashboards yet; it produces the organizational
groundwork every later phase depends on. Skipping this phase to move
faster is the single most common way this book's guidance gets undermined
in practice, since every later metric inherits whatever governance quality,
or lack of it, this phase established.

### Phase 2: A single pilot team, DORA metrics, diagnostic only (Part 2)

Select one team, ideally a willing, engaged one rather than a mandated
one, and instrument the DORA metrics from Part 2, using automated
instrumentation (chapter 1.5) rather than self-report, in purely
diagnostic mode following chapter 8.3's trust-building guidance directly.
Run this for at least one full quarter before expanding, and use it as a
proving ground for your governance charter template and your dashboard
design approach (chapter 8.1) before committing to either at wider scale.

### Phase 3: Expand delivery metrics organization-wide, add developer
experience (Parts 2, 3)

Once the pilot has demonstrated genuine value and, critically, sustained
trust (no misuse incidents, or a well-handled one per chapter 8.3's
guidance), expand DORA instrumentation to additional teams, and introduce
the first developer experience survey (chapter 3.7) organization-wide.
This phase is where the diagnostic-versus-evaluative discipline faces its
first real test at scale, and maintaining it carefully here sets the tone
for everything that follows.

### Phase 4: Code quality and outcome metrics (Parts 4, 5)

With delivery and developer-experience foundations established and
trusted, add the code quality metrics from Part 4, prioritizing hotspot
analysis (chapter 4.3) and technical debt tracking (chapter 4.5) as the
highest-leverage starting points, and begin building the outcome telemetry
infrastructure chapter 7.4 argues should ultimately be your programme's
center of gravity, starting with escaped defect rate (chapter 5.1) and
feature adoption (chapter 5.2) as the most tractable outcome metrics to
instrument first.

### Phase 5: Reliability, security, and AI-era recalibration (Parts 6, 7)

Establish formal SLOs and error budgets (chapter 6.1) for your most
critical services, build blameless incident metrics practice (chapter 6.2),
and conduct the AI-era metric audit chapter 7.1 recommends if your
organization has adopted, or is adopting, AI-assisted development tooling.
This phase often runs partially in parallel with Phase 4 rather than
strictly sequentially, since reliability and security work frequently has
its own independent urgency.

### Ongoing: consolidated maturity assessment and continuous investment

Once the core phases are established, adopt chapter 8.4's consolidated
maturity assessment as a recurring, annual practice, using its findings to
direct ongoing investment rather than treating the roadmap as complete
once every phase has technically been touched. A metrics programme is a
sustained organizational capability, not a project with a defined end
date, and this ongoing phase reflects that reality directly.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Big-bang, comprehensive rollout | Fast, comprehensive coverage from the start | High risk of provoking fear and gaming (chapter 8.3); no proven governance foundation |
| Phased rollout, foundations first | Builds trust and governance before expanding scope; each phase proves itself | Slower to reach full coverage; requires sustained, multi-quarter commitment |
| Phased rollout, metrics-first (skipping governance) | Faster initial dashboard results | Inherits weak governance into every later phase; higher long-term risk |
| Ad hoc, opportunistic adoption with no roadmap | Flexible, responsive to immediate needs | Produces inconsistent, hard-to-govern coverage and repeats mistakes phase by phase |

The central tension is **speed to comprehensive coverage versus
foundation-first sequencing**. Organizations under pressure to show
results quickly are tempted to skip Phase 1's governance work and jump
directly to instrumenting metrics, but this book's cumulative argument,
from chapter 1.4's governance discipline through chapter 8.3's
trust-building guidance, is that skipping the foundation produces a faster
but fundamentally weaker programme. Resolve the tension by committing to
the phased sequence, and by using each phase's demonstrable result
(chapter 8.5's key recommendation) to justify continued investment rather
than trying to show comprehensive results before the foundation can support
them.

## Questions to discuss with your team

1. **Where does our organization actually stand in this phased sequence
   right now, honestly assessed?** Map your current state against the five
   phases directly; many organizations, assessed honestly, find they have
   metrics instrumented from a later phase without having genuinely
   completed the foundational earlier ones.

2. **Did we skip Phase 1's governance foundation in favour of moving
   directly to instrumentation, and if so, what has that cost us?** This
   connects directly to chapter 8.4's maturity assessment; a weak
   governance foundation discovered late is expensive to retrofit.

3. **What would a genuine, willing pilot team look like for us, if we have
   not yet run one?** Identify a specific, real candidate team rather than
   leaving this abstract, and discuss what would make them a good
   candidate specifically.

4. **What demonstrable result did each phase we have completed actually
   produce, and did we use it to justify the next phase's investment?** If
   you cannot point to a specific, communicated result from a completed
   phase, that gap is worth naming.

5. **Are Phase 4 and Phase 5 running in appropriate parallel for us, or is
   one being neglected in favour of the other?** Discuss whether your
   organization's specific risk profile, more delivery-focused or more
   reliability-focused, should shape this parallel sequencing differently
   than the default this chapter describes.

6. **Have we established the ongoing, recurring maturity assessment
   practice from chapter 8.4, or does our roadmap effectively end once the
   initial phases are technically complete?** A roadmap without this
   ongoing phase risks treating the metrics programme as a finished
   project rather than the sustained capability this book argues it needs
   to be.

## Sector lens

**Startup.** This full, multi-phase roadmap can likely be compressed
significantly, since a small organization can move through foundational
governance and pilot phases in weeks rather than quarters. Do not skip
Phase 1 entirely even at small scale, since the governance habits
established early are far easier to sustain than to retrofit as the
organization grows.

**Small business.** Pace the roadmap to your actual capacity rather than
attempting every phase in the sequence this chapter describes; a small
business might reasonably stop after Phase 2 or 3, with delivery and
developer-experience metrics, and defer the more sophisticated outcome and
reliability work in Parts 4 through 6 until the organization has grown
enough to genuinely need and support it.

**Enterprise.** Plan this roadmap explicitly as a multi-quarter or
multi-year programme with realistic milestones, and use each phase's
demonstrable result as a formal checkpoint for securing continued executive
sponsorship and budget, rather than attempting to justify the entire scope
upfront in a single business case.

**Government.** Use this chapter's phases as natural, incremental
checkpoints for budget or oversight-body reporting, requesting continued
investment at each phase boundary based on the previous phase's
demonstrated, documented result rather than as a single large upfront
request that may face more skepticism or procurement difficulty.

## Examples

**Enterprise.** A healthcare technology company adopted this roadmap
explicitly as its metrics programme's structuring framework, completing
Phase 1's governance foundation over six weeks, running a single-team DORA
pilot for one full quarter, and only then expanding to full organizational
delivery-metrics coverage in Phase 3, roughly five months after starting.
By deliberately pacing the rollout this way, the company avoided the
fear-driven gaming pattern chapter 8.3 describes as a risk of faster,
less disciplined rollouts, and its Phase 2 pilot team specifically became
informal internal advocates for the programme's expansion, having
experienced firsthand that the diagnostic-only commitment was genuinely
honoured throughout their pilot quarter.

**Government.** A state government technology agency used this chapter's
phased structure explicitly to sequence budget requests to its oversight
committee, requesting funding for Phase 1 and Phase 2 as an initial,
modest pilot investment, then returning to the committee with Phase 2's
documented results, improved deployment frequency and stable change failure
rate for the pilot team, as concrete evidence supporting a larger Phase 3
and Phase 4 funding request the following budget cycle. This incremental,
evidence-based funding approach succeeded where an earlier, more
comprehensive upfront request for the agency's entire metrics programme
scope had previously been rejected as too large and insufficiently
justified by demonstrated results.

## Business case: motivations, ROI, and TCO

The return on a phased, foundation-first roadmap is a metrics programme
that actually works, trustworthy, well-governed, genuinely used to make
decisions, rather than a comprehensive-looking but fear-corrupted or
poorly governed programme that a faster rollout risks producing. The
healthcare technology example above shows this directly: the deliberate
pacing produced genuine trust and internal advocacy that a faster rollout
would likely have undermined.

The total cost of ownership is time: this roadmap genuinely takes longer
to reach full scope than a big-bang rollout would. That time cost is the
direct, necessary price of the trust and governance foundation this entire
book has argued for from its opening chapters, and the government example
above shows a genuine, practical secondary benefit: incremental,
evidence-based phases are often easier to fund and justify than a single,
large, unproven upfront request.

## Anti-patterns and pitfalls

- **A big-bang, comprehensive rollout attempted all at once:** violates
  chapter 8.3's core guidance and risks provoking fear and gaming from the
  start.
- **Skipping Phase 1's governance foundation to move faster:** inherits
  weak governance into every later phase, expensive to retrofit later.
- **Selecting an unwilling or mandated pilot team for Phase 2:** undermines
  the trust-building purpose a genuine pilot is meant to serve.
- **Failing to produce or communicate a demonstrable result from each
  phase:** loses the evidence base needed to justify continued investment
  in the next phase.
- **Treating the roadmap as complete once every phase is technically
  touched:** misses the ongoing, ongoing maturity-assessment practice
  chapter 8.4 recommends as a permanent, not one-time, discipline.
- **Rigidly following this chapter's default sequencing regardless of your
  organization's actual risk profile:** this roadmap should be adapted, not
  applied mechanically without judgement.

## Maturity model

- **Level 1, Initiate:** No roadmap exists; metrics adoption, where it
  occurs at all, is ad hoc and unsequenced.
- **Level 2, Develop:** Some phases have been attempted, but foundational
  governance work was skipped or incomplete, and phase results are not
  systematically documented.
- **Level 3, Standardize:** A phased roadmap following this chapter's
  foundation-first sequence is documented and actively followed, with each
  phase producing a demonstrable result.
- **Level 4, Manage:** Phase results are used systematically to justify
  continued investment, and the roadmap is adapted deliberately to the
  organization's specific risk profile and priorities.
- **Level 5, Orchestrate:** The organization has completed the full roadmap
  and sustains the ongoing maturity-assessment practice from chapter 8.4 as
  a permanent capability, with a demonstrated, multi-year track record of
  phased, trust-building metrics investment.

## Ideas for discussion

1. Where does our organization actually stand in this phased sequence right now?
2. Did we skip or shortcut the foundational governance phase, and what has that cost us?
3. What would a genuine, willing pilot team look like for our next expansion?
4. What demonstrable result from our most recent phase could justify our next investment request?
5. Have we established the ongoing maturity-assessment practice, or does our roadmap effectively end?

## Key takeaways

- Adopt this book's guidance **in phases, foundations first**, never as a
  big-bang rollout that risks provoking fear and gaming.
- **Phase 1 (governance) cannot be skipped**; every later phase inherits
  whatever governance quality this phase establishes.
- Use a **genuine, willing pilot team** to prove value and build trust
  before expanding scope organization-wide.
- Each phase should produce a **demonstrable, reportable result** that
  justifies continued investment in the next phase.
- Treat the roadmap's completion as the start of an **ongoing, sustained
  practice** (chapter 8.4's recurring maturity assessment), not a finished
  project.

## References and further reading

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (the evidence base for the metric families this
  roadmap sequences).
- *Leading Change*, by John P. Kotter (organizational change management
  principles applicable to a phased metrics programme rollout).
- *The Lean Startup*, by Eric Ries (the build-measure-learn cycle this
  chapter's phased, prove-value-then-expand approach draws on).
- U.S. Government Accountability Office (GAO) guidance on performance
  measurement and the GPRA Modernization Act: incremental, evidence-based
  public-sector programme funding practice.
