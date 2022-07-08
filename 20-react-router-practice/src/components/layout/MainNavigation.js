// import {useState} from "react";
// import "./MainNavigation.css";
// import classes from "./MainNavigation.module.css";

import classes from "./MainNavigation.module.css";
import {NavLink} from "react-router-dom";

const MainNavigation = (props) => {
  return (<header className={classes.header}>
    <div className={classes.logo}>Great Quotes</div>
    <nav className={classes.nav}>
      <ul>
        <li><NavLink to="/quotes" activeClassName={classes.active}>All Qutoes</NavLink></li>
        <li><NavLink to="/new-quote" activeClassName={classes.active}>Add Qutoe</NavLink></li>
      </ul>
    </nav>
  </header>);
};

export default MainNavigation;
