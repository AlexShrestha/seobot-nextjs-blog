const BASE_URL = 'https://nevermisshealth.com';

async function getSitemap() {
  const key = '04ad1a7e-507a-463a-8466-6ade6ce0adc8'; // Using the provided API key directly

  try {
    const res = await fetch(`https://app.seobotai.com/api/sitemap?key=${key}`, { cache: 'no-store' });
    const result = await res.json();
    return result?.data;
  } catch {
    return { articles: [], categories: [], tags: [] };
  }
}

function toSitemapRecord(loc: string, updatedAt: string) {
  return `<url><loc>${new URL(loc, BASE_URL).toString()}</loc><lastmod>${updatedAt}</lastmod></url>`;
}

type SitemapItem = { slug: string; lastmod: string };

async function generateSiteMap() {
  const blogSitemap = await getSitemap();
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://nevermisshealth.com/blog</loc>
    </url>
     ${blogSitemap.articles.map((i: SitemapItem) => toSitemapRecord(`/blog/${i.slug}`, i.lastmod))}
     ${blogSitemap.categories.map((i: SitemapItem) => toSitemapRecord(`/blog/category/${i.slug}`, i.lastmod))}
     ${blogSitemap.tags.map((i: SitemapItem) => toSitemapRecord(`/blog/tag/${i.slug}`, i.lastmod))}
   </urlset>
 `;
}

export async function GET() {
  const body = await generateSiteMap();

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}
