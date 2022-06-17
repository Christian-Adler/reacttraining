// import {useState} from "react";
import "./ModalOverlay.css";

const ModalOverlay = (props) => {
  return (
    <div className="modaloverlay" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default ModalOverlay;
