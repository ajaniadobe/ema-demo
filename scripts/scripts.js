import { loadArea, setConfig } from './ak.js';

const hostnames = [
  'authorkit.dev',
  // Boilerplate origins left over in content — treat as internal so links
  // resolve relative to this site instead of being fetched cross-origin.
  'main--author-kit--aemsites.aem.page',
  'main--author-kit--aemsites.aem.live',
];

const locales = {
  '': { lang: 'en' },
  '/de': { lang: 'de' },
  '/es': { lang: 'es' },
  '/fr': { lang: 'fr' },
  '/hi': { lang: 'hi' },
  '/ja': { lang: 'ja' },
  '/zh': { lang: 'zh' },
};

const linkBlocks = [
  { fragment: '/fragments/' },
  { schedule: '/schedules/' },
  { youtube: 'https://www.youtube' },
];

// Blocks with self-managed styles
const components = ['fragment', 'schedule'];

// Tag "Note:" / "Tip:" lead-in paragraphs so they can be styled as callouts
const decorateCallouts = (area) => {
  const leads = { note: 'note', tip: 'tip' };
  area.querySelectorAll('p > em:first-child, p > strong:first-child').forEach((marker) => {
    const key = marker.textContent.trim().replace(/:$/, '').toLowerCase();
    const variant = leads[key];
    if (!variant) return;
    marker.closest('p').classList.add('callout', `callout-${variant}`);
    marker.classList.add('callout-label');
  });
};

// How to decorate an area before loading it
const decorateArea = ({ area = document }) => {
  const eagerLoad = (parent, selector) => {
    const img = parent.querySelector(selector);
    if (!img) return;
    img.removeAttribute('loading');
    img.fetchPriority = 'high';
  };

  eagerLoad(area, 'img');
  decorateCallouts(area);
};

export async function loadPage() {
  setConfig({ hostnames, locales, linkBlocks, components, decorateArea });
  await loadArea();
}
await loadPage();

(function da() {
  const { searchParams } = new URL(window.location.href);
  const hasPreview = searchParams.has('dapreview');
  if (hasPreview) import('../tools/da/da.js').then((mod) => mod.default(loadPage));
  const hasQE = searchParams.has('quick-edit');
  if (hasQE) import('../tools/quick-edit/quick-edit.js').then((mod) => mod.default());
}());
