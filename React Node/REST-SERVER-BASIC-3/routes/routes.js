
const { Router } = require('express')
const { getReceta, postReceta, putReceta, deleteReceta } = require('../controllers/recetas')

const router = new Router()

router.get('/', getReceta )

router.post('/', postReceta )

router.put('/:id', putReceta )

router.delete('/', deleteReceta)

module.exports = router