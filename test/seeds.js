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
      model: {
        id: '12:7',
        name: 'kahvinkeitin',
        imageUrl: '',
        price: 100
      },
      expires: new Date(),
      products: 5
    }, function(err) {});
  }
};
