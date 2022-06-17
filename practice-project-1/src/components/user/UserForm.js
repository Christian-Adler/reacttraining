import { useState } from "react";
import "./UserForm.css";
import Button from "../ui/Button";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const createClickHandler = (event) => {
    event.preventDefault();
    const successful = props.addUserHandler({
      name: userName,
      age: parseInt(userAge),
    });
    if (successful) {
      setUserName("");
      setUserAge("");
    }
  };

  return (
    <div className={`userform round`}>
      <h2>Create user</h2>
      <form>
        <div className={`inputContainer`}>
          <label>Name: </label>
          <input
            type="text"
            value={userName}
            onChange={userNameChangeHandler}
          />
        </div>
        <div className={`inputContainer`}>
          <label>Age: </label>
          <input
            type="number"
            step="1"
            value={userAge}
            onChange={userAgeChangeHandler}
          />
        </div>

        <div className={`userform_actions`}>
          <Button type="submit" onClick={createClickHandler}>
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
