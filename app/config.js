module.exports = {
  secret : process.env.JWT_SECRET || 'verysecretstring',
  database : process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/offers'
};
