import React from 'react'
import Todo from './Todo'





const TodoList = ({ todos, todoDelete,todoToggleComplete }) => {


    return (
        <div>
            <h1 className="text-right">Todo Lidt</h1>
            {
                todos.map(todo => (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        todoDelete={todoDelete}
                        todoToggleComplete={todoToggleComplete}
                    />
                ))
            }
            
        </div>
    )
}

export default TodoList
