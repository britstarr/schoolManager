var mysql = require ('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'ruffest1',
  database: 'schoolsTest'
});

connection.connect();

module.exports = connection;
