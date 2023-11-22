# brutalist-map

## Planning:

- I thought a lot about the color scheme of the site, before eventually deciding i wanted the site itself to look restrained and easy to use, with the map component being more colourful.

## Building:

- deployed with Netlify on a subdomain of my website, jackkershaw.net.
- made a custom designed map with mapbox studio:
  ![A screenshot of the map with pink for buildings, dark blue as base and yellow for landmarks and road labels](image.png)
- Added light and dark mode to the site, with two different mapbox styles - dark and light mode. Designed with the help of mapbox studio
- I considered adding directions to the mapbox with the help of the mapbox directions plugin but decided not to because Citymapper is much better for turn-by-turn navigation.
- I added markers for each landmark on the map with the dataset feature of Mapbox Studio. I made a CSV file of the landmarks, their latitude and longitude, the name of the landmark and a Google Maps link and imported it to my map.

## Debugging:

- Using APIs for the first time was a learning curve. The Mapbox docs were very helpful though. I was able to get my API token and use an URL restriction to allow me to publish all my code publicly on Github whilst staying secure.

## TODO:

- add popups when tap on markers: https://docs.mapbox.com/help/tutorials/add-points-pt-3/
- add google map link for each marker
- maybe get photos with google places api: https://developers.google.com/maps/documentation/places/web-service/place-photos.

## Resources:

- https://socialistmodernism.com/
- https://www.sosbrutalism.org/cms/15802395#map
- https://bluecrowmedia.com/products/brutalist-london-map
- https://strikemap.org
- https://pnote.eu/projects/invaders/map.html
- https://www.are.na/gemma-copeland/community-maps
