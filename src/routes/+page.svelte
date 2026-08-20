<script>
  import manifest from '$lib/manifest.json';
</script>

<svelte:head>
  <title>Software Engineering Metrics</title>
  <meta
    name="description"
    content="A book about measuring software engineering well: {manifest.totals.parts} parts, {manifest.totals.chapters} chapters spanning the Flow Framework, the SPACE framework, queueing theory, and DORA metrics, code quality, product and business outcomes, reliability and security, and the AI era."
  />
</svelte:head>

<section class="hero">
  <p class="hero-eyebrow">Free · open · specification-driven</p>
  <h1>Measure software engineering well.</h1>
  <p class="hero-tagline">
    A working book on choosing metrics that reflect real outcomes rather than activity: the Flow
    Framework, the SPACE framework, queueing theory, and DORA metrics, code and quality metrics,
    product and business outcomes, reliability and security, and how generative AI is reshaping
    what these numbers mean.
  </p>
  <div class="button-row">
    <a class="button button-primary" href="/front-matter/what-are-software-engineering-metrics/">Start reading</a>
    <a class="button button-secondary" href="/table-of-contents/">Table of contents</a>
    <a class="button button-secondary" href="/examples/">Worked examples</a>
  </div>
  <div class="stat-row">
    <div class="stat">
      <p class="stat-value">{manifest.totals.parts}</p>
      <p class="stat-label">Parts</p>
    </div>
    <div class="stat">
      <p class="stat-value">{manifest.totals.chapters}</p>
      <p class="stat-label">Chapters</p>
    </div>
    <div class="stat">
      <p class="stat-value">Free</p>
      <p class="stat-label">Always</p>
    </div>
  </div>
</section>

<section class="section prose" style="margin: 0 auto;">
  <header class="section-heading">
    <p class="section-heading-eyebrow">How to read it</p>
    <h2>One book, nine parts</h2>
  </header>
  <p>
    Parts are whole numbers; chapters are decimals. Chapter <strong>N.0</strong> introduces
    each part; <strong>N.1, N.2, …</strong> are its chapters. Part 9 collects the appendices —
    glossary, a formulas reference, checklists, templates, a maturity self-assessment,
    references, and a subject index.
  </p>
  <p>
    Every metric-family chapter states principles, recommendations, trade-offs, a sector lens,
    examples (enterprise and government), a business case, anti-patterns, a maturity model,
    discussion questions, and references — and names how the metric gets gamed and what guardrail
    catches that. Adopt incrementally; do not big-bang.
  </p>
</section>

<section class="section">
  <header class="section-heading">
    <p class="section-heading-eyebrow">Browse</p>
    <h2>The nine parts</h2>
  </header>
  <div class="card-grid">
    {#each manifest.parts as part (part.number)}
      {@const intro = part.chapters.find((c) => c.chapter === 0)}
      <a class="card" href="/chapters/{(intro ?? part.chapters[0]).slug}/">
        <h3 class="card-heading">Part {part.number}: {part.title}</h3>
        <p class="card-description">
          {part.chapters.length}
          {part.chapters.length === 1 ? 'chapter' : 'chapters'}, starting with {(intro ?? part.chapters[0]).decimal}.
        </p>
        <p class="card-meta">Read the introduction →</p>
      </a>
    {/each}
  </div>
</section>

<section class="section prose" style="margin: 0 auto;">
  <header class="section-heading">
    <p class="section-heading-eyebrow">Cross-cutting theme</p>
    <h2>Goodhart's law, everywhere</h2>
  </header>
  <p>
    A measure that becomes a target stops being a good measure. Every metric family in this book
    ships with its gaming vector and its guardrail attached, not as an afterthought but as a
    condition of using the metric at all. Outcomes are weighted over output and activity
    throughout, and the shift to generative AI is treated as a reason to re-examine what these
    metrics mean, not just a new column on the dashboard.
  </p>
  <p style="text-align: center; margin-top: 2rem;">
    <a class="button button-secondary" href="/table-of-contents/">See the full table of contents →</a>
  </p>
</section>

<section class="section prose" style="margin: 0 auto;" aria-label="About this site">
  <div class="callout">
    <p style="margin: 0;">
      This site is built with SvelteKit and the
      <a href="https://lilydesignsystem.com/">Lily Design System</a>. The book's content lives
      in the <a href="https://github.com/software-engineering-metrics/software-engineering-metrics"
        >software-engineering-metrics</a
      >
      content repository; see the <a href="/project/">project page</a> for how the two fit
      together, and <a href="/contributing/">contributing</a> for how to help.
    </p>
  </div>
</section>
