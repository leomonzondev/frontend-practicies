
const Role = require('../models/role')
const Usuario = require('../models/usuario')

const esRoleValido = async( rol='' ) => {
    const existeRol = await Role.findOne({ rol })
    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`)
    }
}

const emailExist = async( correo = '') => {
    const existeCorreo = await Usuario.findOne({ correo })
    if ( existeCorreo ) {
        throw new Error(`El correo ${ correo } ya está registrado`)
    }
} 

module.exports = {
    esRoleValido,
    emailExist
}