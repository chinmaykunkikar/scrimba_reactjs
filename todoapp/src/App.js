import React from 'react'
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"
import './App.css'

function App() {
  const todoComponets = TodosData.map(todos => <TodoItem key={todos.id} text={todos.text} completed={todos.completed} />)
  return (
      <div className="todo-list">
          {todoComponets}
      </div>
  )
}

export default App;
