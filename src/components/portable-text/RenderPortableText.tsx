import { PortableText } from "@portabletext/react";
import React from "react";
import { RichTextComponents } from "./RichTextComponent";

const RenderPortableText = ({ body }: { body: any }) => {
  return <PortableText value={body} components={RichTextComponents} />;
};

export default RenderPortableText;
