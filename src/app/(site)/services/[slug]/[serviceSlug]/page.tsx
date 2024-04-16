import { getService } from "@/lib/sanity-fns";
import React from "react";
import ServiceHero from "./_components/service-hero";
import RenderPortableText from "@/components/portable-text/RenderPortableText";
import CTA from "./_components/cta";
interface Props {
  params: {
    serviceSlug: string;
  };
}

export async function generateMetadata({ params: { serviceSlug } }: Props) {
  const service = await getService(serviceSlug);
  if (!service) return null;

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${service.categories[0].slug}/${service?.slug}`,
    },
    openGraph: {
      type: "article",
      description: service.seoDescription,
      title: service.seoTitle,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${service.categories[0].slug}/${service?.slug}`,
      siteName: `Mr Taxpert`,
      locale: "en_US",
      section: "Income Tax filling",
    },
  };
}
const page = async ({ params: { serviceSlug } }: Props) => {
  const service = await getService(serviceSlug);
  if (!service) return null;

  return (
    <main className="!relative  flex flex-col gap-10">
      <ServiceHero service={service} />
      <section className=" w-full  wrapper  grid lg:grid-cols-[auto_25rem] gap-10">
        <div>
          <RenderPortableText body={service.body} />
        </div>
        <CTA className=" lg:block !sticky hidden top-[5rem] h-fit" />
      </section>
    </main>
  );
};

export default page;
