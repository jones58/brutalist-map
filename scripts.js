if (!mapboxgl.accessToken) {
  mapboxgl.accessToken = process_env_netlify_token;
}

var map = new mapboxgl.Map({
  container: "map",
  center: [-0.1278, 51.5074],
  zoom: 10,
  style: "mapbox://styles/mapbox/dark-v10",
});
