var morgan  = require('morgan');

var server = require('./app');

var port     = process.env.PORT || 8080;

server.use(morgan('dev', {immediate: true}));

server.listen(port);
console.log("App listening on port " + port);
