const express = require('express')
const cors = require('cors')
const app = express()

const whitelist = ['http://localhost:8080','http://localhost:3000']

app.use(express.json())

app.use(cors({
    origin: whitelist
}))

const students = [
    {id: 1, name: 'Jorge', age: 20, enroll: true},
    {id: 2, name: 'Marina', age: 30, enroll: false},
    {id: 3, name: 'Antony', age: 25, enroll: false},
]

app.get('/',(req,res) => {
    res.send('Node JSSSSSS API')
})


app.get('/api/students',(req,res) => {
    res.send(students)
})

app.get('/api/students/:id', (req,res) => {
    const student =  students.find(c => c.id === parseInt(req.params.id))
    if (!student) return res.status(404).send('Estudiante no encontrado')
    else res.send(student)
})


app.post('/api/students', (req,res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: (req.body.age),
        enroll: (req.body.enroll === 'true')
    }

    students.push(student)
    res.send(student)
})

app.delete('/api/students/:id', (req,res) => {
    const student = students.find(c => c.id === parseInt(req.params.id))
    if (!student) return res.status(404).send('Estudiante no encontrado')

    const index = students.indexOf(student)
    students.splice(index, 1)
    res.send(student)

})

const port = process.envport || 8080

app.listen(port, () => console.log(`Conectado en el puerto ${port}`))