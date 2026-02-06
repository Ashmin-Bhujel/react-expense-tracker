import type { FilterOption } from "./filter";
import { cn } from "../utils";

type FilterTabProps = {
  value: FilterOption;
  filterOption: FilterOption;
  onFilterOptionChange: (filterOption: FilterOption) => void;
};

export default function FilterTab({
  value,
  className,
  filterOption,
  onFilterOptionChange,
  ...props
}: FilterTabProps & React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "cursor-pointer px-6 py-2 text-zinc-500 capitalize transition-colors duration-300 hover:text-zinc-50",
        {
          "bg-zinc-900 text-zinc-50": value === filterOption,
        },
        className,
      )}
      onClick={() => {
        onFilterOptionChange(value);
      }}
    >
      {value}
    </button>
  );
}
