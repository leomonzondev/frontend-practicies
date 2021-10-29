const http = require('http');

http.createServer ((req,res) => {

    
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv' })

    res.write('Hola Zenit')

    res.end()


})
.listen(8333)

console.log('Escuchando en el puerto 8333');