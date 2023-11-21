if (!mapboxgl.accessToken) {
  mapboxgl.accessToken = mapboxToken;
}

var map = new mapboxgl.Map({
  container: "map",
  center: [-0.1278, 51.5074],
  zoom: 10,
  style: "mapbox://styles/jones581/clp708iyk00o801qu8118305m",
});

lightMode;
