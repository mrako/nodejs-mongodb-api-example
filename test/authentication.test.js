var assert = require('assert');
var request = require('supertest');

var User = require("../app/models/user");

describe("Authentication", function() {
  var app;

  before(function() {
    app = require('../app');

    var user = new User({
      email: 'me@mrako.com',
      password: 'test'
    });

    user.save(function(err, results) {});
  });

  after(function() {
    User.collection.drop();
    app = null;
  });

  it('finds a user by username', function() {
    User.findOne({
      email: 'me@mrako.com'
    }, function(err, user) {
      assert.equal(user.email, 'me@mrako.com');
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
