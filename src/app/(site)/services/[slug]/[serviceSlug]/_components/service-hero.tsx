import { Button, buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import React from "react";
import CTA from "./cta";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ServiceHero = ({ service }: { service: Service }) => {
  return (
    <section className="py-[clamp(2rem,5vw,2.5rem)] bg-secondary ">
      <div className="grid wrapper  grid-cols-1  gap-10 lg:grid-cols-[auto_25rem]">
        <div className="flex flex-col gap-6">
          <Heading size={"xl"} className="leading-none">
            {service.title}
          </Heading>
          <Link
            href={"/contact-us"}
            className={cn(
              buttonVariants({ size: "lg", variant: "fancy" }),
              "w-fit"
            )}
          >
            Contact us
          </Link>
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default ServiceHero;
