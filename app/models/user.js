'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    email: String,
    password: String,
    token: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
