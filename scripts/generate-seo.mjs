import { mkdir, readFile, writeFile } from "node:fs/promises";

const siteUrl = (process.env.SITE_URL || "https://target-printer.com").replace(/\/$/, "");
const products = JSON.parse(await readFile(new URL("../src/data/products.json", import.meta.url)));
const productKey = (name) =>
  name
    .toLowerCase()
    .replace(/office printer/g, "")
    .replace(/[^a-z0-9]/g, "");

const groups = new Map();
for (const product of products) {
  const key = productKey(product.name);
  groups.set(key, [...(groups.get(key) || []), product]);
}

const productPaths = [...groups.values()].map((group) => {
  const canonical = [...group].sort((a, b) => b.specs.length - a.specs.length)[0];
  return `/machines/${canonical.slug}`;
});

const pages = [
  { path: "/", priority: "1.0", frequency: "weekly" },
  { path: "/machines", priority: "0.9", frequency: "weekly" },
  { path: "/services", priority: "0.8", frequency: "monthly" },
  { path: "/parts", priority: "0.8", frequency: "monthly" },
  { path: "/about", priority: "0.6", frequency: "monthly" },
  { path: "/contact", priority: "0.7", frequency: "monthly" },
  ...productPaths.map((path) => ({ path, priority: "0.8", frequency: "monthly" })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path, priority, frequency }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>${frequency}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Disallow: /api/

Sitemap: ${siteUrl}/sitemap.xml
Host: ${new URL(siteUrl).host}
`;

await mkdir(new URL("../public", import.meta.url), { recursive: true });
await Promise.all([
  writeFile(new URL("../public/sitemap.xml", import.meta.url), xml),
  writeFile(new URL("../public/robots.txt", import.meta.url), robots),
]);

console.log(`Generated sitemap.xml with ${pages.length} URLs and robots.txt for ${siteUrl}`);
