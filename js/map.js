'use strict';

function initMap() {
  var mapContainer = document.getElementById('map');
  mapContainer.classList.remove('contacts__map--no-js');
  var myLatLng = {lat: 34.8543771, lng: -111.8126909};

  var map = new google.maps.Map(mapContainer, {
    zoom: 8,
    center: myLatLng
  });


  var image = 'img/icon-map-marker.svg';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Добро пожаловать в Седону',
    icon: image
  });
}

