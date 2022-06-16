const { response, request } = require('express')

const usuariosGet = ( req = request, res = response ) => {

    const { q, nombre = "No name", apikey, limit } = req.query

    res.json({
        msg: 'Get API - Controller',
        q,
        nombre,
        apikey,
        limit
    })
}

const usuariosPut = (req,res = response) => {

    const id = req.params.id

    res.json({
        msg: 'PUT API - Controller',
        id
    })
}

const usuariosPost = ( req, res = response ) => {

    const { nombre, edad } = req.body

    res.json({
        msg:'POST API - Controller',
        nombre,
        edad
    })

}

const usuariosDelete = ( req, res = response ) => {
    res.json({
        msg: 'DELETE API - Controller'
    })
}

const usuariosPatch = ( req, res = response ) => {
    res.json({
        msg:'PATCH API - Controller'
    })
}


module.exports = {
    usuariosDelete,
    usuariosGet,
    usuariosPatch,
    usuariosPost,
    usuariosPut
}