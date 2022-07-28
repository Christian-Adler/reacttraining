import React, {useRef} from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (value: string) => void }> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        // const enteredText: string | undefined = inputRef.current?.value;
        const enteredText: string = inputRef.current!.value; // 100% sicher, das hier current gesetzt ist und value moeglich ist

        if (enteredText.trim().length === 0)
            // throw an error?
            return;

        props.onAddTodo(enteredText);
    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={inputRef}/>
        <button>Add Todo</button>
    </form>
};
export default NewTodo;
