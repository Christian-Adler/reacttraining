// import {useState} from "react";
// import "./Greeting.css";
// import classes from "./Greeting.module.css";

import {useState} from "react";
import Output from "./Output";

const Greeting = (props) => {
  const [changedText, setChangedText] = useState();
  
  const changeTextHandler = () => {
    setChangedText(true);
  };
  
  return (<div><h2>Hello World!</h2>
    {!changedText && <Output>I's good to see you!</Output>}
    {changedText && <Output>Changed</Output>}
    <button onClick={changeTextHandler}>Change text</button>
  </div>);
};

export default Greeting;
