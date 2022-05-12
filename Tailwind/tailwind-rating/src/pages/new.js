
import { useRouter } from 'next/router'
import React, {useState, useContext, useEffect} from 'react'

import Link from 'next/link'

import Layout from '../components/Layout'
import { useTasks } from '../context/TaskContext'



export const TaskFormPage = () => {

  const [input, setInput] = useState({
    title:'',
    description:''
  })

const {query, push} = useRouter()

const { createTask, tasks, updateTask } = useTasks() 



  const onChangeinput = (e) => {
    const {name, value} = e.target
    setInput({...input, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!query.id) {
      createTask(input.title, input.description)
    } else {
      updateTask(query.id, input)
    }

    push('/')

  }



  useEffect(() => {
    if (query.id) {
      const match = tasks.find(task => task.id === query.id)
      setInput(match)
    }
  },[])


  return (
    <Layout>
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>{query.id ? 'Update the task' : 'Add A Task'}</h1>
      <input
        name='title'
        onChange={(e) => onChangeinput(e)}
        value={input.title}
        placeholder='Add Title'
        className='bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5 '/>

      <textarea
        name='description'
        onChange={(e) => onChangeinput(e)}
        value={input.description}
        rows="2"
        placeholder='Add a task'
        className='bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5 ' ></textarea>

      <button
        disabled={(!input.title)}
        className='bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30 ' >{query.id ? 'Update' : 'Create Task'}</button>

    </form>

    </Layout>
  )
}

export default TaskFormPage
