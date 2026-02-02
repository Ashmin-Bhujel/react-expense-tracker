import type { ReactNode } from "react";
import { cn } from "../utils";

type ButtonProps = {
  logo?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Button({
  logo,
  children,
  className,
  ...props
}: ButtonProps & React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex cursor-pointer items-center gap-1 border-2 border-(--muted-background) px-6 py-2 transition-colors duration-300 hover:bg-(--muted-background)",
        className,
      )}
    >
      {logo}
      <span>{children}</span>
    </button>
  );
}
