import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button RUNNING');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// Button bringt memo nichts, weil prinzipiell
// props.onClick === props.previos.onClick
// verglichen wird - 2 Funktionen die zwar das gleiche tun, aber eben nicht die gleiche Funktion sind (neues Objekt)
// Daher aufpassen, ob man Referenzen/Pointer (Object, Array, Function) in Props uebergibt.
export default React.memo(Button);
