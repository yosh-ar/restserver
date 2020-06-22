const express = require('express');
const app = express();


app.use(require('./users')); //esto nos trae las rutas de usuario
app.use(require('./login')); //esto nos trae las rutas de login

module.exports = app;