if (!mapboxgl.accessToken) {
  mapboxgl.accessToken = mapboxToken;
}

let map = new mapboxgl.Map({
  container: "map",
  center: [-0.1278, 51.5074],
  zoom: 10,
  style: "mapbox://styles/jones581/clp8fym2g01u901qmbpzq0dde",
});

const lightModeToggle = document.getElementById("light-mode");
const darkModeToggle = document.getElementById("dark-mode");

lightModeToggle.addEventListener("click", () => {
  map.setStyle("mapbox://styles/mapbox/light-v10");
  lightModeToggle.classList.add("hidden");
  darkModeToggle.classList.remove("hidden");
});

darkModeToggle.addEventListener("click", () => {
  map.setStyle("mapbox://styles/jones581/clp8fym2g01u901qmbpzq0dde");
  lightModeToggle.classList.remove("hidden");
  darkModeToggle.classList.add("hidden");
});
