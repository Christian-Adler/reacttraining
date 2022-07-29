import React from "react";
import classes from "./TodoItem.module.css";

// const TodoItem: React.FC<{ todo: Todo }> = (props) => {
//     return <li key={props.todo.id}>{props.todo.text}</li>
// };
const TodoItem: React.FC<{ text: string, onClick: () => void }> = ({text, onClick}) => {
    return <li className={classes.item} onClick={onClick}>{text}</li>
};
export default TodoItem;
