import type { ExpenseData } from "../data";
import TableBody from "./table-body";
import TableFoot from "./table-foot";
import TableHead from "./table-head";

type TableProps = {
  filteredExpenseData: ExpenseData[];
  totalAmount: number;
};

export default function Table({
  filteredExpenseData,
  totalAmount,
}: TableProps) {
  return (
    <table className="mt-6 flex flex-col">
      {/* Table head */}
      <TableHead />

      {/* Table body */}
      <TableBody filteredExpenseData={filteredExpenseData} />

      {/* Table foot */}
      <TableFoot totalAmount={totalAmount} />
    </table>
  );
}
