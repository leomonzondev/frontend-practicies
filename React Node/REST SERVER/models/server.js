const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config')



class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        // DB Connection
        this.conectarDB()

        //Middlewares -> Funciones que siempre se ejecutan al levantar servidor
        this.middlewares()

        //Rutas de mi app

        this.routes()
    }

    async conectarDB() {
        await dbConnection()
    }

    middlewares() {

        // CORS
        this.app.use( cors() )

        // Lectura y parseo del body
        this.app.use( express.json() )

        //Directorio Publico
        this.app.use( express.static('public') )

    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }



    listen() {
        this.app.listen(this.port, () => {
            console.log('sv running in port ', this.port)
        })
    }
}


module.exports = Server