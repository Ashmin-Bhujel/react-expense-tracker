import { useState } from "react";
import { Plus } from "lucide-react";
import type { Transaction } from "../data";
import type { FilterOption } from "./filter";
import initialTransactions from "../data";
import AddDataDialog from "./add-data-dialog";
import Filter from "./filter";
import Button from "./button";
import Table from "./table";

export default function ExpenseTracker() {
  // States
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);
  const [showAddDataDialog, setShowAddDataDialog] = useState(false);
  const [filterOption, setFilterOption] = useState<FilterOption>("all");

  // Derived values
  const filteredTransactions: Transaction[] = transactions.filter(
    (transaction) => {
      if (filterOption === "all") {
        return true;
      } else {
        return transaction.category === filterOption;
      }
    },
  );
  const totalAmount = filteredTransactions.reduce(
    (prev, curr) => prev + curr.amount,
    0,
  );
  const filteredTransactionsCount = filteredTransactions.length;

  // Handler functions
  function handleToogleShowAddDataDialog() {
    setShowAddDataDialog((currentState) => !currentState);
  }
  function handleFilterOptionChange(filterOption: FilterOption) {
    setFilterOption(filterOption);
  }
  function handleTransactionDataAddition(newTransactionData: Transaction) {
    setTransactions((previousTransactions) => [
      ...previousTransactions,
      newTransactionData,
    ]);
  }
  function handleTransactionDataDeletion(id: Transaction["id"]) {
    const newTransactions = transactions.filter(
      (transaction) => transaction.id !== id,
    );
    setTransactions(newTransactions);
  }

  return (
    <section className="container mx-auto my-12 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Add data dialog box */}
        {showAddDataDialog && (
          <AddDataDialog
            onCloseAddDataDialog={handleToogleShowAddDataDialog}
            onTransactionDataAddition={handleTransactionDataAddition}
          />
        )}

        {/* Options */}
        <div className="flex items-center justify-between">
          <Filter
            filterOption={filterOption}
            filteredTransactionsCount={filteredTransactionsCount}
            onFilterOptionChange={handleFilterOptionChange}
          />

          <Button
            icon={<Plus className="size-4" />}
            onClick={handleToogleShowAddDataDialog}
          >
            Add Expense Data
          </Button>
        </div>

        {/* Note */}
        <em className="mt-4 inline-block text-sm text-zinc-500">
          Note: Double click to remove selected data from list
        </em>

        {/* Table */}
        <Table
          filteredTransactions={filteredTransactions}
          totalAmount={totalAmount}
          onTransactionDataDeletion={handleTransactionDataDeletion}
        />
      </div>
    </section>
  );
}
