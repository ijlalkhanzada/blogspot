'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ViewPostSchema = new Schema({
  name: String,
  blogTextArea: String,
  active: Boolean
});

module.exports = mongoose.model('ViewPost', ViewPostSchema);
