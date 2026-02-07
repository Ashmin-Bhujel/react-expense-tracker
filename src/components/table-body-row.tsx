import type { Transaction } from "../types";
import { cn } from "../utils";

type TableBodyRowProps = {
  index: number;
  transaction: Transaction;
  onTransactionDataDeletion: (id: Transaction["id"]) => void;
};

export default function TableBodyRow({
  index,
  transaction: { id, description, date, category, amount },
  onTransactionDataDeletion,
}: TableBodyRowProps) {
  return (
    <tr
      className="flex cursor-pointer items-center border-b border-zinc-900 transition-colors duration-300 *:flex-1 *:px-6 *:py-2 *:text-left *:last-of-type:text-right hover:bg-zinc-900 active:bg-red-400/20"
      title="Double click to remove selected data from list"
      onDoubleClick={() => onTransactionDataDeletion(id)}
    >
      {/* SN */}
      <td>{index + 1}</td>

      {/* Description */}
      <td>{description}</td>

      {/* Date */}
      <td>{date}</td>

      {/* Category */}
      <td>
        <span
          className={cn(
            "rounded-full bg-zinc-900 px-2 py-0.5 text-zinc-50 capitalize",
            {
              "bg-red-500/20 text-red-400": category === "expense",
              "bg-green-500/20 text-green-400": category === "income",
            },
          )}
        >
          {category}
        </span>
      </td>

      {/* Amount */}
      <td>
        <span>Rs.</span>
        <span>{amount.toFixed(2)}</span>
      </td>
    </tr>
  );
}
