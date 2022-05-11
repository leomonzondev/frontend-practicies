import {createContext, useContext, useState} from 'react'

export const TaskContext = createContext()

export const useTasks = () => useContext(TaskContext)




export const TaskProvider =  ({children}) => {

const [tasks, setTasks] = useState([{id:'1', title:'some task', description: 'ASDAS'}])


const addTask = () => {

}


    return (
        <TaskContext.Provider value={{tasks}}>
            {children}
        </TaskContext.Provider>
    )

}