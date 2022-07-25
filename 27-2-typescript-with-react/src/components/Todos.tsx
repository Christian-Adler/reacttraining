import React from "react";

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
const Todos: React.FC<{ items: string[] }> = (props) => {
    return <ul>
        {
            props.items.map(item => <li key={item}>{item}</li>)
        }
    </ul>
};

export default Todos;
