import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: "seo",
    }),

    defineField({
      name: "icon",
      title: "Icon",
      type: "image",

      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "serviceCategory" } }],
      validation: (Rule) =>
        Rule.required().min(1).error("Atleast one is required"),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "Seo Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      title: "Seo Description",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "seo",
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
