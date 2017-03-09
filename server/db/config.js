const mysql = require ('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'schoolsTest'
});

connection.connect();

module.exports = connection;
