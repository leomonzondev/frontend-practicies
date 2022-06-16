const { Router } = require('express')
const { usuariosDelete,
        usuariosGet,
        usuariosPatch,
        usuariosPost,
        usuariosPut } = require('../controllers/usuarios.controller')


const router = new Router()


router.get('/', usuariosGet)

router.post('/', usuariosPost)

router.put('/:id', usuariosPut)

router.delete('/', usuariosDelete)

router.patch('/', usuariosPatch)


module.exports = router



