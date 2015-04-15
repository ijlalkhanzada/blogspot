'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SavePostSchema = new Schema({
  name: String,
  blogTextArea: String,
  active: Boolean,
  image: String,
  date: Date
});

module.exports = mongoose.model('SavePost', SavePostSchema);
