var map;
var parks;

var myStyle = {
"color": "#16ac2c",
"weight": 1,
"opacity": 0.65
};


function showValue(newValue){
var sentence = "";

	switch (newValue) {
		case "0":
			sentence = "2010.12.20";
			parks.clearLayers();
			parks=L.geoJson(geojsonFeature, {
				style: myStyle,
				filter: function(feature, layer){
					return feature.properties.show0;
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.NAME);
				}
			}
			).addTo(map);
			break;
		case "1":
			sentence = "2013.05.23";
			parks.clearLayers();
			parks=L.geoJson(geojsonFeature, {
				style: myStyle,
				filter: function(feature, layer){
					return feature.properties.show1;
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.NAME);
				}
			}
			).addTo(map);
			break;
		case "2":
			sentence = "2013.06.12";
			parks.clearLayers();
			parks=L.geoJson(geojsonFeature, {
				style: myStyle,
				filter: function(feature, layer){
					return feature.properties.show2;
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.NAME);
				}
			}
			).addTo(map);
			break;
		case "3":
			sentence = "2013.06.13";
			parks.clearLayers();
			parks=L.geoJson(geojsonFeature, {
				style: myStyle,
				filter: function(feature, layer){
					return feature.properties.show3;
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.NAME);
				}
			}
			).addTo(map);
			break;
		case "4":
			sentence = "2013.08.07";
			parks.clearLayers();
			parks=L.geoJson(geojsonFeature, {
				style: myStyle,
				filter: function(feature, layer){
					return feature.properties.show4;
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.NAME);
				}
			}
			).addTo(map);
			break;
}
document.getElementById("range").innerHTML = sentence;
}

function init(){
	
map = L.map('map').setView([-15, 125], 7);

L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

parks=L.geoJson(geojsonFeature, {
				style: myStyle,
				filter: function(feature, layer){						
						return feature.properties.show0
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.NAME);
				}
			}
			).addTo(map);

}