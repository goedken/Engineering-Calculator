angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, $window, $ionicPlatform) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$scope.template = {
			url: ""
	}
	$scope.value = {
			1: "",
			2: "",
			3: "",
			4: "",
			5: ""
	}
	$scope.general = {
			
	}
	$scope.civil = {
			
	}
	$scope.mechanical = {
			
	}
	$scope.electrical = {
			
	}
	$scope.chemical = {
			
	}
	$scope.structural = {
			
	}
	$scope.physics = {
			ohmsLaw: "Ohm's Law",
			hookesLaw: "Hooke's Law",
			pvt: "Pressure, Volume, Temperature",
	}

	$scope.assignModal = function(event) {
		var buttonClicked = document.getElementById(event.target.id).innerHTML;
		switch(buttonClicked){
		case ($scope.physics.ohmsLaw):
			$scope.template.url = 'templates/ohmsLaw.html';
			break;
		case ($scope.physics.hookesLaw):
			$scope.template.url = 'templates/hookesLaw.html';
			break;
		case ($scope.physics.pvt):
			$scope.template.url = 'templates/pvt.html';
			break;
		default:
			break;
		}
		//Load popup window layout from defaultHome.html
		$ionicModal.fromTemplateUrl($scope.template.url, {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal;
		});
		$timeout(function() {
			$scope.modal.show();
		}, 100);
	}

	//Closes popup
	$scope.closeWindow = function() {
		$scope.modal.hide();
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

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
			$scope.closeWindow();
		}, 1000);
	};
})

.factory('generalFactory', function(){
	var units = {
		
	}
})

.factory('civilFactory', function(){
	var units = {
		
	}
})

.factory('mechanicalFactory', function(){
	var units = {
		
	}
})

.factory('electricalFactory', function(){
	var units = {
		
	}
})

.factory('chemicalFactory', function(){
	var units = {
		
	}
})

.factory('structuralFactory', function(){
	var units = {
		
	}
})

.factory('physicsFactory', function(){
	var units = {
		
	}
});
