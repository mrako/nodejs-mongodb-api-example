var mongoose = require('mongoose');

var server = require('./app');

var port     = process.env.PORT || 8080;

var database = require('./db/database');
mongoose.connect(database.url);

server.listen(port);
console.log("App listening on port " + port);
