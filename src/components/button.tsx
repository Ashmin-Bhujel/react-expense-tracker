import { cn } from "../utils";

type ButtonProps = {
  icon?: React.ReactNode;
  variant?: "default" | "icon";
};

export default function Button({
  icon,
  children,
  className,
  variant = "default",
  ...props
}: ButtonProps & React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex cursor-pointer items-center gap-1 border-2 border-zinc-900 transition-colors duration-300 hover:bg-zinc-900",
        {
          "px-6 py-2": variant === "default",
          "p-1": variant === "icon",
        },
        className,
      )}
    >
      {icon}
      {children && <span>{children}</span>}
    </button>
  );
}
