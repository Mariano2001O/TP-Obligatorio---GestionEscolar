const config = require('dotenv')
// este archivo el .env tiene las credenciales, por lo cual no se comparte 
config();

export default {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
}