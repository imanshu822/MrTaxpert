"use client";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Switch } from "@/components/ui/switch";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle, CheckCircle2, IndianRupeeIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const planPricing = [
  {
    name: "GST Compliance Plan",
    description:
      "Stay compliant with our comprehensive GST services. From registration to filing, we handle the complexities, ensuring seamless compliance for your business.",
    priceMonthly: 999,
    priceYearly: 9990,

    features: ["GST Registration", "Quarterly Filing", "Compliance Support"],
  },
  {
    name: "Invoicing Pro Plan",
    description:
      "Simplify your billing process with our Invoicing Pro Plan. Focus on your core business activities while we take care of the intricacies of invoicing, ensuring accuracy and efficiency.",
    priceMonthly: 1499,
    priceYearly: 14990,
    features: ["Customized Invoices", "Payment Tracking", "Invoice Templates"],
  },
  {
    name: "Tax Consultation Package",
    description:
      "Gain strategic insights into tax planning with our Tax Consultation Package. Our expert consultants tailor advice to your unique situation, empowering you to make informed financial decisions.",
    priceMonthly: 2499,
    priceYearly: 2499,
    features: [
      "Personalized Consultations",
      "Year-round Support",
      "Tax Planning Guide",
    ],
  },
  {
    name: "ITR Filing",
    description:
      "Achieve seamless tax compliance with our ITR Filing service. Let us simplify the complex process for you, so you can focus on what matters most",
    priceMonthly: 999,
    priceYearly: 999,
    features: ["Tax Planning Guide", "Maximize Refund", "Compliance Support"],
  },
  {
    name: "Business Registration",
    description:
      "Initiate your entrepreneurial journey hassle-free with our Business Registration service. Let us streamline the process for you, allowing you to focus on building your business.",
    priceMonthly: 1999,
    priceYearly: 1999,
    features: [
      "Consultation on Business Structure",
      "Registration Assistance",
      "Compliance Support",
    ],
  },
  {
    name: "Financing Services",
    description:
      "Secure the financial support you need with our Financing Services. Let us guide you through the complexities of financing, ensuring access to the resources you need to fuel your growth.",
    priceMonthly: 2499,
    priceYearly: 2499,
    features: [
      "Financial Needs Assessment",
      "Customized Financing Solutions",
      "Application Assistance",
    ],
  },
];
const PricingCard = ({
  pricing,
  timeSpan = "monthly",
}: {
  pricing: (typeof planPricing)[0];
  timeSpan?: "monthly" | "yearly";
}) => {
  return (
    <Card className="hover:shadow-2xl overflow-hidden  mx-4 h-fit hover:shadow-primary/25 hover:border-primary duration-300 ease-in-out">
      <CardHeader className="flex flex-col gap-3">
        <Heading size={"md"}>{pricing.name}</Heading>
        <Text size={"sm"}>{pricing.description}</Text>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 mt-4">
        <div className="flex gap-2 items-center">
          <Heading size={"lg"} className="flex-nowrap flex gap-2 items-center">
            <IndianRupeeIcon className="w-5 h-5" />
            {timeSpan === "monthly"
              ? pricing.priceMonthly
              : pricing.priceYearly}
          </Heading>
          <Text>/{timeSpan === "monthly" ? "month" : "year"}</Text>
        </div>
      </CardContent>
      <ul className="bg-secondary p-4 m-2 rounded-sm flex flex-col gap-3 ">
        {pricing.features.map((f, i) => {
          return (
            <li key={f}>
              <Text className="flex gap-2 items-center">
                <CheckCircle2 className="w-5 h-5 fill-green-200" />
                {f}
              </Text>
            </li>
          );
        })}
      </ul>
      <Link
        href={"/contact-us"}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "rounded-none border-none w-full"
        )}
      >
        Contact us
      </Link>
    </Card>
  );
};

