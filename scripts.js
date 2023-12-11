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
    <div><p>Designed by: ${feature.properties.Designer}</p><p>Completed: ${feature.properties.Completed}</p><p><a href="${feature.properties.URL}" target="_blank">Get Directions</a></div>
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
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560.65 561.59">
        <defs>
          <style>
            .cls-1, .cls-2 {
              fill: #fff;
            }

            .cls-2, .cls-3 {
              fill-rule: evenodd;
            }
          </style>
        </defs>
        <g id="g3561">
          <g id="path3565">
            <path class="cls-1" d="M203.14,.03v-.03h84.82V.04c-28.78,0-57.72-.01-84.82-.01Zm180.79,206.28l36.41,36.41v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3Z"/>
          </g>
          <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
          <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
          <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
          <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
          <path class="cls-3" d="M420.34,242.72v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm.17-101.46l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
          <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Zm-.17,101.46v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm0,0v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm.17-101.46l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
          <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Zm-.17,101.46v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm0,0v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm.17-101.46l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
          <path class="cls-3" d="M420.34,242.72v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm.17-101.46l14.23,14.23-14.28,14.28,.05-28.51Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Zm-.17,101.46v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm.17-101.46l14.23,14.23-14.28,14.28,.05-28.51Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
          <path class="cls-3" d="M383.92,206.31l36.41,36.41v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3Zm36.58-65.04l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l14.23,14.23-14.28,14.28,.05-28.51Zm-36.58,65.04l36.41,36.41v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3Z"/>
          <path class="cls-3" d="M420.51,141.27l14.23,14.23-14.28,14.28,.05-28.51Zm-36.58,65.04l36.41,36.41v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3Zm36.58-65.04l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l14.23,14.23-14.28,14.28,.05-28.51Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8ZM287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm0,0c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Z"/>
          <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
          <path class="cls-3" d="M420.51,141.27l14.23,14.23-14.28,14.28,.05-28.51Zm0,0l.02-11.8-5.91,5.91,5.89,5.89Z"/>
          <path class="cls-3" d="M420.51,141.27l14.23,14.23-14.28,14.28,.05-28.51Zm0,0l.02-11.8-5.91,5.91,5.89,5.89Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm0,0l-.05,28.51,14.28-14.28-14.23-14.23Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm0,0l-.05,28.51,14.28-14.28-14.23-14.23Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm0,0l-.05,28.51,14.28-14.28-14.23-14.23Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l-.05,28.51,14.28-14.28-14.23-14.23Zm0,0l.02-11.8-5.91,5.91,5.89,5.89Zm-36.58,65.04l-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51s-36.41-36.41-36.41-36.41Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm0,0l-.05,28.51,14.28-14.28-14.23-14.23Zm-36.58,65.04l-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51s-36.41-36.41-36.41-36.41Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm0,0l-.05,28.51,14.28-14.28-14.23-14.23Zm-36.58,65.04l-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51s-36.41-36.41-36.41-36.41Z"/>
          <path class="cls-3" d="M420.51,141.27l14.23,14.23-14.28,14.28,.05-28.51ZM287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l.02-11.8-5.91,5.91,5.89,5.89Z"/>
          <path class="cls-3" d="M420.51,141.27l14.23,14.23-14.28,14.28,.05-28.51ZM287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm-.17,101.46l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Z"/>
          <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8ZM287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l-.05,28.51,14.28-14.28-14.23-14.23Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l.02-11.8-5.91,5.91,5.89,5.89Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm-.17,101.46l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm0,0l-.05,28.51,14.28-14.28-14.23-14.23Zm-.17,101.46l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l-.05,28.51,14.28-14.28-14.23-14.23Zm-.17,101.46l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l.02-11.8-5.91,5.91,5.89,5.89Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l.02-11.8-5.91,5.91,5.89,5.89Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l.02-11.8-5.91,5.91,5.89,5.89Z"/>
          <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l.02-11.8-5.91,5.91,5.89,5.89Z"/>
          <path class="cls-2" d="M433.1,140.61l54.05,54.05v2.25S226.96,457.1,226.96,457.1L67.38,297.52l58.98-58.98,104.4,104.4,202.34-202.34Zm54.31-96.56l-8.75-8.74,8.77-8.77-.03,17.52Zm0,0l-8.75-8.74,8.77-8.77-.03,17.52Zm0,0l21.12,21.12-21.2,21.2,.07-42.32Z"/>
          <path class="cls-3" d="M492.52,61.02c-.03-.31-.04-.61-.03-.89-.93-1.74-1.63-3.16-1.98-4.08-.52-1.35-.62-2.41-.61-3.03,.02-1.64,.61-2.79,1.23-3.6,.85-1.12,1.97-1.87,3.4-2.2,.83-.19,3.44-.62,6.46,2.2,.15,.14,.32,.3,.52,.47,.51-3.68,2-5.35,2.73-5.92,.79-.62,1.63-1.01,2.49-1.19,0-.33-.01-.67-.02-1-.28,.11-.57,.2-.85,.27-.3,.07-.6,.12-.9,.15-.99,.4-2.01,.6-3.03,.6-2.94,0-4.99-.9-6.48-2.09-1.65-1.32-2.74-3.12-3.26-5.36-.69-2.99,.19-7.41,.19-10.85,0-3.18,.89-4.78,1.31-5.38,1.21-1.72,2.74-2.35,4.21-2.52,.93-.11,1.91-.02,2.92,.38,.81,.32,1.95,.96,2.94,2.39,.11,.16,.24,.37,.37,.61,.17-.45,.32-.81,.46-1.06,1.6-2.8,3.93-3.3,5.42-3.31,1.4,0,4.87,.35,6.21,5.23,2.29,8.35,1.86,17.97,2.3,26.7,2.21-.74,4.19-.16,5.95,1.51,3.39,3.21,4.08,7.2,3.06,11.97-.75,3.51-2.95,7.7-2.95,12.18v23.92c0,3.3-1.98,4.64-3.27,5.27-.53,.26-3.91,1.57-6.66-1.05-1,.31-2.19,.45-3.39,.43-.22,0-.43,0-.65,0-2.75,10.06-7.1,1.31-8.73-19.85-.79-1.13-1.52-2.33-2.21-3.52-8.41-4.94-16.45-10.34-26.58-12.73-3.13-.74-5.08-3.88-4.34-7.02,.74-3.13,3.88-5.08,7.02-4.34,6.13,1.45,11.55,3.91,16.74,6.72Z"/>
          <path class="cls-3" d="M536.9,75.3c0,3.22-2.61,5.84-5.84,5.84s-5.84-2.61-5.84-5.84c0-17.7-15.96-26.9-31.14-26.9-3.22,0-5.84-2.62-5.84-5.84s2.61-5.84,5.84-5.84c21.25,0,42.81,13.78,42.81,38.57Z"/>
        </g>
        <rect x="216.38" y="26.54" width="311.14" height="86.88"/>
      </svg>
