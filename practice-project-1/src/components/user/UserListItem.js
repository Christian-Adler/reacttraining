import "./UserListItem.css";

const UserListItem = ({ user }) => {
  console.log(user);
  return (
    <li className={`userlistitem round`}>
      <span>{user.name}</span>
      <span>{user.age}</span>
    </li>
  );
};

export default UserListItem;
