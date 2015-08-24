'use strict';

var passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy;

var aws = require('./controllers/aws');

var AuthenticationCtrl = require('./controllers/authentication');
var OffersCtrl = require('./controllers/offers');

var User = require('./models/user');

module.exports = function(app) {
  passport.use(new BearerStrategy(function(token, done) {
    User.findOne({ token: token }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: 'all' });
    });
  }));

  app.post('/login', function(req, res) {
    AuthenticationCtrl.login(req, res);
  });

  app.post('/signin', function(req, res) {
    AuthenticationCtrl.signin(req, res);
  });

  app.get('/offers', passport.authenticate('bearer', {session: false}), function(req, res) {
    OffersCtrl.list(req, res);
  });

  app.post('/offers', passport.authenticate('bearer', {session: false}), aws.upload.single('image'), function(req, res) {
    OffersCtrl.create(req, res);
  });
};
