const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const mongooseUniqueValidator = require('mongoose-unique-validator');

let RolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROL'],
    message: '{VALUE} rol no permitido'
}

let schemaUser = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    }, //esto no es obligatorio
    rol: {
        type: String,
        default: 'USER_ROL',
        enum: RolesValidos
    }, //esto es booleano
    estado: {
        type: Boolean,
        default: true
    }, //esto es bool
    google: {
        type: Boolean,
        default: false
    } // esto es boleano
});

schemaUser.methods.toJSON = function() { //funcion para evitar el retorno de la contraseña en un json
    let user = this;
    let userObjet = user.toObject();
    delete userObjet.password;

    return userObjet;
}

schemaUser.plugin(mongooseUniqueValidator, { message: '{PATH} debe ser unico ' }); //validar Email con mensajes agradables para el usuario



module.exports = mongoose.model('users', schemaUser)