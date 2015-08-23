var assert = require('assert');
var request = require('supertest');

var jwt = require('jsonwebtoken');
var config = require('../app/config');

var app = require('../app');

var User = require("../app/models/user");

describe('Offers', function() {
  var token;

  before(function(done) {
    var user = new User({
      email: 'other@mrako.com',
      password: 'test'
    });

    user.save(function(err, user1) {
      user1.token = jwt.sign(user1, config.secret);
      token = user1.token;
      user1.save(function(err, result) {});
      done();
    });
  });

  after(function() {
    User.collection.drop();
  });

  it('returns a list of offers', function(done) {
    request(app)
      .get('/offers')
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        assert.equal(res.statusCode, 200);
        done();
      });
  });
});
