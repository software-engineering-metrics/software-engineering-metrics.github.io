# What are software engineering metrics?

[Software engineering metrics](https://en.wikipedia.org/wiki/Software_metric)
are quantitative measures used to evaluate, track, and improve the quality,
efficiency, and impact of software development processes, products, and
teams. Done well, they act as systemic diagnostic tools: they uncover
operational bottlenecks, justify technical debt remediation, and align
engineering activity with concrete business outcomes. Done badly, they
distort behaviour, damage trust, and reward exactly the wrong things.

This book exists because most teams reach for metrics before they have
decided what a metric is *for*. A dashboard fills up with everything that is
easy to count, a leadership team starts asking "is this number up or down,"
and within a quarter the team is optimizing the number instead of the outcome
it was meant to represent. That failure has a name,
[Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law): when a
measure becomes a target, it stops being a good measure. Every chapter in
this book is written with that law standing behind it.

## The two foundational frameworks

The industry has largely converged on two research-backed frameworks for
measuring engineering delivery and team health.

**[DORA metrics](https://dora.dev/guides/dora-metrics/)** (from the DevOps
Research and Assessment programme) measure system throughput and stability:
deployment frequency, lead time for changes, change failure rate, and failed
deployment recovery time. Part 2 of this book covers all four in a
dedicated reference chapter, alongside the Flow Framework it uses to
organize delivery and flow metrics more broadly, because DORA measures
pipeline mechanics well but says nothing about what kind of value is moving
through the pipeline.

**The [SPACE framework](https://queue.acm.org/detail.cfm?id=3454124)**,
created by researchers at Microsoft, GitHub, and the University of Victoria,
counterbalances raw throughput with developer experience across five
dimensions: satisfaction and well-being, performance, activity, communication
and collaboration, and efficiency and flow. Part 3 covers it in depth.

Beyond these two frameworks, teams track localized metrics grouped by domain:
code and quality metrics (Part 4), product and business metrics (Part 5), and
reliability, operations, and security metrics (Part 6). Part 7 addresses a
shift already under way: generative AI tools have made raw code output nearly
free, which means several metrics this industry has relied on for a decade no
longer mean what they used to.

## Who this is for

The primary audience is the people who choose what a team measures and why:
engineering leaders, staff and principal engineers, platform and DevOps
teams, and programme and product managers building a metrics dashboard or
scorecard for the first time, or repairing one that has started to distort
behaviour. The secondary audience is any engineer who wants to understand why
their organization tracks what it tracks, and how to push back when a metric
is being misused.

## How to read it

Start here, then read the [introduction](introduction.md) for how the book
is organized, or jump straight to the [table of contents](table-of-contents.md).
Each chapter stands on its own: it states its principles first, gives
concrete recommendations, names how the metric it covers gets gamed, and ends
with a maturity model, discussion questions, and references. You do not need
to read the book cover to cover to use it.
