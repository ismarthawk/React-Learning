import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

function Users() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const { data, loading, error } = useFetch(url);
  useEffect(() => {
    setUsers(data);
  }, [data, loading, error]);

  return (
    <div>
      <h1>Users</h1>
      {loading && <p>loading</p>}
      {error && <p>error</p>}
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <h1>{user.id}</h1>
            <p>{user.name}</p>
          </div>
        ))}
    </div>
  );
}

export default Users;
