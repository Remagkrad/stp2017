var map = '';

function initialize() {
    var mapOptions = {
      zoom: 17,
      center: new google.maps.LatLng(53.911641, 27.595972)
    };
    map = new google.maps.Map(document.getElementById('map'),  mapOptions);
}

// load google map
var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);