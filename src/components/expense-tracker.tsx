import { Plus } from "lucide-react";
import Button from "./button";
import Filter from "./filter";
import type { FilterOption } from "./filter";
import { expenseData as initialExpenseData } from "../data";
import type { ExpenseData } from "../data";
import Table from "./table";
import { useState } from "react";
import AddData from "./add-data";

export default function ExpenseTracker() {
  const [expenseData, setExpenseData] = useState(initialExpenseData);
  const [filteredExpenseData, setFilteredExpenseData] = useState(expenseData);
  const [showAddDataDialog, setShowAddDataDialog] = useState(false);

  const totalAmount = filteredExpenseData.reduce(
    (acc, curr) => acc + curr.amount,
    0,
  );

  function handleExpenseDataRemoval(id: string) {
    const updatedExpenseData = expenseData.filter(
      (expenseData) => expenseData.id !== id,
    );
    setExpenseData(updatedExpenseData);
    setFilteredExpenseData(updatedExpenseData);
  }

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

  function toggleShowAddDataDialog() {
    setShowAddDataDialog((currentState) => !currentState);
  }

  function handleDataAddition(newExpenseData: ExpenseData) {
    const updatedExpenseData = [...expenseData, newExpenseData];
    setExpenseData(updatedExpenseData);
    setFilteredExpenseData(updatedExpenseData);
  }

  return (
    <section className="container mx-auto my-12 px-4">
      {/* Add data dialog box */}
      {showAddDataDialog && (
        <AddData
          toggleShowAddDataDialog={toggleShowAddDataDialog}
          handleDataAddition={handleDataAddition}
        />
      )}

      {/* Options */}
      <div className="flex items-center justify-between">
        <Filter updateFilteredExpenseData={updateFilteredExpenseData} />
        <Button
          logo={<Plus className="size-4" />}
          onClick={toggleShowAddDataDialog}
        >
          Add Expense Data
        </Button>
      </div>

      {/* Note */}
      <em className="mt-4 inline-block text-sm text-(--muted-foreground)">
        Note: Double click to remove selected data from list
      </em>

      {/* Table */}
      <Table
        filteredExpenseData={filteredExpenseData}
        totalAmount={totalAmount}
        handleExpenseDataRemoval={handleExpenseDataRemoval}
      />
    </section>
  );
}
