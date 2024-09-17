import React, { useState } from "react";
import MyTodoTable from "./components/MyTodoTable";
import myUseTodos from "./hooks/myUseTodos";

const App: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  //destructure todos and error from myUseTodos
  const { todos, error }: any = myUseTodos(page, rowsPerPage);

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); //Reset page 0 on rows per page change
  };
  return (
    <div style={{ padding: 22 }}>
      <h2> Todo List</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <MyTodoTable
        todos={todos}
        currentPage={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};
export default App;
