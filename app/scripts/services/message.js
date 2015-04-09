'use strict';

app.factory('Message', function ($firebase, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var messages = $firebase(ref.child('messages')).$asArray();

	var Message = {
		all: messages,
		create: function(message) {
			return messages.$add(message);
		},
		get: function(messageId) {
			return $firebase(ref.child('messages').child(messageId)).$asObject();
		},
		delete: function(message) {
			return messages.$remove(message);
		}
	};

	return Message;
});