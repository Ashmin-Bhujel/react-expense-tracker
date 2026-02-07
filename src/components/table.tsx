import type { Transaction } from "../types";
import TableHead from "./table-head";
import TableBody from "./table-body";
import TableFoot from "./table-foot";

type TableProps = {
  filteredTransactions: Transaction[];
  totalAmount: number;
  onTransactionDataDeletion: (id: Transaction["id"]) => void;
};

export default function Table({
  filteredTransactions,
  totalAmount,
  onTransactionDataDeletion,
}: TableProps) {
  return (
    <table className="mt-6 flex flex-col">
      {/* Table head */}
      <TableHead />

      {/* Table body */}
      <TableBody
        filteredTransactions={filteredTransactions}
        onTransactionDataDeletion={onTransactionDataDeletion}
      />

      {/* Table foot */}
      <TableFoot totalAmount={totalAmount} />
    </table>
  );
}
