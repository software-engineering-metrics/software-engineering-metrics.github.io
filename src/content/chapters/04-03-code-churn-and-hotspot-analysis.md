# 4.3 Code churn and hotspot analysis

## Overview and motivation

**Code churn** measures how frequently a file or module changes over time,
lines added, modified, and deleted across successive commits. On its own,
churn is a fairly weak signal: some files change often because they are
under active, healthy development, and some rarely change because they are
stable and correct, not because they are neglected. The real diagnostic
power of this chapter's approach comes from combining churn with
complexity (chapter 4.1): a file that is both frequently changed and highly
complex, a **hotspot**, is disproportionately likely to be a source of
defects and a drag on team velocity, and empirical research bears this out
consistently across many codebases and organizations.

**Hotspot analysis**, popularized by Adam Tornhill's work on software
analytics, is specifically valuable because it requires no manual survey or
subjective judgement to find its targets. [Version control](https://en.wikipedia.org/wiki/Version_control) history already
contains everything needed to compute both churn and, combined with static
analysis tooling, complexity, for every file in a codebase automatically.
This lets a team or organization identify, with real evidence rather than
anecdote or the loudest complaint in a retrospective, exactly which small
fraction of the codebase deserves refactoring attention first.

For large teams, hotspot analysis solves a genuine allocation problem: a
codebase with hundreds of thousands of lines has far more code than any
team can afford to refactor comprehensively, and intuition about where the
worst problems live is frequently wrong, skewed by whoever complained most
recently or whichever file a senior engineer happens to dislike. Enterprise
and government organizations managing large, long-lived codebases depend on
this data-driven prioritization to direct genuinely scarce refactoring
budget toward the code that will produce the largest return.

## Key principles

- **Churn alone is a weak signal; churn combined with complexity is
  strong.** The combination, not either metric alone, is what identifies a
  genuine hotspot.
- **Hotspot analysis requires no manual survey.** Version control history
  already contains everything needed to compute it automatically.
- **A hotspot is a prioritization signal, not an automatic verdict.** Human
  judgement is still needed to decide what action a specific hotspot
  warrants.
- **Frequent change is not inherently bad.** Some churn reflects healthy,
  active development rather than a quality problem.
- **This analysis scales precisely where intuition fails**: in large
  codebases too big for any individual to survey and prioritize by feel
  alone.

## Recommendations

### Compute churn and complexity together, and rank by their combination

Extract change frequency per file from version control history over a
meaningful window, typically six months to a year, and pair it with a
complexity measure (chapter 4.1) for the same files. Rank files by the
combination, commonly the product of churn and complexity, rather than by
either metric alone, since this combination is what the underlying
research consistently associates with elevated defect rates and maintenance
cost.

### Investigate the top hotspots with human judgement before acting

A ranked hotspot list identifies candidates for attention, not an automatic
action list. For each of your top hotspots, investigate with a human eye:
is this genuinely poorly designed code that needs refactoring, or is it a
file that legitimately needs frequent change because it sits at the centre
of active, evolving business logic, in which case the priority might be
better tests or clearer documentation rather than a structural rewrite. This
mirrors chapter 4.1's essential-versus-accidental complexity distinction,
applied here to the combined churn-complexity signal.

### Cross-reference hotspots against incident and defect data

Where available, check whether your identified hotspots correlate with
actual production incidents (chapter 6.2) or defect-escape data (chapter
5.1). A strong correlation validates the hotspot analysis as genuinely
predictive for your specific codebase and strengthens the business case for
acting on it; a weak or absent correlation suggests either a data-quality
issue or that churn and complexity are not, in your particular context, the
right combination of signals to prioritize by.

### Track hotspot trend over successive analyses, not just a single snapshot

Re-run hotspot analysis periodically, quarterly is common, and track
whether previously identified hotspots are improving, worsening, or
resolved, and whether new ones are emerging. A hotspot that persists across
multiple analysis cycles despite being flagged repeatedly indicates either
that remediation effort has not actually been applied or that a previous
remediation attempt did not address the real underlying problem.

### Use hotspot data to inform, not replace, team-level prioritization
conversations

Present hotspot analysis as evidence in a prioritization discussion, not as
an automatic mandate that overrides a team's own contextual judgement about
what matters most right now. A team may have good, legitimate reasons to
deprioritize a known hotspot temporarily, an upcoming planned rewrite makes
incremental refactoring wasted effort, for example, and the analysis should
inform that conversation, not substitute for it.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Intuition-based prioritization | Fast, no tooling required, leverages team's contextual knowledge | Skewed by recency, personal preference, and whoever complains loudest |
| Churn alone | Simple to compute | Weak signal on its own; frequent change is not inherently bad |
| Churn combined with complexity (hotspot analysis) | Strong, evidence-based, automatic from existing data | Requires combining two data sources and interpreting results with judgement |
| Hotspot analysis cross-referenced with incident data | Validated, strongest evidence for prioritization | Requires reliable incident-to-code linkage, which not every organization has |

The central tension is **evidence versus context**. Hotspot analysis
provides objective, scalable evidence that intuition-based prioritization
cannot match at the size of a large, unfamiliar, or long-lived codebase, but
it lacks the contextual judgement a team has about why a given hotspot
matters, or does not, right now. Resolve the tension by treating hotspot
analysis as the evidence base for a prioritization conversation, combined
with, never substituting for, the team's own contextual judgement about
timing and trade-offs.

## Questions to discuss with your team

1. **What are our top five hotspots, ranked by churn and complexity
   combined, and would that ranking match our team's intuition about where
   our worst problems live?** Run the analysis and compare the result
   against what your team would have guessed before seeing the data;
   discrepancies are often the most valuable finding.

2. **Do our identified hotspots correlate with actual production incidents
   or defect-escape data?** If you have the data to check this, do so
   directly; if you do not, that gap is itself worth naming as something to
   build toward.

3. **For our top hotspot right now, is the underlying problem essential
   complexity that legitimately requires frequent change, or accidental
   complexity that a refactor could genuinely fix?** Walk through the file
   together and make this judgement explicitly rather than assuming either
   answer.

4. **Has a previously identified hotspot persisted across multiple analysis
   cycles despite being flagged?** If so, investigate honestly why:
   remediation was never actually attempted, or a previous attempt did not
   address the real underlying cause.

5. **Are we currently prioritizing refactoring work based on evidence, or
   based on whoever complained most recently or most loudly?** Be honest
   about your team's actual current prioritization process and how it
   compares to what an evidence-based hotspot analysis would suggest.

6. **What would it cost us, in defect rate or delivery slowdown, to leave
   our current top hotspot unaddressed for another year?** This question
   forces a concrete cost estimate that can anchor a prioritization
   decision, rather than leaving the hotspot as an abstract, easily
   deprioritized concern.

## Sector lens

**Startup.** Formal hotspot analysis is usually unnecessary with a small,
young codebase that the whole team still holds in their heads collectively.
The technique becomes valuable specifically once the codebase has grown
past the size where any individual can reliably identify the worst areas by
memory alone, often somewhere in the first year or two of sustained growth.

**Small business.** Free or low-cost tooling can extract churn data
directly from your existing version control history with minimal setup;
combine it with whatever complexity data your existing linter or static
analysis tool already reports, rather than investing in dedicated
commercial hotspot-analysis software at this scale.

**Enterprise.** Hotspot analysis is where evidence-based prioritization
earns the most return, since intuition genuinely fails at the scale of a
codebase spanning hundreds of services and thousands of files. Invest in
running this analysis regularly across the whole codebase and
cross-referencing against incident data to build a validated, defensible
case for refactoring investment.

**Government.** Long-lived systems, sometimes decades old, are a natural
fit for hotspot analysis, since the accumulated version control history
provides a rich, long-term signal about which parts of the system have
genuinely proven troublesome over time. This evidence-based approach is
also a persuasive, concrete tool for justifying modernization investment to
stakeholders who need more than an engineer's informal opinion to approve
funding.

## Examples

**Enterprise.** An insurance company's claims-processing platform, spanning
over two million lines of code across dozens of services, had accumulated
years of informal complaints about "the claims-validation module" being
troublesome, but no formal prioritization had ever followed from those
complaints. A hotspot analysis combining six months of churn data with
complexity scores identified a completely different file, a shared
currency-conversion utility buried deep in a rarely discussed dependency,
as the actual top hotspot, one that had never come up in any retrospective
complaint. Cross-referencing against incident data confirmed this utility
was implicated in a disproportionate share of financial-calculation defects
over the prior year, and a targeted refactor of that specific utility,
rather than the module everyone had been informally blaming, produced a
measurable reduction in related incidents within the following quarter.

**Government.** A state motor vehicle agency's decades-old licensing system
underwent a hotspot analysis as part of a modernization business case. The
analysis identified a small cluster of files, representing under 3% of the
total codebase, responsible for a disproportionate share of both churn and
complexity, and cross-referencing against the agency's incident log showed
this same cluster accounted for nearly 40% of all reported system defects
over the previous three years. This concrete, evidence-based finding, far
more persuasive than a general claim that "the system is old and needs
modernizing," became the centerpiece of a successful budget request for a
targeted, incremental modernization effort focused specifically on that
cluster rather than a far more expensive full system replacement.

## Business case: motivations, ROI, and TCO

The return on hotspot analysis is targeted, evidence-based investment: both
examples above show a case where formal analysis redirected refactoring
attention away from where informal complaint had focused it and toward
where the data actually showed the problem lived, producing a measurably
better return than an untargeted or intuition-driven investment would have.

The total cost of ownership is low, since churn data comes directly from
existing version control history and complexity data is usually already
available from static analysis tooling (chapter 4.4); the main investment is
the periodic analysis effort and the human judgement time to interpret
results and decide what action each identified hotspot warrants.

## Anti-patterns and pitfalls

- **Using churn alone without complexity:** a weak signal on its own that
  can flag healthy, actively developed code as a false positive.
- **Treating a hotspot ranking as an automatic action list with no human
  judgement:** misses the essential-versus-accidental distinction that
  determines the right response.
- **Prioritizing refactoring based on the loudest complaint rather than
  evidence:** frequently misdirects effort away from where the data
  actually shows the problem lives.
- **Never cross-referencing hotspots against incident or defect data:**
  misses the validation step that strengthens the case for acting on the
  analysis.
- **Running the analysis once and never repeating it:** misses whether
  remediation effort is actually working over time.
- **Ignoring a persistently flagged hotspot without investigating why
  remediation has not stuck:** wastes the diagnostic value of repeated
  analysis.

## Maturity model

- **Level 1, Initiate:** Refactoring priorities are set by intuition or
  complaint volume, with no churn or complexity data informing the
  decision.
- **Level 2, Develop:** Some teams informally check churn or complexity
  data, but there is no consistent, organization-wide hotspot analysis
  practice.
- **Level 3, Standardize:** Hotspot analysis combining churn and complexity
  runs regularly and consistently informs refactoring prioritization
  organization-wide.
- **Level 4, Manage:** Hotspots are cross-referenced against incident and
  defect data to validate the analysis, and trend across successive cycles
  is actively tracked.
- **Level 5, Orchestrate:** The organization can point to specific,
  measurable defect-rate or delivery improvements from hotspot-informed
  refactoring investment, and the analysis is a routine, trusted input to
  engineering investment decisions.

## Ideas for discussion

1. What would our top hotspot list look like if we ran this analysis today?
2. Would that list match, or contradict, our team's current informal sense of our worst problem areas?
3. Do we have the data to cross-reference hotspots against actual incidents?
4. Has a known problem area persisted despite previous attempts to fix it, and why?
5. What would it cost us to leave our current top hotspot unaddressed for another year?

## Key takeaways

- **Churn combined with complexity** identifies genuine hotspots far more
  reliably than either metric alone.
- Hotspot analysis requires **no manual survey**; it is computable
  automatically from existing version control and static analysis data.
- Treat a hotspot ranking as **evidence for prioritization**, not an
  automatic verdict; human judgement is still required.
- **Cross-reference hotspots against incident and defect data** to validate
  the analysis and strengthen the case for acting on it.
- Track hotspots **across successive analysis cycles** to confirm
  remediation is actually working, not just once as a snapshot.

## References and further reading

- *Your Code as a Crime Scene*, by Adam Tornhill (the foundational text on
  hotspot analysis combining churn and complexity from version control
  data).
- *Software Design X-Rays*, by Adam Tornhill (further techniques for
  behavioural code analysis using version control history).
- Nagappan, Nachiappan, and Thomas Ball, "Use of Relative Code Churn
  Measures to Predict System Defect Density," *ICSE* (2005): empirical
  research on the relationship between churn and defect density.
- *Refactoring: Improving the Design of Existing Code*, by Martin Fowler
  (techniques for addressing accidental complexity once identified).
