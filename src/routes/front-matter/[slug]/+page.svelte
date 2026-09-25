<script>
  import { page } from '$app/state';
  import Breadcrumb from '$lib/Breadcrumb.svelte';
  import { localePrefix } from '$lib/locales.js';

  let { data } = $props();
  let prefix = $derived(localePrefix(page.params.locale));
</script>

<svelte:head>
  <title>{data.entry.title} — Software Engineering Metrics</title>
</svelte:head>

<Breadcrumb items={[{ label: 'Home', href: `${prefix}/` }, { label: data.entry.title }]} />

<data.content />
