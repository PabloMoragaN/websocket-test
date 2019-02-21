const { io } = require('../server');
//Saber conexiones
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', { usuario: 'Admin', mensaje: 'Bienvenido a esta aplicación' });



    //recargar, cerrar el tab etc
    client.on('disconnect', () => { console.log('Usuario desconectado'); });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data); //enviar a todos

        // if (mensajeRecibido.usuario) {
        //     callback({
        //         resp: 'ALL OK'
        //     });
        // } else {
        //     callback({
        //         resp: 'NOT OK'
        //     });

        // }



    }); //Confirmacion todo OK parte de cliente

});