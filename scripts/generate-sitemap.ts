import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const BASE_URL = 'https://austinbabyrentals.com';

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/gear', priority: '0.9', changefreq: 'weekly' },
  { path: '/how-it-works', priority: '0.8', changefreq: 'monthly' },
  { path: '/reviews', priority: '0.8', changefreq: 'weekly' },
  { path: '/austin-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
];

const neighborhoodSlugs = [
  'westlake-hills-baby-gear-rental',
  'tarrytown-baby-gear-rental',
  'downtown-austin-baby-gear-rental',
  'south-congress-baby-gear-rental',
  'zilker-baby-gear-rental',
  'barton-creek-baby-gear-rental',
  'east-austin-baby-gear-rental',
  'bee-cave-baby-gear-rental',
  'rollingwood-baby-gear-rental',
  'circle-c-baby-gear-rental',
  'buda-baby-gear-rental',
  'south-austin-baby-gear-rental',
];

const blogSlugs = [
  'sxsw-with-a-baby-austin-guide',
  'best-airbnbs-austin-families-babies',
  'what-to-pack-vs-rent-austin-trip',
  'acl-festival-with-kids-parent-guide',
  'austin-summer-baby-beat-the-heat',
];

const today = new Date().toISOString().split('T')[0];

function buildUrl(path: string, priority: string, changefreq: string) {
  return `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls = [
  ...staticRoutes.map((r) => buildUrl(r.path, r.priority, r.changefreq)),
  ...neighborhoodSlugs.map((slug) => buildUrl(`/${slug}`, '0.7', 'monthly')),
  ...blogSlugs.map((slug) => buildUrl(`/blog/${slug}`, '0.6', 'monthly')),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

const outPath = resolve(import.meta.dirname, '..', 'dist', 'sitemap.xml');
writeFileSync(outPath, sitemap, 'utf-8');
console.log(`Sitemap written to ${outPath} (${urls.length} URLs)`);
