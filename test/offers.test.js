var assert = require('assert');

var request = require('supertest');

var app = require('../app');

var User = require("../app/models/user");

describe('offers', function() {

  var app;

  before(function(done) {
    var user = new User({
      email: 'me@mrako.com',
      password: 'test'
    });

  });

  after(function() {
    User.collection.drop();
  });

  it('returns a list of offers', function(done) {
    request(app)
      .post('/offers')
      .set('Authorization', 'Bearer ' + token)
      .end(function (err, res) {
        assert.equal(res.statusCode, 200);
        console.log(res.body);
      });
      done();
  });
});
