var http = require("http");

////Creamos el servidor

var server = http.createServer(function(peticion, respuesta){

    respuesta.end(`<h1>Hola Mundo desde el Servidor</h1>`)
})

server.listen(3000, function(){

    console.log("Servidor escuchando en el puerto" + this.address().port)
})