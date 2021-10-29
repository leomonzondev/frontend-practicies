const express = require('express')
const app = express()
const port = 8333

app.use( express.static('public'))


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*',(req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`La app de ejemplo está corriendo at localhost:${port}`);
}) 