const express = require('express')
const cors = require('cors')


class Server {

    constructor() {

        this.app = express()
        this.port = process.env.PORT
        this.path = '/api/recetas'


        this.middlewares()
        this.routes()
        this.listen()
    }

    //MIDDLEWARES
    middlewares() {

        //cors
        this.app.use( cors() )
        //Body parser
        this.app.use( express.json() )
        //static
        this.app.use( express.static('public') )
    }

    //CONFIG ROUTES
    routes() {

        this.app.use(this.path, require('../routes/routes'))

    }

    //SV UP
    listen() {

        this.app.listen(this.port, () => {
            console.log('SV RUNNING', this.port)

        })

    }




}


module.exports = Server