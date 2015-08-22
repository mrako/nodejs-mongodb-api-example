'use strict';

var Offer = require('./models/offer');

module.exports = function(app) {
  app.get('/offers', function(req, res) {
    Offer.find(function(err, offers) {
      if (err) {
        res.send(err);
      }

      res.json(offers);
    });
  });
};
