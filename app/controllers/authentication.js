'use strict';

var jwt = require('jsonwebtoken');

var config = require('../config');

var User = require('./../models/user');

var auth = {
  signup: function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
      if (err) {
        return res.json({
          type: false,
          data: 'User already exists!'
        });
      }

      user.token = jwt.sign(user, config.secret);
      user.save(function(err, user1) {
        res.json({
          type: true,
          token: user1.token
        });
      });
    });
  }
};

module.exports = auth;
