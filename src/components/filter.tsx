import { useState } from "react";
import FilterTab from "./filter-tab";

export type FilterOption = "all" | "expense" | "income";

const filterOptions: FilterOption[] = ["all", "expense", "income"];

export default function Filter() {
  const [currentFilterOption, setCurrentFilterOption] =
    useState<FilterOption>("all");

  function handleFilterOptionChange(filterOption: FilterOption) {
    setCurrentFilterOption(filterOption);
  }

  return (
    <div className="inline-flex items-center gap-2 border-2 border-(--muted-background) p-1">
      {filterOptions.map((filterOption) => (
        <FilterTab
          key={filterOption}
          value={filterOption}
          currentFilterOption={currentFilterOption}
          handleFilterOptionChange={handleFilterOptionChange}
        />
      ))}
    </div>
  );
}
