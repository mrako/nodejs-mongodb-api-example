var mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
  name : String,
  description : String,
  images: Array
});
