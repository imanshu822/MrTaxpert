import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactUs",
  title: "Contact Us - Support",
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
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),

    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: { type: "service" } }],
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "email",
    },
  },
});
