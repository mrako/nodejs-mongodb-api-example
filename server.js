var morgan  = require('morgan');

var server = require('./app');

var cluster = require('cluster');

var port     = process.env.PORT || 8080;
var workers = require('os').cpus().length

server.use(morgan('dev', {immediate: true}));

// Clustering to utilize all CPU cores
if (cluster.isMaster) {

    // Fork workers
    for (var i = 0; i < workers; i++) {
        cluster.fork();
    }

    cluster.on('exit', function (worker, code, signal) {
    	console.log('Worker ' + worker.process.pid + ' died');
    	console.log('Spawining new worker...');
    	cluster.fork();
    });
}
else {
    server.listen(port);
}
console.log("App listening on port " + port);
