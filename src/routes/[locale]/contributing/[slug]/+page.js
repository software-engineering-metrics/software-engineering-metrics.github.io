import { error } from '@sveltejs/kit';
import { getManifest } from '$lib/manifests.js';
import { DEFAULT_LOCALE, LOCALE_CODES } from '$lib/locales.js';

export const prerender = true;

export function entries() {
  return LOCALE_CODES.filter((l) => l !== DEFAULT_LOCALE).flatMap((locale) =>
    getManifest(DEFAULT_LOCALE).contributing.map((c) => ({ locale, slug: c.slug }))
  );
}

export async function load({ params }) {
  const manifest = getManifest(params.locale);
  const entry = manifest.contributing.find((c) => c.slug === params.slug);
  if (!entry) error(404, 'Page not found');
  const mod = await import(`$content/${params.locale}/contributing/${params.slug}.md`);
  return { entry, content: mod.default };
}
