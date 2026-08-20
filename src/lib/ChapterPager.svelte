<script>
  /** @type {{ prev: null | { slug: string, decimal: string, title: string }, next: null | { slug: string, decimal: string, title: string } }} */
  let { prev = null, next = null } = $props();
</script>

{#if prev || next}
  <nav class="chapter-pager" aria-label="Chapter navigation">
    {#if prev}
      <a class="chapter-pager-link prev" href="/chapters/{prev.slug}/">
        <span class="chapter-pager-label">← {prev.decimal}</span>
        <span class="chapter-pager-title">{prev.title}</span>
      </a>
    {:else}
      <span></span>
    {/if}
    {#if next}
      <a class="chapter-pager-link next" href="/chapters/{next.slug}/">
        <span class="chapter-pager-label">{next.decimal} →</span>
        <span class="chapter-pager-title">{next.title}</span>
      </a>
    {:else}
      <span></span>
    {/if}
  </nav>
{/if}
