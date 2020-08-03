const fs = require('fs');

const globby = require('globby');

const urlBase = 'https://outerwildsmods.com';

(async () => {
  const pages = await globby(['out/**/*.html', '!out/404']);

  const pageUrls = pages
    .map((page) => {
      const path = page.replace(/(\/index|.html|out)/gm, '');
      return `\n  <url><loc>${urlBase}${path}</loc></url>`;
    })
    .join('');

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pageUrls}\n</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  fs.writeFileSync('out/sitemap.xml', sitemap);
})();
