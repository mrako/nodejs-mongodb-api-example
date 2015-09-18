'use strict';

var mongoose = require('mongoose');

var User = require('../app/models/user');
var Post = require('../app/models/post');

module.exports = {
  clear: function() {
    Post.collection.drop();
    User.collection.drop();
  },
  createPost: function() {
    Post.create({
      id: '11:0',
      name: 'I fell asleep on the sofa again.',
      description: '',
    }, function(err) {});
  }
};
