// import {useState} from "react";
// import "./MyParagraph.css";
// import classes from "./MyParagraph.module.css";

const MyParagraph = (props) => {
  console.log('MyParagraph RUNNING');
  return <p>{props.children}</p>;
};

export default MyParagraph;
