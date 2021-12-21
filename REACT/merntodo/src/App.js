import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import { CreateTodo } from './components/CreateTodo'
import { EditTodo } from './components/EditTodo'
import { TodoList } from './components/TodoList'



export const App = () => {
    return (
        <div>
            <nav className='navbar bg-light navbar-expand-lg navbar-light'>
                <ul className='navbar-nav mr-auto'>
                    <li className='navbar-item'>
                        <Link to="/" className="nav-link">Todos</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/create" className="nav-link">Create Todo</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path="/" element={<TodoList />} />
                <Route path="/edit/:id" element={<EditTodo />} />
                <Route path="/create" element={<CreateTodo />} />
                
            </Routes>
        </div>
    )
}
