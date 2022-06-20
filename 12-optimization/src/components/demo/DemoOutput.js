// import {useState} from "react";
// import "./DemoOutput.css";
// import classes from "./DemoOutput.module.css";

const DemoOutput = (props) => {
  console.log('DemoOutput')
  return (<p>{props.show ? 'this is new' : ''}</p>);
};

export default DemoOutput;
