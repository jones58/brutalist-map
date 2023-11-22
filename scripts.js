mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9uZXM1ODEiLCJhIjoiY2xwNzM4Y3JpMXZ1NjJrcWswNDFrbnl1ZiJ9.Ud2Oqbe9kgEmB3U3UOH98w";

/* get user's location */
navigator.geolocation.getCurrentPosition(
  successLocation,
  errorLocation,
  {
    enableHighAccuracy: true,
  }
);

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

/* if user does not give location */
function errorLocation() {
  setupMap([-0.1276, 51.5074]);
}

/* set up mapbox */
let map;
function setupMap([longitude, latitude]) {
  map = new mapboxgl.Map({
    container: "map",
    center: [longitude, latitude],
    zoom: 17,
    style: "mapbox://styles/jones581/clp8fym2g01u901qmbpzq0dde",
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "top-right");
}

/* dark and light mode for map */
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
