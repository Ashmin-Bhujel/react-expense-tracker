export type ExpenseData = {
  id: ReturnType<Crypto["randomUUID"]>;
  description: string;
  date: number;
  category: "expense" | "income";
  amount: number;
};

export const expenseData: ExpenseData[] = [
  {
    id: crypto.randomUUID(),
    description: "Buy milk tea",
    date: Date.now(),
    category: "expense",
    amount: 25,
  },
  {
    id: crypto.randomUUID(),
    description: "Sell old watch",
    date: Date.now(),
    category: "income",
    amount: 500,
  },
];
