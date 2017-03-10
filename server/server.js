var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var routes = require('./controllers/index.js');
var router = express.Router();
var path = require('path');

app.use(express.static('public'));
// app.use('*', router);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/data', function(req, res) {
  routes.get(req, res);
});

app.post('/data', function(req, res) {
  routes.post(req, res);
});

app.put('/data', function(req, res) {
  routes.put(req, res);
});

app.listen(port, function() {
  console.log(`App is running on port ${port}`);
});

module.exports.app = app;
module.exports = router;
