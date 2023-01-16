import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="user-list">
      {props.users.map((user) => {
        return (
          <UserItem key={user.id} name={user.name} age={user.age}></UserItem>
        );
      })}
    </div>
  );
};

export default UserList;
