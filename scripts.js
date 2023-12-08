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
  }),
  "top-left"
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
    <h1>${feature.properties.Title}</h1>
    <div class="description"><p>${feature.properties.Description}</p><a href="${feature.properties.URL}" target="_blank">Get Directions</a></div>
    <img src="${feature.properties.Image}" alt="a photo of ${feature.properties.Title}"/>
    <svg id="3540 "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 579.85 580.86" onclick="popup.classList.add('hidden')">
      <defs>
        <style>
          .cls-4 {
            fill: #fff;
            stroke: #000;
            stroke-width: 0px;
          }
          .cls-5 {
            stroke: #fff;
            stroke-width: 0px;
          }
        </style>
      </defs>
      <g id="g3561">
        <path id="path3563" class="cls-5" d="M66.27,1.77C24.94,1.77,1.7,23.14,1.7,66.8v450.12c0,40.84,20.89,62.23,62.19,62.23h452.03c41.3,0,62.22-20.32,62.22-62.23V66.8c0-42.6-20.92-65.04-63.52-65.04,0,0-448.49-.14-448.35,0h0Z"/>
        <path id="path3565" class="cls-4" d="M244.24,458.97L64.04,278.77,244.24,98.58h118.85L226.02,235.64H495.36v87.23H226.98l136.32,136.32-119.06-.22Z"/>
      </g>
    </svg>
    <div id="checkbox-container"></div>
    `;
    // check the checkbox state for the current feature //
    const checkboxContainer = document.getElementById(
      "checkbox-container"
    );

    if (localStorage.getItem(feature.properties.Title)) {
      checkboxContainer.innerHTML = `
      <svg id="3548" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576.4 577.34">
        <defs>
          <style>
            .cls-1 {
              fill: #fff;
              stroke: #fff;
              stroke-miterlimit: 10;
              stroke-width: 55px;
            }
          </style>
        </defs>
        <g id="g3561">
          <g id="g3561-2" data-name="g3561">
            <path id="path3563" d="M64.6,.04C23.3,.04,0,21.44,0,65.04v450.1c0,40.8,20.9,62.2,62.2,62.2h452c41.3,0,62.2-20.3,62.2-62.2V65.14C576.4,22.54,555.5,.14,512.9,.14c.1-.1-448.4-.2-448.3-.1h0Z"/>
          </g>
          <g>
            <g>
              <polygon class="cls-1" points="495.18 461.13 471.08 485.33 263.28 277.33 471.08 69.53 496.68 95.13 312.88 278.93 495.18 461.13"/>
              <polygon class="cls-1" points="313.08 308.63 105.08 516.53 79.58 490.83 263.38 292.03 81.08 109.73 105.08 100.83 313.08 308.63"/>
            </g>
            <rect x="17.78" y="29.33" width="537" height="81.7"/>
            <rect x="28.38" y="432.73" width="532.8" height="127"/>
          </g>
        </g>
      </svg>`;
    } else {
      checkboxContainer.innerHTML = `<svg id="svg3552" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576.4 577.34">
        <g id="g3561">
          <path id="path3563" d="M64.6,.04C23.3,.04,0,21.44,0,65.04v450.1c0,40.8,20.9,62.2,62.2,62.2h452c41.3,0,62.2-20.3,62.2-62.2V65.14C576.4,22.54,555.5,.14,512.9,.14c.1-.1-448.4-.2-448.3-.1h0Z"/>
        </g>
      </svg>`;
    }

    // add a click event listener to the checkbox container, and set whether feature has been visited or not //
    checkboxContainer.addEventListener("click", () => {
      if (localStorage.getItem(feature.properties.Title)) {
        localStorage.removeItem(feature.properties.Title);
        checkboxContainer.innerHTML = `<svg id="svg3551" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576.4 577.34">
        <g id="g3561">
          <path id="path3563" d="M64.6,.04C23.3,.04,0,21.44,0,65.04v450.1c0,40.8,20.9,62.2,62.2,62.2h452c41.3,0,62.2-20.3,62.2-62.2V65.14C576.4,22.54,555.5,.14,512.9,.14c.1-.1-448.4-.2-448.3-.1h0Z"/>
        </g>
      </svg>`;
        setCounter();
      } else {
        localStorage.setItem(feature.properties.Title, true);
        checkboxContainer.innerHTML = `
      <svg id="3548" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576.4 577.34">
        <defs>
          <style>
            .cls-1 {
              fill: #fff;
              stroke: #fff;
              stroke-miterlimit: 10;
              stroke-width: 55px;
            }
          </style>
        </defs>
        <g id="g3561">
          <g id="g3561-2" data-name="g3561">
            <path id="path3563" d="M64.6,.04C23.3,.04,0,21.44,0,65.04v450.1c0,40.8,20.9,62.2,62.2,62.2h452c41.3,0,62.2-20.3,62.2-62.2V65.14C576.4,22.54,555.5,.14,512.9,.14c.1-.1-448.4-.2-448.3-.1h0Z"/>
          </g>
          <g>
            <g>
              <polygon class="cls-1" points="495.18 461.13 471.08 485.33 263.28 277.33 471.08 69.53 496.68 95.13 312.88 278.93 495.18 461.13"/>
              <polygon class="cls-1" points="313.08 308.63 105.08 516.53 79.58 490.83 263.38 292.03 81.08 109.73 105.08 100.83 313.08 308.63"/>
            </g>
            <rect x="17.78" y="29.33" width="537" height="81.7"/>
            <rect x="28.38" y="432.73" width="532.8" height="127"/>
          </g>
        </g>
      </svg>`;
        setCounter();
      }
    });

    popup.classList.remove("hidden");
  }
};

// linking event listener to map's built-in click function //
map.on("click", onClick);

// display how many values in  local storage in html number - using a regex here because mapbox adds two keys to local storage which we don't want to count.//

function setCounter() {
  const buildingsVisited = Object.keys(localStorage).filter(
    (key) => !/mapbox/.test(key)
  ).length;
  console.log(buildingsVisited);
  document.getElementById("counter").innerHTML =
    "Visited: " + buildingsVisited + "/67";
}

setCounter();
