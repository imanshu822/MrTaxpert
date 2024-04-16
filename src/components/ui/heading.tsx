import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const headingVariant = cva("font-bold gap-1 items-center tracking-tight", {
  variants: {
    size: {
      xs: "text-[clamp(.75rem,5vw,.75rem)] leading-tight",
      sm: "text-[clamp(.875rem,5vw,1rem)] leading-tight",
      md: "text-[clamp(1rem,5vw,1.618rem)] leading-tight",
      lg: "text-[clamp(1.25rem,5vw,2.618rem)] leading-tight",
      xl: "text-[clamp(1.75rem,5vw,4.236rem)] leading-tight",
      "2xl": "text-[clamp(2.5rem,5vw,6.854rem)] leading-tight",
      "3xl": "text-[clamp(3rem,5vw,11.089rem)] leading-tight",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface HeadingProps extends VariantProps<typeof headingVariant> {
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

function Heading({
  el: Wrapper = "h2",
  className,
  children,
  size,
}: HeadingProps) {
  return (
    <Wrapper className={cn(headingVariant({ size }), className)}>
      {children}
    </Wrapper>
  );
}

export { Heading, headingVariant };
