var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));
app.use(require('body-parser').json());

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/api/foos', require('./routes/foos'));

module.exports = app;
