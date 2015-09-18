'use strict';

var passport = require('passport');
var jwt = require('jsonwebtoken');

var config = require('../config');

var User = require('./../models/user');

var auth = {
  login: function(req, res) {
    User.findOne({
      email: req.body.email,
      password: req.body.password
    }, function(err, user) {
      if (err) {
        res.json({
          type: false,
          data: 'Error occured: ' + err
        });
      } else {
        if (user) {
          res.json({
            type: true,
            data: user,
            token: user.token
          });
        } else {
          res.json({
            type: false,
            data: 'Incorrect email/password'
          });
        }
      }
    });
  },
  signup: function(req, res) {
    console.log(req.body);
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
      if (err) {
        res.json({
          type: false,
          data: 'User already exists!'
        });
      }
    
      console.log(res.user);

      passport.authenticate('local')(req, res, function () {
        res.user.token = jwt.sign(res.user, config.secret);
        res.user.save(function(err, user1) {
          console.log(user1);
          res.json({
            type: true,
            data: user1,
            token: user1.token
          });
        });
      });
    });
/*    User.findOne({
      email: req.body.email,
      password: req.body.password
    }, function(err, user) {
      if (err) {
        res.json({
          type: false,
          data: 'Error occured: ' + err
        });
      } else {
        if (user) {
          res.json({
            type: false,
            data: 'User already exists!'
          });
        } else {
          var userModel = new User();
          userModel.email = req.body.email;
          userModel.password = req.body.password;
          userModel.save(function(err, user) {
            user.token = jwt.sign(user, config.secret);
            user.save(function(err, user1) {
              res.json({
                type: true,
                data: user1,
                token: user1.token
              });
            });
          });
        }
      }
    });*/
  }
};

module.exports = auth;
