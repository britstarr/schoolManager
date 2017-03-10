var mysql = require ('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'schoolsTest'
});

connection.connect();

module.exports = connection;
