import type { ExpenseData } from "../data";
import { cn } from "../utils";

type TableBodyProps = {
  filteredExpenseData: ExpenseData[];
};

function convertUnixDate(unixDate: number) {
  return new Date(unixDate).toISOString().split("T")[0];
}

export default function TableBody({ filteredExpenseData }: TableBodyProps) {
  return (
    <tbody className="flex flex-col">
      {filteredExpenseData.map((expenseData, idx) => (
        <tr
          key={expenseData.id}
          className="flex cursor-pointer items-center border-b border-(--muted-background) transition-colors duration-300 *:flex-1 *:px-6 *:py-2 *:text-left *:last-of-type:text-right hover:bg-(--muted-background)"
          title="Double click to remove selected data from list"
        >
          <td>{idx + 1}</td>
          <td>{expenseData.description}</td>
          <td>{convertUnixDate(expenseData.date)}</td>
          <td
            className={cn("capitalize", {
              "text-(--danger)": expenseData.category === "expense",
              "text-(--success)": expenseData.category === "income",
            })}
          >
            {expenseData.category}
          </td>
          <td>
            <span>Rs.</span>
            <span>{expenseData.amount.toFixed(2)}</span>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
