angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, $window, $ionicPlatform, physicsFactory) {
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
			one: "",
			two: "",
			three: "",
			four: "",
			five: "",
			six: ""
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
			motion: "Laws of Motion",
			hookesLaw: "Hooke's Law",
			pvt: "Pressure, Volume, Temperature",
			weight: "Weight",
      momentum: "Momentum",
      centAccel: "Centripetal Acceleration",
      gravitation: "Gravitation",
      potEnergy: "Potential Energy",
      kinEnergy: "Kinetic Energy"
	}

	$scope.assignModal = function(event) {
		var buttonClicked = document.getElementById(event.target.id).innerHTML;
		switch(buttonClicked){
		case ($scope.physics.motion):
			$scope.template.url = 'templates/motion.html';
		  break;
		case ($scope.physics.hookesLaw):
			$scope.template.url = 'templates/hookesLaw.html';
		  break;
		case ($scope.physics.pvt):
			$scope.template.url = 'templates/pvt.html';
		  break;
		case ($scope.physics.weight):
			$scope.template.url = 'templates/weight.html';
		  break;
		case ($scope.physics.momentum):
      $scope.template.url = 'templates/momentum.html';
      break;
    case ($scope.physics.centAccel):
      $scope.template.url = 'templates/centAccel.html';
      break;
    case ($scope.physics.gravitation):
      $scope.template.url = 'templates/gravitation.html';
      break;
    case ($scope.physics.potEnergy):
      $scope.template.url = 'templates/potEnergy.html';
      break;
    case ($scope.physics.kinEnergy):
      $scope.template.url = 'templates/kinEnergy.html';
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
			$scope.value = {
					one: "",
					two: "",
					three: "",
					four: "",
					five: "",
					six: ""
			}
			$scope.returned = {
					state: "",
					one: "",
					two: "",
					three: "",
					four: "",
					five: "",
					six: ""
			}
			$scope.modal.show();
		}, 100);
	}

	//Closes popup
	$scope.closeWindow = function() {
		$scope.modal.hide();
	};

	var physFac = new physicsFactory();
	$scope.computeMotion = function(){
		$scope.returned.state = "";
		var xi = $scope.value.one;
		var x = $scope.value.two;
		var vi = $scope.value.three;
		var v = $scope.value.four;
		var a = $scope.value.five;
		var t = $scope.value.six;
		physFac.lawsOfMotion(xi, x, vi, v, a, t);
		$scope.returned = physFac.value;
	}
	$scope.computeWeight = function(){
		$scope.returned.state = "";
		var w = $scope.value.one;
		var m = $scope.value.two;
		physFac.weight(w,m);
		$scope.returned = physFac.value;
	}
  $scope.computeHookes = function(){
    $scope.returned.state = "";
    var f = $scope.value.one;
    var k = $scope.value.two;
    var x = $scope.value.three;
    physFac.hookes(f,k,x);
    $scope.returned = physFac.value;
  }
  $scope.computeMomentum = function(){
    $scope.returned.state = "";
    var p = $scope.value.one;
    var m = $scope.value.two;
    var v = $scope.value.three;
    physFac.momentum(p,m,v);
    $scope.returned = physFac.value;
  }
  $scope.computePVT = function(){
    $scope.returned.state = "";
    var p = $scope.value.one;
    var v = $scope.value.two;
    var n = $scope.value.three;
    var t = $scope.value.four;
    physFac.pvt(p,v,n,t);
    $scope.returned = physFac.value;
  }
  $scope.computeCentAccel = function(){
    $scope.returned.state = "";
    var a = $scope.value.one;
    var v = $scope.value.two;
    var r = $scope.value.three;
    physFac.centAccel(a,v,r);
    $scope.returned = physFac.value;
  }
  $scope.computeGravitation = function(){
    $scope.returned.state = "";
    var f = $scope.value.one;
    var mOne = $scope.value.two;
    var mTwo = $scope.value.three;
    var r = $scope.value.four;
    physFac.gravitation(f,mOne,mTwo,r);
    $scope.returned = physFac.value;
  }
  $scope.computePotEnergy = function(){
    $scope.returned.state = "";
    var p = $scope.value.one;
    var m = $scope.value.two;
    var h = $scope.value.three;
    physFac.potEnergy(p,m,h);
    $scope.returned = physFac.value;
  }
  $scope.computeKinEnergy = function(){
    $scope.returned.state = "";
    var k = $scope.value.one;
    var m = $scope.value.two;
    var v = $scope.value.three;
    physFac.kinEnergy(k,m,v);
    $scope.returned = physFac.value;
  }
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
	var physicsFactory = function(){
		var units = {
				meters: 0,
				seconds: 0,
				metersPerSecond: 0,
				metersPerSecondSqr: 0
		}
		var value = {
				state: "",
				one: "",
				two: "",
				three: "",
				four: "",
				five: "",
				six: ""
		}
		var lawsOfMotion = function(xi, x, vi, v, a, t){
			if(t != "" && a != ""){
				if(vi == ""){
					vi = 0;
				}
				if(v == ""){
					v = vi + a * t;
				}
				if(xi == ""){
					xi = 0;
				}
				if(x == ""){
					x = xi + vi * t + 0.5 * a * t * t;
				}
			} else {
				value.state = "Minimum input required: time and acceleration";
			}
			value.one = xi;
			value.two = x;
			value.three = vi;
			value.four = v;
			value.five = a;
			value.six = t;
		}
		var weight = function(w,m){
      if (m != "") {
        value.one = m * 9.8;
        value.two = m;
      } else if (w != "") {
        value.one = w;
        value.two = w / 9.8
      } else {
        value.state = "Minimum input required: one of the variables";
      }
    }
    var hookes = function(f,k,x){
      if(k != "" && x != ""){
        value.one = (-k) * x;
        value.two = k;
        value.three = x;
      } else if(f != "" && x != ""){
        value.one = f;
        value.two = f/-x;
        value.three = x;
      } else if(k != "" && k != ""){
        value.one = f;
        value.two = k;
        value.three = f/(-k);
      }else {
        value.state = "Minimum input required: K Constant and Delta X";
      }
    }
    var momentum = function(p,m,v){
      if(m != "" && v != ""){
        value.one = m * v;
        value.two = m;
        value.three = v;
      } else if(p != "" && v != ""){
        value.one = p;
        value.two = p/v;
        value.thee = v;
      } else if(p != "" && m != ""){
        value.one = p;
        value.two = m;
        value.three = p/m
      } else {
        value.state = "Minimum input required: mass and velocity";
      }
    }
    var pvt = function(p,v,n,t){
      var r = 8.3145;
      if (p != "" && v != "" && t != "") {
        value.one = p;
        value.two = v;
        value.three = (p * v) / (r * t);
        value.four = t;
      } else if (p != "" && v != "" && n != "") {
        value.one = p;
        value.two = v;
        value.three = n;
        value.four = (p * v) / (n * r);
      } else if (p != "" && n != "" && t != "") {
        value.one = p;
        value.two = (n * r * t) / p;
        value.three = n;
        value.four = t;
      } else if (v != "" && n != "" && t != "") {
        value.one = (n * r * t) / v;
        value.two = v;
        value.three = n;
        value.four = t;
      } else {
        value.state = "Minimum input required: any three variables";
      }
    }
    var centAccel = function(a,v,r){
      if (v != "" && r != "") {
        value.one = (v*v)/r;
        value.two = v;
        value.three = r;
      } else if (a != "" && r != "") {
        value.one = a;
        value.two = Math.sqrt(a*r);
        value.three = r;
      } else if (a != "" && v != "") {
        value.one = a;
        value.two = v;
        value.three = (v*v)/a;
      }else {
        value.state = "Minimum input required: any two variables";
      }
    }
    var gravitation = function(f,mOne,mTwo,r){
      var g = 6.67 * Math.pow(10,-11);
      if (f != "" && mOne != "" && mTwo != "") {
        value.one = f;
        value.two = mOne;
        value.three = mTwo;
        value.four = Math.sqrt(g * mOne * mTwo / f);
      } else if (f != "" && mOne != "" && r != "") {
        value.one = f;
        value.two = mOne;
        value.three = f*r*r/(g*mOne);
        value.four = r;
      } else if (f != "" && mTwo != "" && r != "") {
        value.one = f;
        value.two = f*r*r/(g*mTwo);
        value.three = mTwo;
        value.four = r;
      } else if (mOne != "" && mTwo != "" && r != "") {
        value.one = g*mOne*mTwo/(r*r);
        value.two = mOne;
        value.three = mTwo;
        value.four = r;
      } else {
        value.state = "Minimum input required: any three variables";
      }
    }
    var potEnergy = function(p,m,h){
      if (p != "" && m != "") {
        value.one = p;
        value.two = m;
        value.three = p/(m*9.8);
      } else if (p != "" && h != "") {
        value.one = p;
        value.two = p/(h*9.8);
        value.three = h;
      } else if (m != "" && h != "") {
        value.one = m*9.8*h;
        value.two = m;
        value.three = h;
      }else {
        value.state = "Minimum input required: any two variables";
      }
    }
    var kinEnergy = function(k,m,v){
      if (k != "" && m != "") {
        value.one = k;
        value.two = m;
        value.three = Math.sqrt(2*k/m);
      } else if (k != "" && v != "") {
        value.one = k;
        value.two = 2*k/(v*v);
        value.three = v;
      } else if (m != "" && v != "") {
        value.one = .5*m*v*v;
        value.two = m;
        value.three = v;
      }else {
        value.state = "Minimum input required: any two variables";
      }
    }
		return {
			value: value,
			lawsOfMotion: lawsOfMotion,
			weight: weight,
      hookes: hookes,
      momentum: momentum,
      pvt: pvt,
      centAccel: centAccel,
      gravitation: gravitation,
      potEnergy: potEnergy,
      kinEnergy: kinEnergy
		}
	};
	return physicsFactory;
});
