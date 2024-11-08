// next-sitemap.js
module.exports = {
  siteUrl: 'https://nextroutes.vercel.app/', // Замените на ваш сайт
  generateRobotsTxt: true,  // Опционально, чтобы генерировать robots.txt
  sitemapSize: 7000,        // Максимальное количество URL в одном файле
  changefreq: 'daily',      // Частота обновлений страниц
  priority: 0.7,            // Приоритет страниц (0.0 до 1.0)
};
