const mysqli = require('mysql2')
const pool =mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete', 
    password: '965636@Leb'
})
module.exports =pool.promise()