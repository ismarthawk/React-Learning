import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

function TodosList() {
  const [todos, setTodos] = useState([]);
  const baseUrl = "https://jsonplaceholder.typicode.com/todos";
  const [url, setUrl] = useState(baseUrl);
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const fetchTodos = useCallback(async () => {
    const res = await axios.get(url);
    setTodos(res.data);
  }, [url]);

  useEffect(() => {
    fetchTodos();
  }, [url]);
  return (
    <div>
      <h1>Todos </h1>
      <select
        name=""
        id=""
        defaultValue="1"
        onChange={(e) => {
          setUrl(baseUrl + "?userId=" + e.target.value);
        }}
      >
        {users.map((user) => (
          <option value={user} key={user}>
            {user}
          </option>
        ))}
      </select>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            <h5>{todo.userId}</h5>
            <p>{todo.title}</p>
          </div>
        ))}
    </div>
  );
}

export default TodosList;
