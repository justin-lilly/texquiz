'use strict';

window.userAnswer;

  function initialize() {
    var mapOptions = {
      zoom: 6,
      minZoom: 6,
      maxZoom: 6,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      overviewMapControl: false,
      panControl: false,
      rotateControl: false,
      scaleControl: false,
      scrollwheel: false,
      draggable: false,
      keyboardShortcuts: false,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      styles: [ { "featureType": "administrative.locality", "stylers": [ { "visibility": "off" } ] },
                { "featureType": "poi", "stylers": [ { "visibility": "off" } ] } ],
      center: new google.maps.LatLng(31, -99.6)
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var marker;

    google.maps.event.addListener(map, 'click', function(event) {
      placeMarker(event.latLng);
    });

    function placeMarker(location) {
      window.userAnswer = { 'latitude': location.lat(),
                            'longitude': location.lng()};
      if (marker) {
        marker.setPosition(location);
      } else {
        marker = new google.maps.Marker({
          position: location, 
          map: map,
          animation: google.maps.Animation.DROP
        });
      }
    }
  }

  function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
        'callback=initialize';
    document.body.appendChild(script);
  }

loadScript();