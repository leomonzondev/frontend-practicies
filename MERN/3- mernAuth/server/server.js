const express = require('express')
const app = express()


const cors = require ('cors')


app.use(cors())



app.post('/api/register', (req,res) => {
    console.log(req.body)
    res.json({status: 'ok'})

})


app.listen(1337, () => {
    console.log('SV START 1337')
})