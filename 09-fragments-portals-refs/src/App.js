import React, {Fragment, useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  
  // return (
  //   <React.Fragment>
  //     <AddUser onAddUser={addUserHandler}/>
  //     <UsersList users={usersList}/>
  //   </React.Fragment>
  // );
  // return (
  //   <>  // Diesen Syntax muss das Projekt verstehen
  //     <AddUser onAddUser={addUserHandler}/>
  //     <UsersList users={usersList}/>
  //   </>
  // );
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
