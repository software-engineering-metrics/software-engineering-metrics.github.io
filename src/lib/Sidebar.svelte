<script>
  import manifest from '$lib/manifest.json';

  let { currentSlug = null } = $props();

  let query = $state('');

  /** @param {import('$lib/manifest.json').default['chapters'][number]} chapter @param {string} q */
  function matches(chapter, q) {
    if (!q) return true;
    return chapter.title.toLowerCase().includes(q) || chapter.decimal.includes(q);
  }
</script>

<nav class="sidebar" aria-label="Chapters">
  <input
    class="sidebar-search"
    type="search"
    placeholder="Filter chapters…"
    aria-label="Filter chapters"
    bind:value={query}
  />
  {#each manifest.parts as part (part.number)}
    {@const q = query.trim().toLowerCase()}
    {@const hasCurrent = part.chapters.some((c) => c.slug === currentSlug)}
    {@const visible = part.chapters.filter((c) => matches(c, q))}
    {#if visible.length}
      <details class="sidebar-part" open={hasCurrent || q !== ''} data-current={hasCurrent}>
        <summary><span class="part-number">{part.number}</span> {part.title}</summary>
        <ul class="sidebar-chapter-list">
          {#each visible as chapter (chapter.slug)}
            <li>
              <a
                href="/chapters/{chapter.slug}/"
                aria-current={chapter.slug === currentSlug ? 'page' : undefined}
              >
                <span class="decimal">{chapter.decimal}</span>{chapter.title}
              </a>
            </li>
          {/each}
        </ul>
      </details>
    {/if}
  {/each}
</nav>
