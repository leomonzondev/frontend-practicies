



const getReceta = (req, res) => {

    res.json({
        msg:'GET Receta'
    })
}

const postReceta = (req,res) => {
    const { name, difficulty } = req.body

    res.json({
        msg:'POST receta',
        name,
        difficulty
    })
}

const putReceta = (req,res) => {
    const id = req.params.id

    res.json({
        msg:'PUT Recetas',
        id
    })

}

const deleteReceta = (req,res) => {

    res.json({
        msg:'DELETE Receta'
    })


}




module.exports = {
    getReceta,
    postReceta,
    putReceta,
    deleteReceta
}