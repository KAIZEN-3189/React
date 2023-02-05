import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevState) => {
      return [...prevState, user];
    });
  };

  return (
    <>
      <AddUser onUserAdd={addUserHandler} />
      <UsersList users={users}></UsersList>
    </>
  );
}

export default App;
