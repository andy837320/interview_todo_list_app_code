import { useState, useEffect } from "react";
import axios from "axios";
import { Todo } from "../types";

const myUseTodos = (page: number, rowsPerPage: number) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos",
          {
            params: {
              params: {
                _limit: rowsPerPage,
                _page: page + 1, //Because Jsonplaceholder uses 1-based indexing for pagination
              },
            },
          }
        );
        setTodos(response.data);
        setTotal(parseInt(response.headers["x-total-count"], 10));
      } catch (err) {
        setError("Failed to fetch todos");
      }
    };

    fetchTodos();
  }, [page, rowsPerPage]);
};

export default myUseTodos;
