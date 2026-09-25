<script>
  import { page } from '$app/state';
  import { getManifest } from '$lib/manifests.js';
  import { localePrefix } from '$lib/locales.js';

  let prefix = $derived(localePrefix(page.params.locale));
  let manifest = $derived(getManifest(page.params.locale));
</script>

<svelte:head>
  <title>Front matter — Software Engineering Metrics</title>
</svelte:head>

<div class="prose">
  <h1>Front matter</h1>
  <p>Start here: what the book is, who it is for, and the full contents.</p>
</div>

<ul class="card-grid">
  {#each manifest.frontMatter as entry (entry.slug)}
    <a class="card" href="{prefix}/front-matter/{entry.slug}/">
      <h2 class="card-heading">{entry.title}</h2>
    </a>
  {/each}
</ul>
