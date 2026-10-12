<script>
  import { page } from '$app/state';
  import { getManifest } from '#lib/manifests.js';
  import { localePrefix, LOCALE_CODES } from '#lib/locales.js';
  import { ui } from '#lib/i18n.js';
  import { HERO, ENDONYMS } from '#lib/hero.js';

  let prefix = $derived(localePrefix(page.params.locale));
  let manifest = $derived(getManifest(page.params.locale));
  let t = $derived(ui(page.params.locale));
  let hero = $derived(HERO[/** @type {string} */ (page.params.locale)] ?? HERO['en-001']);
  const translations = LOCALE_CODES.filter((code) => code.endsWith('-001') && code in ENDONYMS);
  // Some locales (genuinely translated, not just a spelling variant) ship
  // only chapters/, with no front-matter/ section yet; fall back to the
  // first chapter so "Start reading" never links to a 404.
  let startReadingHref = $derived(
    manifest.frontMatter.some((f) => f.slug === 'what-are-software-engineering-metrics')
      ? `${prefix}/front-matter/what-are-software-engineering-metrics/`
      : `${prefix}/chapters/${manifest.chapters[0]?.slug}/`
  );
</script>

<svelte:head>
  <title>{hero.headline}</title>
  <meta name="description" content={hero.intro} />
</svelte:head>

<section class="hero">
  <p class="hero-eyebrow">{hero.tagline}</p>
  <h1>{hero.headline}</h1>
  <p class="hero-tagline">{hero.intro}</p>
  <div class="button-row">
    <a class="button button-primary" href={startReadingHref}>{hero.start}</a>
    <a class="button button-secondary" href="{prefix}/contents/">{hero.contents}</a>
    <a class="button button-secondary" href="{prefix}/examples/">{hero.examples}</a>
  </div>
  <p class="hero-translations">
    {hero.translations}{#each translations as code, i (code)}{i ? ', ' : ''}<a
        href="/{code}/"
        aria-current={code === page.params.locale ? 'page' : undefined}>{ENDONYMS[code]}</a
      >{/each}
  </p>
</section>

<section class="section prose" style="margin: 0 auto;" aria-labelledby="home-contents">
  <h2 id="home-contents">{t.nav.contents}</h2>
  <ul class="home-contents">
    {#each manifest.parts as part (part.number)}
      <li>
        {part.number} {part.title}
        <ul>
          {#each part.chapters as chapter (chapter.slug)}
            <li>
              <a href="{prefix}/chapters/{chapter.slug}/">{chapter.decimal} {chapter.title}</a>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</section>

<section class="section prose" style="margin: 0 auto;" aria-label="About this site">
  <div class="callout">
    <p style="margin: 0;">
      This site is built with SvelteKit and the
      <a href="https://lilydesignsystem.com/">Lily Design System</a>. The book's content lives
      in the <a href="https://github.com/software-engineering-metrics/software-engineering-metrics"
        >software-engineering-metrics</a
      >
      content repository; see the <a href="{prefix}/project/">project page</a> for how the two fit
      together, and <a href="{prefix}/contributing/">contributing</a> for how to help.
    </p>
  </div>
</section>
