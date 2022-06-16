const { Router } = require('express')
const { usersGet, usersPost, usersPut, usersDelete } = require('../controllers/users')


const router = new Router()


router.get('/', usersGet )

router.post('/', usersPost )

router.put('/:id', usersPut )

router.delete('/', usersDelete )

module.exports = router

