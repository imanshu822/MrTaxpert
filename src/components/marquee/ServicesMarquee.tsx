import React from "react";
import Marquee from "react-fast-marquee";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/data/constant";

const ServicesMarquee = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <Marquee className={cn(`z-0`)} autoFill pauseOnHover gradient>
        {SERVICES.map((service) => {
          return (
            <Badge
              className="mx-1 z-0 font-normal bg-card rounded-[.5rem]"
              variant={"outline"}
              size={"md"}
              key={service.label}
            >
              {service.label}
            </Badge>
          );
        })}
      </Marquee>
    </div>
  );
};

export default ServicesMarquee;
