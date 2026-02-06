type TableFootProps = {
  totalAmount: number;
};

export default function TableFoot({ totalAmount }: TableFootProps) {
  return (
    <tfoot>
      <tr className="flex items-center border-b border-zinc-900 transition-colors duration-300 hover:bg-zinc-900">
        <td className="flex-1 px-6 py-2 text-left font-bold">Total</td>
        <td className="flex-1 px-6 py-2 text-right font-bold">
          <span>Rs.</span>
          <span>{totalAmount.toFixed(2)}</span>
        </td>
      </tr>
    </tfoot>
  );
}
