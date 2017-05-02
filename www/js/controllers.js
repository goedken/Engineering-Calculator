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
  })
  /*
   Controller for setting up and administering the tests - works with multiple views
   */
  .controller('TestCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, $window, $state) {

    $scope.testPreference = $window.localStorage.getItem("testPreference");

    $scope.configureTests = function(){

      $state.go('app.testConfigure');
    }

    $scope.pickMath = function(){
      $scope.testPreference = "math";
      $window.localStorage.setItem("testPreference", $scope.testPreference);
      $state.go('app.mathTest');
    }

    $scope.pickTyping = function(){
      $scope.testPreference = "typing";
      $window.localStorage.setItem("testPreference", $scope.testPreference);
      $state.go('app.typingTest');
    }



  })

  /*
  Administers the math test and compares to the baseline result, or establishes the baseline if there is
  none
   */
  .controller('mathTestCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, $window, $state){
    /*
     Generates three different random ints between 0 and 9 inclusive, returned as a dictionary
     */
    $scope.threeRandInts = function(){
      var min = 0;
      var max  = 10;
      var ints = {};
      ints[0] = Math.floor(Math.random()*(max - min) + min);

      while(ints[1] == null){
        var tempInt = Math.floor(Math.random()*(max - min) + min);
        if(tempInt != ints[0]){
          ints[1] = tempInt;
        }
      }

      while(ints[2] == null){
        var tempInt = Math.floor(Math.random()*(max - min) + min);
        if((tempInt != ints[0]) && (tempInt != ints[1])){
          ints[2] = tempInt;
        }
      }

      return ints;
    };

    /*
     takes in the answer and processes it, ending the test if it was the last question
     */
    $scope.processAnswer = function(){
      var answerIndex;
      switch($scope.probNum) {
        case 1:
          answerIndex = $scope.firstQ;
          break;
        case 2:
          answerIndex = $scope.secondQ;
          break;
        case 3:
          answerIndex = $scope.thirdQ;
          break;
      }
      console.log(answerIndex);
      if($scope.mathAnswer == answers[answerIndex]){
        //debugging
        //console.log("User entered: " + $scope.mathAnswer);
        //console.log("Correct answer was: " + answers[answerIndex]);
        $scope.numCorrect++;
      }else{
        //debugging
        //console.log("User entered: " + $scope.mathAnswer);
        //console.log("Correct answer was: " + answers[answerIndex]);
      }
      $scope.probNum++;
      if($scope.probNum == 2){
        $scope.mathProblem = questions[$scope.secondQ];
      }else if($scope.probNum == 3){
        $scope.mathProblem = questions[$scope.thirdQ];
      }
      $scope.mathAnswer = null;
      if($scope.probNum > 3){
        //TODO
        //Check timestamp, compute score, store
        console.log("User got " + $scope.numCorrect + " answers right");
        $scope.probNum = 1;
        $scope.mathProblem = questions[$scope.firstQ];

        //TODO
        //establish end behavior
        //right now just routes to the main screen
        $state.go('app.main');
      }
    };

    $scope.probNum = 1;
    $scope.numCorrect = 0;

    //math questions to potentially be posed to the user
    var questions = {
      0: "5 + 3 - 2",
      1: "8 - 4 - 1",
      2: "2 x 3 + 1",
      3: "2 x 2 x 2",
      4: "12 - 6 x 2",
      5: "2 + 1 x 3",
      6: "2 x (5 + 4)",
      7: "3 + 2 x 0",
      8: "10 - 2 + 3",
      9: "8 - 1 x 5"
    };

    //the answers to the math questions of the same index
    var answers = {
      0: "6",
      1: "3",
      2: "7",
      3: "8",
      4: "0",
      5: "5",
      6: "18",
      7: "3",
      8: "11",
      9: "3"
    };

    var questionInts = $scope.threeRandInts();
    $scope.firstQ = questionInts[0];
    $scope.secondQ = questionInts[1];
    $scope.thirdQ = questionInts[2];

    $scope.mathProblem = questions[$scope.firstQ];


  });
