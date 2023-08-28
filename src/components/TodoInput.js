import React from 'react';

const TodoInput = ({todosInput, updateInput, addTodo}) => {
    return (
        <div className="form-row">
            <div className="col-10">
                <input type="text" className="form-control" placeholder="Add Todo" value={todosInput} onChange={updateInput} />
            </div>
            <div className="col-2">
                <button onClick={addTodo} type="submit" className="btn btn-primary btn-block">
                    Add
                </button>
            </div>
        </div> 
    );
}

export default TodoInput;