type SanityBase = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};
interface Reference {
  _ref: string;
  _type: "reference";
}
interface SanityImage {
  [key: string]: unknown;
  _type: "image";
  asset: Reference;
  alt?: string;
}
interface Slug {
  _type: "slug";
  current: string;
}
interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  marksDefs: any[];
  styles: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}
interface Span {
  _key: string;
  _type: "span";
  mark: string[];
  text: string;
}

interface Service extends SanityBase {
  title: string;
  description: string;
  slug: Slug;
  icon: SanityImage;
  body: Block;
  colorHex?: string;
  seoTitle: string;
  seoDescription: string;
  publishedAt: Date;
}

interface ServiceCategory extends SanityBase {
  title: string;
  subTitle: string;
  description: string;
  services: Service[];
  slug: Slug;
}
