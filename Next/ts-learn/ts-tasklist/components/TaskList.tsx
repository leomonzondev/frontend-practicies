import React from 'react'
import { Tarea } from '../interfaces/Task'
import { TaskCard } from './TaskCard'

interface Props {
  tareas: Tarea[]
}


export default function TaskList({tareas}:Props) {
  return (
    <>
        { tareas.map( tarea => <TaskCard tarea={tarea} />)
        }
    </>

  )
}
