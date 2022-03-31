const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
app.use(express.json())

const users = [
    {
        id: "1",
        username: "john",
        password: "John0908",
        isAdmin: true,
    },
    {
        id: "2",
        username: "jane",
        password: "Jane0908",
        isAdmin: false,
    },

]

app.post("/api/login", (req,res) => {
    const {username,password} = req.body
    const user = users.find(u=>{
        return u.username === username && u.password === password
    })
    if(user){
        //Generate acces token
        const accesToken = jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mySecretKey")
        res.json(user)
    } else {
        res.status(400).json("Username o password incorrect")
    }
})


app.listen(5000, () => console.log("Backend sv is running"))