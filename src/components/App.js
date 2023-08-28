import React, { useState } from "react";
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

const inisializeTodos = [
    {
        title: "Learn JavaScript",
        done: false,
    },
    {
        title: "Learn PHP",
        done: true,
    } 
]

const App = () => {
    const [todosInput, settodosInput] = useState("");
    const [todos, setTodos] = useState(inisializeTodos);
    const updateInput = (e) => {
        settodosInput(e.target.value);
    };
    const addTodo = (e) => {
        setTodos([...todos, { title: todosInput, done: false }]);
        settodosInput("");
    };
    const removeTodo = (index) => {
        const newTodo = todos.filter((_todo, i) => i !== index);
        setTodos(newTodo);
    };
    const toggleTodo = (e, index) => {
        const newTodos = [...todos];
        newTodos[index].done = e.target.checked;

        setTodos(newTodos);
    };
    return <div className="container">
        <div className="row">
            <div className="col-sm">
                <h1>Todo list</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <TodoInput todosInput={todosInput} updateInput={updateInput} addTodo={addTodo} />
                <br />
                <div className="items">
                    {todos.map(({title, done}, i) => <TodoItem index={i} key={title} title={title} done={done} removeTodo={removeTodo} toggleTodo={toggleTodo} />)}
                </div>
            </div>
        </div>
    </div>
}

export default App;