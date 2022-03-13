import React, { useReducer, useState } from 'react'


const initialTodos = [
    {
        id:1,
        title: 'Todo #1'
    },
    {
        id:2,
        title: 'Todo #2'
    }
]

const TYPES = {
    ADD : 'ADD',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE'

}

const reducer = (state, action ) => {

    switch (action.type) {
        case TYPES.DELETE:
            return state.filter( todo => todo.id !== action.payload)
        case TYPES.ADD:
            return [...state, action.payload]
        case TYPES.UPDATE:{
            const todoEdit = action.payload
            return state.map(todo => todo.id === todoEdit.id ? todoEdit : todo)}
        default:
            return state
    }

}

export const TodoApp = () => {


    const [todos, dispatch] = useReducer(reducer, initialTodos)
    const [text, setText] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        const newTodo = { id: new Date().getTime() , title:text}

        dispatch({type: TYPES.ADD, payload: newTodo})

        setText('')
    }

  return (
    <div>
        <h2>Todo App</h2>

        
        <form onSubmit={e=>handleSubmit(e)}>
            <input type='text' placeholder='Añadir nuevo todo' value={text} onChange={(e) => setText(e.target.value)} />
        </form>
       
        <ul>
            {
                todos.map(todo => 
                    <li key= {todo.title}>
                        {todo.title}
                        <button onClick={() => dispatch({type: TYPES.DELETE, payload: todo.id})}>Delete</button>
                        <button onClick={() => dispatch({type: TYPES.UPDATE, payload: {...todo, title:text}})}>Update</button>
                    </li>
                )
            }
        </ul>
        

    </div>
  )
}
