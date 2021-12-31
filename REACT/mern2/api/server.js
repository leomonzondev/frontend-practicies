import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import userSchema from './models/User'
import bcrypt from 'bcrypt'

main().cath(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://localhost:27017/auth')

}

const db = mongoose.connection

db.on('err', console.log(object))

const port = 4000
const app = express()


app.use(cookieParser())
app.use(bodyParser.json({extendend:true}))


app.get('/', (req, res) => {
    res.send("ok")
})

app.post('/register', (req,res) => {
    const {email,password} = req.body
    const user = new userSchema({email,})
    res.send()
})


app.listen(port, () => {
    console.log(`Listening at http://localhost${port}`)
})