import "./UserListItem.css";

const UserListItem = ({ userName, userAge }) => {
  return (
    <li className={`userlistitem round`}>
      <span>{userName}</span>
      <span>{userAge}</span>
    </li>
  );
};

export default UserListItem;
