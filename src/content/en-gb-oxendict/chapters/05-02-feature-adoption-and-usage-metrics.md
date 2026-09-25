# 5.2 Feature adoption and usage metrics

## Overview and motivation

**Feature adoption** measures whether the people a feature was built for
actually use it, at what rate, and whether that use persists over time. It
is, in a very direct sense, the reality check on everything Parts 2 through
4 of this book measure: an organization can deploy frequently, maintain
excellent developer experience, and ship immaculately tested code, and still
be building things nobody wants. Adoption data is where an engineering
organization finds out whether its output connected to any real outcome at
all, which is exactly the input-output-outcome distinction chapter 1.3
introduced applied to the most concrete case in this book: a specific,
shipped feature.

This chapter's central concern is that adoption data, more than almost any
other metric family in this book, is easy to measure in a way that flatters
rather than informs. A feature can show impressive initial adoption purely
from curiosity or forced exposure (a modal that appears whether a user wants
it or not) while genuine, sustained value delivery, measured by whether
people keep using it once the novelty fades, tells a completely different
story. Distinguishing genuine adoption from a temporary spike is this
chapter's core technical challenge, and getting it wrong routinely leads
organizations to celebrate features that quietly fail and abandon ones that
were just beginning to find their audience.

For large teams, feature adoption data is what makes roadmap prioritization
evidence-based rather than driven by whoever advocates most persuasively for
their own team's work. Enterprise organizations managing large product
portfolios need adoption data to identify which investments are earning
their keep; government organizations building citizen-facing digital
services need it to demonstrate that public investment produced services
people actually use, not just services that technically exist.

## Key principles

- **Initial adoption and sustained adoption are different signals.** A
  spike from curiosity or forced exposure is not the same as genuine,
  lasting value delivery.
- **Adoption should be measured against the audience it was built for**,
  not against your entire user base indiscriminately.
- **A feature with low adoption is not automatically a failure.** It might
  be poorly discovered, poorly targeted, or simply new; investigate before
  concluding.
- **Retention of usage matters more than a single adoption snapshot.**
  Track whether people who tried a feature keep coming back to it.
- **Adoption data is exposed to gaming through forced exposure or dark
  patterns.** A number inflated by making a feature hard to avoid is not a
  genuine signal.

## Recommendations

### Distinguish initial trial from sustained retention

Track two separate numbers: the percentage of your target audience who try
a feature at least once (initial adoption), and the percentage who are
still using it after a meaningful period, such as four or eight weeks
(retained adoption). A feature with high initial trial and low retention
suggests discoverability worked but the feature itself did not deliver
enough value to keep people coming back, a very different diagnosis, and a
very different fix, than low initial trial with high retention, which
suggests a genuinely valuable feature that not enough people know about.

### Define the target audience precisely before measuring adoption

Adoption measured against your entire user base can be misleading if a
feature was only ever meant for a specific segment: a feature for
enterprise administrators measured against a mostly individual-user base
will always look like it has terrible adoption, regardless of how well it
actually serves the people it was built for. Define the intended audience
explicitly before launch, and measure adoption against that specific
denominator, not your total user count.

### Investigate low adoption before concluding a feature failed

A low adoption number has several possible causes that call for very
different responses: the feature is genuinely not valuable, the feature is
valuable but poorly discoverable (users do not know it exists), the feature
is valuable but poorly explained (users see it but do not understand its
purpose), or the measurement window is simply too short for a slower-adopting
feature to have found its audience yet. Investigate which of these applies
before deciding to invest further, redesign, or deprecate.

### Watch for adoption inflated by forced exposure or [dark patterns](https://en.wikipedia.org/wiki/Dark_pattern)

An adoption number driven by a feature being hard to avoid, an intrusive
onboarding flow, a modal a user must dismiss, a default that is difficult to
change, is not measuring genuine value delivery, and celebrating it as if it
were repeats chapter 1.2's substitution-gaming pattern in product form. Pair
raw adoption numbers with a satisfaction or Net Promoter-style signal for
the specific feature where feasible, so forced exposure that does not
translate into genuine satisfaction gets caught rather than celebrated.

### Connect adoption trends back to specific product and engineering
decisions