`;
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
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560.65 561.59">
          <defs>
            <style>
              .cls-1, .cls-2 {
                fill: #fff;
              }

              .cls-2, .cls-3 {
                fill-rule: evenodd;
              }
            </style>
          </defs>
          <g id="g3561">
            <g id="path3565">
              <path class="cls-1" d="M203.14,.03v-.03h84.82V.04c-28.78,0-57.72-.01-84.82-.01Zm180.79,206.28l36.41,36.41v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3Z"/>
            </g>
            <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
            <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
            <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
            <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
            <path class="cls-3" d="M420.34,242.72v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm.17-101.46l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
            <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Zm-.17,101.46v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm0,0v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm.17-101.46l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
            <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Zm-.17,101.46v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm0,0v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm.17-101.46l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
            <path class="cls-3" d="M420.34,242.72v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm.17-101.46l14.23,14.23-14.28,14.28,.05-28.51Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Zm-.17,101.46v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3,36.41,36.41Zm.17-101.46l14.23,14.23-14.28,14.28,.05-28.51Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
            <path class="cls-3" d="M383.92,206.31l36.41,36.41v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3Zm36.58-65.04l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l14.23,14.23-14.28,14.28,.05-28.51Zm-36.58,65.04l36.41,36.41v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3Z"/>
            <path class="cls-3" d="M420.51,141.27l14.23,14.23-14.28,14.28,.05-28.51Zm-36.58,65.04l36.41,36.41v1.51s-175.28,175.28-175.28,175.28l-107.5-107.5,39.73-39.73,70.33,70.33,136.3-136.3Zm36.58-65.04l-5.89-5.89,5.91-5.91-.02,11.8Zm0,0l14.23,14.23-14.28,14.28,.05-28.51Zm0,0l-5.89-5.89,5.91-5.91-.02,11.8ZM287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm0,0c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Z"/>
            <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8Z"/>
            <path class="cls-3" d="M420.51,141.27l14.23,14.23-14.28,14.28,.05-28.51Zm0,0l.02-11.8-5.91,5.91,5.89,5.89Z"/>
            <path class="cls-3" d="M420.51,141.27l14.23,14.23-14.28,14.28,.05-28.51Zm0,0l.02-11.8-5.91,5.91,5.89,5.89Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm0,0l-.05,28.51,14.28-14.28-14.23-14.23Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm0,0l-.05,28.51,14.28-14.28-14.23-14.23Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm0,0l-.05,28.51,14.28-14.28-14.23-14.23Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l-.05,28.51,14.28-14.28-14.23-14.23Zm0,0l.02-11.8-5.91,5.91,5.89,5.89Zm-36.58,65.04l-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51s-36.41-36.41-36.41-36.41Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm0,0l-.05,28.51,14.28-14.28-14.23-14.23Zm-36.58,65.04l-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51s-36.41-36.41-36.41-36.41Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm0,0l-.05,28.51,14.28-14.28-14.23-14.23Zm-36.58,65.04l-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51s-36.41-36.41-36.41-36.41Z"/>
            <path class="cls-3" d="M420.51,141.27l14.23,14.23-14.28,14.28,.05-28.51ZM287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l.02-11.8-5.91,5.91,5.89,5.89Z"/>
            <path class="cls-3" d="M420.51,141.27l14.23,14.23-14.28,14.28,.05-28.51ZM287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm-.17,101.46l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Z"/>
            <path class="cls-3" d="M420.51,141.27l-5.89-5.89,5.91-5.91-.02,11.8ZM287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l-.05,28.51,14.28-14.28-14.23-14.23Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l.02-11.8-5.91,5.91,5.89,5.89Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm-.17,101.46l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l.02-11.8-5.91,5.91,5.89,5.89Zm0,0l-.05,28.51,14.28-14.28-14.23-14.23Zm-.17,101.46l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.55,141.22l-.05,28.51,14.28-14.28-14.23-14.23Zm-.17,101.46l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l.02-11.8-5.91,5.91,5.89,5.89Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l.02-11.8-5.91,5.91,5.89,5.89Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l.02-11.8-5.91,5.91,5.89,5.89Z"/>
            <path class="cls-3" d="M287.95,.05c28.12,0,56.09,.01,82.02,.02,72.39,.03,128.94,.06,128.91,.1,41.44,0,61.76,21.79,61.76,63.22V501.09c0,40.75-20.33,60.5-60.5,60.5H60.5c-40.17,0-60.5-20.82-60.5-60.5V63.29c0-1.24,.02-2.45,.06-3.65C1.34,19.69,23.83,.07,62.83,.07c-.04-.04,62.54-.05,140.3-.04,27.1,0,56.04,0,84.82,.01Zm132.38,242.68l-36.41-36.41-136.3,136.3-70.33-70.33-39.73,39.73,107.5,107.5,175.28-175.28v-1.51Zm.17-101.46l.02-11.8-5.91,5.91,5.89,5.89Z"/>
            <path class="cls-2" d="M433.1,140.61l54.05,54.05v2.25S226.96,457.1,226.96,457.1L67.38,297.52l58.98-58.98,104.4,104.4,202.34-202.34Zm54.31-96.56l-8.75-8.74,8.77-8.77-.03,17.52Zm0,0l-8.75-8.74,8.77-8.77-.03,17.52Zm0,0l21.12,21.12-21.2,21.2,.07-42.32Z"/>
            <path class="cls-3" d="M492.52,61.02c-.03-.31-.04-.61-.03-.89-.93-1.74-1.63-3.16-1.98-4.08-.52-1.35-.62-2.41-.61-3.03,.02-1.64,.61-2.79,1.23-3.6,.85-1.12,1.97-1.87,3.4-2.2,.83-.19,3.44-.62,6.46,2.2,.15,.14,.32,.3,.52,.47,.51-3.68,2-5.35,2.73-5.92,.79-.62,1.63-1.01,2.49-1.19,0-.33-.01-.67-.02-1-.28,.11-.57,.2-.85,.27-.3,.07-.6,.12-.9,.15-.99,.4-2.01,.6-3.03,.6-2.94,0-4.99-.9-6.48-2.09-1.65-1.32-2.74-3.12-3.26-5.36-.69-2.99,.19-7.41,.19-10.85,0-3.18,.89-4.78,1.31-5.38,1.21-1.72,2.74-2.35,4.21-2.52,.93-.11,1.91-.02,2.92,.38,.81,.32,1.95,.96,2.94,2.39,.11,.16,.24,.37,.37,.61,.17-.45,.32-.81,.46-1.06,1.6-2.8,3.93-3.3,5.42-3.31,1.4,0,4.87,.35,6.21,5.23,2.29,8.35,1.86,17.97,2.3,26.7,2.21-.74,4.19-.16,5.95,1.51,3.39,3.21,4.08,7.2,3.06,11.97-.75,3.51-2.95,7.7-2.95,12.18v23.92c0,3.3-1.98,4.64-3.27,5.27-.53,.26-3.91,1.57-6.66-1.05-1,.31-2.19,.45-3.39,.43-.22,0-.43,0-.65,0-2.75,10.06-7.1,1.31-8.73-19.85-.79-1.13-1.52-2.33-2.21-3.52-8.41-4.94-16.45-10.34-26.58-12.73-3.13-.74-5.08-3.88-4.34-7.02,.74-3.13,3.88-5.08,7.02-4.34,6.13,1.45,11.55,3.91,16.74,6.72Z"/>
            <path class="cls-3" d="M536.9,75.3c0,3.22-2.61,5.84-5.84,5.84s-5.84-2.61-5.84-5.84c0-17.7-15.96-26.9-31.14-26.9-3.22,0-5.84-2.62-5.84-5.84s2.61-5.84,5.84-5.84c21.25,0,42.81,13.78,42.81,38.57Z"/>
          </g>
          <rect x="216.38" y="26.54" width="311.14" height="86.88"/>
        </svg>
  `;
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
