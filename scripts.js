mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9uZXM1ODEiLCJhIjoiY2xwNzM4Y3JpMXZ1NjJrcWswNDFrbnl1ZiJ9.Ud2Oqbe9kgEmB3U3UOH98w";

/* set up mapbox */
let map;
const coordinates = [-0.1276, 51.5074]; // Initial coordinates for London

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

// setupMap() with initial coordinates
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

// Add event listener when click on a brutalist building marker to open popup //
const popup = document.getElementById("popup");

const onClick = (event) => {
  // find if a feature was clicked //
  const [feature] = map.queryRenderedFeatures(event.point, {
    layers: ["brutalist-map"],
  });

  // if a feature was clicked, open a custom popup at the location of the feature with HTML from its properties //

  if (feature) {
    const popupTitle = document.createElement("h2");
    const popupDescription = document.createElement("p");
    const popupLink = document.createElement("a");
    popupTitle.textContent = feature.properties.Title;
    popupDescription.textContent = feature.properties.Description;
    popupLink.href = feature.properties.URL;
    popupLink.target = "_blank";
    popupLink.textContent = " View on Google Maps";
    popup.appendChild(popupTitle);
    popup.appendChild(popupDescription);
    popup.appendChild(popupLink);
    popup.classList.remove("hidden");
  }

  // linking event listener to map's built-in click function //
  map.on("click", onClick);
};
