'use strict';

var Offer = require('./../models/offer');

var offers = {
  list: function(req, res) {
    Offer.find(function(err, offers) {
      if (err) {
        res.send(err);
      }

      res.json({offers: offers});
    });
  },
  create: function(req, res) {
    var offer = new Offer(req.body);

    offer.save(function(err, data) {
      if (err) {
        res.sendStatus(err);
      }

      res.json({offer: data});
    });
  }
};

module.exports = offers;
