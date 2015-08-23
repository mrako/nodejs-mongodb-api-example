var assert = require('assert');
var request = require('supertest');

var jwt = require('jsonwebtoken');
var config = require('../app/config');

var app = require('../app');

var User = require("../app/models/user");

describe('Offers', function() {
  var token;

  before(function() {
    var user = new User({
      email: 'me@mrako.com',
      password: 'test'
    });

    user.save(function(err, results) {
    });

    token = jwt.sign(user, config.secret, {
      expiresInMinutes: 1440 // expires in 24 hours
    });
  });

  after(function() {
    User.collection.drop();
  });

  it('returns a list of offers', function(done) {
    request(app)
      .post('/offers')
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        assert.equal(res.statusCode, 200);
        done();
      });
  });
});
