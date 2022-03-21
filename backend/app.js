'use strict'

var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const configMensaje = require('./configMensaje');

var app = express();

//! Cargar archivos de Rutas

var project_routes = require('./routes/project');

//! Middlewares

 //? Utilizo bodyParser para convertir cualquier dato que llegue a un objeto json.

    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    app.use(cors());

//! CORS
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });

    app.post('/contacto', (req, res) => {
        configMensaje (req.body);
        res.status(200).send();
    });
    

//! Rutas

/* Queda mucho mejor en routes/project.js

app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Página de Inicio</h1>"
    );
});

app.post('/test', (req, res) => {
    console.log(req.body.Nombre);
    res.status(200).send({
        message: "Hola mundo desde mi API de NodeJS"
    });
});
*/

app.use('/api', project_routes);

//! Exportar
module.exports = app;