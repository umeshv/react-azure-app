import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Call the API via reverse proxy
    axios
      .get("/api/users?page=1")
      .then((response) => {
        setUsers(response.data.data); // Set users from API response
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Azure Static Web App</h1>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <div>
          <h2>Employee List</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <img
                  src={user.avatar}
                  alt={user.first_name}
                  style={{ width: "50px", borderRadius: "50%" }}
                />
                <span style={{marginLeft: "10px"}}>
                  {user.first_name} {user.last_name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
