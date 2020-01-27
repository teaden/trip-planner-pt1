const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
  if (type === "activity") {
    const markerSpec = document.createElement("div");
    markerSpec.style.width = "32px";
    markerSpec.style.height = "39px";
    markerSpec.style.backgroundImage = `url(${iconURLs.activities})`;
    const marker = new mapboxgl.Marker(marker).setLngLat([coords]);
    return marker;
  }
};

module.exports = buildMarker;
