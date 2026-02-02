export default function TableFoot() {
  return (
    <tfoot>
      <tr className="flex items-center border-b border-(--muted-background) transition-colors duration-300 hover:bg-(--muted-background)">
        <td className="flex-1 px-6 py-2 text-left font-bold">Total</td>
        <td className="flex-1 px-6 py-2 text-right font-bold">
          <span>Rs.</span>
          {/*
          // TODO: Display calculated total
          */}
          <span>525.00</span>
        </td>
      </tr>
    </tfoot>
  );
}
