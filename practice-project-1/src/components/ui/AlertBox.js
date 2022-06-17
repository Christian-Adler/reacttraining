// import {useState} from "react";
import "./AlertBox.css";
import Button from "./Button";

const AlertBox = (props) => {
  return (
    <div className="alertbox round">
      <h2>{props.title}</h2>
      <div className="alertbox_message">{props.message}</div>
      <div className="alertbox_actions">
        <Button onClick={props.onOkClick}>OK</Button>
      </div>
    </div>
  );
};

export default AlertBox;
