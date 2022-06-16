const express = require('express')
const cors = require('cors')


class Server {

    constructor(){

        this.app = express()
        this.port = process.env.PORT
        this.path = '/api/users'

        this.middlewares()
        this.routes()
        this.listen()
    }

    //MIDDLEWARES
    middlewares() {
        //cors
        this.app.use(cors())
        //parser
        this.app.use(express.json())
        //public
        this.app.use(express.static('public'))
    }


    routes() {
        this.app.use(this.path, require('../routes/routes'))


    }

    //SV UP
    listen() {
        this.app.listen(this.port, () => {
            console.log('SV RUNNING PORT', this.port)
        })
    }



}

module.exports = Server