var aws = {
  upload: {
    single: function(name) {
      return function middleware(req, res, next) {
        next();
      };
    }
  }
};

module.exports = aws;
