import React from "react";

// const TodoItem: React.FC<{ todo: Todo }> = (props) => {
//     return <li key={props.todo.id}>{props.todo.text}</li>
// };
const TodoItem: React.FC<{ text: string }> = ({text}) => {
    return <li>{text}</li>
};
export default TodoItem;
