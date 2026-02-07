export type Category = "expense" | "income";

export type FilterOption = "all" | Category;

export type Transaction = {
  id: ReturnType<Crypto["randomUUID"]>;
  description: string;
  date: string;
  category: Category;
  amount: number;
};
