import React, { useState } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

// import "./App.css";
function App() {
  const [users, setUsers] = useState([
    {
      id: "01",
      name: "Aryan",
      age: 21,
    },
    {
      id: "02",
      name: "Max",
      age: 30,
    },
  ]);
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
