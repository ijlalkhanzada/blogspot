'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SavePostSchema = new Schema({
  name: String,
  blogTextArea: String,
  active: Boolean
});

module.exports = mongoose.model('SavePost', SavePostSchema);
