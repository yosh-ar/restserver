// configuracion del puerto
process.env.PORT = process.env.PORT || 3000

// configuracion del entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// configuracion base de datos

let urlDB

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://yosh:Y5QdplD9OsOohE9M@cluster0-xtldl.mongodb.net/cafe';
}

process.env.URLDB = urlDB;