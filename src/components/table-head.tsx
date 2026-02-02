import type { ReactNode } from "react";

type TableHeadDataProps = {
  children: ReactNode;
};

function TableHeadData({ children }: TableHeadDataProps) {
  return (
    <th className="flex-1 px-6 py-2 text-left capitalize first-of-type:uppercase last-of-type:text-right">
      {children}
    </th>
  );
}

const tableHeadDatas: string[] = [
  "sn",
  "description",
  "date",
  "category",
  "amount",
];

export default function TableHead() {
  return (
    <thead>
      <tr className="flex items-center border-b border-(--muted-background) transition-colors duration-300 hover:bg-(--muted-background)">
        {tableHeadDatas.map((tableHeadData) => (
          <TableHeadData key={tableHeadData}>{tableHeadData}</TableHeadData>
        ))}
      </tr>
    </thead>
  );
}
