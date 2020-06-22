// configuracion del puerto
process.env.PORT = process.env.PORT || 3000

// configuracion del entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// configuración del vencimiento del token
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_Token = 60 * 60 * 24 * 30;

// configuración del seed o semilla

process.env.SEED = process.env.SEED || 'este-es-el-seend-desarrollo';



// configuracion base de datos

let urlDB

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


// CONFIGURACION DEL CLIENTE AUTENTICACION DE GOOGLE

process.env.CLIENT_ID = process.env.CLIENT_ID || '457676610938-imgc8k0iid8n91s2n1s3ocfcca2181hi.apps.googleusercontent.com';