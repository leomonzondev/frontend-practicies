import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'http'


const app = express()
const PORT = 3001

const server = http.createServer(app)

app.use(cors())

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods:['GET', 'POST']
    }
})

const candidates = {
    "voteA": { votes: 0, label: 'PA'},
    "voteB": { votes: 0, label: 'PB'}
}

io.on('connection', socket => {
    
    socket.on('send_message', data => {
        socket.emit('receive_message', data)
    })

})


server.listen(PORT, () => {
    console.log(`SV running on port ${PORT}`)
})