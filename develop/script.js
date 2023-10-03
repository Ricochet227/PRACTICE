groceryItems.onchange = function(){
    result.innerText = this.value;
}

function initMap() {
    var location = {lat: 40.3486, lng: 111.7318};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: location
    });
}
