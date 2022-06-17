// import {useState} from "react";
import "./UserList.css";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  const users = props.users;
  const userListItems = users.map((user) => (
    <UserListItem key={user.id} user={user} />
  ));
  return <ul className={`userlist round`}>{userListItems}</ul>;
};

export default UserList;
