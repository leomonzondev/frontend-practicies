import React from 'react'

const Todo = ({ todo, todoDelete,todoToggleComplete }) => {


    return (
        <div className="card mt-2">
            <div className="card-body ">
        
                <h3 className="card-title text-right d-flex justify-content-between">
                    {todo.title}
                    <button 
                    onClick={() => todoToggleComplete(todo.id)}
                    className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} ml-2`}>
                        { todo.completed ? 'Terminado' : 'Terminar'}
                    </button>
                </h3>
                <p className="card-text text-right">
                    {todo.description}
                </p>
                <hr />
            
                <div className="d-flex justify-content-end">
                    <button 
                        
                        className="btn btn-sm btn-outline-primary mr-2">Editar</button>
                    <button 
                    onClick={() => todoDelete(todo.id)}
                    className="btn btn-sm btn-outline-danger">Eliminar</button>
                </div>
            </div>
        </div>
        
    )
}

export default Todo
