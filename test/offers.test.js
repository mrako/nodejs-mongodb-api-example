var assert = require('assert');
var request = require('supertest');
var mockery = require('mockery');

var jwt = require('jsonwebtoken');
var config = require('../app/config');

var seeds = require('./seeds');

var Offer = require("../app/models/offer");
var User = require("../app/models/user");

var awsMock = require("./mocks/aws");

describe('Offers', function() {
  var app, token;

  before(function() {
    mockery.enable({
      warnOnUnregistered: false,
      useCleanCache: true
    });
    mockery.registerMock('./controllers/aws', awsMock);

    app = require('../app');

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
    });
  });

  after(function() {
    seeds.clear();
    mockery.disable();
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
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

    request(app)
      .post('/offers')
      .send({
        name: 'A vacuum cleaner for sale',
        product: {
          name: 'Dyson v6',
          price: 139
        },
        expires: nextweek,
        products: 1
      })
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
      .end(function(err, res) {
        assert.equal(res.body.offer.product.name, 'Dyson v6');
        done();
      });
  });

  it('attaches an image to the offer', function(done) {
    request(app)
      .post('/offers')
      .field('name', 'Five fine vacuum cleaners for sale!')
      .field('product[name]', 'Dyson Cinetic')
      .attach('image', 'test/fixtures/dyson.jpg')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
      .end(function(err, res) {
        assert.equal(res.body.offer.product.name, 'Dyson Cinetic');
        done();
      });
  });
});
