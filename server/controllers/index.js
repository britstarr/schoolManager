var db = require('../db/config.js');

module.exports = {
  get: function(req, res) {
    db.query('SELECT * FROM schools', function(err, data) {
      if (err) {
        throw err;
      } else {
        res.json(data);
      }
    });
  },

  post: function(req, res) {
    db.query('INSERT INTO schools SET ?', req, function(err, data) {
      if (err) {
        throw err;
      } else {
        console.log('posted to database: ', req);
      }
    });
  },

  put: function(req, res) {

  }
}
