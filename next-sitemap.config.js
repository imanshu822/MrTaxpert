/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.mrtaxpert.com/",
  generateRobotsTxt: true, // (optional)
  exclude: ["/api/*"],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL}/api/server-sitemap.xml`, // <==== Add here
    ],
  },
  // ...other options
};
