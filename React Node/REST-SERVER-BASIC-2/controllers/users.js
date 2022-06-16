const { request, response } = require('express')


const usersGet = (req, res) => {

    const {q, name = 'No name', boleadoras, limit} = req.query
    
    res.json({
        msg:'GET API',
        q,
        name,
        boleadoras
    })

}

const usersPost = ( req, res = response ) => {
    const { name, years } = req.body

    res.status(200).json({
        msg: 'POST METHOD CORRECTLY SENDED',
        name,
        years
    })
}

const usersPut = (req, res = response) => {

    const id = req.params.id

    res.status(200).json({
        msg: 'PUT METHOD CORRECTLY SENDED',
        id
    })
}

const usersDelete = ( req, res ) => {

    res.json({
        msg:'USER DELETED'
    })
}


module.exports = {
    usersDelete,
    usersGet,
    usersPost,
    usersPut
}