import React from 'react';
import TodoList from './TodoList';
import './todo.css';

function TodoContainer() {
    return (
        <div className='todo-app'>
            <TodoList />
        </div>
    )
}

export default TodoContainer;
