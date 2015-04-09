'use strict';

app.controller('MessagesCtrl', function($scope, Message){
	$scope.messages = Message.all;

	$scope.message = {content: ''};

	$scope.sendMessage = function() {
		Message.create($scope.message).then(function(){
			$scope.message = {content: ''};
		});
	};

	$scope.deleteMessage = function(message) {
		Message.delete(message);
	};
});