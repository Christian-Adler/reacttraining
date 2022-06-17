import React, { useState } from "react";
import ModalOverlay from "./components/ui/ModalOverlay";
import AlertBox from "./components/ui/AlertBox";
import Users from "./components/user/Users";

const DUMMY_USERS = [
  { id: 1, name: "A", age: 2 },
  { id: 2, name: "B", age: 123 },
];

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState(DUMMY_USERS);

  const closeOverlayMessageHandler = (event) => {
    event.stopPropagation();
    setErrorMessage("");
    setShowAlert(false);
  };

  let overlay;
  if (showAlert)
    overlay = (
      <ModalOverlay onClick={closeOverlayMessageHandler}>
        <AlertBox
          title={`Error`}
          message={`${errorMessage}`}
          onOkClick={closeOverlayMessageHandler}
        />
      </ModalOverlay>
    );

  const addUserHandler = (user) => {
    // alert(JSON.stringify(user));
    let errMessage = "";
    if (!user.name || user.name.trim().length === 0)
      errMessage += `${errMessage.length > 0 ? " & " : ""}Invalid user name!`;
    if (isNaN(user.age) || user.age < 0)
      errMessage += `${errMessage.length > 0 ? " & " : ""}Invalid user age!`;

    if (errMessage.length > 0) {
      setErrorMessage(errMessage);
      setShowAlert(true);
      return false;
    }

    setUsers((prevState) => [user, ...prevState]);
    return true;
  };

  return (
    <div>
      <Users users={users} addUserHandler={addUserHandler} />
      {overlay}
    </div>
  );
}

export default App;
