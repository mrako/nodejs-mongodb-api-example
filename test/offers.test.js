var assert = require('assert');
var superagent = require('superagent');
var status = require('http-status');
var mongoose = require('mongoose');

var database = require('./database');
mongoose.connect(database.url);

var server = require('../app');

var seeds = require('./seeds');


var port = 9999;
var endpoint = "http://localhost:" + port;

describe('offers', function() {
  var app;
 
  before(function() {
    seeds.clear();
    seeds.create();
    app = server.listen(port);
  });
 
  after(function() {
    seeds.clear();
    app.close();
  });
 
  it('returns a list of offers', function(done) {
    superagent.get(endpoint + '/offers').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.OK);
      var result = JSON.parse(res.text);

      assert.equal(result.length, 1);
      assert.equal(result[0].model.name, 'kahvinkeitin');
      done();
    });
  });
});
