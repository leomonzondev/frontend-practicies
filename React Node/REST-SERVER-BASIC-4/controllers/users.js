


const getUser = (req,res) => {

    res.json({
        msg:'GET USER'
    })
}


const postUser = (req,res) => {

    const { name, years } = req.body

    res.json({
        msg:'POST USER',
        name,
        years
    })
}

const putUser = (req,res) => {

    const id = req.params.id

    res.json({
        msg: 'PUT SUCCES',
        id
    })
}

const deleteUser = (req,res) => {
    res.json({
        msg:'DELETE user'
    })

}



module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}