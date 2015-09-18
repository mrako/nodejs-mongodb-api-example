var assert = require('assert');
var request = require('supertest');

var jwt = require('jsonwebtoken');
var config = require('../app/config');

var User = require("../app/models/user");

describe("Authentication", function() {
  var app;

  before(function(done) {
    app = require('../app');

    User.register(new User({ username : 'me@mrako.com' }), 'test', function(err, user) {
      user.token = jwt.sign(user, config.secret);
      user.save(function(err, us) {
        done();
      });
    });
  });

  after(function() {
    User.collection.drop();
    app = null;
  });

  it('finds a user by username', function() {
    User.findOne({
      username: 'me@mrako.com'
    }, function(err, user) {
      assert.equal(user.username, 'me@mrako.com');
    });
  });

  it('finds all users', function() {
    User.find({}, function(err, user) {
      assert.equal(user.length, 1);
    });
  });

  it('should return a token if user is logged in', function(done) {
    request(app)
      .post('/login')
      .send({
        username: 'me@mrako.com',
        password: 'test'
      })
      .end(function(err, res) {
        assert.equal(res.statusCode, 200);
        done();
      });
  });
});
