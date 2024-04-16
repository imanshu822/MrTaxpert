"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const CheckboxV2 = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer  px-4  shrink-0  text-sm py-1 font-normal rounded-sm border border-secondary bg-secondary ring-offset-background focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary/10 data-[state=checked]:border-primary data-[state=checked]:text-primary",
      className
    )}
    {...props}
  >
    {props.children}
    {/* <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator> */}
  </CheckboxPrimitive.Root>
));
CheckboxV2.displayName = CheckboxPrimitive.Root.displayName;

export { CheckboxV2 };
