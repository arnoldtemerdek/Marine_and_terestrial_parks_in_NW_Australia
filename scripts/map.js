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
			break;
		case "1":
			sentence = "2013.05.23";
			break;
		case "2":
			sentence = "2013.06.12";
			break;
		case "3":
			sentence = "2013.06.13";
			break;
		case "4":
			sentence = "2013.08.07";
			break;
	}
switchLayerfeatures(newValue);
document.getElementById("range").innerHTML = sentence;
}

function switchLayerfeatures(timeValue){
	parks.clearLayers();
	parks=L.geoJson(geojsonFeature, {
		style: myStyle,
		filter: function(feature, layer){
			return feature.properties["show" + timeValue];
		},
		onEachFeature: function (feature, layer) {
			layer.bindPopup(feature.properties.NAME);
		}
	}
	).addTo(map);
}

function init(){
	
map = L.map('map').setView([-15, 125], 7);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
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