import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { WEBSITE_META } from "@/data/constant";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: WEBSITE_META.title,
  description: WEBSITE_META.description,
  openGraph: {
    type: "website",
    description: WEBSITE_META.description,
    title: WEBSITE_META.title,
    siteName: WEBSITE_META.siteName,
    locale: "en_US",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/banner.png`,
        width: 1200,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="./opengraph-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="./opengraph-image.png" />
      </head>
      <body className={cn("", jakarta.className)}>{children}</body>
    </html>
  );
}
