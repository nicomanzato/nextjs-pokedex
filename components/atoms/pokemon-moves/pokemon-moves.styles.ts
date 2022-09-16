import tw from 'twin.macro';

export const Table = tw.table`
  table-auto
`;

export const TableRowHeader = tw.tr`
  px-6
  py-2
  text-xs
  text-gray-500
  bg-gray-50
`;

export const TableColumnHeader = tw.th`
  px-6
  py-2
  text-xs
  text-gray-500
`;

export const TableRow = tw.tr`
  bg-white
  odd:bg-gray-50
`;

export const TableColumn = tw.td`
  px-6
  py-4
  capitalize
  text-center
  text-sm
  text-gray-500
`;
