import React, { useState } from 'react'

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const initialTodos = [
  {
      id:1,
      title:"Todo1 ",
      description:"Desc del todo1",
      completed:false
  },
  {
      id:2,
      title:"Todo2 ",
      description:"Desc del todo2",
      completed:true
  }
]

function App() {

  const [todos, setTodos] = useState(initialTodos)

  const todoDelete = (todoId) => {
    
    const changedTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(changedTodos)
  }

  const todoToggleComplete = (todoId) => {

    // const changedTodos = todos.map(todo => {

    //   const todoEdit = {
    //     ...todo,
    //     completed: !todo.completed
    //   }

    //   if (todo.id === todoId) {
    //     return todoEdit
    //   } else {
    //     return todo
    //   }
    // })


    // const changedTodos = todos.map(todo => (
    //   todo.id === todoId
    //   ? {...todo, completed: !todo.completed}
    //   : todo
    // ))


    const changedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed:!todo.completed} : todo)

    setTodos(changedTodos)
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList 
              todos={todos}
              todoDelete={todoDelete}
              todoToggleComplete={todoToggleComplete}
          />
        </div>
        <div className="col-4">
          <TodoForm />
        </div>
      </div>
        
        
    </div>
  );
}

export default App;
