'use strict';

angular.module('texquiz')
  .controller('MainCtrl', function ($scope) {

    $scope.landmarks = [
    {
      'key':'alamo',
      'description':'Alamo',
      'source':'alamo.jpg',
      'latitude': 29.426271,
      'longitude': -98.486131
    },
    {
      'key':'txcap',
      'description':'Texas Capitol',
      'source':'txcap.jpg',
      'latitude': 30.274781,
      'longitude': -97.740339
    },
    {
      'key':'bigtex',
      'description':'Big Tex',
      'source':'bigtex.jpg',
      'latitude': 32.781710,
      'longitude': -96.761715
    },
        {
      'key':'sanjacmonument',
      'description':'San Jacinto Monument',
      'source':'sanjacmonument.jpg',
      'latitude': 29.750187,
      'longitude': -95.080652
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
      'key':'donjuan',
      'description':'Don Juan de Oñate Sculpture',
      'source':'donjuan.jpg',
      'latitude': 31.805000,
      'longitude': -106.381063
    },
    {
      'key':'jackrabbit',
      'description':'Odessa Jack Rabbit',
      'source':'jackrabbit.jpg',
      'latitude': 31.851151,
      'longitude': -102.374212
    }
  ];
  $scope.currentLandmarkIterator = 0;
  $scope.currentLandmark = $scope.landmarks[$scope.currentLandmarkIterator];
  //start first calss highlighted
  $scope.currentScore = 0;
  var map = document.getElementById('map-canvas'),
      finalScore = document.getElementById('score');

  $scope.returnScore = function() {
    var data = {
      'latitude': $scope.currentLandmark.latitude,
      'longitude': $scope.currentLandmark.longitude
    }; 
    var distance = calculateDistance(window.userAnswer, data),
        score = calculateScore(distance);
    score = Math.round(score);
    console.log($scope.currentLandmarkIterator);
    $scope.currentScore += score;
    if ($scope.currentLandmarkIterator < $scope.landmarks.length - 1) {
           //remove class here
      $scope.currentLandmarkIterator++;
      $scope.currentLandmark = $scope.landmarks[$scope.currentLandmarkIterator];
           //add highlight class here
    } else {
      $scope.currentLandmarkIterator++;

      $scope.message = createMessage($scope.currentScore);
      map.className = 'row hide';
      finalScore.className = 'row'; 
    }
  };

  // function addHighlightClass

  function createMessage(score) {
    if (score === 100) {
      return 'Excellent!  You have perfect Texas knowledge.';
    } else if (score >= 90) {
      return 'Congratulations!  You have a high level of Texas knowledge!';
    } else if (score >= 80) {
      return 'Great Job!  You know more about Texas than most people.';
    } else if (score >= 70) {
      return 'You\'ve got a good foundation of knowledge, but get out there and see more of Texas.';
    } else if (score >= 50) {
      return 'You\'ve learned some things about Texas, but you\'re really missing out on some of the good stuff.';
    } else if (score < 50) {
      return 'Are you from California?  It\'s time for you to learn more about the great state of Texas!';
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
