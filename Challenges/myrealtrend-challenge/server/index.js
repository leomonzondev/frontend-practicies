import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'http'


const app = express()
const PORT = 3002

const server = http.createServer(app)

app.use(cors())

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods:['GET', 'POST']
    }
})

const candidates = {
    "voteA": 0,
    "voteB": 0
}

const products = {
    productA: {
        title:'',
        description:'',
        image:''
    },
    productB: {
        title:'',
        description:'',
        image:''
    }
}

const productsReset = {
    productA: {
        title:'',
        description:'',
        image:''
    },
    productB: {
        title:'',
        description:'',
        image:''
    }
}



io.on('connection', socket => {

    

    socket.on('vote', index => {
        if(index === 0) {
            candidates.voteA += 1
        }
        if(index === 1) {
            candidates.voteB += 1
        }
        
        io.emit('update', candidates)
        console.log(candidates)
    })

    socket.on('reset', () => {
        candidates.voteA = 0
        candidates.voteB = 0
        
        


        io.emit('update', candidates)
        io.emit('update', productsReset)
    })
    

    socket.on('loadProduct', (clientProduct) => {
        const productA = products.productA
        
        productA.title = clientProduct.title
        productA.description = clientProduct.price
        productA.image = clientProduct.thumbnail
        
        console.log('recibido')
        io.emit('update', products)
    })

    


})




// io.on('connection', socket => {
    
//     socket.on('send_message', data => {
//         socket.emit('receive_message', data)
//     })

// })


server.listen(PORT, () => {
    console.log(`SV running on port ${PORT}`)
})