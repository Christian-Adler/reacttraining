import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc
// type Props = {
//     children?: React.ReactNode, // ? >> optional
//     items: string[]
// };

// wenn children nicht gebraucht werden:
// type Props = {
//     items: string[]
// };
//
// const Todos: React.FC<Props> = (props) => {

// inline
// const Todos: React.FC<{ items: string[] }> = (props) => {
//     return <ul>
//         {
//             props.items.map(item => <li key={item}>{item}</li>)
//         }
//     </ul>
// };

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return <ul className={classes.todos}>
        {
            props.items.map(item => <TodoItem key={item.id} text={item.text}/>)
        }
    </ul>
};

export default Todos;
