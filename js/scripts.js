function initMap(features) {
  // The location of curr
  var curr = {lat: 40.445686, lng: -79.949174};
  // The map, centered at curr
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: curr,
      	  styles: [
      	    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      	    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      	    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      	    {
      	      featureType: 'administrative.locality',
      	      elementType: 'labels.text.fill',
      	      stylers: [{color: '#d59563'}]
      	    },
      	    {
      	      featureType: 'poi',
      	      elementType: 'labels.text.fill',
      	      stylers: [{color: '#d59563'}]
      	    },
      	    {
      	      featureType: 'poi.park',
      	      elementType: 'geometry',
      	      stylers: [{color: '#263c3f'}]
      	    },
      	    {
      	      featureType: 'poi.park',
      	      elementType: 'labels.text.fill',
      	      stylers: [{color: '#6b9a76'}]
      	    },
      	    {
      	      featureType: 'road',
      	      elementType: 'geometry',
      	      stylers: [{color: '#38414e'}]
      	    },
      	    {
      	      featureType: 'road',
      	      elementType: 'geometry.stroke',
      	      stylers: [{color: '#212a37'}]
      	    },
      	    {
      	      featureType: 'road',
      	      elementType: 'labels.text.fill',
      	      stylers: [{color: '#9ca5b3'}]
      	    },
      	    {
      	      featureType: 'road.highway',
      	      elementType: 'geometry',
      	      stylers: [{color: '#746855'}]
      	    },
      	    {
      	      featureType: 'road.highway',
      	      elementType: 'geometry.stroke',
      	      stylers: [{color: '#1f2835'}]
      	    },
      	    {
      	      featureType: 'road.highway',
      	      elementType: 'labels.text.fill',
      	      stylers: [{color: '#f3d19c'}]
      	    },
      	    {
      	      featureType: 'transit',
      	      elementType: 'geometry',
      	      stylers: [{color: '#2f3948'}]
      	    },
      	    {
      	      featureType: 'transit.station',
      	      elementType: 'labels.text.fill',
      	      stylers: [{color: '#d59563'}]
      	    },
      	    {
      	      featureType: 'water',
      	      elementType: 'geometry',
      	      stylers: [{color: '#17263c'}]
      	    },
      	    {
      	      featureType: 'water',
      	      elementType: 'labels.text.fill',
      	      stylers: [{color: '#515c6d'}]
      	    },
      	    {
      	      featureType: 'water',
      	      elementType: 'labels.text.stroke',
      	      stylers: [{color: '#17263c'}]
      	    }
      	  ]
      });
  // The marker, positioned at curr
  var marker = new google.maps.Marker({position: curr, map: map});
  addYourLocationButton(map, marker);

  //Custom markers
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
          var icons = {
            caution: {
              icon: iconBase + 'caution.png'
            },
            fire: {
              icon: iconBase + 'firedept.png'
            },
            police: {
              icon: iconBase + 'police.png'
            },
            forbidden: {
              icon: iconBase + 'forbidden.png'
            }
          };


          // Create markers.
          features.forEach(function(feature) {
            var marker = new google.maps.Marker({
              position: feature.position,
              icon: icons[feature.type].icon,
              map: map
            });
          });












  // Create the DIV to hold the control and call the CenterControl()
  // constructor passing in this DIV.
  var centerControlDiv = document.createElement('div');
  var centerControl = new CenterControl(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(centerControlDiv);
}

function initMap1(){
	initMap(getFeatures1());
}

function initMap2(){
	initMap(getFeatures2());
}


function getFeatures1() {
	var res = [
	    {
	      position: new google.maps.LatLng(40.444453, -79.948548),
	      type: 'caution'
	    }, {
	      position: new google.maps.LatLng(40.444673, -79.943033),
	      type: 'fire'
	    }, {
	      position: new google.maps.LatLng(40.447018, -79.950689),
	      type: 'police'
	    }, {
	      position: new google.maps.LatLng(40.442632, -79.937651),
	      type: 'forbidden'
	    }
	]
	return res
}

function getFeatures2() {
	var res = [
	    {
	      position: new google.maps.LatLng(40.444453, -79.948548),
	      type: 'caution'
	    }, {
	      position: new google.maps.LatLng(40.444673, -79.943033),
	      type: 'fire'
	    }, {
	      position: new google.maps.LatLng(40.447018, -79.950689),
	      type: 'police'
	    }, {
	      position: new google.maps.LatLng(40.442632, -79.937651),
	      type: 'forbidden'
	    }, {
	      position: new google.maps.LatLng(40.445686, -79.949174),
	      type: 'police'
	    }
	]
	return res
}

function addYourLocationButton (map, marker) 
{
    var controlDiv = document.createElement('div');

    var firstChild = document.createElement('button');
    firstChild.style.backgroundColor = '#fff';
    firstChild.style.border = 'none';
    firstChild.style.outline = 'none';
    firstChild.style.width = '28px';
    firstChild.style.height = '28px';
    firstChild.style.borderRadius = '2px';
    firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
    firstChild.style.cursor = 'pointer';
    firstChild.style.marginRight = '10px';
    firstChild.style.padding = '0';
    firstChild.title = 'Your Location';
    controlDiv.appendChild(firstChild);

    var secondChild = document.createElement('div');
    secondChild.style.margin = '5px';
    secondChild.style.width = '18px';
    secondChild.style.height = '18px';
    secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png)';
    secondChild.style.backgroundSize = '180px 18px';
    secondChild.style.backgroundPosition = '0 0';
    secondChild.style.backgroundRepeat = 'no-repeat';
    firstChild.appendChild(secondChild);

    google.maps.event.addListener(map, 'center_changed', function () {
        secondChild.style['background-position'] = '0 0';
    });

    firstChild.addEventListener('click', function () {
        var imgX = '0',
            animationInterval = setInterval(function () {
                imgX = imgX === '-18' ? '0' : '-18';
                secondChild.style['background-position'] = imgX+'px 0';
            }, 500);

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                map.setCenter(latlng);
                clearInterval(animationInterval);
                secondChild.style['background-position'] = '-144px 0';
            });
        } else {
            clearInterval(animationInterval);
            secondChild.style['background-position'] = '0 0';
        }
    });

    controlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
}

function CenterControl(controlDiv, map) {

        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Report Crime';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Report Crime';
        controlUI.appendChild(controlText);

        // Setup the click event listeners: simply set the map to Chicago.
        controlUI.addEventListener('click', function() {
          window.location.href = "form.html";
        });

      }


document.addEventListener('DOMContentLoaded', function() {
	M.AutoInit();
	if(window.location.hash) {
	    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
	    if (hash == "modal1") {
	    	$('#modal1').modal('open');
	    }
	    if (hash == "modal4") {
	    	$('.modal').modal('open');
	    }
	}
});

  $(document).ready(function(){
    $('.sidenav').sidenav();
    $('#map').css("height", $( window ).height() - $('nav').height());
    $( "#review" ).click(function() {
    	setTimeout(
    	  function() 
    	  {
    	    window.location.href = "map2.html#modal4";
    	  }, 5000);    });

  });

