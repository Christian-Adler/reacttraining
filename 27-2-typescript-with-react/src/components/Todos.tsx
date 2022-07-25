import React from "react";
import Todo from "../models/todo";

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
    return <ul>
        {
            props.items.map(item => <li key={item.id}>{item.text}</li>)
        }
    </ul>
};

export default Todos;
