import { useTasks } from "../context/TaskContext"
import Link from 'next/link'
import Layout from "../components/Layout"

export default function Home() {


const {tasks, deleteTask} = useTasks()

const handleDelete = (e, id) => {
  e.preventDefault()
  e.stopPropagation()
  deleteTask(id)
}

  return (
    <Layout >
        <div className="flex justify-center">
        {
          tasks.length === 0 
          ? <h2>No hay tareas</h2>
          : <div className="w-7/12" >{
          tasks.map((task,index) => (
           <Link href={`/edit/${task.id}`}>
            <div 
              key={task.id}
              className='bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-start items-center '>
            <div>
              <span className="text-5xl mr-5" >{index}</span>
            </div>
            <div>
              <h1 className="font-bold">{task.title}</h1>
              <p className="text-gray-300">{task.description}</p>
              
            </div>

            <button className="bg-red-700 hover:bg-red-600 px-2 py-1" onClick={(e) => handleDelete(e, task.id)} >Delete</button>

            
            </div>
            </Link>))
          }
            </div>
        }
        </div>
    </Layout>
  )
}
