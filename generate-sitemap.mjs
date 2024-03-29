import { writeFileSync } from 'fs';
import { globby } from 'globby';

const urlBase = 'https://outerwildsmods.com';

(async () => {
  const pages = await globby(['out/**/*.html', '!out/404']);

  const pageUrls = pages
    .map((page) => {
      const path = `${urlBase}/${page.replace(/(index|.html|out\/)/gm, '')}`;
      return `\n  <url><loc>${path}</loc></url>`;
    })
    .join('');

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pageUrls}\n</urlset>`;

  writeFileSync('public/sitemap.xml', sitemap);
  writeFileSync('out/sitemap.xml', sitemap);
})();
