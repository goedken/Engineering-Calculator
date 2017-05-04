angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, $window, $ionicPlatform, physicsFactory, chemicalFactory) {
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
      boyles: "Boyle's Law",
      charles: "Charles' Law",
      stp: "Standard Temperature and Pressure",
      halfLife: "Half-Life",
      gayLussacs: "Gay-Lussac's Law",
      combinedGas: "Combined Gas Law",
      soudersBrown: "Souders-Brown Equation"
	}
	$scope.structural = {

	}
	$scope.physics = {
			motion: "Laws of Motion",
			hookesLaw: "Hooke's Law",
			pvt: "Pressure, Volume, Temperature",
			weight: "Weight",
      momentum: "Momentum",
      centAccel: "Centripetal Acceleration"
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
      case ($scope.chemical.boyles):
            $scope.template.url = 'templates/boylesLaw.html';
            break;
      case ($scope.chemical.charles):
            $scope.template.url = 'templates/charlesLaw.html';
            break;
      case ($scope.chemical.stp):
            $scope.template.url = 'templates/stp.html';
            break;
      case ($scope.chemical.halfLife):
            $scope.template.url = 'templates/halflife.html';
            break;
      case ($scope.chemical.gayLussacs):
            $scope.template.url = 'templates/gayLussacs.html';
            break;
      case ($scope.chemical.combinedGas):
            $scope.template.url = 'templates/combinedGasLaw.html';
            break;
      case ($scope.chemical.soudersBrown):
            $scope.template.url = 'templates/soudersBrown.html';
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

    var chemFac = new chemicalFactory();
    $scope.computeBoyles = function(){
      $scope.returned.state = "";
      var p1 = $scope.value.one;
      var v1 = $scope.value.two;
      var p2 = $scope.value.three;
      var v2 = $scope.value.four;
      chemFac.boylesLaw(p1, v1, p2, v2);
      $scope.returned = chemFac.value;
    };
    $scope.computeCharles = function(){
      $scope.returned.state = "";
      var t1 = $scope.value.one;
      var v1 = $scope.value.two;
      var t2 = $scope.value.three;
      var v2 = $scope.value.four;
      chemFac.boylesLaw(t1, v1, t2, v2);
      $scope.returned = chemFac.value;
    };
    $scope.computeSTP = function(){
      $scope.returned.state = "";
      var v = $scope.value.one;
      var t = $scope.value.two;
      var p = $scope.value.three;
      chemFac.stp(v, t, p);
      $scope.returned = chemFac.value;
    };
    $scope.computeHalfLife = function() {
      $scope.returned.state = "";
      var thalf = $scope.value.one;
      var t = $scope.value.two;
      var amtb = $scope.value.three;
      var amte = $scope.value.four;
      chemFac.halfLife(thalf, t, amtb, amte);
      $scope.returned = chemFac.value;
    };
    $scope.computeGayLussacs = function() {
      $scope.returned.state = "";
      var p1 = $scope.value.one;
      var t1 = $scope.value.two;
      var p2 = $scope.value.three;
      var t2 = $scope.value.four;
      chemFac.gayLussacsLaw(p1, t1, p2, t2);
      $scope.returned = chemFac.value;
    };
    $scope.computeCombinedGas = function() {
      $scope.returned.state = "";
      var p1 = $scope.value.one;
      var v1 = $scope.value.two;
      var t1 = $scope.value.three;
      var p2 = $scope.value.four;
      var v2 = $scope.value.five;
      var t2 = $scope.value.six;
      chemFac.combinedGasLaw(p1, v1, t1, p2, v2, t2);
      $scope.returned = chemFac.value;
    };
    $scope.computeSoudersBrown = function() {
      $scope.returned.state = "";
      var k = $scope.value.one;
      var pv = $scope.value.two;
      var pl = $scope.value.three;
      chemFac.soudersBrown(k, pl, pv);
      $scope.returned = chemFac.value;
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
    var chemicalFactory = function() {
      var value = {
        state: "",
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: ""
      };
      var boylesLaw = function (p1, v1, p2, v2) {
        if(p1 == "") {
          p1 = (p2 * v2) / v1;
        } else if (v1 == "") {
          v1 = (p2 * v2) / p1;
        } else if (p2 == "") {
          p2 = (p1 * v1) / v2;
        } else if (v2 == "") {
          v2 = (p1 * v1) / p2;
        } else {
          value.state = "Must fill in 3 inputs";
        }
        value.one = p1;
        value.two = v1;
        value.three = p2;
        value.four = v2;
      };
      var charlesLaw = function (t1, v1, t2, v2) {
        if(t1 == "") {
          t1 = v1 / (v2 / t2);
        } else if (v1 == "") {
          v1 = (v2 / t2) * t1;
        } else if (t2 == "") {
          t2 = v2 / (v1 / t1);
        } else if (v2 == "") {
          v2 = (v1 / t1) * t2;
        } else {
          value.state = "Must fill in 3 inputs";
        }
        value.one = t1;
        value.two = v1;
        value.three = t2;
        value.four = v2;
      };
      var stp = function (v, t, p) {
        if(v != "" && t != "" && p != "") {
          var vstp = v * (237.15/t) * (p/760);
          var mstp = vstp / 22.4;
        } else {
          value.state = "Must full in all inputs";
        }
        value.one = vstp;
        value.two = mstp;
      };
      var halfLife = function(thalf, t, amtb, amte) {
        if(thalf == "") {
            thalf = (t * Math.log(2)) / Math.log(amtb / amte);
        } else if (t == "") {
            t = (thalf * Math.log(amtb/amte)) / Math.log(2);
        } else if (amtb == "") {
            amtb = amte * Math.pow(2, (t/thalf));
        } else if (amte == "") {
            amte = amtb / Math.pow(2, (t/thalf));
        } else {
          value.state = "Must fill in 3 inputs";
        }
        value.one = thalf;
        value.two = t;
        value.three = amtb;
        value.four = amte;
      };
      var gayLussacsLaw = function (p1, t1, p2, t2) {
        if(p1 == "") {
          p1 = (p2 / t2) * t1;
        } else if (t1 == "") {
          t1 = p1 / (p2 / t2);
        } else if (p2 == "") {
          p2 = (p1 / t1) * t2;
        } else if (t2 == "") {
          t2 = p2 / (p1 / t1);
        } else {
          value.state = "Must fill in 3 inputs";
        }
        value.one = p1;
        value.two = t1;
        value.three = p2;
        value.four = t2;
      };
      var combinedGasLaw = function (p1, v1, t1, p2, v2, t2) {
        if(p2 == "") {
          p2 = (((p1 * v1) / t1) * t2) / v2;
        } else if (v2 == "") {
          v2 = (((p1 * v1) / t1) * t2) / p2;
        } else if (t2 == "") {
          t2 = (p2 * v2 * t1) / (p1 * v1)
        } else {
          value.state = "Must fill in 5 inputs including all '1' values";
        }
        value.one = p1;
        value.two = v1;
        value.three = t1;
        value.four = p2;
        value.five = v2;
        value.six = t2;
      };
      var soudersBrown = function(k, pl, pv) {
        if(k != "" && pl != "" && pv != "") {
          var v = Math.sqrt((pl - pv) / pv) * k;
        } else {
          value.state = "Must fill in all inputs";
        }
        value.one = v;
      };
      return {
        value: value,
        boylesLaw: boylesLaw,
        charlesLaw: charlesLaw,
        stp: stp,
        halfLife: halfLife,
        gayLussacsLaw: gayLussacsLaw,
        combinedGasLaw: combinedGasLaw,
        soudersBrown: soudersBrown
      }
    };
    return chemicalFactory;
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
      } else if (w != "") {
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
      r = 8.3145;
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
		return {
			value: value,
			lawsOfMotion: lawsOfMotion,
			weight: weight,
      hookes: hookes,
      momentum: momentum,
      pvt: pvt,
      centAccel: centAccel
		}
	};
	return physicsFactory;
});
