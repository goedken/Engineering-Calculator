angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, $window, $ionicPlatform, physicsFactory, mechanicalFactory) {
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
	    soundVelocity: "Velocity of Sound",
      stress: "Stress",
      strain: "Strain",
      flowRate: "Flow Rate",
      torque: "Torque",
      cantileverBeam: "Cantilever Beam"
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
      break
    case ($scope.mechanical.soundVelocity):
      $scope.template.url = 'templates/soundVelocity.html';
      break;
    case ($scope.mechanical.stress):
      $scope.template.url = 'templates/stress.html';
      break;
    case ($scope.mechanical.strain):
      $scope.template.url = 'templates/strain.html';
      break;
    case ($scope.mechanical.flowRate):
      $scope.template.url = 'templates/flowRate.html';
      break;
    case ($scope.mechanical.torque):
      $scope.template.url = 'templates/torque.html';
      break;
    case ($scope.mechanical.cantileverBeam):
      $scope.template.url = 'templates/cantileverBeam.html';
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
	var mechFac = new mechanicalFactory();
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
  $scope.computeSoundVelocity = function(){
    $scope.returned.state = "";
    var v = $scope.value.one;
    var t = $scope.value.two;
    var gamma = $scope.value.three;
    var gConst = $scope.value.four;
    mechFac.soundVelocity(v,t,gamma,gConst);
    $scope.returned = mechFac.value;
  }
  $scope.computeStress = function(){
    $scope.returned.state = "";
    var s = $scope.value.one;
    var f = $scope.value.two;
    var a = $scope.value.three;
    mechFac.stress(s,f,a);
    $scope.returned = mechFac.value;
  }
  $scope.computeStrain = function(){
    $scope.returned.state = "";
    var s = $scope.value.one;
    var changeLength = $scope.value.two;
    var originalLength = $scope.value.three;
    mechFac.strain(s,changeLength,originalLength);
    $scope.returned = mechFac.value;
  }
  $scope.computeFlowRate = function(){
    $scope.returned.state = "";
    var f = $scope.value.one;
    var a = $scope.value.two;
    var v = $scope.value.three;
    mechFac.flowRate(f,a,v);
    $scope.returned = mechFac.value;
  }
  $scope.computeTorque = function(){
    $scope.returned.state = "";
    var t = $scope.value.one;
    var f = $scope.value.two;
    var d = $scope.value.three;
    mechFac.torque(t,f,d);
    $scope.returned = mechFac.value;
  }
  $scope.computeCantilever = function(){
    $scope.returned.state = "";
    var k = $scope.value.one;
    var e = $scope.value.two;
    var i = $scope.value.three;
    var l = $scope.value.four;
    mechFac.cantilever(k,e,i,l);
    $scope.returned = mechFac.value;
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
  var mechanicalFactory = function(){
    var units = {

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
    var soundVelocity = function(v,t,gamma,gConst){
      if(v != "" && t != "" && gamma != ""){
        value.one = v;
        value.two = t;
        value.three = gamma;
        value.four = (v*v)/(gamma * t);
      } else if(v != "" && t != "" && gConst != ""){
        value.one = v;
        value.two = t;
        value.three = (v*v)/(gConst * t);
        value.four = gConst;
      } else if(v != "" && gamma != "" && gConst != ""){
        value.one = v;
        value.two = (v*v)/(gConst * gamma);
        value.three = gamma;
        value.four = gConst;
      } else if(t != "" && gamma != "" && gConst != "") {
        value.one = Math.sqrt(t * gConst * gamma);
        value.two = t;
        value.three = gamma;
        value.four = gConst;
      } else {
        value.state = "Minimum input required: any three variables";
      }
    }
    var stress = function(s,f,a){
      if(s != "" && f != "" ){
        value.one = s;
        value.two = f;
        value.three = f/s;
      } else if(s != "" && a != ""){
        value.one = s;
        value.two = s*a;
        value.three = a;
      } else if(f != "" && a != "") {
        value.one = f/a;
        value.two = f;
        value.three = a;
      } else {
        value.state = "Minimum input required: any two variables";
      }
    }
    var strain = function(s,changeLength,originalLength){
      if(s != "" && changeLength != "" ){
        value.one = s;
        value.two = changeLength;
        value.three = changeLength/s;
      } else if(s != "" && originalLength != ""){
        value.one = s;
        value.two = s*originalLength;
        value.three = originalLength;
      } else if(changeLength != "" && originalLength != "") {
        value.one = changeLength/originalLength;
        value.two = changeLength;
        value.three = originalLength;
      } else {
        value.state = "Minimum input required: any two variables";
      }
    }
    var flowRate = function(f,a,v){
      if(a != "" && v != "" ){
        value.one = a/v;
        value.two = a;
        value.three = v;
      } else if(f != "" && a != ""){
        value.one = f;
        value.two = f*v;
        value.three = v;
      } else if(f != "" && v != "") {
        value.one = f;
        value.two = f*v;
        value.three = v;
      } else {
        value.state = "Minimum input required: any two variables";
      }
    }
    var torque = function(t,f,d){
      if(f != "" && d != "" ){
        value.one = f * d;
        value.two = f;
        value.three = d;
      } else if(t != "" && d != ""){
        value.one = t;
        value.two = t/d;
        value.three = d;
      } else if(t != "" && f != "") {
        value.one = t;
        value.two = f;
        value.three = t/f;
      } else {
        value.state = "Minimum input required: any two variables";
      }
    }
    var cantilever = function(k,e,i,l){
      if(e != "" && i != "" && l != ""){
        value.one = (3*e*i)/Math.pow(l,3);
        value.two = e;
        value.three = i;
        value.four = l;
      } else if(k != "" && i != "" && l != ""){
        value.one = k
        value.two = (k*math.pow(l,3))/(3*i);
        value.three = i;
        value.four = l;
      } else if(k != "" && e != "" && l != ""){
        value.one = k
        value.two = e;
        value.three = (k*math.pow(l,3))/(3*e);;
        value.four = l;
      } else if(k != "" && e != "" && i != ""){
        value.one = k
        value.two = e;
        value.three = i;
        value.four = Math.pow((3*e*i/k),(1/3));
      } else {
        value.state = "Minimum input required: any three variables";
      }
    }
    return {
      value: value,
      soundVelocity: soundVelocity,
      stress: stress,
      strain: strain,
      flowRate: flowRate,
      torque: torque,
      cantilever: cantilever
    }
  };
  return mechanicalFactory;
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
      //calculate kinetic energy
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
