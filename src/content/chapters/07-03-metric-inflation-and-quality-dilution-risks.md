# 7.3 Metric inflation and quality dilution risks

## Overview and motivation

This chapter names, directly and specifically, the two failure modes chapter
7.1 warned this book's entire framework must guard against as AI-assisted
development becomes standard practice: **metric inflation**, numbers rising
without corresponding real value, and **quality dilution**, a gradual
erosion in code quality that outpaces the industry's current ability to
detect it through existing review and testing practices. These are not new
categories of risk this book has not already named, metric inflation is
chapter 1.2's Goodhart's law and chapter 1.2's substitution gaming applied
at scale, and quality dilution is chapter 4.2's coverage-effectiveness gap
and chapter 5.1's escaped-defect concern, both intensified. What is new is
the speed and scale at which generative AI can produce both failure modes
simultaneously, faster than most organizations' existing guardrails were
designed to catch.

The specific mechanism this chapter is concerned with is subtle: AI-generated
code very often looks correct. It follows familiar idioms, uses plausible
variable names, and passes a superficial read far more reliably than
genuinely careless human-written code typically does, precisely because it
was trained on a vast corpus of code that looked correct. This makes
AI-generated defects harder for a human reviewer to catch through the kind
of pattern-matching, does-this-look-right review that catches many
human-introduced bugs, because the AI-generated version is specifically
optimized, in a statistical sense, to look right whether or not it actually
is.

For large teams, this chapter's risks compound with scale in a way that
should concern enterprise and government organizations specifically:
metric inflation across dozens of teams simultaneously can produce an
organization-wide false signal of improved productivity that takes
significant time and analysis to unwind, exactly as chapter 7.1's financial
technology example showed. Quality dilution that outpaces detection
capability is even more serious in regulated, safety-critical, or
public-trust contexts, where the cost of an undetected defect reaching
production carries consequences well beyond the immediate engineering
concern.

## Key principles

- **Metric inflation and quality dilution are intensified versions of
  risks this book already named**, not entirely new categories; the
  existing guardrails still apply, but need to work harder.
- **AI-generated code's "looks correct" quality makes it specifically
  harder for human pattern-matching review to catch subtle defects.** This
  is a distinct risk from ordinary human error.
- **The speed of this shift can outpace an organization's ability to adapt
  its guardrails**, creating a genuine, time-limited exposure window.
- **Existing quality metrics (Part 4) remain valuable but may need
  recalibration**, not replacement, in light of this new risk profile.
- **Detection capability itself needs deliberate investment**, since the
  review and testing practices this book covers were designed before this
  specific risk existed at this scale.

## Recommendations

### Recalibrate change failure rate and escaped defect thresholds for
AI-heavy work

Where a team or code area has adopted AI assistance heavily, apply chapter
2.4 and chapter 5.1's severity-weighted tracking with heightened
sensitivity, at least until your organization has built enough evidence
(chapter 7.2) to know whether the historical relationship between these
metrics and genuine risk still holds unchanged for AI-assisted work
specifically. Treat this recalibration as a temporary, evidence-gathering
posture, not a permanent, unexamined assumption in either direction.

### Invest specifically in detection capability that resists the
"looks correct" problem

