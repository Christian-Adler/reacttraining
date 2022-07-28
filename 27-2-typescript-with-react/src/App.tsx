import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    // const todos = [
    //     new Todo('learn react'),
    //     new Todo('learn TS'),
    // ];

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevState) => {
            return prevState.concat(newTodo);
        })
    };

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos items={todos}/>
        </div>
    );
}

export default App;
