import React from 'react'
import Todo from './Todo'





const TodoList = ({ todos, todoDelete,todoToggleComplete,setTodoEdit }) => {


    return (
        <div>
            <h1 className="text-right display-4">Tareas por hacer</h1>

            {
                todos.length === 0
                ? (
                    <div className="alert alert-primary">No hay tareas en la lista, agrega una para comenzar {":)"}</div>
                )
                : (

                todos.map(todo => (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        todoDelete={todoDelete}
                        todoToggleComplete={todoToggleComplete}
                        setTodoEdit={setTodoEdit}
                    />
                ))

                )
            }


            
        </div>
    )
}

export default TodoList
