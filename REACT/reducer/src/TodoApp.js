import React, { useEffect, useReducer } from 'react'
import { TodoReducer } from './TodoReducer'
import { useForm } from './Hooks/useForm'
import './styles.css'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}



export const TodoApp = () => {



    
    const [ todos, dispatch ] = useReducer( TodoReducer, [], init)
    
 

    const [ {description}, handleInputChange, reset ]   = useForm({
        description:''
    })

    const handleDelete = (todoId) => {

        dispatch({
            type:'DELETE',
            payload: todoId
        })

    }


    const handleToggle = (todoId) => {

        dispatch({
            type:'TOGGLE',
            payload:todoId
        })

        console.log('first')

    }


    const handleAdd = (e) => {
        e.preventDefault()

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type:'ADD',
            payload: newTodo
        }

        dispatch(action)


        reset()
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    },[todos])


  return (
    <div>
        <h1>Todo App</h1>
        <hr/>

        <ul>
            {
                todos.map( ( todo,index ) => (
                    <div key={todo.id}>
                        <li
                            onClick={() => handleToggle(todo.id)}
                            className={todo.done ? 'complete' : ''}
                            >{index + 1 }-{todo.desc}</li>
                        <button onClick={() => handleDelete(todo.id)}>X</button>
                    </div>
                ))
            }
        </ul>

        <hr/>
        <h2>Agregar </h2>
        <form onSubmit={handleAdd}>
            <input
                type='text'
                name='description'
                onChange={handleInputChange}
                value={description}
                placeholder='Agregar tarea'
            />
            <button>Añadir</button>
        </form>
    </div>
  )
}
