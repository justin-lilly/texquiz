'use strict';

angular.module('texquiz')
  .controller('MainCtrl', function ($scope) {

    $scope.landmarks = [
    {
      'key':'txcap',
      'description':'Texas Capitol',
      'source':'txcap.jpg',
      'latitude': 30.274781,
      'longitude': -97.740339
    },
    {
      'key':'sanjacmonument',
      'description':'San Jacinto Monument',
      'source':'sanjacmonument.jpg',
      'latitude': 29.750187,
      'longitude': -95.080652
    },
    {
      'key':'chicos',
      'description':'The Original Chico\'s Tacos',
      'source':'chicos.jpg',
      'latitude': 31.772473, 
      'longitude': -106.441336
    },
    {
      'key':'bigtex',
      'description':'Big Tex',
      'source':'bigtex.jpg',
      'latitude': 32.781710,
      'longitude': -96.761715
    },
    {
      'key':'jackrabbit',
      'description':'Odessa Jack Rabbit',
      'source':'jackrabbit.jpg',
      'latitude': 31.851151,
      'longitude': -102.374212
    },
    {
      'key':'cadillac',
      'description':'Cadillac Ranch',
      'source':'cadillac.jpg',
      'latitude': 35.187428,
      'longitude': -101.987069
    },
    {
      'key':'terlingua',
      'description':'Terlingua Trading Company',
      'source':'terlingua.jpg',
      'latitude': 29.321297,
      'longitude': -103.616867
    },
    {
      'key':'usslex',
      'description':'U.S.S. Lexington',
      'source':'usslex.jpg',
      'latitude': 27.815362,
      'longitude': -97.388682
    },
    {
      'key':'stratos',
      'description':'Stratos Capsule',
      'source':'stratos.jpg',
      'latitude': 29.554700,
      'longitude': -95.094287
    },
    {
      'key':'alamo',
      'description':'Alamo',
      'source':'alamo.jpg',
      'latitude': 29.426271,
      'longitude': -98.486131
    }
    // {
    //   'key':'donjuan',
    //   'description':'Don Juan de Oñate Sculpture',
    //   'source':'donjuan.jpg',
    //   'latitude': 31.805000,
    //   'longitude': -106.381063
    // },

  ];


  //SET UP VARIABLES AT THE BEGINNING
  $scope.currentLandmarkIterator = 0;
  $scope.currentLandmark = $scope.landmarks[$scope.currentLandmarkIterator];
  $scope.currentScore = 0;
  $scope.feedback = {message: '', image: 'white.jpg'};
  var map = document.getElementById('map-canvas'),
      finalScore = document.getElementById('score');

  $(document).ready(function() {
    addCurrentClass();
  });
  $scope.returnScore = function() {
    var data = {
      'latitude': $scope.currentLandmark.latitude,
      'longitude': $scope.currentLandmark.longitude
    },
    distance = calculateDistance(window.userAnswer, data),
    score = calculateScore(distance);
    score = Math.round(score);
    $scope.currentScore += score;

    if ($scope.currentLandmarkIterator < $scope.landmarks.length - 1) {
      //AFTER EACH TURN
      removeCurrentClass();
      $scope.currentLandmarkIterator++;
      $scope.currentLandmark = $scope.landmarks[$scope.currentLandmarkIterator];
      addCurrentClass();
      window.turnActive = false;
    } else {
      //WHEN GAME IS FINISHED
      $scope.currentLandmarkIterator++;
      $scope.feedback = createFeedback($scope.currentScore); 
      map.className = 'row hide';
      finalScore.className = 'row'; 
    }
  };

  function addCurrentClass() {
    //adds highlight class to the thumbnail that currently matches our main image
    var needsCurrentClass = document.getElementById($scope.currentLandmark.key);
    needsCurrentClass.className += ' current';
  }

  function removeCurrentClass() {
    var hasCurrentClass = document.getElementById($scope.currentLandmark.key);
    //hasCurrentClass.className.replace( /(?:^|\s)current(?!\S)/ , '' );
    hasCurrentClass.className = 'img-thumbnail';
  }

  function createFeedback(score) {
    //message that is fed into the final score div when the game is finished
    if (score >= 90) {
      return {message: 'Congratulations!  You have a high level of Texas knowledge!  If you\'re not a native Texan, people probably assume you are!  When are you getting your Texas tattoo?',
              image: 'car2go-cowboy.jpg'};
    } else if (score >= 80) {
      return {message: 'Great Job!  You know more about Texas than most people.  You\'ve seen a lot of the state and explored the cities and the rural areas in between.',
              image: 'skyline-bluebonnets.jpg'};
    } else if (score >= 70) {
      return {message: 'You\'ve got a good foundation of knowledge, but get out there and see more of Texas.  Hit the big cities and look for the gems hidden between them.',
              image: 'riverroad.jpg'};
    } else if (score >= 50) {
      return {message: 'You\'ve learned some things about Texas, but you\'re really missing out on some of the good stuff.  Dig into the history and check out more of this great state.',
              image: 'historicmap.jpg'};
    } else if (score < 50) {
      return {message: 'Are you from California?  It\'s time for you to learn more about the great state of Texas!  Add the following words to your vocabulary: armadillo, bar-b-que, bluebonnet, Longhorn, mockingbird, prickly pear, and Tex-Mex.',
              image: 'california.jpg'};
    }
  }

  function calculateDistance(userObject, dataObject) {
    var lat1 = userObject.latitude,
        lon1 = userObject.longitude,
        lat2 = dataObject.latitude,
        lon2 = dataObject.longitude,
        distance = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
    return distance;
  }

  function calculateScore(distanceInKm) {
    if (distanceInKm <= 16) {
      return 10;
    } else if (distanceInKm >= 161) {
      return 0;
    } else {
      var scaled = (distanceInKm - 16)/145;
      return 10 - (scaled * 10);
    }
  }

  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180);
  }  

  // $scope.modal = {
  //   title: 'Your Final Score',
  //   content: 'You Won!'
  // };

  // var myModal = $modal({title: 'My Title', content: 'My Content', show: true});


  });
