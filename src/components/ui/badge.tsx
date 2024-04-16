import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex gap-1 items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        "default-opacity":
          "text-primary bg-[#eae9fb] border-primary border hover:opacity-75",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        "secondary-opacity":
          "text-secondary bg-secondary/10 border-secondary border hover:opacity-75",
        "secondary-border":
          "border-border border bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-red-400/50 bg-red-400/5 text-red-600 hover:bg-destructive/80",
        outline: "text-foreground",
      },
      size: {
        sm: "py-0.5 px-2.5 text-xs",
        md: "py-1.5 px-4 text-xs",
        lg: "py-2 px-5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  shimmer?: boolean;
}

function Badge({ className, shimmer, variant, size, ...props }: BadgeProps) {
  const shimmerClasses =
    "relative before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-background/75 before:to-transparent overflow-hidden";
  return (
    <div
      className={cn(
        badgeVariants({ size, variant }),
        shimmer && shimmerClasses,
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
