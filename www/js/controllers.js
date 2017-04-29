angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, $window) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	// Form data for the login modal
	
	
	//Load popup window layout from defaultHome.html
	$ionicModal.fromTemplateUrl('templates/defaultHome.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});
	
	$scope.address = {
			streetAddress: "",
			city: "",
			state: "",
			zipCode: ""
			
	}
	
	if($window.localStorage.getItem(0) == "good"){
		$scope.address.streetAddress = $window.localStorage.getItem(1);
		$scope.address.city = $window.localStorage.getItem(2);
		$scope.address.state = $window.localStorage.getItem(3);
		$scope.address.zipCode = $window.localStorage.getItem(4);
	}
	else{
		$scope.address.streetAddress = "";
		$scope.address.city = "";
		$scope.address.state = "";
		$scope.address.zipCode = "";
		$window.localStorage.setItem(1, null);
		$window.localStorage.setItem(2, null);
		$window.localStorage.setItem(3, null);
		$window.localStorage.setItem(4, null);
	}
	//For debugging purposes
//	console.log($scope.address.streetAddress);
//	console.log($scope.address.city);
//	console.log($scope.address.state);
//	console.log($scope.address.zipCode);
	
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
		
		if($scope.address.streetAddress != "" &&
				$scope.address.city != "" &&
				$scope.address.state != "" &&
				$scope.address.zipCode != ""){
			$window.localStorage.setItem(0, "good");
			$window.localStorage.setItem(1, $scope.address.streetAddress);
			$window.localStorage.setItem(2, $scope.address.city);
			$window.localStorage.setItem(3, $scope.address.state);
			$window.localStorage.setItem(4, $scope.address.zipCode);
			$ionicLoading.show({ template: 'Address saved!', noBackdrop: true, duration: 1000 });
		} else {
			$window.localStorage.clear(0);
			$ionicLoading.show({ template: 'Address not completed. Try again.', noBackdrop: true, duration: 2000 });
		}
		//For debugging purposes
//		console.log($scope.address.streetAddress);
//		console.log($scope.address.city);
//		console.log($scope.address.state);
//		console.log($scope.address.zipCode);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
			$scope.closeWindow();
		}, 1000);
	};
	
	$scope.clearAddress = function() {
		$window.localStorage.clear(0);
		$window.localStorage.clear(1);
		$window.localStorage.clear(2);
		$window.localStorage.clear(3);
		$window.localStorage.clear(4);
	}
})

.controller('MainCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, $window) {
	$scope.employed;
	if($window.localStorage.getItem("employed") == "true"){
		$scope.employed = true;
	} else {
		$scope.employed = false;
	}
	//For debugging purposes
//	console.log($scope.employed);
//	console.log($window.localStorage.getItem("employed"));
	if($scope.employed == false){
		$scope.buttonText = "Employ Bouncer";
	} else {
		$scope.buttonText = "Retire Bouncer";
	}
	$scope.employBouncer = function(){
		if($scope.employed == true){
			$scope.retireBouncer();
			$scope.employed = false;
			$window.localStorage.setItem("employed", $scope.employed);
			$scope.buttonText = "Employ Bouncer";
			return;
		}
		$scope.employed = true;
		$window.localStorage.setItem("employed", $scope.employed);
		$scope.buttonText = "Retire Bouncer";
		$ionicLoading.show({ template: 'Bouncer employed', noBackdrop: true, duration: 1000 });
		//For debugging purposes
//		console.log($scope.employed);
//		console.log($window.localStorage.getItem("employed"));
	};
	
	$scope.retireBouncer = function(){
		$ionicLoading.show({ template: 'Bouncer retired', noBackdrop: true, duration: 1000 });
	}; 
});
