console.log("midwest.js is loaded");


// ----------------------------------------------------------------- //
// Click function for map
function areaClickEvent(event, city, stateNameProperty) {
  myMap.fitBounds(event.target.getBounds());

  var stateName = event.sourceTarget.feature.properties[stateNameProperty];

  console.log("SHOWING CLICKED STATE");
  console.log(stateName);

  // According to what I researched, I'm getting this error because calling the then() method on a Promise and the 
  //type error indicates that the Promise is undefined. So why is the the promise not returned? How to return the promise and where?
  // Error in line 104????
  // Returning NOTHING.
  // Function needs return statement.

  kerry.json("static/data/midwest_final.geojson").then(function (data) {

    var mystatedata = data.find(x => x.features === stateName)
    

    console.log("MY STATE DATA");
    console.log(data);


    //Demographics table
    var demoName = d3.select("#demoName");
    // var target1 = d3.select("#target1");
    // var target2 = d3.select("#target2");
    // var incentives = d3.select("#incentives");
    // var fuelstations = d3.select("#Alt_Fuel_Stations");
    // var chargestations = d3.select("#chargestations");
    // var chargeoutlets = d3.select("#Charge_Outlets");

    demoName.html(mystatedata.NAME); //populates Demographics h3
    // target1.html(mystatedata.2005Emissions(MtCO2)); //populates table td
    // target2.html(2005EmissionsTrans(MtCO2)); //populates table td
    // incentives.html(mystatedata.Incentives); //populates table td
    // fuelstations.html(mystatedata.AltFuelStations); //populates table td
    // chargestations.html(ChargeStations); //populates table td
    // chargeoutlets.html(ChargeOutlets); //populates table td
  });
}


// ----------------------------------------------------------------- //
// Create map object
var myMap = L.map("map", {
  center: [44.75, -96],
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
var link1 = "../static/data/midwest_final.geojson";


// ----------------------------------------------------------------- //
// Function to grab GeoJSON data.
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
      layer.bindPopup("<h3>" + feature.properties.NAME + feature.properties.Population + "</h3>");
    }
    
  }).addTo(myMap);
});


// ----------------------------------------------------------------- //
// Base map and Function to add layer control

// Create basemap object
var baseMaps = {
  "Map": map
};

