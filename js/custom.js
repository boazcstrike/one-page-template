
/* Google Maps registered
---------------------------------*/

function initMap() {
  var uluru = {lat: 14.42499, lng: 121.023030};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

/* Navigation
---------------------------------*/

// top stickybar
var sticky = new Sticky('#navigation');

var scroll = new SmoothScroll('a[href*="#"]', {
  // //Selectors
  // speed: 1500;
  offset: 100
  // easing: 'easeInOutCubic' // Easing pattern to use
});
