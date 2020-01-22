module.exports = require('mysql2').createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'burger_db'
})
