// import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// import axios from 'axios';
// import { useTable, usePagination } from 'react-table';

// const UserReportTable = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get('http://localhost:7000/user/getData', {
//           withCredentials: true,
//           headers: {
//             "Content-Type": 'application/json'
//           }
//         });
//         setData(res.data);
//       } catch (error) {
//         console.log("Error:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'ID',
//         accessor: 'id'
//       },
//       {
//         Header: 'Name',
//         accessor: 'shop_name'
//       },
//       {
//         Header: 'Email',
//         accessor: 'email'
//       },
//       {
//         Header: 'User Type',
//         accessor: 'user_type'
//       },
//       {
//         Header: 'Email Option',
//         accessor: 'email_option'
//       }
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     state: { pageIndex, pageSize }
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 }
//     },
//     usePagination
//   );

//   return (
//     <>
//       <table {...getTableProps()} style={{ width: '100%', border: '1px solid black' }}>
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => (
//                   <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div>
//         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//           {'<<'}
//         </button>{' '}
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           {'Prev'}
//         </button>{' '}
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           {'Next'}
//         </button>{' '}
//         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//           {'>>'}
//         </button>{' '}
//         <span>
//           Page{' '}
//           <strong>
//             {pageIndex + 1} of {pageOptions.length}
//           </strong>{' '}
//         </span>
//         <span>
//           | Go to page:{' '}
//           <input
//             type="number"
//             defaultValue={pageIndex + 1}
//             onChange={e => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0;
//               gotoPage(page);
//             }}
//             style={{ width: '100px' }}
//           />
//         </span>{' '}
//         <select
//           value={pageSize}
//           onChange={e => {
//             setPageSize(Number(e.target.value));
//           }}
//         >
//           {[10, 20, 30, 40, 50].map(pageSize => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//     </>
//   );
// };

// export default UserReportTable;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTable, usePagination } from 'react-table';

const StoreReportTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:7000/store/getData', {
          withCredentials: true,
          headers: {
            "Content-Type": 'application/json'
          }
        });
        setData(res.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        width: 100 // Define width
      },
      {
        Header: 'Shop Name',
        accessor: 'shop_name',
        width: 200 // Define width
      },
      {
        Header: 'Email',
        accessor: 'email',
        width: 300 // Define width
      },
      {
        Header: 'User Type',
        accessor: 'user_type',
        width: 100
      },
      {
        Header: 'Email Option',
        accessor: 'email_option',
        width: 100
      }
      // Add more columns as needed
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    usePagination
  );

  return (
    <>
      <table {...getTableProps()} style={{ width: '100%', border: '1px solid black' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th colSpan={2} {...column.getHeaderProps()} style={{ width: column.width, textAlign:'center' }}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td colSpan={2} {...cell.getCellProps()} style={{ width: cell.column.width, textAlign:'center' }}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default StoreReportTable;

