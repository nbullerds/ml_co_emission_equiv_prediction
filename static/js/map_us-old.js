console.log("map_us.js is loaded");

// ----------------------------------------------------------------- //
// Click function for map
function areaClickEvent(event, city, stateNameProperty) {
  myMap.fitBounds(event.target.getBounds());

  var stateName = event.sourceTarget.feature.properties[stateNameProperty]; 

  console.log("SHOWING CLICKED STATE");
  console.log(stateName);

}

// ----------------------------------------------------------------- //
// Create map object
var myMap = L.map("map", {
  center: [44.9637, -93.1700],
  zoom: 5
});

// Add tile layer
var map = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
}).addTo(myMap);

// Links to get the geojson.
var link1 = "../static/data/US_map/st99_d00.geojson";


// ----------------------------------------------------------------- //
// Function to grab  GeoJSON data.
kerry.json(link1, function (data) {
  // Create a geoJSON layer with the retrieved data
  L.geoJson(data, {
    // Style each feature (in this case a state)
    style: function (feature) {
      return {
        color: "white",
        // Call the chooseColor function to decide which color to color the state
        fillColor: "#64b5f6",
        fillOpacity: 0.5,
        weight: 1.5
      };
    },

    // Call on each feature
    onEachFeature: function (feature, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function (event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.9
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function (event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.5
          });
        },
        // When a feature (state) is clicked, it is enlarged to fit the screen
        click: (e) => areaClickEvent(e, data, "NAME"),
      });

      // Give each feature a pop-up with information pertinent to it
      layer.bindPopup("<h3>" + feature.properties.NAME + "</h3>");
    }
  }).addTo(myMap);
});


// ----------------------------------------------------------------- //
// Base map and Function to add layer control

// Create basemap object
var baseMaps = {
  "Map": map
};

