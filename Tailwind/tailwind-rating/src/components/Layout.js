import React from 'react'

import Link from 'next/link'

import {AiOutlinePlus} from 'react-icons/ai'
import { useTasks } from '../context/TaskContext'
import TaskFormPage from '../pages/new'




const Layout = ({children}) => {

    const { tasks } = useTasks()


  return (
    <div className='h-screen bg-gray-900 text-white'>
    <header className=' bg-gray-800 text-white px-28 py-5 flex items-center '>

    <Link href="/">
    <a>
        <h1 className='font-black text-lg'>Task App</h1>
    </a>

    </Link>

    <span className='ml-2 text-gray-400 font-bold ' >{tasks.length} tareas</span>



        <div className='flex-grow text-right '>
           <Link href="/new">
            <button className='bg-green-500 hover:bg-green-400 px-5 py-2 font-bold rounded-sm  inline-flex items-center '> <AiOutlinePlus className='mr-2' /> Añadir tarea</button>
           </Link> 
               
        </div>
    </header>

<main className='px-28 py-10'>
    {children}
</main>

    </div>
  )
}

export default Layout