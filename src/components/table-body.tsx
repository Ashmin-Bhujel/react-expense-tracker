import type { Transaction } from "../types";
import TableBodyRow from "./table-body-row";

type TableBodyProps = {
  filteredTransactions: Transaction[];
  onTransactionDataDeletion: (id: Transaction["id"]) => void;
};

export default function TableBody({
  filteredTransactions,
  onTransactionDataDeletion,
}: TableBodyProps) {
  return (
    <tbody className="flex flex-col">
      {/* If no data available */}
      {filteredTransactions.length === 0 && (
        <tr className="border-b border-zinc-900 transition-colors duration-300 hover:bg-zinc-900">
          <td colSpan={5} className="block px-6 py-2 text-center text-zinc-500">
            No data available!
          </td>
        </tr>
      )}

      {/* Table rows */}
      {filteredTransactions.map((transaction, index) => (
        <TableBodyRow
          key={transaction.id}
          index={index}
          transaction={transaction}
          onTransactionDataDeletion={onTransactionDataDeletion}
        />
      ))}
    </tbody>
  );
}
