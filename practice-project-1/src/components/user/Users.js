// import {useState} from "react";
import "./Users.css";
import UserList from "./UserList";
import UserForm from "./UserForm";

const Users = (props) => {
  return (
    <div className={`users`}>
      <UserForm addUserHandler={props.addUserHandler} />
      {props.users.length > 0 && <UserList users={props.users} />}
    </div>
  );
};

export default Users;