When adoption unexpectedly rises or falls, trace the change back to a
specific decision, a UI change, a change in default settings, a marketing
push, a performance improvement or regression, rather than treating the
movement as an unexplained mystery. This connects adoption data to
actionable product and engineering learning, closing the loop between a
specific change and its measured effect on real usage.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Measuring against total user base | Simple, single denominator | Misleading for features aimed at a specific segment |
| Measuring against defined target audience | Fair, accurate reflection of intended reach | Requires deliberate audience definition before launch |
| Initial trial only | Fast signal, available quickly after launch | Misses whether the feature delivers lasting value |
| Initial trial plus retention | Distinguishes curiosity from genuine value | Requires waiting longer (weeks) before a full picture emerges |

The central tension is **speed versus honesty**. Initial trial data is
available almost immediately after launch and satisfies the organizational
pressure to report early results, but it cannot distinguish curiosity or
forced exposure from genuine, lasting value on its own. Resolve the
tension by reporting initial trial data early and clearly labelled as
preliminary, while committing publicly to a follow-up retention read at a
fixed, predetermined interval, so early enthusiasm does not calcify into an
unexamined success story before the real signal has had time to emerge.

## Questions to discuss with your team

1. **For our most recently shipped feature, do we know initial trial and
   retained usage separately, or only a single combined number?** If only a
   combined number exists, that gap hides exactly the curiosity-versus-value
   distinction this chapter treats as central.

2. **Was our target audience for this feature defined explicitly before
   launch, and are we measuring adoption against that specific group?**
   Check whether your current adoption denominator matches who the feature
   was actually built for, or whether it is diluted by measuring against an
   irrelevant broader population.

3. **For a feature with low adoption, have we investigated which of the
   several possible causes, low value, poor discoverability, poor
   explanation, insufficient time, actually applies?** Walk through this
   specific diagnostic list for a real, current low-adoption feature rather
   than defaulting to "it must not be valuable."

4. **Is any part of our reported adoption number inflated by forced
   exposure, an intrusive default, or a dismiss-required modal, rather than
   genuine, voluntary use?** Be honest here; this is a common and easy
   pattern to fall into, especially under pressure to show early positive
   results.

5. **When adoption for a feature moved significantly, could we trace that
   movement back to a specific change we made?** If the answer is usually
   "we're not sure," that gap limits how much your organization can
   actually learn from its own adoption data over time.

6. **Do we pair adoption numbers with any satisfaction signal for the same
   feature, or do we only track raw usage?** A high adoption number paired
   with low satisfaction is a warning sign that raw usage alone would
   completely miss.

## Sector lens

**Startup.** Feature adoption is often the single most important signal a
young company has, closely tied to product-market fit itself. Track
retention specifically, not just initial trial, from the very first
feature launch, since distinguishing genuine value from early curiosity is
critical when the company's survival may depend on getting this diagnosis
right.

**Small business.** Most analytics platforms report basic usage data with
minimal setup; the main discipline is defining your target audience clearly
before measuring, rather than reporting adoption against your entire
customer base regardless of who a specific feature was actually built for.

**Enterprise.** Adoption data at this scale is essential for fair,
evidence-based roadmap prioritization across a large product portfolio, and
the discipline of distinguishing initial trial from sustained retention
matters even more here, since a large enough user base can produce an
impressive-looking initial spike for almost any launch regardless of real
value.

**Government.** Adoption of a citizen-facing digital service is a direct,
concrete measure of whether public investment translated into real public
benefit, and it is often a far more persuasive metric to an oversight body
than a delivery or activity count. Measure adoption against the population
the service was actually built to serve, and be honest about barriers
(digital literacy, access, awareness) that might explain low adoption
beyond the service's own design.

## Examples

**Enterprise.** A project management software company launched a new
collaborative-editing feature and celebrated an impressive 60% initial
trial rate within the first two weeks. A follow-up retention read at eight
weeks showed only 8% of those initial triers were still using the feature
regularly, revealing that the high trial rate had been driven almost
entirely by a prominent, hard-to-dismiss onboarding tooltip rather than
genuine, sustained interest. Investigation of qualitative feedback from
early triers who had stopped using the feature revealed a specific,
fixable usability problem, an unintuitive interaction pattern, that a
targeted redesign addressed, and retained usage nearly tripled after the
fix, though it never approached the misleadingly high initial trial number.

