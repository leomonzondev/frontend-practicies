import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'http'



const app = express()



const server = http.createServer(app)
const port = 3001
app.use(cors())

const io = new Server(server, {
    cors: {
        origin: `http://localhost:3000`,
        methods: ['GET', 'POST' ]
    }
})


io.on('connection', (socket) => {
    console.log('New user')
    socket.emit('chat-message', 'HOLAA CONECTAO')
})



app.get('/', (req,res) => {
    res.send('IEEEEEE')
})


app.listen(port, () => {
    console.log(`listening on port ${port}, NICE JOB DUDE`)
})

