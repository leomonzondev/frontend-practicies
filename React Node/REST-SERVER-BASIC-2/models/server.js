const express = require('express')
const cors = require('cors')



class Server {

    constructor(){

        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users'

        this.middlewares()
        this.routes()
        this.listen()

    }

    //MIDDLEWARES
    middlewares(){
        //cors
        this.app.use( cors() )
        //body parser
        this.app.use( express.json() )
        //public directory
        this.app.use( express.static('public'))
    }

    //ROUTES
    routes(){
        this.app.use(this.usersPath, require('../routes/users'))
    }


    //SV UP
    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port)
        })
    }

}

module.exports = Server