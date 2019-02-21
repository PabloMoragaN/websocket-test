var socket = io();

socket.on('connect', function() {
    console.log('Conectado en el servidor');
});

//on son para escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexion con el server');
});

// Emitir un mensaje desde el cliente y el que el serve rlo escuche
//Emitir 
socket.emit('enviarMensaje', {

    usuario: 'Pablo',
    mensaje: 'Hola mundo'

}, function(resp) { //Función de confirmación de envio todo OK por parte de cliente
    console.log('Resp Server: ', resp);
});

//Escuchar info

socket.on('enviarMensaje', function(mensaje) {

    console.log('Server: ', mensaje);
});