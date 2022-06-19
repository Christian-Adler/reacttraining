// import {useState} from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  // ... Spread-Operator auf props.input -> alle Eingenschaften werden alle als Property ausgegeben.
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
