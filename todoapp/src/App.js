import React from 'react'
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"
import './App.css'

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todos : TodosData
      }
  }
  render() {
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
  
      return (
          <div className="todo-list">
              {todoItems}
          </div>
      )
  }
}

export default App;
