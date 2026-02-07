import { useState } from "react";
import { X } from "lucide-react";
import type { Transaction } from "../types";
import Button from "./button";

type AddDataDialogProps = {
  onCloseAddDataDialog: () => void;
  onTransactionDataAddition: (newTransactionData: Transaction) => void;
};

export default function AddDataDialog({
  onCloseAddDataDialog,
  onTransactionDataAddition,
}: AddDataDialogProps) {
  // States
  const [description, setDescription] =
    useState<Transaction["description"]>("");
  const [date, setDate] = useState<Transaction["date"]>("");
  const [amount, setAmount] = useState<Transaction["amount"] | "">("");
  const [category, setCategory] = useState<
    "select-category" | Transaction["category"]
  >("select-category");

  // Handler functions
  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    // Validate description
    if (!description.trim()) {
      alert("Please enter a valid description!");
      return;
    }

    // Validate date
    if (!date) {
      alert("Please enter a valid date!");
      return;
    }

    // Validate amount
    if (amount === "" || amount <= 0) {
      alert("Please enter a valid amount and It should be greater than 0!");
      return;
    }

    // Validate category
    if (category === "select-category") {
      alert("Please select a valid category between Expense or Income!");
      return;
    }

    // New transaction data
    const newTransactionData: Transaction = {
      id: crypto.randomUUID(),
      description: description as Transaction["description"],
      date: date as Transaction["date"],
      amount: amount as Transaction["amount"],
      category: category as Transaction["category"],
    };

    // Add to the transactions
    onTransactionDataAddition(newTransactionData);

    // Clear the form
    clearForm();
  }

  // Normal function
  function clearForm() {
    setDescription("");
    setDate("");
    setAmount("");
    setCategory("select-category");
  }

  return (
    <div className="absolute inset-0 bg-zinc-900/80">
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-xl max-w-xl bg-zinc-950 p-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Add Expense Data</h2>
            <Button
              icon={<X />}
              onClick={onCloseAddDataDialog}
              variant="icon"
            />
          </div>

          {/* Form */}
          <form className="mt-4" onSubmit={handleSubmit}>
            {/* Note */}
            <em className="inline-block text-sm text-zinc-500">
              Note: Fill up the form to add new expense data.
            </em>

            <fieldset>
              <div className="mt-4 flex flex-col gap-4">
                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="mb-1 block font-medium"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    placeholder="Expense description"
                    value={description}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setDescription(event.target.value);
                    }}
                    className="w-full bg-zinc-900 p-2"
                  />
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="mb-1 block font-medium">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full bg-zinc-900 p-2"
                    value={date}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setDate(event.target.value);
                    }}
                  />
                </div>

                {/* Amount */}
                <div>
                  <label htmlFor="amount" className="mb-1 block font-medium">
                    Amount
                  </label>
                  <input
                    type="text"
                    id="amount"
                    placeholder="Expense amount in Nepali Rupees"
                    className="w-full bg-zinc-900 p-2"
                    value={amount!}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      const value = Number(event.target.value);

                      if (isNaN(value)) {
                        return;
                      }

                      setAmount(value);
                    }}
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="mb-1 block font-medium">
                    Category
                  </label>
                  <select
                    id="category"
                    className="w-full bg-zinc-900 p-2"
                    value={category}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                      setCategory(event.target.value as Transaction["category"])
                    }
                  >
                    <option value="select-category">Select Category</option>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                </div>

                {/* Submit button */}
                <Button type="submit" className="self-end">
                  Submit
                </Button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
