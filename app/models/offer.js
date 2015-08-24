var mongoose = require('mongoose');

module.exports = mongoose.model('Offer', {
  name : String,
  product : {
    id: String,
    name: String,
    images: Array,
    price: Number
  },
  expires: Date,
  products: Number
});
