var mongoose = require('mongoose');

module.exports = mongoose.model('Offer', {
  name : String,
  model : {
    id: String,
    name: String,
    imageUrl: String,
    price: Number
  },
  expires: Date,
  products: Number
});
