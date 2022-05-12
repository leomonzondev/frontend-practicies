import {createContext, useContext, useState} from 'react'
import {v4 as uuid} from 'uuid'

export const TaskContext = createContext()

export const useTasks = () => useContext(TaskContext)




export const TaskProvider =  ({children}) => {

const [tasks, setTasks] = useState([])


const createTask = (title, description) => {
    setTasks([...tasks, {title,description, id:uuid()}])
}

const deleteTask = (id) => {
    setTasks([ ...tasks.filter(task => task.id !== id)])

}

const updateTask = (id, updatedTask) => {

    setTasks([...tasks.map(task => task.id === id ? {...task, ...updatedTask} : task)])

}


    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                updateTask,
                deleteTask
                }}>
            {children}
        </TaskContext.Provider>
    )

}