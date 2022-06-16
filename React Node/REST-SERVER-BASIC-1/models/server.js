const express = require('express')
const cors = require('cors')




class Server {

    //INICIO DEL SERVER
    constructor() {

        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'


        this.middlewares()

        this.routes()

        this.listen()
    }

    //MIDDLEWARES
    middlewares() {
        //CORS
        this.app.use( cors() )

        //LECTURA Y PARSEO DEL BODY
        this.app.use( express.json() )

        //DIRECTORIO PUBLICO
        this.app.use( express.static('public'))
    }

    //RUTAS
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios.js'))
    }


    //LEVANTAR SV
    listen(){
        this.app.listen(this.port, () => {
            console.log('SERVER ON', this.port)
        })
    }
}

module.exports = Server