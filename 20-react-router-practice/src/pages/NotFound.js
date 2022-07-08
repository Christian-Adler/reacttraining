// import {useState} from "react";
// import "./NotFound.css";
// import classes from "./NotFound.module.css";

import {useLocation} from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  // console.log(location); // {pathName, search}
  const queryParams = new URLSearchParams(location.search);
  const err = queryParams.get('err');
  return (<div className="centered"><p>Not found!<br/>{`${err ? err : ''}`}</p></div>);
};

export default NotFound;
