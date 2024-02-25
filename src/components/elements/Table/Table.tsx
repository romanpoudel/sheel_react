import React from 'react';

interface TableProps {
  items: {
    headings?: string[];
    rows: string[][];
  };
}

const Table: React.FC<TableProps> = ({ items }) => {
  const { headings, rows } = items;

  return (
    <div className="overflow-x-auto pt-10">
      <table className="table z-0 content-text-size text-justify">
        <thead>
          <tr className="bg-purple-900 text-white">
            {headings?.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-purple-900 hover:text-white">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  {/* Check if the cell content includes a newline character */}
                  {cell.includes('\n') ? (
                    cell.split('\n').map((item, index) => (
                      // Use <br /> for newline
                      <React.Fragment key={index}>
                        {item}
                        <br />
                      </React.Fragment>
                    ))
                  ) : (
                    // Otherwise, display the cell content as is
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
