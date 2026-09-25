<script>
  import { page } from '$app/state';
  import { getManifest } from '$lib/manifests.js';
  import { localePrefix } from '$lib/locales.js';

  let { data } = $props();
  let prefix = $derived(localePrefix(page.params.locale));
  let manifest = $derived(getManifest(page.params.locale));
</script>

<svelte:head>
  <title>Examples — Software Engineering Metrics</title>
</svelte:head>

<data.content />

<ul class="card-grid">
  {#each manifest.examples as entry (entry.slug)}
    <a class="card" href="{prefix}/examples/{entry.slug}/">
      <h2 class="card-heading">{entry.title}</h2>
    </a>
  {/each}
</ul>
