import { defineField, defineType } from "sanity";

export default defineType({
  name: "enquiry",
  title: "Service Enquiry",
  type: "document",
  fields: [
    defineField({
      name: "contacted",
      title: "Contacted",
      description:
        "If the contact is already contacted, this will be true. Otherwise, false.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "phone",
    },
  },
});
