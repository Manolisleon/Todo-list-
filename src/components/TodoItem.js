import React from 'react';

const TodoItem = ({index, title, done, removeTodo, toggleTodo}) => {
    return (
        <div className="style alert alert-dark clearfix">
            <label className="title float-left">
            <input onChange={(e) => toggleTodo(e, index)} type="checkbox" className="done-checkbox" checked={done} />
            &nbsp;{""}
            {done ? <strike>{title}</strike> : <span>{title}</span>}
            </label>
            <button onClick={() => removeTodo(index)} className="btn btn-danger float-end">x</button>
        </div>
    ); 
}

export default TodoItem;