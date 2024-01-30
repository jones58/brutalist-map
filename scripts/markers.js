/* add markers to map based on geojson data */
fetch("mapbox-data/features.geojson")
  .then((response) => response.json())
  .then((data) => {
    data.features.forEach((feature) => {
      // Extract properties from geojson //
      const properties = feature.properties;

      // Extract coordinates from geojson //
      const coordinates = feature.geometry.coordinates;

      // add marker to DOM //
      const myMarker = document.createElement("div");
      myMarker.className = "marker";

      //if visited (i.e. in local storage), green, if not visited defaults to css colour for marker (red) //
      if (localStorage.getItem(properties.Title)) {
        myMarker.style.backgroundColor = "#00BD9D";
      }

      // Add myMarker to map//
      var marker = new mapboxgl.Marker(myMarker)
        .setLngLat(coordinates)
        .addTo(map);
    });
  });

// edit marker colours when local storage changes //
