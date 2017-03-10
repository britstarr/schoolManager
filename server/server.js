var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./controllers/index.js');
var router = require('express').Router();

app.get('/data', function(req, res) {
  routes.get(req, res);
});

app.post('/data', function(req, res) {
  routes.post(req, res);
});

app.put('/data', function(req, res) {
  routes.put(req, res);
});

app.use(express.static('public'));

app.use('/', router);

app.listen(port, function() {
  console.log(`App is running on port ${port}`);
});
