'use strict';

var passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy;
var LocalStrategy = require('passport-local').Strategy;

var aws = require('./controllers/aws');

var AuthenticationCtrl = require('./controllers/authentication');
var PostsCtrl = require('./controllers/posts');

var User = require('./models/user');

module.exports = function(app) {
  passport.use(new BearerStrategy(function(token, done) {
    User.findOne({ token: token }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: 'all' });
    });
  }));
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  app.post('/login', passport.authenticate('local'), function(req, res) {
    res.json({
      type: true,
      data: res.user,
      token: res.user.token
    });
  });

  app.post('/signup', function(req, res) {
    AuthenticationCtrl.signup(req, res);
  });

  app.get('/posts', passport.authenticate('bearer', {session: false}), function(req, res) {
    PostsCtrl.list(req, res);
  });

  app.post('/posts', passport.authenticate('bearer', {session: false}), aws.upload.single('image'), function(req, res) {
    PostsCtrl.create(req, res);
  });
};
