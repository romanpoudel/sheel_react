interface TableProps{
    headings?: string[];
    rows: string[][];
}

const Table: React.FC<TableProps> = ({ headings = [], rows}) => {
  return (
    <div className="overflow-x-auto pt-10">
      <table className="table z-0 content-text-size text-justify">
        <thead>
          <tr className="bg-purple-900 text-white">
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-purple-900 hover:text-white">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
