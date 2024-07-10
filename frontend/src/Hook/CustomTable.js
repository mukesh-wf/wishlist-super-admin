import React from 'react';
import {Table} from 'react-bootstrap'

// CustomTable Component
const CustomTable = ({ columns, data, columnWidths }) => {
  console.log("columnWidth",  columnWidths)
  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={{textAlign:'center'}}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} style={{ maxWidth: columnWidths[colIndex], wordWrap:'break-word', textAlign:'center' }}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
