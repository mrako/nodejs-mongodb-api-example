var multer = require('multer');
var s3 = require('multer-s3');

var awsConfig = require('../aws-config.js');
 
var aws = {
  upload: multer({
    storage: s3(awsConfig)
  })
};

module.exports = aws;
