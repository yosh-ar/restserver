require('./config/config')

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//configurar vista 
app.use(express.static(path.resolve(__dirname, '../public/')));

//configuracion e las rutas
app.use(require('./routes/index')); //esto nos trae todas las rutas

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos online');
});

app.listen(process.env.PORT, () => {
    console.log('escuchando el puerto 3000');
})