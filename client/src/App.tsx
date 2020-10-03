import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

type TUser = {
  name: String;
};

const App = () => {
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>users</p>
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
