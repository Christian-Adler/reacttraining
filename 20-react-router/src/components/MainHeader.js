// import {useState} from "react";
// import "./MainHeader.css";
// import classes from "./MainHeader.module.css";

import {Link} from "react-router-dom";

const MainHeader = (props) => {
  return (<header>
    <nav>
      <ul>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  </header>);
};

export default MainHeader;
