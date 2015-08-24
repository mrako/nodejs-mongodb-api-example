var assert = require('assert');
var request = require('supertest');

var jwt = require('jsonwebtoken');
var config = require('../app/config');

var app = require('../app');

var seeds = require('./seeds');

var Offer = require("../app/models/offer");
var User = require("../app/models/user");

describe('Offers', function() {
  var token;

  before(function(done) {
    seeds.clear();
    seeds.createOffer();

    var user = new User({
      email: 'other@mrako.com',
      password: 'test'
    });

    user.save(function(err, result) {
      result.token = jwt.sign(result, config.secret);
      token = result.token;
      result.save(function(err, doc) {});
      done();
    });
  });

  after(function() {
    seeds.clear();
  });

  it('should authenticate user', function(done) {
    request(app)
      .get('/offers')
      .expect(403)
      .end(function(err, res) {
        done();
      });
  });

  it('returns a list of offers', function(done) {
    request(app)
      .get('/offers')
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
      .end(function(err, res) {
        assert.equal(res.body.offers.length, 1);
        done();
      });
  });

  it('creates a new offer', function(done) {
    var today = new Date();
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);

    request(app)
      .post('/offers')
      .send({
        name: 'Five fine vacuum cleaners for sale!',
        product: {
          name: 'Electrolux Ergorapido',
          price: 139
        },
        expires: nextweek,
        products: 5
      })
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
      .end(function(err, res) {
        assert.equal(res.body.offer.product.name, 'Electrolux Ergorapido');
        done();
      });
  });
});
