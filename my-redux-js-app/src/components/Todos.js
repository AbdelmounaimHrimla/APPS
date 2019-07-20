import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                
                <div key={todo.id} className="collection-item">
                    <hr/>
                    <span onClick={() =>{ deleteTodo(todo.id)}}>{todo.content}</span>
                    <hr/>
                </div>
            )
        })
    ) : (
        <p className="center">You Have No Todos Left</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;