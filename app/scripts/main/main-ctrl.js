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
      'key':'sanjacmonument',
      'description':'San Jacinto Monument',
      'source':'sanjacmonument.jpg',
      'latitude': 29.750187,
      'longitude': -95.080652
    },
    {
      'key':'stratos',
      'description':'Stratos Capsule',
      'source':'stratos.jpg'
      'latitude': 29.554700,
      'longitude': -95.094287
    },
    {
      'key':'usslex',
      'description':'U.S.S. Lexington',
      'source':'usslex.jpg',
      'latitude': 27.815362,
      'longitude': -97.388682
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

  // $scope.myFunction = function(message) {
  //   console.log(message);
  // };
  //call with ng-click on the index.html

  $scope.returnScore = function(index) {
    data = {
      'latitude': ,
      'longitude':
    }; 
    calculateDistance(userAnswer, data)
  }

  function calculateDistance(userObject, dataObject) {
    var lat1 = userObject.latitude,
        lon1 = userObject.longitude,
        lat2 = dataObject.latitude,
        lon2 = dataObject.longitude;
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
  }

  

  function calculateScore(distanceInKm) {
    if (distanceInKm <= 32) {
      return 10;
    } else if (distanceInKm >= 322) {
      return 0;
    } else {
      var scaled = (distanceInKm - 32)/290;
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


    // angular.forEach($scope.landmarks, function(awesomeThing) {
    //   awesomeThing.rank = Math.random();
    // });
  });
