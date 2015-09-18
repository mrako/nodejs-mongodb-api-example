'use strict';

var Post = require('./../models/post');

var posts = {
  list: function(req, res) {
    Post.find(function(err, posts) {
      if (err) {
        res.send(err);
      }

      res.json({posts: posts});
    });
  },
  create: function(req, res) {
    var post = new Post(req.body);
    
    if (req.file) {
      post.product.images = [req.file.key];
    }

    post.save(function(err, data) {
      if (err) {
        res.sendStatus(err);
      }

      res.json({post: data});
    });
  }
};

module.exports = posts;
