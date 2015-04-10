'use strict';

var _ = require('lodash');
var ViewPost = require('./viewPost.model');

// Get list of viewPosts
exports.index = function(req, res) {
  ViewPost.find(function (err, viewPosts) {
    if(err) { return handleError(res, err); }
    return res.json(200, viewPosts);
  });
};

// Get a single viewPost
exports.show = function(req, res) {
  ViewPost.findById(req.params.id, function (err, viewPost) {
    if(err) { return handleError(res, err); }
    if(!viewPost) { return res.send(404); }
    return res.json(viewPost);
  });
};

// Creates a new viewPost in the DB.
exports.create = function(req, res) {
  ViewPost.create(req.body, function(err, viewPost) {
    if(err) { return handleError(res, err); }
    return res.json(201, viewPost);
  });
};

// Updates an existing viewPost in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  ViewPost.findById(req.params.id, function (err, viewPost) {
    if (err) { return handleError(res, err); }
    if(!viewPost) { return res.send(404); }
    var updated = _.merge(viewPost, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, viewPost);
    });
  });
};

// Deletes a viewPost from the DB.
exports.destroy = function(req, res) {
  ViewPost.findById(req.params.id, function (err, viewPost) {
    if(err) { return handleError(res, err); }
    if(!viewPost) { return res.send(404); }
    viewPost.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}