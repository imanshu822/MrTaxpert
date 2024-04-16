import { Heading } from "@/components/ui/heading";
import React from "react";
import { Text } from "@/components/ui/text";
import {
  ChevronLeft,
  MailIcon,
  MessageCircleIcon,
  PhoneIcon,
  VideoIcon,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import ContactUsForm from "./_components/contact-us-form";
import Link from "next/link";
import { cn } from "@/lib/utils";

const page = () => {
  return (
    <main className="wrapper py-10 grid  gap-6 md:grid-cols-[minmax(20rem,35%)_auto]">
      <div className="flex flex-col gap-6">
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "w-fit rounded-full gap-2"
          )}
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Link>
        <div className="flex flex-col gap-2">
          <Heading size={"xl"}>Get in Touch</Heading>
          <Text size={"md"}>
            Have questions or need assistance? We&apos;re here to help. Reach
            out to us through the following channels:
          </Text>
        </div>

        <div className="flex flex-col gap-2">
          <Text className="grid grid-cols-[auto_1fr] gap-2 items-center">
            <MailIcon className="w-4 h-4 shrink-0" />
            <span>mrtaxpert@gmail.com</span>
          </Text>
          <Text className="grid grid-cols-[auto_1fr] gap-2 items-center">
            <PhoneIcon className="w-4 h-4" />
            <span>7737299199</span>
          </Text>
          <Text className="grid grid-cols-[auto_1fr] gap-2 items-center">
            <VideoIcon className="w-4 h-4" />
            <span>Live Consultation: Available during business hours</span>
          </Text>
          <Link
            href={"https://cal.com/mrtaxpert/15min"}
            target="_blank"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full w-full mt-6"
            )}
          >
            Book an Online Meeting
          </Link>
        </div>
      </div>
      <div className="max-w-xl mx-auto w-full">
        <ContactUsForm />
      </div>
    </main>
  );
};

export default page;
