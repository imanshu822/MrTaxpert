import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
// import CodeBlock from "@/app/(site)/projects/[slug]/_components/CodeBlock";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="w-full h-fit mx-auto relative mt-6">
        <Image
          className="object-contain"
          src={urlForImage(value)}
          loading="lazy"
          height={800}
          width={800}
          alt="blog image"
        />
      </div>
    ),
    // code: ({ value }: any) => {
    //   return <CodeBlock code={value.code} />;
    // },
  },

  list: {
    bullet: ({ children }: any) => {
      return (
        <ul className="text-foreground  list-disc pl-6 mt-6 ">{children}</ul>
      );
    },
    number: ({ children }: any) => {
      return (
        <ol className="text-foreground  list-decimal pl-6 mt-6  ">
          {children}
        </ol>
      );
    },
    checkmarks: ({ children }: any) => {
      return <ol className="m-auto text-lg">{children}</ol>;
    },
  },
  marks: {
    em: ({ children }: any) => (
      <em className="text-foreground italic  font-medium mr-2">{children}</em>
    ),
    link: ({ value, children }: any) => {
      return (
        <Link
          href={value.href ?? ""}
          target="_blank"
          rel="noreferrer nooperner"
          className="hover:underline origin-right duration-800 text-accent font-medium"
        >
          {children}
        </Link>
      );
    },
  },
  block: {
    h1: ({ children }: any) => {
      return (
        <h1 className="text-foreground text-3xl font-medium leading-none pt-6">
          {children}
        </h1>
      );
    },
    h2: ({ children }: any) => {
      return (
        <h2 className="text-2xl text-foreground font-medium pt-6">
          {children}
        </h2>
      );
    },
    h3: ({ children }: any) => {
      return (
        <h3 className="text-xl text-foreground font-medium pt-6 ">
          {children}
        </h3>
      );
    },
    h4: ({ children }: any) => {
      return (
        <h4 className="text-lg text-foreground font-medium pt-6 ">
          {children}
        </h4>
      );
    },
    blockquote: ({ children }: any) => {
      return (
        <div className="text-xl text-primary pl-4 border-l-2 border-border leading-7 font-medium mt-6">
          {children}
        </div>
      );
    },
    normal: ({ children }: any) => {
      return (
        <p className="text-foreground/90 pt-2  text-base leading-normal font-normal">
          {children}
        </p>
      );
    },
  },
};
