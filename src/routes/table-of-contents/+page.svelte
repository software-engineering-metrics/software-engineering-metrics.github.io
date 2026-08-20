<script>
  import manifest from '$lib/manifest.json';

  let query = $state('');

  /** @param {import('$lib/manifest.json').default['chapters'][number]} chapter @param {string} q */
  function matches(chapter, q) {
    if (!q) return true;
    return chapter.title.toLowerCase().includes(q) || chapter.decimal.includes(q);
  }
</script>

<svelte:head>
  <title>Table of contents — Software Engineering Metrics</title>
  <meta
    name="description"
    content="The full table of contents: {manifest.totals.parts} parts, {manifest.totals.chapters} chapters."
  />
</svelte:head>

<div class="prose">
  <h1>Table of contents</h1>
  <p>
    Parts are whole numbers; chapters are decimals (chapter <strong>N.0</strong> introduces each
    part). See also <a href="/front-matter/introduction/">the introduction</a>.
  </p>
</div>

<input
  class="toc-search"
  type="search"
  placeholder="Search chapters by title or number…"
  aria-label="Search chapters"
  bind:value={query}
/>

{#each manifest.parts as part (part.number)}
  {@const q = query.trim().toLowerCase()}
  {@const visible = part.chapters.filter((c) => matches(c, q))}
  <section class="toc-part" hidden={visible.length === 0}>
    <h2 class="toc-part-heading"><span class="part-number">Part {part.number}</span> {part.title}</h2>
    <ul class="toc-chapter-list">
      {#each visible as chapter (chapter.slug)}
        <li>
          <a href="/chapters/{chapter.slug}/"><span class="decimal">{chapter.decimal}</span>{chapter.title}</a>
        </li>
      {/each}
    </ul>
  </section>
{/each}
