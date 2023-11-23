mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9uZXM1ODEiLCJhIjoiY2xwNzM4Y3JpMXZ1NjJrcWswNDFrbnl1ZiJ9.Ud2Oqbe9kgEmB3U3UOH98w";

/* set up mapbox */
let map;
const coordinates = [-0.1276, 51.5074]; // Initial coordinates

function setupMap(coordinates) {
  map = new mapboxgl.Map({
    container: "map",
    center: [coordinates[0], coordinates[1]],
    zoom: 10,
    style: "mapbox://styles/jones581/clp8fym2g01u901qmbpzq0dde",
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "top-right");
}

// Call setupMap() with initial coordinates
setupMap(coordinates);

/* dark and light mode for map */
const lightModeToggle = document.getElementById("light-mode");
const darkModeToggle = document.getElementById("dark-mode");

lightModeToggle.addEventListener("click", () => {
  map.setStyle("mapbox://styles/jones581/clp9xceyv004301o9eao60mvd");
  lightModeToggle.classList.add("hidden");
  darkModeToggle.classList.remove("hidden");
});

darkModeToggle.addEventListener("click", () => {
  map.setStyle("mapbox://styles/jones581/clp8fym2g01u901qmbpzq0dde");
  lightModeToggle.classList.remove("hidden");
  darkModeToggle.classList.add("hidden");
});

// Add current location button to navigation //
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true,
  })
);

// Add event listener when click on marker to open popup //

const onClick = (event) => {
  // find if a feature was clicked //
  const [feature] = map.queryRenderedFeatures(event.point, {
    layers: ["brutalist-map"],
  });

  // if a feature was clicked, open a popup at the location of the feature with HTML from its properties //
  if (feature) {
    const popup = new mapboxgl.Popup({ offset: [0, -15] }).setLngLat(
      feature.geometry.coordinates
    );
    popup.setHTML(
      `<div id="popup"><h3>${feature.properties.Title}</h3>
    <a href="${feature.properties.URL}" target="_blank" id="google-link">View on Google Maps</a></div>`
    );
    popup.addTo(map);
  }
};

// linking event listener to map's built-in click function //
map.on("click", onClick);

const mapContainer = document.getElementById("map");
