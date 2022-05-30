//HAY UN MODULO EN NPM QUE SE LLAMA express QUE YA TIENE SERVIDORES Y NO HACE FALTA QUE CREEMOS NOSOTROS EL SERVIDOR Y TODO
//desde la consola: npm install express / o bien / npm i express (es lo mismo)

const express = require('express');
const colors = require('colors');

const server = express();

const handleServer = function() {
    console.log('Server on port 3000'.red);
};
const messServer = function(req, res) {
    //send es una funcion de express
    res.send('<h1>Hola Mundo con Express y Nodejs</h1>');
    res.end();
};

server.get('/', messServer);
server.listen(3000, handleServer);