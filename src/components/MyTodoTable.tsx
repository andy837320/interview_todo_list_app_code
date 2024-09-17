import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { Todo } from "../types";

interface TodoTableProps {
  todos: Todo[];
  currentPage: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  onRowsPerPageChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const MyTodoTable: React.FC<TodoTableProps> = ({
  todos,
  currentPage,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> ID </TableCell>
            <TableCell> Title </TableCell>
            <TableCell> Completed </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.id} </TableCell>
              <TableCell> {todo.title} </TableCell>
              <TableCell> {todo.completed ? "Yes" : "No"} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={todos.length}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </TableContainer>
  );
};

export default MyTodoTable;
