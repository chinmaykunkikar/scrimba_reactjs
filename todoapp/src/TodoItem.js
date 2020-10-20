import React from 'react'
import './TodoItem.css'

function TodoItem() {
    return(
        <div className="todo-item">
            <input type="checkbox" id="todo-check" />
            <label className="todoP" htmlFor="todo-check">This is a todo item</label>
        </div>
    )
}

export default TodoItem