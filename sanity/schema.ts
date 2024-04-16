import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import service from "./schemaTypes/service";
import serviceCategory from "./schemaTypes/service-category";
import contactUs from "./schemaTypes/contact-us";
import enquiry from "./schemaTypes/enquiry";

//post, author, category,
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, service, serviceCategory, contactUs, enquiry],
};
