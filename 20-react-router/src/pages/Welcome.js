// import {useState} from "react";
// import "./Welcome.css";
// import classes from "./Welcome.module.css";

import {Route} from "react-router-dom";

const Welcome = (props) => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcom new user!</p>
      </Route>
    </section>
  );
};

export default Welcome;
