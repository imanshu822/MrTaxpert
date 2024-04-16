import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";

export const getService = async (slug: string) => {
  const query = groq`*[_type == 'service' && slug.current == $slug][0]{
    ...,
    categories[]->
  }`;
  return (await client.fetch(query, {
    slug,
  })) as Service & {
    categories: ServiceCategory[];
  };
};

export const getServiceCategories = async () => {
  const query = groq`*[_type == 'serviceCategory'] | order(slug.current asc){
    ...,
  "services": *[_type=='service' && references(^._id)]{ title,icon,slug,description }
  }`;
  return ((await client.fetch(query)) as ServiceCategory[]) || [];
};
