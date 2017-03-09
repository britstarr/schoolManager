const db = require('./server/db/config.js');
const data = require('./data/schools.json');

//Drop old data
db.query('truncate schools', function(err, data) {
  if (err) {
    throw err;
  }
});

data.forEach(function(val) {
  db.query('INSERT INTO schools SET ?', val, function(err, result) {
    if (err) {
      throw err;
    } else {
      console.log('Seeded database');
    }
  });
});
