'use strict'
// crear servidor

// cargar modulos de node para crear servidor

var express = require('express');
var bodyParser = require('body-parser'); // recibe peticiones, luego con un middleware lo transforma en un json  objeto nstivo por javascript) 


// ejecutar express (para poder trabjar con http)

var app = express();

// cargar ficheros rutas

// middlewares (siempre se ejecuta antes de cargar una ruta o una url de la app)

app.use(bodyParser.urlencoded({extended:false})); // utilizar el bodyparser
app.use(bodyParser.json());// convertir mediante el bodyparser cualquier tipo de peticin que llegue a un json

// CORS (para permitir peticiones desde el front end)

// añadir prefijos a rutas

// ruta de prueba

app.get('/probando', (req, res) => {

    return res.status(200).send({
        curso : 'Master en Frameworks'
    });

});

// exportar modulo (fichero actual para poder lanzar el servidor)

module.exports = app;
