mapboxgl.accessToken = process.env.MAPBOX_API_KEY;

var map = new mapboxgl.Map({
  container: "map",
  center: [-0.1278, 51.5074],
  zoom: 10,
  style: "mapbox://styles/mapbox/dark-v10",
});
