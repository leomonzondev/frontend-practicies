
import Task from "models/Task"
import { dbConnect } from "utils/mongoose"


dbConnect()


export default async (req,res)  => {
    
    const { method, body, query: {id} } = req
    
    switch (method) {
        case "GET":{
            const task = await Task.findById(id)
            if(!task) return res.status(404).json({msg: "Tarea no encontrada"})
            return res.status(200).json(task)
        }
            
        case "PUT": {
            return
        }

        case "DELETE":{
            return
        }

        default:
            return res.status(400).json("El metodo no es soportado")
    }

}