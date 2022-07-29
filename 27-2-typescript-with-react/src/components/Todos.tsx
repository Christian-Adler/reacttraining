import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import {TodosContext} from "../store/todos-context";

// https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc
// type Props = {
//     children?: React.ReactNode; // ? >> optional
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

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return <ul className={classes.todos}>
        {
            todosCtx.items.map(item => <TodoItem key={item.id} text={item.text}
                                                 onClick={todosCtx.removeTodo.bind(window, item.id)}/>)
        }
    </ul>
};

export default Todos;
