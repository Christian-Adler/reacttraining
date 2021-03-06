import Todo from "../models/todo";
import React, {useState} from "react";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: (text: string) => {
    },
    removeTodo: (id: string) => {
    }
});

const TodosContextProvider: React.FC<{ children?: React.ReactNode }> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevState) => {
            return prevState.concat(newTodo);
        })
    };

    const removeTodoHandler = (id: string) => {
        setTodos((prevState) => {
            return prevState.filter(todo => todo.id !== id);
        })
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodosContextProvider;
