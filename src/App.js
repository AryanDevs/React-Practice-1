import React, { useState } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

// import "./App.css";
function App() {
  const [users, setUsers] = useState([]);
  const userFormSubmitHandler = (userData) => {
    const userObject = {
      id: Math.random().toString(),
      ...userData,
    };

    setUsers((prevState) => {
      return [userObject, ...prevState];
    });
  };
  return (
    <div className="container">
      <h1>Less gooo</h1>
      <UserForm onFormSubmit={userFormSubmitHandler}></UserForm>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
