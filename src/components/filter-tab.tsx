import { cn } from "../utils";
import type { FilterOption } from "./filter";

type FilterTabProps = {
  value: FilterOption;
  className?: string;
  currentFilterOption: FilterOption;
  handleFilterOptionChange: (filterOption: FilterOption) => void;
};

export default function FilterTab({
  value,
  className,
  currentFilterOption,
  handleFilterOptionChange,
  ...props
}: FilterTabProps & React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "cursor-pointer px-6 py-2 text-(--muted-foreground) capitalize transition-colors duration-300 hover:text-(--foreground)",
        {
          "bg-(--muted-background) text-(--foreground)":
            value === currentFilterOption,
        },
        className,
      )}
      onClick={() => {
        handleFilterOptionChange(value);
      }}
    >
      {value}
    </button>
  );
}
