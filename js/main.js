// Autohide navbar
$(".navbar-fixed-top").autoHidingNavbar();


// initialize Google Maps
var myCenter=new google.maps.LatLng(-6.9473639,107.6824474);
function initialize() {
	var mapProp = {
		scrollwheel: false,
		center:myCenter,
		zoom:13,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

	var map=new google.maps.Map(document.getElementById("gmaps"),mapProp);

	var marker=new google.maps.Marker({
		position:myCenter,
	});

	marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);


//Initialize WOW.js
new WOW().init();