import { X } from "lucide-react";
import Button from "./button";
import { useState } from "react";
import type { ExpenseData } from "../data";

type AddDataProps = {
  toggleShowAddDataDialog: () => void;
  handleDataAddition: (newExpenseData: ExpenseData) => void;
};

export default function AddData({
  toggleShowAddDataDialog,
  handleDataAddition,
}: AddDataProps) {
  const [description, setDescription] =
    useState<ExpenseData["description"]>("");
  const [date, setDate] = useState<string>("");
  const [amount, setAmount] = useState<ExpenseData["amount"]>(0);
  const [category, setCategory] = useState<ExpenseData["category"]>("expense");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (description.trim() === "") {
      alert("Please fill in the description correctly.");
      return;
    }

    if (amount <= 0) {
      alert("Please enter a valid amount greater than zero.");
      return;
    }

    const newExpenseData: ExpenseData = {
      id: crypto.randomUUID(),
      description: description.trim(),
      date: date,
      category,
      amount,
    };

    handleDataAddition(newExpenseData);
    clearForm();
  }

  function clearForm() {
    setDescription("");
    setDate("");
    setAmount(0);
    setCategory("expense");
  }

  return (
    <div className="absolute inset-0 bg-(--muted-background)/80">
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-xl max-w-xl bg-(--background) p-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Add Expense Data</h2>
            <Button
              logo={<X />}
              onClick={toggleShowAddDataDialog}
              variant="logo"
            />
          </div>

          {/* Form */}
          <form className="mt-4" onSubmit={handleSubmit}>
            {/* Note */}
            <em className="inline-block text-sm text-(--muted-foreground)">
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
                    required={true}
                    value={description}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setDescription(e.target.value);
                    }}
                    className="w-full bg-(--muted-background) p-2"
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
                    required={true}
                    className="w-full bg-(--muted-background) p-2"
                    value={date}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setDate(e.target.value);
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
                    required={true}
                    className="w-full bg-(--muted-background) p-2"
                    value={amount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const value = Number(e.target.value);

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
                    className="w-full bg-(--muted-background) p-2"
                    value={category}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setCategory(e.target.value as ExpenseData["category"])
                    }
                  >
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
