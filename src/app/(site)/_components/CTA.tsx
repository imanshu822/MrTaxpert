"use client";
import ServicesMarquee from "@/components/marquee/ServicesMarquee";
import TaglineMarquee from "@/components/marquee/TaglineMarquee";
import { FancyButton } from "@/components/ui/fancy-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";
import React, { ComponentPropsWithoutRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LineSvg = () => {
  return (
    <motion.svg
      width="1200"
      height="320"
      viewBox="0 0 1200 320"
      fill="none"
      className={"w-full absolute inset-0 z-[0]"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, strokeWidth: 1 }}
        animate={{ pathLength: 1, strokeWidth: 5 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        d="M1242 216L1058.62 216C1045.37 216 1034.62 226.745 1034.62 240L1034.62 293C1034.62 306.255 1023.88 317 1010.62 317L847 317"
        stroke="url(#paint0_linear_1152_4882)"
        stroke-width="5"
      />
      <motion.path
        initial={{ pathLength: 0, strokeWidth: 1 }}
        animate={{ pathLength: 1, strokeWidth: 5 }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        d="M1080 -2.98023e-06V60C1080 73.2548 1069.25 84 1056 84H726C712.745 84 702 94.7452 702 108V160"
        stroke="url(#paint1_linear_1152_4882)"
        stroke-width="5"
      />
      <motion.path
        initial={{ pathLength: 0, strokeWidth: 1 }}
        animate={{ pathLength: 1, strokeWidth: 5 }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        d="M-40 151L140.225 151C153.48 151 164.225 161.745 164.225 175L164.225 291C164.225 304.255 174.97 315 188.225 315L349 315"
        stroke="url(#paint2_linear_1152_4882)"
        stroke-width="5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1152_4882"
          x1="847"
          y1="317"
          x2="1155.41"
          y2="95.4591"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EDEFFC" stop-opacity="0" />
          <stop offset="0.329512" stop-color="#A7B1F1" />
          <stop offset="1" stop-color="#EDEFFC" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1152_4882"
          x1="702"
          y1="160"
          x2="716.636"
          y2="-28.2499"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EDEFFC" stop-opacity="0" />
          <stop offset="0.658688" stop-color="#A7B1F1" />
          <stop offset="1" stop-color="#EDEFFC" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1152_4882"
          x1="349"
          y1="315"
          x2="-37.9958"
          y2="146.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EDEFFC" stop-opacity="0" />
          <stop offset="0.604465" stop-color="#A7B1F1" />
          <stop offset="1" stop-color="#EDEFFC" stop-opacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

const formSchema = z.object({
  email: z.string().email(),
});

const NewsletterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-lg py-10 mx-auto flex flex-col gap-4  w-full"
      >
        <div className="flex gap-4 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      icon={MailIcon}
                      className="bg-card shadow-sm rounded-full"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <FancyButton className="rounded-full px-6">Submit</FancyButton>
        </div>
        <Text size={"xs"} className="md:block hidden text-center">
          Stay informed, stay empowered. Subscribe to MrTaxpert today and
          experience financial simplicity.
        </Text>
      </form>
    </Form>
  );
};

const CTA = ({ className, ...props }: ComponentPropsWithoutRef<"section">) => {
  return (
    <section
      className={cn(
        "my-10 bg-secondary overflow-hidden rounded-sm relative wrapper py-10",
        className
      )}
    >
      <div>
        <div className="flex text-center flex-col gap-2 items-center justify-center">
          <Heading size={"sm"} className="text-primary font-normal">
            Subscribe Now for Exclusive Updates and Offers!
          </Heading>
          <Heading
            size={"lg"}
            className="max-w-lg mt-4 mx-auto text-center leading-tighter"
          >
            Ready to Transform Your Financial Experience?
          </Heading>
          <Text size={"sm"} className="max-w-lg mt-2 mx-auto text-center">
            Subscribe to MrTaxpert for exclusive updates, tips, and offers. Join
            our community and simplify your taxation journey.
          </Text>
        </div>
        <NewsletterForm />
        <ServicesMarquee />
      </div>
      <LineSvg />
    </section>
  );
};

export default CTA;
