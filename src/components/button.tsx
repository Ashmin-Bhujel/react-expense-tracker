import type { ReactNode } from "react";
import { cn } from "../utils";

type ButtonProps = {
  logo?: ReactNode;
  children?: ReactNode;
  className?: string;
  variant?: "default" | "logo";
};

export default function Button({
  logo,
  children,
  className,
  variant = "default",
  ...props
}: ButtonProps & React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex cursor-pointer items-center gap-1 border-2 border-(--muted-background) transition-colors duration-300 hover:bg-(--muted-background)",
        {
          "px-6 py-2": variant === "default",
          "p-1": variant === "logo",
        },
        className,
      )}
    >
      {logo}
      {children && <span>{children}</span>}
    </button>
  );
}
