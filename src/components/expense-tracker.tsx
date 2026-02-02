import { Plus } from "lucide-react";
import Button from "./button";
import Filter from "./filter";
import type { FilterOption } from "./filter";
import { expenseData as initialExpenseData } from "../data";
import Table from "./table";
import { useState } from "react";

export default function ExpenseTracker() {
  const [expenseData, setExpenseData] = useState(initialExpenseData);
  const [filteredExpenseData, setFilteredExpenseData] = useState(expenseData);

  const totalAmount = filteredExpenseData.reduce(
    (acc, curr) => acc + curr.amount,
    0,
  );

  function updateFilteredExpenseData(filterOption: FilterOption) {
    if (filterOption === "all") {
      setFilteredExpenseData(expenseData);
    } else {
      setFilteredExpenseData(
        expenseData.filter(
          (expenseData) => expenseData.category === filterOption,
        ),
      );
    }
  }

  return (
    <section className="container mx-auto my-12 px-4">
      {/* Options */}
      <div className="flex items-center justify-between">
        <Filter updateFilteredExpenseData={updateFilteredExpenseData} />
        <Button logo={<Plus />}>Add Data</Button>
      </div>

      {/* Note */}
      <em className="mt-4 inline-block text-sm text-(--muted-foreground)">
        Note: Double click to remove selected data from list
      </em>

      {/* Table */}
      <Table
        filteredExpenseData={filteredExpenseData}
        totalAmount={totalAmount}
      />
    </section>
  );
}
