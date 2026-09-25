# 6.0 Introduction to Part 6: Reliability, Operations, and Security Metrics

Part 2 covered how a change gets from a commit to production; this part
covers what happens once it is running there, indefinitely, under real
conditions the team cannot fully control. Reliability, operations, and
security metrics are where software engineering's promises meet sustained
reality: not "did this deploy succeed" but "does this system keep working,
night after night, under load, under attack, and under the strain of an
on-call rotation that has to be sustainable for years, not just for the
next incident."

This part's four chapters follow a deliberate arc. Service level indicators
and objectives (chapter 6.1) establish the vocabulary and the target-setting
discipline that everything else in this part depends on. Incident metrics
(chapter 6.2) measure what happens when that target is missed. On-call and
capacity metrics (chapter 6.3) measure the human and infrastructure cost of
keeping the target met. Security and vulnerability metrics (chapter 6.4)
extend the same reliability discipline to a distinct but closely related
risk: not "will this fail on its own" but "will someone make it fail on
purpose." All four chapters share this book's central discipline: name the
metric, name how it gets gamed, and pair it with the guardrail that catches
that gaming.

For large teams, this part's metrics are where engineering's promises become
contractual and, in government contexts, sometimes legal. Enterprise
organizations write service level agreements against the metrics chapter
6.1 introduces, with real financial penalties for missing them; government
organizations operate critical public infrastructure where a reliability or
security failure carries consequences well beyond a single company's
balance sheet. This part treats that weight seriously throughout.

## Chapters in this part

- **6.1 Service level indicators, objectives, and error budgets:** The
  vocabulary and target-setting discipline that underlies all of site
  reliability engineering, and how an error budget turns reliability into a
  spendable, manageable resource rather than an unattainable absolute.
- **6.2 Incident metrics: detection, response, and recovery:** Measuring
  how quickly an organization notices, responds to, and resolves a failure,
  and the blameless discipline that keeps that measurement honest.
- **6.3 On-call, capacity, and operational load metrics:** The human and
  infrastructure cost of sustaining reliability, and why an unsustainable
  on-call burden eventually shows up as a reliability problem itself.
- **6.4 Security and vulnerability management metrics:** Extending the
  same disciplined, guardrail-paired approach to security risk, from
  vulnerability discovery through remediation.

## How these chapters interrelate

Chapter 6.1 sets the foundation every later chapter in this part builds on:
without a clear service level objective, "how bad was this incident"
(chapter 6.2) and "is our on-call load sustainable" (chapter 6.3) have no
shared reference point to measure against. Chapter 6.2's incident metrics
are, in a real sense, the record of error-budget spending chapter 6.1
introduces; chapter 6.3 measures the sustainability of the human system
responsible for keeping that spending within budget; and chapter 6.4 applies
the same target-and-budget thinking to a security posture that, left
unmeasured, tends to receive attention only reactively, after an incident,
rather than proactively.

This part connects directly back to Part 2: DORA's change failure rate and
failed deployment recovery time (both covered in chapter 2.10) are,
respectively, a leading indicator for and an instance of this part's
incident metrics. It
also connects forward to Part 8, where the dashboard and program-maturity
guidance draws heavily on this part's error-budget model as a worked example
of turning an abstract goal (reliability, security) into a concrete, trackable,
non-absolute target that a team can actually manage day to day.
