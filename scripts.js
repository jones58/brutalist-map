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
  map.addControl(nav, "top-left");
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
    popup.innerHTML = `
    <h2>${feature.properties.Title}</h2>
    <div class="description"><p>${feature.properties.Description}</p><a href="${feature.properties.URL}" target="_blank">View On Google Maps</a> <label for="visit"><p>Have you visited?</p><input type="checkbox" value="visit" id="visit"/></label>
    </div>
    <img src="${feature.properties.Image}" alt="a photo of ${feature.properties.Title}"/>
    <svg id="svg3551" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 579.85 580.86" onclick="popup.classList.add('hidden')">
      <defs>
        <style>
          .cls-1 {
            fill: #fff;
          }
          .cls-2 {
            stroke: #fff;
            stroke-width: 0px;
          }
        </style>
      </defs>
      <g id="g3561">
        <path id="path3563" class="cls-2" d="M66.27,1.77C24.94,1.77,1.7,23.14,1.7,66.8v450.12c0,40.84,20.89,62.23,62.19,62.23h452.03c41.3,0,62.22-20.32,62.22-62.23V66.8c0-42.6-20.92-65.04-63.52-65.04,0,0-448.49-.14-448.35,0h0Z"/>
        <path id="path3565" class="cls-1" d="M244.24,458.97L64.04,278.77,244.24,98.58h118.85L226.02,235.64H495.36v87.23H226.98l136.32,136.32-119.06-.22Z"/>
      </g>
    </svg>
    `;
    popup.classList.remove("hidden");
  }
};

// linking event listener to map's built-in click function //
map.on("click", onClick);

const mapContainer = document.getElementById("map");

// store checkbox click state//
const checkbox = document.getElementById("visit");

// Function to update the checkbox state for a specific feature
function updateCheckbox(featureTitle, isChecked) {
  localStorage.setItem(featureTitle, isChecked);
  console.log("hello");
}

// Function to check the checkbox state for a specific feature
function getCheckbox(featureTitle) {
  return localStorage.getItem(featureTitle) === "true";
  console.log("hello");
}

// display how many values in  local storage in html number //
let count = localStorage.length;

document.getElementById("counter").innerHTML =
  "Visited:" + count + "/67";