const PricingCards = () => {
  const [timeSpan, setTimeSpan] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="flex flex-col gap-6">
      <div className="flex gap-4 bg-secondary w-fit px-4 py-2  mx-auto rounded-full items-center justify-center">
        <Text
          className={cn(
            "text-xs font-medium text-foreground uppercase",
            timeSpan === "monthly" && "text-primary"
          )}
        >
          Monthly
        </Text>
        <Switch
          checked={timeSpan === "yearly"}
          onCheckedChange={(c) => {
            c ? setTimeSpan("yearly") : setTimeSpan("monthly");
          }}
        />
        <Text
          className={cn(
            "text-xs font-medium text-foreground uppercase",
            timeSpan === "yearly" && "text-primary"
          )}
        >
          Yearly
        </Text>{" "}
        <Badge variant={"destructive"}>15% off</Badge>
      </div>

      <div className="wrapper grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
        {planPricing.map((pricing, index) => (
          <PricingCard timeSpan={timeSpan} key={index} pricing={pricing} />
        ))}
      </div>
      <Text size={"xs"} className="mx-auto max-w-md text-center">
        All plans include a 30-day money-back guarantee and access to Mr.
        Taxpert&apos;s expert support.
      </Text>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-[clamp(4rem,5vw,8rem)] relative flex flex-col gap-6">
      <svg
        width="305"
        height="540"
        viewBox="0 0 305 540"
        fill="none"
        className="absolute my-auto right-0 z-[-1]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, strokeWidth: 1 }}
          animate={{ pathLength: 1, strokeWidth: 5 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          d="M183 540V443.25C183 429.995 172.255 419.25 159 419.25H105C91.7452 419.25 81 408.505 81 395.25V310"
          stroke="url(#paint0_linear_1131_4827)"
          stroke-width="5"
        />
        <motion.path
          initial={{ pathLength: 0, strokeWidth: 1 }}
          animate={{ pathLength: 1, strokeWidth: 5 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          d="M285 5.96046e-06V138.75C285 152.005 274.255 162.75 261 162.75H27C13.7452 162.75 3 173.495 3 186.75V310"
          stroke="url(#paint1_linear_1131_4827)"
          stroke-width="5"
        />
        <g opacity="0.8"></g>
        <defs>
          <linearGradient
            id="paint0_linear_1131_4827"
            x1="81"
            y1="310"
            x2="177.245"
            y2="542.383"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EDEFFC" stop-opacity="0" />
            <stop offset="0.329512" stop-color="#A7B1F1" />
            <stop offset="1" stop-color="#EDEFFC" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1131_4827"
            x1="3"
            y1="310"
            x2="74.1867"
            y2="-42.5654"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EDEFFC" stop-opacity="0" />
            <stop offset="0.658688" stop-color="#A7B1F1" />
            <stop offset="1" stop-color="#EDEFFC" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>{" "}
      <svg
        width="305"
        height="540"
        viewBox="0 0 305 540"
        fill="none"
        className="absolute left-0 bottom-0 z-[-1]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, strokeWidth: 1 }}
          animate={{ pathLength: 1, strokeWidth: 5 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          d="M183 540V443.25C183 429.995 172.255 419.25 159 419.25H105C91.7452 419.25 81 408.505 81 395.25V310"
          stroke="url(#paint0_linear_1131_4827)"
          stroke-width="5"
        />
        <motion.path
          initial={{ pathLength: 0, strokeWidth: 1 }}
          animate={{ pathLength: 1, strokeWidth: 5 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          d="M285 5.96046e-06V138.75C285 152.005 274.255 162.75 261 162.75H27C13.7452 162.75 3 173.495 3 186.75V310"
          stroke="url(#paint1_linear_1131_4827)"
          stroke-width="5"
        />
        <g opacity="0.8"></g>
        <defs>
          <linearGradient
            id="paint0_linear_1131_4827"
            x1="81"
            y1="310"
            x2="177.245"
            y2="542.383"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EDEFFC" stop-opacity="0" />
            <stop offset="0.329512" stop-color="#A7B1F1" />
            <stop offset="1" stop-color="#EDEFFC" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1131_4827"
            x1="3"
            y1="310"
            x2="74.1867"
            y2="-42.5654"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EDEFFC" stop-opacity="0" />
            <stop offset="0.658688" stop-color="#A7B1F1" />
            <stop offset="1" stop-color="#EDEFFC" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="wrapper flex flex-col gap-10">
        <div className="flex flex-col gap-2 items-center  text-center justify-center">
          <Heading size={"lg"}>Transparent Pricing Plans</Heading>
          <Text className="max-w-md mx-auto text-center">
            Choose from a variety of pricing plans to suit your needs and
            preferences.
          </Text>
        </div>
      </div>
      <PricingCards />
    </section>
  );
};

export default Pricing;
