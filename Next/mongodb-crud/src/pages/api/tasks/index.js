// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { dbConnect } from '../../../utils/mongoose'
// import Task from '../../../models/Task'

import { dbConnect } from 'utils/mongoose'

import Task from 'models/Task'


dbConnect()

export default async function handler(req, res) {

    const { method, body } = req

    console.log(req.method, req.url)

    switch (req.method) {
        case "GET":{
            try{
                const tasks = await Task.find({})
                return res.status(200).json(tasks)
            }
            catch(err){
                return res.status(500).json(err)
            }
            }
        case "POST":
            try{
                const newTask = new Task(body)
                const savedTask =await newTask.save()
                
                return res.status(201).json(savedTask)
            }
            catch(err) {
                res.status(500).json(err)
            }
        default:
            return res.status(400).json("Este metodo no está soportado")
    }

}
  