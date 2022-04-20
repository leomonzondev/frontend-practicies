import express from 'express'

import http from 'http'
import { Server } from 'socket.io'

import cors from 'cors'


const app = express()
const server = http.createServer(app)

app.use(cors())

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods:['GET', 'POST']
    }
})


io.on('connection', (socket) => {
  
    socket.on('send_message', (data) => {
        socket.broadcast.emit('receive_message', data)
    })

})


server.listen(3001, () => {
    console.log('SV Corriendo en port 3001')
})