**Government.** A national employment service launched a new online
job-matching tool, initially reporting adoption against the agency's entire
registered user base, producing a discouragingly low percentage that
threatened the programme's continued funding. A revised analysis, measuring
adoption specifically against the subset of registered users actively
searching for work in the tool's target industries, the actual intended
audience, showed a substantially higher and more accurate adoption rate.
Combined with a targeted outreach campaign specifically to that defined
audience, and a subsequent retention read showing strong sustained use
among adopters, the programme secured continued funding based on the
corrected, honestly targeted metric rather than the misleadingly diluted
original figure.

## Business case: motivations, ROI, and TCO

The return on rigorous feature adoption measurement is evidence-based
roadmap investment: an organization that can distinguish genuine, retained
value from curiosity-driven initial trial can confidently invest further in
features that are truly working and redirect effort away from ones that
are not, rather than chasing a misleading initial spike or prematurely
abandoning a genuinely valuable but slow-to-discover feature.

The total cost of ownership is mostly analytics instrumentation, usually
already available in most modern product analytics platforms, plus the
discipline of defining target audiences explicitly and committing to
follow-up retention reads rather than stopping at an early, incomplete
signal. That discipline costs little and prevents the far more expensive
mistake of misreading either a false success or a false failure.

## Anti-patterns and pitfalls

- **Reporting only initial trial, never retention:** cannot distinguish
  curiosity or forced exposure from genuine, lasting value.
- **Measuring adoption against the wrong denominator:** dilutes or inflates
  the signal for features aimed at a specific audience segment.
- **Concluding a feature failed without investigating the specific cause**
  of low adoption: risks abandoning a genuinely valuable but poorly
  discovered or poorly timed feature.
- **Celebrating adoption inflated by forced exposure or dark patterns:** a
  product-side instance of chapter 1.2's substitution gaming.
- **Never tracing adoption movement back to specific decisions:** limits
  organizational learning from the organization's own data.
- **Tracking usage without any paired satisfaction signal:** misses the
  case where high usage coexists with low genuine value or satisfaction.

## Maturity model

- **Level 1, Initiate:** Adoption is not measured, or only a single,
  early, unretained trial number is reported.
- **Level 2, Develop:** Some adoption tracking exists, but target
  audiences are not defined precisely and retention is inconsistently
  measured.
- **Level 3, Standardize:** Initial trial and retained adoption are both
  tracked consistently against a precisely defined target audience for
  every major feature.
- **Level 4, Manage:** Low-adoption features are systematically
  investigated for specific root cause before a decision to redesign or
  deprecate; adoption is paired with satisfaction data.
- **Level 5, Orchestrate:** Adoption data directly and routinely informs
  roadmap prioritization and investment decisions, and the organization can
  trace specific adoption movements back to specific product and
  engineering decisions with confidence.

## Ideas for discussion

1. What is a recent feature where our initial trial and retained adoption told very different stories?
2. Was our last feature's target audience defined precisely before launch, or only after?
3. What low-adoption feature deserves an honest root-cause investigation before we decide its fate?
4. Is any part of our current adoption reporting inflated by forced exposure?
5. What would pairing adoption data with satisfaction data reveal about our most-used feature?

## Key takeaways

- Distinguish **initial trial from sustained retention**; a spike from
  curiosity or forced exposure is not genuine, lasting value.
- Measure adoption against a **precisely defined target audience**, not an
  irrelevant broader user base.
- **Investigate the specific cause** of low adoption before concluding a
  feature failed; several very different causes call for very different
  responses.
- Watch for adoption **inflated by forced exposure or dark patterns**, and
  pair adoption with a **satisfaction signal** to catch this.
- **Trace adoption movement back to specific decisions** to turn the data
  into genuine organizational learning.

## References and further reading

- *Lean Analytics*, by Alistair Croll and Benjamin Yoskovitz (actionable
  versus vanity metrics applied to product usage data).
- *Continuous Discovery Habits*, by Teresa Torres (connecting product
  decisions to customer outcome evidence, including adoption data).
- *Hooked: How to Build Habit-Forming Products*, by Nir Eyal (retention and
  habit formation, and the ethical line between genuine value and dark
  patterns).
- *Measure What Matters*, by John Doerr (outcome-oriented goal setting
  applicable to adoption target-setting).
