const jwt = require('jsonwebtoken');

let verificaToken = (req, res, next) => {
    let token = req.get('Authorization');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Invalid token'
                }
            });
        }
        req.usuario = decoded.usuario;
        next();
    });
}
let VerificaRole = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.rol != 'ADMIN_ROLE') {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Acceso denegado'
            }
        });
    }
    next();
}

module.exports = {
    verificaToken,
    VerificaRole
}