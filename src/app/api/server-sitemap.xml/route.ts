//@ts-ignore
import { getService } from "@/lib/sanity-fns";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`*[_type == 'service']{
  ...,
  categories[]->
}`;
export async function GET(request: Request) {
  const services = (await client.fetch(query)) as (Service & {
    categories: ServiceCategory[];
  })[];
  const servicePages: ISitemapField[] = services.map((item, index) => {
    return {
      loc: `${process.env.SITE_URL}/services/${item.slug}/${item.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 1,
    } as ISitemapField;
  });

  // const otherPages = [
  //   {
  //     loc: `${process.env.SITE_URL}/services/{}/`,
  //     lastmod: new Date().toISOString(),
  //     changefreq: "hourly",
  //     priority: 1,
  //   },
  // ];

  return getServerSideSitemap([...servicePages]);
}
