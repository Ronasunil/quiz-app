function Table({ columns, data }) {
  return (
    <div className="w-full overflow-x-auto">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${columns.length}, minmax(150px, 1fr))`,
        }}
      >
        {columns.map((col, index) => (
          <div
            key={index}
            className="p-3 font-bold bg-gray-200 text-gray-800 border border-gray-300"
          >
            {col.label}
          </div>
        ))}

        {data.map((row, rowIndex) =>
          columns.map((col, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="p-3 border border-gray-300 text-gray-700"
            >
              {row[col.key]}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Table;
