const http = require('node:http');
//MANERA ROBUSTA
/*req referencia a request (peticion), res referencia a response (respuesta)
3000 es el port que li indiquem al servidor
per a refrescar el servidor, ens dirigim a la consola, presionem dos vegades ctrl+c i tornem a executar el fitxer
http.createServer(function (req, res) {
    //para escribir una cabecera con tipo de respuesta de 200 (codigo de estado - foto en la carpeta OPEN_FRONT/JAVASCRIPT + GIT + NODE/NODE)
    res.writeHead(200, { 'Content-type': 'text/html'});
    //codigoestado = 404 (not found) - aunque el texto se muestra igual.
    //la diferencia esta en la pagina web, en inspect, pestaña Network si le hacemos el refresh se muestran las lineas en rojo
    //res.writeHead(404, { 'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo desde Nodejs</h1>');
    //per a acabar la resposta i que pugui seguir rebent peticions:
    res.end();
}).listen(3000);*/

//MANERA 2 MENOS ROBUSTA
/*otra forma de llamar a un servidor es declarando primero la constante
const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo desde Nodejs</h1>');
    res.end();
};
//añadimos la constante al servidor:
http.createServer(handleServer).listen(3000);*/

//MANERA 3 IDEAL
//declarem la funcio
const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo desde Nodejs</h1>');
    res.end();
};

//creem el servidor en una constant y cridem a la constant que conte la funcio que volem tirarli al servidor
const server = http.createServer(handleServer);

//indiquem el port del servidor i li agregem un callback
const callback = function(){
    console.log('Server on port 3000');
};
server.listen(3000, callback);