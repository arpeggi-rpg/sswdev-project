require('dotenv').config();
var mongoose = require('mongoose');
var db = mongoose.connection;
const url = process.env.url;
mongoose.connect(url);

module.exports = mongoose;