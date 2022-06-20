import MyParagraph from "./MyParagraph";
import React from "react";

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING')
  return (<MyParagraph>{props.show ? 'this is new' : ''}</MyParagraph>);
};

// React sagen, dass es die Props auswerten soll - wenn keine Props Aenderung, dann kein Reevaluate fuer diese Komponente
export default React.memo(DemoOutput);
