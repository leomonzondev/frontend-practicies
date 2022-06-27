
const { response, request } = require('express')
const bcryptjs = require('bcryptjs')

const Usuario = require('../models/usuario')


const usuariosGet = (req = request,res = response) => {

    const { q, nombre = "no name", apikey, limit } = req.query

    res.json({
        msg:'get API - controlador',
        q,
        nombre,
        apikey,
        limit
    })
}

const usuariosPut = (req,res = response) => {

    const id = req.params.id

    res.json({
        msg:'put API - Controlador',
        id
    })
}

const usuariosPost = async(req,res = response) => {

    const { nombre, correo, contraseña, rol } = req.body
    const usuario = new Usuario({ nombre, correo, contraseña, rol })



    //Encriptacion
    const salt = bcryptjs.genSaltSync()
    usuario.contraseña = bcryptjs.hashSync( contraseña, salt )

    //Guardado en BD
    await usuario.save()

    res.json({
        msg:'post API- controlador',
        usuario
    })
    
}

const usuariosDelete = (req,res = response) => {
    res.json({
        msg:'delete API - Controlador'
    })
}

const usuariosPatch = (req,res = response) => {
    res.json({
        msg:'patch API - Controlador'
    })
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}