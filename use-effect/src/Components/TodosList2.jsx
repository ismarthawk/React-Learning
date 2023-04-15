import React from "react";
import { useState, useEffect } from "react";
// import { useFetch } from "../hooks/useFetch";
import { useAxios } from "../hooks/useAxios";

function TodosList2() {
  const baseUrl = "https://jsonplaceholder.typicode.com/todos";
  const [url, setUrl] = useState(baseUrl);
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { data: todos, error, loading } = useAxios(url);
  return (
    <div>
      <div>
        <h1>Todos </h1>
        {loading && <p>loading</p>}
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
    </div>
  );
}

export default TodosList2;
