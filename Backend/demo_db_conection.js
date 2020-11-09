var mysql = require('mysql');
var app = require('./app');
var port = 3900;

var conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root2020'
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('conexxion exitosa')

        // crear servidor y ponerme a escuchar peticions http

        app.listen(port, () => {
            console.log('super, servidor corriendo en http://localhost:'+port);
        })
    }
});

