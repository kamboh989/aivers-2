import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { join } from "path";

// Example list of routes you want in the sitemap
const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/blogs", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
];

const sitemapGenerator = async () => {
  const sitemap = new SitemapStream({ hostname: "https://aiverse.pk" });
  const writeStream = createWriteStream(join(__dirname, "../public/sitemap.xml"));

  sitemap.pipe(writeStream);

  // Add all the URLs to the sitemap
  urls.forEach((url) => sitemap.write(url));

  sitemap.end();

  // This will create the sitemap.xml file in the public folder
  await streamToPromise(sitemap);
  console.log("Sitemap generated at: /public/sitemap.xml");
};

sitemapGenerator().catch(console.error);