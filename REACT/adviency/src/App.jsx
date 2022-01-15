import React, { useState } from 'react'

export const App = () => {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false
    }
    
      setTodos([...todos].concat(newTodo))
      setTodo('')
    
  }

  const handleDelete = (id) => {
    const updateTodos = [...todos].filter((todo) => todo.id !== id )
    setTodos(updateTodos)
  }

  const handleDeleteAll = () => {
    setTodos([])
  }

  
  return (
    <main>
      <div className='gift__container'>
        <h1>Regalos</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            placeholder='Escribe aquí el regalo que deseas' 
            onChange={(e) => setTodo(e.target.value)}
            />
            <button type='submit'>Añadir</button>
            <button onClick={handleDeleteAll}> Delete All</button>
        </form>
        
        
          {
            todos.map((todo) => <div key={todo.id} className='text'>
              <div>{todo.text}</div> <button onClick={() => handleDelete(todo.id)}>X</button>
            </div>)
          }
        
      </div>
    </main>
  )
}

