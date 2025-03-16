import Table from "../../components/Table";

function Results() {
  const columns = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Date", key: "date" },
  ];

  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      role: "Viewer",
    },
  ];
  return (
    <>
      <h1 className="px-20 py-10 text-2xl font-bold">Results</h1>
      <div className="px-20 py-1">
        <Table columns={columns} data={data} />;
      </div>
    </>
  );
}

export default Results;
