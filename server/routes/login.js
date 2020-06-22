const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let Usuario = require('../models/users');

app.post('/login', (req, res) => {

    let body = req.body;
    let contraseña = bcrypt.hashSync(body.password, 10);

    Usuario.findOne({ email: body.email }, (error, UsuarioDB) => {
        if (error) {
            return res.status(500).json({
                ok: false,
                error
            });
        }
        if (!UsuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario y/o contraseña incorrectos'
                },
            });
        }
        if (!bcrypt.compareSync(body.password, UsuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario y/o contraseña incorrectos'
                },
            });
        }

        let token = jwt.sign({
            usuario: UsuarioDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_Token });

        res.json({
            ok: true,
            UsuarioDB,
            token
        });
    });
});

module.exports = app;