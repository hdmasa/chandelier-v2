/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.setareyakhi.ir",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/404", "/500"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.setareyakhi.ir/sitemap-0.xml",
    ],
  },
};
