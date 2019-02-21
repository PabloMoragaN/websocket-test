//"start": "node server/server.js" en el package.json para que lo ejecute heroku
//npm i socket.io --save
//npm install descarga las dependencias del package.json
//io.on()-->Eventos: connect(tu te has conectado) connection(cuando alguien se ha conectado) disconnect(se pierde conexion)


const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express(); //const app = require('express')();
let server = http.createServer(app); //const server = require('http').createServer(app);


const publicPath = path.resolve(__dirname, '../public');

//heroku || local
const port = process.env.PORT || 3000;

//usnado middle para habilitar la carpeta public
app.use(express.static(publicPath));

//inicializar el socketIO
//IO --> Esta es la comunicacion del backend
module.exports.io = socketIO(server); //const io = require('socket.io')(server);
//Importacion logica de los sockets
require('./sockets/socket');



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});