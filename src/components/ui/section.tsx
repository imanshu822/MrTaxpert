"use client";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import React, { ComponentPropsWithoutRef } from "react";

const Section = ({
  className,
  defaultPadding,
  ...props
}: HTMLMotionProps<"section"> & {
  defaultPadding?: boolean;
}) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      className={cn(
        "w-full flex flex-col",
        defaultPadding && "py-[clamp(2rem,7vw,6rem)]",
        className
      )}
      {...props}
    >
      {props.children}
    </motion.section>
  );
};

export default Section;
