import React, { useState } from 'react'
import { Tarea } from '../interfaces/Task'
import TaskList from './TaskList'




export const App = () => {

    const [tareas, setTareas] = useState<Tarea[]>([
        {
        id:1,
        title:'learn react',
        description:'learn reeact',
        completed:false
        }
    ])


return (
    <div>
        <nav>
        <div>
        <a href='/'>
            {}
        </a>
        </div>
    </nav>
    <h1>Tareas</h1>

    <main>
        <TaskList tareas={tareas} />

    </main>


        
        
    </div>
)
}
