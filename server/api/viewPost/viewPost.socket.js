/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ViewPost = require('./viewPost.model');

exports.register = function(socket) {
  ViewPost.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  ViewPost.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('viewPost:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('viewPost:remove', doc);
}