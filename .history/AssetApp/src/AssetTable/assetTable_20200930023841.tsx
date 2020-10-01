import React, { useState } from 'react';
import { useTable, usePagination } from 'react-table';
import { columns, data } from './dataSource';

function App() {
  const [ currentData, setCurrentData ] = useState([]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: currentData,
      initialState: {
        pageSize: 3,
        pageIndex: 1,
      },
      manualPagination: true,
      pageCount: 10,
    },
    usePagination
  );

  React.useEffect(() => {
    setCurrentData(data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize));
  }, [pageIndex, pageSize])

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((group) => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map((column) => (
              <td {...column.getFooterProps()}>
                {column.Footer && column.render("Footer")}
              </td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

export default App;