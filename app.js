var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var cors = require('./app/cors');


var app = express();

app.use(cors);
app.use(bodyParser.json());

require('./app/routes.js')(app);

module.exports = app;
