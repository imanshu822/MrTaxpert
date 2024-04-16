import RenderPortableText from "@/components/portable-text/RenderPortableText";
import { getService } from "@/lib/sanity-fns";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const page = async ({ params: { slug } }: Props) => {
  const category = await getService(slug);
  console.log(category);

  if (!category) return null;

  return (
    <main className="wrapper">
      <section className=" w-full  max-w-4xl ">
        {/* <RenderPortableText body={service.body} /> */}
      </section>
    </main>
  );
};

export default page;
