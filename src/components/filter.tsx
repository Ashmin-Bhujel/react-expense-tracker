import type { Category } from "../data";
import FilterTab from "./filter-tab";

export type FilterOption = "all" | Category;

type FilterProps = {
  filterOption: FilterOption;
  onFilterOptionChange: (filterOption: FilterOption) => void;
};

export default function Filter({
  filterOption,
  onFilterOptionChange,
}: FilterProps) {
  const filters: FilterOption[] = ["all", "expense", "income"];

  return (
    <div className="inline-flex items-center gap-2 border-2 border-zinc-900 p-1">
      {filters.map((filter) => (
        <FilterTab
          key={filter}
          value={filter}
          filterOption={filterOption}
          onFilterOptionChange={onFilterOptionChange}
        />
      ))}
    </div>
  );
}
