import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

import './styles.css'
import { useForm } from '../src/Hooks/useForm'




const init = () => {


    return JSON.parse(localStorage.getItem('todos')) || []


    // return [
    //     {
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false,
    // }]
}


export const TodoApp = () => {



    const [ todos, dispatch ] = useReducer(todoReducer, [], init)

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    })

    // console.log(description)


    useEffect(() => {
            localStorage.setItem('todos', JSON.stringify( todos ))
    },[todos])


    const handleDelete = ( todoId ) => {
        
        
        const action = {
            type:'delete',
            payload: todoId
        }
        dispatch(action)
    }

    const handleToggle = (todoId ) => {

        dispatch({
            type:'toggle',
            payload: todoId
        })

    }



    const handleSubmit = ( e ) => {
        e.preventDefault()
        

        if (description.trim().length <= 1) {
            return
        }


        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        }

        const action = {
            type:'add',
            payload: newTodo
        }

        dispatch(action)

        reset()
    }






return (
    <div className='lista'>
        <h1>TodoApp ({ todos.length }) </h1>
        <hr/>

    <div>
        <ul style={{listStyle:'none'}}>
            {
                todos.map((todo, i) => (
                    <li
                        className={todo.done ? 'complete' : ''}
                        onClick={() => handleToggle(todo.id)}
                        key={todo.id}>
                        {i + 1} - {todo.desc} &nbsp;
                        <button onClick={() => handleDelete(todo.id)} >X</button>
                    </li>
                ))
            }
        </ul>
    </div>


        <div>
            <h4>Agregar todo</h4>
            <hr/>
            <form onSubmit={handleSubmit} >
                <input 
                    value={description}
                    onChange={handleInputChange}
                    type="text" name='description' placeholder='Agregar...' autoComplete='off' />
                <button type='submit' >Agregar</button>
            </form>
        </div>
    </div>
)
}