Traditional code review, which relies heavily on a reviewer's pattern
recognition for what looks right, is specifically weakened against
plausible-looking but subtly incorrect AI-generated code. Invest
correspondingly more in detection methods that do not rely on visual
pattern-matching: [mutation testing](https://en.wikipedia.org/wiki/Mutation_testing) (chapter 4.2), which tests actual
behaviour rather than appearance, and property-based or invariant-based
testing, which verifies logical correctness rather than surface
plausibility, both become disproportionately more valuable specifically
because of this shift.

### Watch for metric inflation across the whole delivery pipeline, not
just at the point of code generation

Metric inflation from AI-assisted development is not confined to the
coding stage; it can propagate through the whole cycle-time chain (chapter
2.6): a larger volume of AI-generated pull requests can inflate pull
request throughput metrics (chapter 2.8) even while the useful signal that
metric was originally designed to capture, genuine team throughput, stays
flat or even declines once review burden and correction cost are properly
accounted for. Audit your full metric set for this propagation pattern, not
just the most obvious, direct AI-adjacent metrics.

### Build an explicit, time-bound recalibration plan rather than a
permanent posture of suspicion

The heightened scrutiny this chapter recommends is appropriate during an
active period of adoption and uncertainty, but it should not become a
permanent, unexamined tax on AI-assisted work indefinitely. As your
organization builds real evidence through chapter 7.2's measurement
discipline, revise thresholds and guardrails based on what that evidence
actually shows, tightening further where risk is confirmed, relaxing where
it is not, rather than either ignoring the risk entirely or treating every
piece of AI-assisted code with permanent, undifferentiated suspicion
regardless of accumulating evidence.

### Communicate this risk transparently rather than treating it as a
reason to resist AI adoption

Frame this chapter's guidance as risk management for a genuinely valuable
new capability, not as an argument against AI-assisted development
generally. An organization that communicates these specific, named risks
clearly and builds proportionate guardrails against them, exactly as this
book recommends for every other metric and technique it covers, adopts AI
assistance more safely and more sustainably than one that either ignores
the risk or treats it as a reason for blanket resistance to a genuinely
useful set of tools.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| No recalibration, treat AI-assisted work identically to human-written code | Simple, no process change | Misses a specific, evidence-suggested elevated risk profile |
| Blanket, permanent heightened scrutiny of all AI-assisted code | Maximizes short-term risk reduction | Unsustainable tax on a genuinely valuable capability; ignores accumulating evidence |
| Time-bound, evidence-driven recalibration | Balances risk management with sustainable adoption | Requires ongoing measurement discipline (chapter 7.2) to know when to relax scrutiny |
| Investment in detection methods resistant to "looks correct" defects | Addresses the specific new risk directly and durably | Requires upfront investment in mutation and property-based testing infrastructure |

The central tension is **caution versus adoption speed**. Excessive,
permanent caution squanders much of AI-assisted development's genuine
value; insufficient caution risks the metric inflation and quality dilution
this chapter names, potentially at significant scale before detection.
Resolve the tension through the time-bound, evidence-driven approach this
chapter recommends: heightened scrutiny now, calibrated down or up as real
evidence from chapter 7.2's measurement discipline accumulates, rather than
either a permanent blanket policy or an unexamined assumption that nothing
has changed.

## Questions to discuss with your team

1. **Have we recalibrated our change failure rate or escaped defect
   thresholds for AI-heavy work, or are we applying pre-AI-era thresholds
   unchanged?** If unchanged, discuss whether that reflects a deliberate,
   evidence-based decision or simply an absence of attention to the
   question.

2. **Do we have detection methods, like mutation testing, that do not rely
   on a reviewer's visual pattern-matching, or is our review process
   entirely dependent on human eyes assessing whether code "looks right"?**
   This is the specific vulnerability this chapter identifies; assess your
   current detection capability against it honestly.

3. **Has metric inflation propagated beyond the coding stage into our pull
   request or deployment metrics, and would we currently notice if it
   had?** Walk through your full cycle-time chain looking for this
   propagation pattern, not just the most obvious point of origin.

4. **Is our current heightened scrutiny of AI-assisted code, if any, based
   on accumulated evidence, or is it an unexamined, indefinite default that
   has never been reconsidered?** Discuss what evidence would need to
   accumulate before you would consider relaxing or further tightening
   current guardrails.

5. **How do we communicate this chapter's risks internally: as a reason for
   caution and proportionate guardrails, or as an implicit argument against
   AI adoption generally?** Be honest about how this conversation is
   actually landing with your team, since a message received as blanket
   resistance rarely produces the proportionate, evidence-based response
   this chapter recommends.

6. **What would it look like for our organization to discover, only after
   significant scale, that both metric inflation and quality dilution had
   been happening simultaneously and undetected?** This concrete, somewhat
   uncomfortable scenario is worth naming explicitly as the specific
   failure this chapter's guardrails are built to prevent.

## Sector lens

**Startup.** Fast adoption with limited review capacity makes this
chapter's risks particularly acute for a small team; the "looks correct"
detection problem is harder to catch with fewer, less specialized reviewers.
Invest early in at least lightweight mutation testing on your most critical
code paths, even if comprehensive coverage is not yet feasible.

**Small business.** Formal recalibration processes are likely unnecessary
at this scale, but a simple, explicit awareness that AI-generated code
deserves a slightly more skeptical read than usual, specifically because it
tends to look more confidently correct than it may actually be, costs
nothing and directly addresses this chapter's core concern.

**Enterprise.** Metric inflation and quality dilution both compound
significantly at scale, since a false signal or an undetected quality
problem across dozens of teams simultaneously is far more consequential and
far harder to unwind than the same issue on a single team. Invest
deliberately in organization-wide detection capability upgrades (mutation
testing infrastructure, property-based testing adoption) and in the
time-bound recalibration discipline this chapter recommends, tracked
centrally.

**Government.** The consequences of undetected quality dilution are
particularly serious in regulated, safety-critical, or public-trust
contexts common in government systems. Apply heightened, evidence-driven
scrutiny specifically to AI-assisted changes in high-consequence code paths
(chapter 6.4's exposure-and-exploitability weighting logic applies
similarly here), and be prepared to demonstrate, to an auditor or oversight
body, exactly what detection capability exists against this specific risk.

## Examples

**Enterprise.** An insurance company's claims-processing engineering team
adopted AI coding assistance broadly and, six months later, noticed a
gradual but measurable rise in escaped defects specifically in complex
conditional logic, the kind of code where subtly wrong edge-case handling
is both easiest for AI tools to generate plausibly and hardest for a
reviewer to catch by inspection alone. An investigation confirmed the
"looks correct" pattern this chapter describes: the defective code had
consistently used idiomatic, familiar-looking patterns that passed review
without triggering the kind of scrutiny an obviously unusual or awkward
piece of human-written code might have received. The team's response
targeted mutation testing specifically at complex conditional logic
company-wide, a detection method resistant to the surface-plausibility
problem, and measured a significant reduction in this specific defect
category within two quarters.

**Government.** A tax authority piloting AI-assisted development for a
subset of its calculation-engine maintenance work built in the time-bound
recalibration discipline this chapter recommends from the start, setting an
explicit six-month evidence-gathering period with heightened review
requirements for AI-assisted changes to calculation logic specifically. The
evidence gathered showed no statistically meaningful difference in defect
rate for well-scoped, narrow changes, but did confirm an elevated risk for
broader, more architecturally significant AI-assisted changes. The agency's
resulting policy relaxed heightened scrutiny for the narrow-change category
while maintaining and even strengthening it for architecturally significant
changes, a proportionate, evidence-based outcome that neither the "no
recalibration" nor the "blanket permanent scrutiny" extreme would have
produced.

## Business case: motivations, ROI, and TCO

The return on guarding against metric inflation and quality dilution
deliberately is avoiding exactly the scenario the insurance company example
above shows: an undetected, gradually compounding quality problem that
costs far more to discover and remediate after the fact than the detection
investment, mutation testing infrastructure specifically targeted at the
highest-risk code, would have cost proactively.

The total cost of ownership includes the detection-capability investment
this chapter recommends and the ongoing discipline of evidence-based
recalibration rather than either extreme, permanent suspicion or permanent
inattention. That cost is modest and time-bound relative to the risk of a
significant, scaled quality problem going undetected specifically because
it was engineered, by the nature of how these tools generate code, to look
correct to the review processes an organization already had in place.

## Anti-patterns and pitfalls

- **Applying pre-AI-era thresholds and detection methods unchanged:**
  misses a specific, evidence-suggested elevated risk profile.
- **Relying entirely on human pattern-matching review for AI-generated
  code:** specifically vulnerable to the "looks correct" problem this
  chapter identifies.
- **Missing metric inflation propagation beyond the point of code
  generation:** a false signal can spread through the whole delivery
  pipeline undetected.
- **Permanent, unexamined blanket scrutiny with no evidence-based
  recalibration:** squanders much of AI-assisted development's genuine
  value unsustainably.
- **Communicating this chapter's risks as blanket resistance to AI adoption
  rather than proportionate risk management:** undermines both safety and
  adoption.
- **No detection-capability investment specifically targeted at this new
  risk profile:** leaves the organization dependent on review methods this
  chapter has shown to be specifically weakened against it.

## Maturity model

- **Level 1, Initiate:** No awareness of metric inflation or quality
  dilution risk specific to AI-assisted development; existing guardrails
  and detection methods are applied unchanged.
- **Level 2, Develop:** Some awareness exists, but recalibration is ad hoc
  and detection-capability investment specific to this risk has not been
  made.
- **Level 3, Standardize:** Recalibrated thresholds and detection methods
  resistant to the "looks correct" problem (mutation and property-based
  testing) are applied consistently to AI-assisted work.
- **Level 4, Manage:** A time-bound, evidence-driven recalibration
  discipline actively adjusts scrutiny based on accumulated data, and
  metric inflation propagation is actively monitored across the full
  pipeline.
- **Level 5, Orchestrate:** The organization has a mature, proportionate,
  continuously evolving risk-management posture toward AI-assisted
  development, communicated transparently, that neither squanders its
  value through excessive caution nor exposes the organization to undetected
  quality dilution.

## Ideas for discussion

1. Have we seen any early evidence of the "looks correct" defect pattern in our own AI-assisted code?
2. What detection method would most directly address this chapter's specific risk for us?
3. Has metric inflation from AI assistance propagated into any of our downstream pipeline metrics?
4. Is our current scrutiny of AI-assisted code evidence-based or an unexamined default?
5. How is this chapter's guidance actually being received by our team: as risk management or as resistance to AI adoption?

## Key takeaways

- Metric inflation and quality dilution are **intensified versions of
  risks this book already names**, requiring existing guardrails to work
  harder, not entirely new frameworks.
- AI-generated code's tendency to **"look correct"** specifically weakens
  traditional, pattern-matching human code review.
- Invest in **detection methods resistant to surface plausibility**,
  particularly mutation and property-based testing.
- Apply a **time-bound, evidence-driven recalibration** posture, not
  permanent blanket suspicion or permanent unexamined trust.
- **Communicate this risk as proportionate risk management**, not as an
  argument against AI adoption, to support both safety and sustainable use.

## References and further reading

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (the paired speed-and-stability discipline this
  chapter applies to a new risk category).
- Jia, Yue, and Mark Harman, "An Analysis and Survey of the Development of
  Mutation Testing," *IEEE Transactions on Software Engineering* (2011):
  the detection method this chapter argues becomes disproportionately
  valuable.
- GitHub's research on AI pair programming and developer productivity
  (industry data on AI-assisted development outcomes and risk).
- *The Tyranny of Metrics*, by Jerry Z. Muller (metric fixation and gaming
  risk, directly relevant to the metric inflation concern this chapter
  names).
