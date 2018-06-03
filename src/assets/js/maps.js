alert("maps.js loade");
$(document).ready(fucntion(){
	console.log("maps.js loaded");
	var teekLocaties = {
			cronesteyn: {
				center: {lat: 52.140048564891394, lng: 4.4978627566528075},
				population: 20
			},
			bosman: {
				center: {lat: 52.17111725167994, lng: 4.4745168093871825},
				population: 5
			},
			leidschehout: {
				center: {lat: 52.17375059313007, lng: 4.478679597778182},
				population: 2
			},
			onsbuiten: {
				center: {lat: 52.170171112755654, lng: 4.504857957763534},
				population: 10
			},
			houtkamp: {
				center: {lat: 52.15848315711046, lng: 4.530950487060409},
				population: 5
			}
			};
		var map;
		function initMap() {
			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 52.1601144, lng: 4.497009700000035},
				zoom: 13,
				mapTypeId: 'terrain'
			});
			for (var stad in teekLocaties) {
	// Add the circle for this city to the map.
				var cityCircle = new google.maps.Circle({
					strokeColor: '#FF0000',
					strokeOpacity: 0.8,
					strokeWeight: 2,
					fillColor: '#FF0000',
					fillOpacity: 0.35,
					map: map,
					center: teekLocaties[stad].center,
					radius: Math.sqrt(teekLocaties[stad].population) * 100
				});
			}
		}
});
