'use strict';

var mongoose = require('mongoose');

var Offer = require('../app/models/offer');

module.exports = {
  clear: function() {
    Offer.remove({}, function(err) {});
  },
  create: function() {
    Offer.create({
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
