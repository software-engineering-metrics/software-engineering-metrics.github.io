import { error } from '@sveltejs/kit';
import manifest from '$lib/manifest.json';

export const prerender = true;

export function entries() {
  return manifest.chapters.map((c) => ({ slug: c.slug }));
}

export async function load({ params }) {
  const chapter = manifest.chapters.find((c) => c.slug === params.slug);
  if (!chapter) error(404, 'Chapter not found');

  const index = manifest.order.indexOf(chapter.decimal);
  const prevDecimal = index > 0 ? manifest.order[index - 1] : null;
  const nextDecimal = index >= 0 && index < manifest.order.length - 1 ? manifest.order[index + 1] : null;

  // A universal load function may return non-serializable values (like a
  // Svelte component constructor) because it re-runs in the browser on
  // client-side navigation rather than being passed across the network.
  const mod = await import(`../../../content/chapters/${params.slug}.md`);

  return {
    chapter,
    prev: prevDecimal ? manifest.chaptersByDecimal[prevDecimal] : null,
    next: nextDecimal ? manifest.chaptersByDecimal[nextDecimal] : null,
    content: mod.default
  };
}
