app.controller('newController', function ($scope, $location, friendsFactory) {
	friendsFactory.index(function(friends) {
		$scope.friends = friends;
	});

	$scope.create = function() {
    console.log($scope.friend);
		friendsFactory.create($scope.friend, function() {
      console.log($scope.friend);
			$location.url('/');
		});
	};
	$scope.delete = function(id) {
		friendsFactory.delete(id);
	}
})
