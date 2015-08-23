'use strict';

var passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy;

var Authentication = require('./controllers/authentication');

var config = require('./config');

var User = require('./models/user');
var Offer = require('./models/offer');

module.exports = function(app) {

  passport.use(new BearerStrategy(function(token, done) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.param('token') || req.headers['x-access-token'];

    // decode token
    if (token) {
      jwt.verify(token, config.jwt_secret, function(err, decoded) {      
        if (err) {
          return done(err);
        } else {
          return done(null, user, {
            scope: 'all'
          });
        }
      });
    } else {
      return done(null, false);

      /*return res.status(403).send({ 
        success: false, 
        message: 'No token provided.'
      });*/
    }
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

      res.json(offers);
    });
  });
};
