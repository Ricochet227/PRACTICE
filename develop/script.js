function initMap() {
  var location = { lat: 40.7128, lng: -74.0060 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: location
  });
}

function applyZipCodeAndRadius() {
  const zipCode = document.getElementById('zipCode').value;
  const radius = document.getElementById('radius').value;
  updateMapMarkers(zipCode, radius);
}

function updateMapMarkers(zipCode, radius) {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: zipCode }, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      const location = results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
      });
      new google.maps.Marker({
        position: location,
        map: map
      });
    } else {
      console.error('Geocode was not successful for the following reason: ' + status);
    }
  });
}