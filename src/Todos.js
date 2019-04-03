import React from 'react';

const Todos = ({todos, deleteTodos})=>{
    const todolist = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={ ()=>{deleteTodos(todo.id)}}>{todo.task}</span>
                </div>
            )
        })
    ) : (
        <p className="center"> Yay, No todo's left!</p>
    );
    return(
        <div className="todos collection container">
           {todolist}
        </div>
    );
}
export default Todos;