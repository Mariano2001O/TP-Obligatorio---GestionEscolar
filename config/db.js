//conexion a la base de datos
const mysql = require('mysql2');
const config = require('dotenv');

// creamos el lazo a la base de datos 
const pool = mysql.createPool({
    // van las credenciales para acceder a la base que queramos
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestionescolar',
})

module.exports = pool.promise();
