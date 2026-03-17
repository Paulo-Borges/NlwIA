import type * as React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    variant: {
      default: "bg-sky-600 text-white hover:bg-sky-500",
      secondary: "bg-slate-700 text-white hover:bg-slate-600",
      outline:
        "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
      ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
      link: "bg-transparent text-sky-600 underline-offset-4 hover:underline",
    },
    size: {
      sm: "h-9 px-3 rounded-md",
      md: "h-10 px-4 rounded-md",
      lg: "h-11 px-8 rounded-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(button({ variant, size, className }))}
      {...props}
    />
  );
}
