var is = require('type-is')
var Busboy = require('busboy')
var appendField = require('append-field')

var aws = {
  upload: {
    single: function(name) {
      return function middleware(req, res, next) {
        if (!is(req, ['multipart'])) return next();

        req.body = {};
        var busboy = new Busboy({ headers: req.headers });

        busboy.on('field', function (fieldname, value, fieldnameTruncated, valueTruncated) {
          appendField(req.body, fieldname, value);
        });
        busboy.on('finish', function () {
          next();
        });

        req.pipe(busboy);
      };
    }
  }
};

module.exports = aws;
