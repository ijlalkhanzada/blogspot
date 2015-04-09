'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlogSchema = new Schema({
  name: String,
  blogTextArea: String,
  active: Boolean
});

module.exports = mongoose.model('Blog', BlogSchema);
