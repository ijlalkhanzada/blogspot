/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var SavePost = require('./savePost.model');

exports.register = function(socket) {
  SavePost.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  SavePost.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('savePost:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('savePost:remove', doc);
}