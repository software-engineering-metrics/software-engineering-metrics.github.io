<script>
  import Breadcrumb from '$lib/Breadcrumb.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.entry.title} — Software Engineering Metrics</title>
</svelte:head>

<Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Examples', href: '/examples/' }, { label: data.entry.title }]} />

<data.content />
