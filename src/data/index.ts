export type Category = "expense" | "income";

export type Transaction = {
  id: ReturnType<Crypto["randomUUID"]>;
  description: string;
  date: string;
  category: Category;
  amount: number;
};

const initialTransactions: Transaction[] = [
  {
    id: crypto.randomUUID(),
    description: "Buy milk tea",
    date: "2026-02-02",
    category: "expense",
    amount: 25,
  },
  {
    id: crypto.randomUUID(),
    description: "Sell old watch",
    date: "2026-02-02",
    category: "income",
    amount: 500,
  },
  {
    id: crypto.randomUUID(),
    description: "Get pocket money",
    date: "2026-02-02",
    category: "income",
    amount: 1000,
  },
  {
    id: crypto.randomUUID(),
    description: "Pay electricity bill",
    date: "2026-02-02",
    category: "expense",
    amount: 672,
  },
];

export default initialTransactions;
