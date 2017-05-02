angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, $window, $ionicPlatform) {



	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	function onLoad(){
		document.addEventListener("deviceready", onDeviceReady, false);
	}

	function onDeviceReady(){
		document.addEventListener("pause", onPause, false);
		document.addEventListener("resume", onResume, false);
	}

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

	if($window.localStorage.getItem("address") == "good"){
		$scope.address.streetAddress = $window.localStorage.getItem("streetAddress");
		$scope.address.city = $window.localStorage.getItem("city");
		$scope.address.state = $window.localStorage.getItem("state");
		$scope.address.zipCode = $window.localStorage.getItem("zipCode");
	}
	else{
		$scope.address.streetAddress = "";
		$scope.address.city = "";
		$scope.address.state = "";
		$scope.address.zipCode = "";
		$window.localStorage.setItem("streetAddress", null);
		$window.localStorage.setItem("city", null);
		$window.localStorage.setItem("state", null);
		$window.localStorage.setItem("zipCode", null);
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
			$window.localStorage.setItem("address", "good");
			$window.localStorage.setItem("streetAddress", $scope.address.streetAddress);
			$window.localStorage.setItem("city", $scope.address.city);
			$window.localStorage.setItem("state", $scope.address.state);
			$window.localStorage.setItem("zipCode", $scope.address.zipCode);
			$ionicLoading.show({ template: 'Address saved!', noBackdrop: true, duration: 1000 });
		} else {
			$window.localStorage.clear("address");
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
		$window.localStorage.clear("address");
		$window.localStorage.clear("streetAddress");
		$window.localStorage.clear("city");
		$window.localStorage.clear("state");
		$window.localStorage.clear("zipCode");
	}
	
	function onPause(){
		$ionicLoading.show({ template: 'App in background', noBackdrop: true, duration: 1000 });
	}
	
	function onResume(){
		$ionicLoading.show({ template: 'App in foreground', noBackdrop: true, duration: 1000 });
	}
	
//	$ionicPlatform.on('pause', function onPause(){
//		$ionicLoading.show({ template: 'App in background', noBackdrop: true, duration: 1000 });
//	});
//	
//	$ionicPlatform.on('resume', function onResume(){
//		$ionicLoading.show({ template: 'App in foreground', noBackdrop: true, duration: 1000 });
//	});
})

.controller('MainCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, $window) {
	$scope.employed;
	//let app;
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
