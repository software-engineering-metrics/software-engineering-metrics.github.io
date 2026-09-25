<script>
  import { page } from '$app/state';
  import Breadcrumb from '$lib/Breadcrumb.svelte';
  import ChapterPager from '$lib/ChapterPager.svelte';
  import { getManifest } from '$lib/manifests.js';
  import { localePrefix } from '$lib/locales.js';

  let { data } = $props();
  let prefix = $derived(localePrefix(page.params.locale));
  let manifest = $derived(getManifest(page.params.locale));
  let part = $derived(manifest.parts.find((p) => p.number === data.chapter.part));
  let partIntro = $derived(part?.chapters.find((c) => c.chapter === 0));
</script>

<svelte:head>
  <title>{data.chapter.heading} — Software Engineering Metrics</title>
  <meta name="description" content="Part {data.chapter.part}: {part?.title ?? ''} — {data.chapter.title}" />
</svelte:head>

<Breadcrumb
  items={[
    { label: 'Home', href: `${prefix}/` },
    { label: `Part ${data.chapter.part}: ${part?.title ?? ''}`, href: partIntro ? `${prefix}/chapters/${partIntro.slug}/` : undefined },
    { label: data.chapter.decimal }
  ]}
/>

<span class="chapter-decimal">{data.chapter.decimal}</span>

<data.content />

<ChapterPager prev={data.prev} next={data.next} />
