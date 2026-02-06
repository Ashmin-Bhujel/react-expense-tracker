type TableHeadDataProps = {
  children: React.ReactNode;
};

function TableHeadData({ children }: TableHeadDataProps) {
  return (
    <th className="flex-1 px-6 py-2 text-left capitalize first-of-type:uppercase last-of-type:text-right">
      {children}
    </th>
  );
}

export default function TableHead() {
  const tableHeadDatas: string[] = [
    "sn",
    "description",
    "date",
    "category",
    "amount",
  ];

  return (
    <thead>
      <tr className="flex items-center border-b border-zinc-900 transition-colors duration-300 hover:bg-zinc-900">
        {tableHeadDatas.map((tableHeadData) => (
          <TableHeadData key={tableHeadData}>{tableHeadData}</TableHeadData>
        ))}
      </tr>
    </thead>
  );
}
