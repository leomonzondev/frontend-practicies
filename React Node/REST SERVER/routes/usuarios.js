const { Router } = require('express')
const { check, body, } = require('express-validator')
const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios.controller')
const { esRoleValido, emailExist } = require('../helpers/db-validators')
const { validarCampos } = require('../middlewares/validar-campos')

const router = new Router()

router.get('/', usuariosGet)

router.put('/:id', usuariosPut) 

router.post('/', [
    check('nombre', 'Ingrese nombre').not().isEmpty(),
    check('contraseña','contraseña requerido').isLength({ min: 6 }),
    check('correo', 'Ingrese un correo válido').isEmail(),
    check('correo').custom( emailExist ),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( esRoleValido ),
    validarCampos,
], usuariosPost)

router.delete('/', usuariosDelete)

router.patch('/', usuariosPatch)



module.exports = router

