const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'database',
    user: 'root',
    password: 'root',
    database: 'movie_info',
    port: 3306,
    waitForConnections: true,
    connectionLimit: '10'
})

module.exports = {
    pool
}