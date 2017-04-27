angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicLoading, $timeout) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	// Form data for the login modal
	$scope.streetAddress = "";
	$scope.city = "";
	$scope.state = "";
	$scope.zipCode = "";
	
	//Load popup window layout from defaultHome.html
	$ionicModal.fromTemplateUrl('templates/defaultHome.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});
	
	//Closes popup
	$scope.closeWindow = function() {
		$scope.modal.hide();
	};

	//Opens popup
	$scope.defaultHome = function() {
		$scope.modal.show();
	};
	
	//Save user entered data
	$scope.save = function() {
		$ionicLoading.show({ template: 'Saving', noBackdrop: true, duration: 1000 });
		console.log($scope.streetAddress);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
			$scope.closeWindow();
		}, 1000);
	};
})

.controller('appMainCtrl', function($scope) {
})

.controller('appMainCtrl', function($scope, $stateParams) {
});
