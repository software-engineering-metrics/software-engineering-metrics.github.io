<script>
  import Breadcrumb from '$lib/Breadcrumb.svelte';
  import ChapterPager from '$lib/ChapterPager.svelte';
  import manifest from '$lib/manifest.json';

  let { data } = $props();
  let part = $derived(manifest.parts.find((p) => p.number === data.chapter.part));
  let partIntro = $derived(part?.chapters.find((c) => c.chapter === 0));
</script>

<svelte:head>
  <title>{data.chapter.heading} — Software Engineering Metrics</title>
  <meta name="description" content="Part {data.chapter.part}: {part?.title ?? ''} — {data.chapter.title}" />
</svelte:head>

<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: `Part ${data.chapter.part}: ${part?.title ?? ''}`, href: partIntro ? `/chapters/${partIntro.slug}/` : undefined },
    { label: data.chapter.decimal }
  ]}
/>

<span class="chapter-decimal">{data.chapter.decimal}</span>

<data.content />

<ChapterPager prev={data.prev} next={data.next} />
