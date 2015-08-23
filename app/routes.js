'use strict';

var passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy;

var Authentication = require('./controllers/authentication');

var config = require('./config');

var User = require('./models/user');
var Offer = require('./models/offer');

module.exports = function(app) {

  passport.use(new BearerStrategy(function(token, done) {
    User.findOne({ token: token }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: 'all' });
    });
  }));

  app.post('/login', function(req, res) {
    Authentication.login(req, res);
  });

  app.post('/signin', function(req, res) {
    Authentication.signin(req, res);
  });

  app.get('/offers', passport.authenticate('bearer', {
    session: false
  }), function(req, res) {
    Offer.find(function(err, offers) {
      if (err) {
        res.send(err);
      }

      res.json({offers: offers});
    });
  });
};
