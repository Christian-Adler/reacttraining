// import {useState} from "react";
import "./UserList.css";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  const users = props.users;
  const userListItems = users.map((user) => (
    <UserListItem key={user.id} userName={user.name} userAge={user.age} />
  ));
  return <ul className={`userlist round`}>{userListItems}</ul>;
};

export default UserList;
