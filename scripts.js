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
    popup.innerHTML = `
    <h2>${feature.properties.Title}</h2>
    <p>${feature.properties.Description}</p>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quidem voluptatibus </p>
    <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcdn2.rsc.org.uk%2Fsitefinity%2Fimages%2Fbuildings-and-objects%2Fnon-rsc-buildings%2F1440barbican-theatre_-london_-external-shots_-2017_2017_photo-by-helen-maybanks-_c_-rsc_234482.tmb-gal-1340.jpg%3Fsfvrsn%3D4e6c1821_1&sp=1701943986T459d0d0db5aa64be2fe60310e66941c0972cae7018bbabb210fe260c15faf14c" />
    <img src="${feature.properties.Image}" alt="a photo of ${feature.properties.Title}"/>
    <a href="${feature.properties.URL}" target="_blank">View On Google Maps</a>
    <svg>
    <use xlink:href="images/sprite.svg#icon-cross"></use>
    </svg>
    `;

    popup.classList.remove("hidden");
    map.classList.add("hidden");
  }
};

// linking event listener to map's built-in click function //
map.on("click", onClick);

const mapContainer = document.getElementById("map");
