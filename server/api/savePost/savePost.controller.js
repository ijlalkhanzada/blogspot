'use strict';

var _ = require('lodash');
var SavePost = require('./savePost.model');

// Get list of savePosts
exports.index = function(req, res) {
  SavePost.find(function (err, savePosts) {
    if(err) { return handleError(res, err); }
    return res.json(200, savePosts);
  });
};

// Get a single savePost
exports.show = function(req, res) {
  SavePost.findById(req.params.id, function (err, savePost) {
    if(err) { return handleError(res, err); }
    if(!savePost) { return res.send(404); }
    return res.json(savePost);
  });
};

// Creates a new savePost in the DB.
exports.create = function(req, res) {
  SavePost.create(req.body, function(err, savePost) {
    if(err) { return handleError(res, err); }
    return res.json(201, savePost);
  });
};

// Updates an existing savePost in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  SavePost.findById(req.params.id, function (err, savePost) {
    if (err) { return handleError(res, err); }
    if(!savePost) { return res.send(404); }
    var updated = _.merge(savePost, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, savePost);
    });
  });
};

// Deletes a savePost from the DB.
exports.destroy = function(req, res) {
  SavePost.findById(req.params.id, function (err, savePost) {
    if(err) { return handleError(res, err); }
    if(!savePost) { return res.send(404); }
    savePost.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}