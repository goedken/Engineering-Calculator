angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, $window, $ionicPlatform, physicsFactory, electricalFactory) {
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
			ohmsLaw: "Ohm's Law",
			coulomb: "Coulomb's Law",
			elecField: "Electric Field",
			elecPot: "Electric Potential",
			elecCurr: "Electric Current",
			power: "Electric Power",
			series: "Series Resistors/Capacitors",
			parallel: "Parallel Resistors/Capacitors"
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
		case ($scope.electrical.ohmsLaw):
			$scope.template.url = 'templates/ohmsLaw.html';
		break;
		case ($scope.electrical.coulomb):
			$scope.template.url = 'templates/coulomb.html';
		break;
		case ($scope.electrical.elecField):
			$scope.template.url = 'templates/elecField.html';
		break;
		case ($scope.electrical.elecPot):
			$scope.template.url = 'templates/elecPot.html';
		break;
		case ($scope.electrical.elecCurr):
			$scope.template.url = 'templates/elecCurr.html';
		break;
		case ($scope.electrical.power):
			$scope.template.url = 'templates/power.html';
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
	var elecFac = new electricalFactory();
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
	$scope.computeOhms = function(){
		$scope.returned.state = "";
		var i = $scope.value.one;
		var v = $scope.value.two;
		var r = $scope.value.three;
		elecFac.ohmsLaw(i,v,r);
		$scope.returned = elecFac.value;
	}
	$scope.computeCoulomb = function(){
		$scope.returned.state = "";
		var F = $scope.value.one;
		var k = $scope.value.two;
		var qi = $scope.value.three;
		var qii = $scope.value.four;
		var r = $scope.value.five;
		elecFac.coulomb(F, k, qi, qii, r);
		$scope.returned = elecFac.value;
	}
	$scope.computeElecField = function(){
		$scope.returned.state = "";
		var F = $scope.value.one;
		var k = $scope.value.two;
		var qi = $scope.value.three;
		var r = $scope.value.four;
		elecFac.elecField(F, k, qi, r);
		$scope.returned = elecFac.value;
	}
	$scope.computeElecPot = function(){
		$scope.returned.state = "";
		var F = $scope.value.one;
		var k = $scope.value.two;
		var qi = $scope.value.three;
		var r = $scope.value.four;
		elecFac.elecPot(F, k, qi, r);
		$scope.returned = elecFac.value;
	}
	$scope.computeElecCurr = function(){
		$scope.returned.state = "";
		$scope.returned.six = "";
		var i = $scope.value.one;
		var qi = $scope.value.two;
		var qii = $scope.value.three;
		var ti = $scope.value.four;
		var tii = $scope.value.five;
		elecFac.elecCurr(i, qi, qii, ti, tii);
		$scope.returned = elecFac.value;
	}
	$scope.computePower = function(){
		$scope.returned.state = "";
		var p = $scope.value.one;
		var v = $scope.value.two;
		var i = $scope.value.three;
		var r = $scope.value.four;
		elecFac.power(p,v,i,r);
		$scope.returned = elecFac.value;
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
	var electricalFactory = function(){
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
		var ohmsLaw = function(i, v, r){
			if(i != "" && v != ""){
				r = v / i;
				value.one = i;
				value.two = v;
				value.three = r;
			} else if(v != "" && r != ""){
				i = v / r;
				value.one = i;
				value.two = v;
				value.three = r;
			} else if(i != "" && r != ""){
				v = i * r;
				value.one = i;
				value.two = v;
				value.three = r;
			} else {
				value.state = "Minimum input required: any two variables";
				value.one = i;
				value.two = v;
				value.three = r;
			}
		}
		var coulomb = function(F, k, qi, qii, r){
			if(k == ""){
				k = 9 * Math.pow(10, 9);
				value.two = k;
			}
			if(qi != "" && qii != "" && r != ""){
				F = k * qi * qii / Math.pow(r, 2);
				value.one = F;
				value.three = qi;
				value.four = qii;
				value.five = r;
			} else if(F != "" && qii != "" && r != ""){
				qi = (F * Math.pow(r, 2)) / (k * qii);
				value.one = F;
				value.three = qi;
				value.four = qii;
				value.five = r;
			} else if(F != "" && qi != "" && r != ""){
				qii = (F * Math.pow(r, 2)) / (k * qi);
				value.one = F;
				value.three = qi;
				value.four = qii;
				value.five = r;
			} else if(F != "" && qi != "" && qii != ""){
				r = Math.sqrt((k * qi * qii) / F);
				value.one = F;
				value.three = qi;
				value.four = qii;
				value.five = r;
			} else {
				value.state = "Minimum input required: any three variables of F, q1, q2, and r"
			}
		}
		var elecField = function(F, k, qi, r){
			if(k == ""){
				k = 9 * Math.pow(10, 9);
				value.two = k;
			}
			if(qi != "" && r != ""){
				F = k * qi / Math.pow(r, 2);
				value.one = F;
				value.three = qi;
				value.four = r;
			} else if(F != "" && r != ""){
				qi = (F * Math.pow(r, 2)) / (k);
				value.one = F;
				value.three = qi;
				value.four = r;
			} else if(F != "" && qi != ""){
				r = Math.sqrt((k * qi) / F);
				value.one = F;
				value.three = qi;
				value.four = r;
			} else {
				value.state = "Minimum input required: any two variables of F, q1, and r"
			}
		}
		var elecPot = function(F, k, qi, r){
			if(k == ""){
				k = 9 * Math.pow(10, 9);
				value.two = k;
			}
			if(qi != "" && r != ""){
				F = k * qi / r;
				value.one = F;
				value.three = qi;
				value.four = r;
			} else if(F != "" && r != ""){
				qi = (F * r) / (k);
				value.one = F;
				value.three = qi;
				value.four = r;
			} else if(F != "" && qi != ""){
				r = (k * qi) / F;
				value.one = F;
				value.three = qi;
				value.four = r;
			} else {
				value.state = "Minimum input required: any two variables of F, q1, and r"
			}
		}
		var elecCurr = function(i, qi, qii, ti, tii){
			if(qi != "" && qii == "" && ti != "" && tii == ""){
				i = qi / ti;
				value.one = i;
				value.two = qi;
				value.four = ti;
			} else if(qi != "" && qii != "" && ti != "" && tii != ""){
				i = (qi - qii) / (ti - tii);
				value.one = i;
				value.two = qi;
				value.three = qii;
				value.four = ti;
				value.five = tii;
			} else if(qi != "" && qii != "" && i != ""){
				ti = (qi - qii) / i;
				value.one = i;
				value.two = qi;
				value.three = qii;
				value.four = ti;
			} else if(qi != "" && qii == "" && i != ""){
				ti = qi / i;
				value.one = i;
				value.two = qi;
				value.four = ti;
			} else if(ti != "" && tii != "" && i != ""){
				qi = (ti - tii) * i;
				value.one = i;
				value.two = qi;
				value.four = ti;
				value.five = tii;
			} else if(ti != "" && tii == "" && i != ""){
				qi = ti * i;
				value.one = i;
				value.two = qi;
				value.four = ti;
			} else {
				value.state = "Minimum input required: any two inputs of I, q1, t1"
				value.six = "inputs q1, t1 and q2, t2 will be combined in difference of q1-q2, t1-t2"
			}
		}
		var power = function(p,v,i,r){
			if(v != "" && i != "" && r == ""){
				p = v * i;
				r = Math.pow(v, 2) / p;
				value.one = p;
				value.two = v;
				value.three = i;
				value.four = r;
			} else if(v != "" && i == "" && r != ""){
				p = Math.pow(v, 2) / r;
				i = p / v;
				value.one = p;
				value.two = v;
				value.three = i;
				value.four = r;
			} else if(v == "" && i != "" && r != ""){
				p = Math.pow(i, 2) * r;
				v = p / i;
				value.one = p;
				value.two = v;
				value.three = i;
				value.four = r;
			} else if(p != "" && v != ""){
				i = p / v;
				r = Math.pow(v, 2) / p;
				value.one = p;
				value.two = v;
				value.three = i;
				value.four = r;
			} else if(p != "" && i != ""){
				v = p / i;
				r = p / Math.pow(i, 2);
				value.one = p;
				value.two = v;
				value.three = i;
				value.four = r;
			} else if(p != "" && r != ""){
				i = Math.sqrt(p / r);
				v = Math.sqrt(p * r);
				value.one = p;
				value.two = v;
				value.three = i;
				value.four = r;
			} else {
				value.state = "Minimum input required: any two variables";
			}
		}
		return {
			value: value,
			ohmsLaw: ohmsLaw,
			coulomb: coulomb,
			elecField: elecField,
			elecPot: elecPot,
			elecCurr: elecCurr,
			power: power,
		}
	};
	return electricalFactory;
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
				value.state = "Minimum input required: any one variable";
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
