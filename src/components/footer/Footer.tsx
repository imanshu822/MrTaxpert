// import React from "react";
// import { Heading } from "../ui/heading";
// import Link from "next/link";
import {
  MessageSquareIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
// import { Text } from "../ui/text";
// import { WEBSITE_META } from "@/data/constant";

// const FOOTER_LINKS = [
//   {
//     label: "Home",
//     href: "/",
//   },
//   {
//     label: "Contact us",
//     href: "/contact-us",
//   },
// ];
const SOCIAL_LINKS = [
  {
    label: "Home",
    href: "/",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mrtaxp3rt",
    icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/7737299199/?text=Hello,%20I'd%20like%20some%20information",
    icon: MessageSquareIcon,
  },
  {
    label: "Linkedin",
    href: "/contact-us",
    icon: LinkedinIcon,
  },
  {
    label: "Youtube",
    href: "/contact-us",
    icon: YoutubeIcon,
  },
];
// const Footer = () => {
//   return (
//     <footer className="py-12 bg-secondary flex flex-col gap-10">
//       <div className="flex w-full flex-col items-center justify-center gap-6">
//         <Heading size={"md"}>{WEBSITE_META.siteName}</Heading>
//         <Text size={"xs"} className="max-w-sm mx-auto text-center line-clamp-3">
//           {WEBSITE_META.description}
//         </Text>
// <ul className="flex gap-4 items-center">
//   {SOCIAL_LINKS.map((link) => {
//     return (
//       <li className="text-foreground/50" key={link.label}>
//         <Link href={link.href} passHref>
//           <link.icon className="w-5 h-5" />
//         </Link>
//       </li>
//     );
//   })}
// </ul>
//       </div>
//       <div className="wrapper flex gap-4 flex-wrap justify-center">
//         <ul className="flex  gap-4 text-xs">
//           {FOOTER_LINKS.map((link) => {
//             return (
//               <li key={link.href}>
//                 <Link href={link.href}>{link.label}</Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//       <Text className="items-center justify-center flex " size={"xs"}>
//         ©2024 MrTaxpert. All Rights Reserved.
//       </Text>
//     </footer>
//   );
// };

// export default Footer;

import Link from "next/link";

const FooterData = [
  {
    id: 1,
    title: "Income Tax",
    subTitles: [
      ["Income Tax Return", "/services/1income-tax/income-tax-return"],
      [
        "Tax Consultancy Service",
        "/services/1income-tax/tax-consultancy-service",
      ],
      ["Advance Tax", "/services/1income-tax/advance-tax"],
    ],
  },
  {
    id: 2,
    title: "GST",
    subTitles: [
      ["GST Registration", "/services/2gst/gst-registration"],
      ["GST Annual Return", "/services/2gst/gst-annual-return"],
      ["GST Cancellation", "/services/2gst/gst-cancellation"],
      ["GST Compilance", "/services/2gst/gst-compliance"],
      ["GST Returns", "/services/2gst/gst-return"],
    ],
  },
  {
    id: 3,
    title: "For Individuals",
    subTitles: [
      [
        "E-Invoicing and E-Way Bill",
        "services/3for-individuals/e-invoicing-and-e-way-bill",
      ],
      ["Accounts Payable", "/services/3for-individuals/accounts-payable"],
      ["Finance", "/services/3for-individuals/finance"],
      [
        "TDS - Tax Deducted at Source",
        "/services/3for-individuals/tds-tax-deducted-at-source",
      ],
      ["MaxITC", "/services/3for-individuals/maxitc"],
    ],
  },
  {
    id: 4,
    title: "Business Registration",
    subTitles: [
      [
        "Public Limited Company Registration",
        "/services/4business-registration/public-limited-company-registration",
      ],
      [
        "Indian Subsidiary Registration",
        "/services/4business-registration/indian-subsidiary-registration",
      ],
      [
        "Partnership Firm Registration",
        "/services/4business-registration/partnership-firm-registration",
      ],
      // [
      //   "One Person Company Registration Online in India",
      //   "/services/4business-registration/one-person-company-registration-online-in-india",
      // ],
    ],
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col-reverse gap-3 items-center justify-evenly w-full p-20 bg-[#5952E0] text-white lg:flex-row lg:items-start lg:gap-20">
        <div className="flex flex-col items-center justify-center w-100 lg:w-1/4 lg:items-start">
          <h1 className="text-4xl font-bold text-center">MrTaxpert</h1>
          <p className="text-sm text-center lg:text-left mt-4">
            Have questions or need assistance? We&apos;re here to help. Reach
            out to us through the following channels:
          </p>
          <br />
          <p className="text-sm text-center lg:text-left"></p>
          <Link
            href="mailto: askbricksviewer@gmail.com"
            className="font-bold mt-5 text-5sm hover:text-skyBlue"
          >
            mrtaxpert@gmail.com
          </Link>
          <Link
            href="tel: +91 9779660624"
            className="font-bold text-sm hover:text-skyBlue"
          >
            +91 7737299199
          </Link>
        </div>
        {FooterData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center justify-center w-100 lg:w-1/4 lg:items-start"
          >
            <h1 className="text-2xl font-bold text-left">{data.title}</h1>
            <ul className="flex flex-col gap-2 mt-3 text-sm text-center lg:text-left">
              {data.subTitles.map((subTitle) => (
                <li key={subTitle[0]}>
                  <Link
                    className="mt-5 hover:opacity-50 "
                    href={subTitle[1]}
                    style={{ transform: "scale(1.2)" }}
                  >
                    {subTitle[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <hr className="w-full lg:hidden" />
      </div>
      <div className="flex flex-col items-center justify-center w-full  p-5 border-t bg-[#5952E0] text-white">
        <div>
          <ul className="flex gap-4 items-center">
            {SOCIAL_LINKS.map((link) => {
              return (
                <li className="text-foreground/50" key={link.label}>
                  <Link href={link.href} passHref>
                    <link.icon className="w-5 h-5 text-white" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-sm text-center mt-5">
          © 2024 MrTaxpert | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
