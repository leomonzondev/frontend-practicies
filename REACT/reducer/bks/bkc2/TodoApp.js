import React, { useEffect, useReducer } from 'react'
import { TodoReducer } from './TodoReducer'
import './styles.css'
import { useForm } from '../../src/Hooks/useForm'


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || []

}


export const TodoApp = () => {

    


    const [ todos, dispatch ] = useReducer(TodoReducer, [], init)

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    })


    const handleToggle = (todoId) => {



        dispatch({
            type:'TOGGLE',
            payload: todoId
        })

    }

    const handleDelete = (todoId) => {
        dispatch({
            type:'DELETE',
            payload:todoId
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim() <= 1) {
            return
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc:description,
            done: false
        }

        const action = {
            type: 'ADD',
            payload: newTodo
        }

        dispatch(action)

        reset()

    }


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos))
    },[ todos ])


  return (
    <div styles={{display:'flex'}}>
        <h1>Todo App ({todos.length}) </h1>
        <hr/>

        
        <ul style={{listStyle:'none'}}>

            {
                todos.map((todo,i) => (
                    <div key={todo.id}>

                    
                    <li
                        
                        className={todo.done ? 'complete' : ''}
                        onClick={() => handleToggle(todo.id)}

                    >
                        {i + 1} - {todo.desc} &nbsp;
                        
                    </li>
                    <button onClick={() => handleDelete(todo.id)}>X</button>
                    </div>
                ))
            }
        </ul>
     

        <hr />
        <div>
            <h2>Agregar</h2>
            <form onSubmit={handleSubmit} >
                <input
                    value={description}
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Nueva tarea'
                    name='description'
                    autoComplete='off' />
                <button type='submit' >Añadir</button>
            </form>

        </div>
    </div>
  )
}
