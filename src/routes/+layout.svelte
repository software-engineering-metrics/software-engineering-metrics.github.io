<script>
  import { page } from '$app/state';
  import Sidebar from '$lib/Sidebar.svelte';
  import LocalePicker from '$lib/LocalePicker.svelte';
  import { localePrefix } from '$lib/locales.js';

  let { children } = $props();

  let prefix = $derived(localePrefix(page.params.locale));

  let navLinks = $derived([
    { href: `${prefix}/`, label: 'Home' },
    { href: `${prefix}/front-matter/what-are-software-engineering-metrics/`, label: 'Start here' },
    { href: `${prefix}/table-of-contents/`, label: 'Table of contents' },
    { href: `${prefix}/examples/`, label: 'Examples' },
    { href: `${prefix}/contributing/`, label: 'Contributing' },
    { href: `${prefix}/project/`, label: 'Project' }
  ]);

  let pathname = $derived(page.url.pathname);
  let pathAfterLocale = $derived(prefix && pathname.startsWith(prefix) ? pathname.slice(prefix.length) || '/' : pathname);
  let showSidebar = $derived(pathAfterLocale.startsWith('/chapters/') || pathAfterLocale.startsWith('/front-matter/'));
  let currentSlug = $derived(showSidebar ? (pathAfterLocale.split('/').filter(Boolean).pop() ?? null) : null);

  /** @param {string} href */
  function isCurrent(href) {
    if (href === `${prefix}/`) return pathname === href;
    return pathname === href;
  }
</script>

<a class="skip-link" href="#main">Skip to main content</a>

<header class="site-header">
  <div class="site-header-inner">
    <a class="site-brand" href="{prefix}/" aria-label="Software Engineering Metrics home">
      <img class="site-brand-mark" src="/assets/favicon.svg" alt="" aria-hidden="true" />
      <span>Software Engineering Metrics</span>
    </a>
    <nav class="site-nav" aria-label="Main">
      {#each navLinks as link (link.href)}
        <a href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined}>{link.label}</a>
      {/each}
      <a href="https://github.com/software-engineering-metrics/software-engineering-metrics">GitHub</a>
    </nav>
    <LocalePicker />
  </div>
</header>

<main id="main" class="site-main" class:has-sidebar={showSidebar}>
  {#if showSidebar}
    <Sidebar {currentSlug} />
  {/if}
  <div class="site-content">
    {@render children()}
  </div>
</main>

<footer class="site-footer">
  <div class="site-footer-inner">
    <p>
      A book about measuring software engineering well, published under the
      <a href="https://github.com/software-engineering-metrics">software-engineering-metrics</a> organization.
    </p>
    <div class="site-footer-links">
      <a href="https://github.com/software-engineering-metrics/software-engineering-metrics">Content source</a>
      <a href="https://github.com/software-engineering-metrics/software-engineering-metrics.github.io">Site source</a>
      <a href="{prefix}/table-of-contents/">Table of contents</a>
      <a href="{prefix}/contributing/">Contributing</a>
    </div>
  </div>
</footer>
