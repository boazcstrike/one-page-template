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

var sticky = new Sticky('.navigation');

$('a.navhome').on('click', function() {
  $.smoothScroll({
    scrollTarget: '#home'
  });
  return false;
});

$('a.navpractice-areas').on('click', function() {
  $.smoothScroll({
    scrollTarget: '#practice-areas',
    offset: 0
  });
  return false;
});

$('a.navbusiness-profile').on('click', function() {
  $.smoothScroll({
    scrollTarget: '#business-profile',
    offset: -70
  });
  return false;
});

$('a.navbp').on('click', function() {
  $.smoothScroll({
    scrollTarget: '#business-profile',
    offset: -100
  });
  return false;
});

$('a.navteam').on('click', function() {
  $.smoothScroll({
    // scrollElement: $('section.team'),
    scrollTarget: '#team',
    offset: -120
  });
  return false;
});

$('a.teamlink').on('click', function() {
  $.smoothScroll({
    // scrollElement: $('section.team'),
    scrollTarget: '#team',
    offset: -200
  });
  return false;
});

$('a.navcontact').on('click', function() {
  $.smoothScroll({
    // scrollElement: $('section.team'),
    scrollTarget: '#contact',
    offset: -250
  });
  return false;
});
