// import {useState} from "react";
// import "./DemoOutput.css";
// import classes from "./DemoOutput.module.css";

import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING')
  return (<MyParagraph>{props.show ? 'this is new' : ''}</MyParagraph>);
};

export default DemoOutput;
