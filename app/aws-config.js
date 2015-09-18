'use strict';

module.exports = { 
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'yourawsaccesskey',
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'yourawssecretkey',
  region: 'eu-central-1',
  bucket: 'nodejs-mongodb-api-images',
  dirname: 'images'
};
