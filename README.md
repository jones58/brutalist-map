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
- Following user testing with my other Just IT classmates, I realised that it wasn't immediately obvious what the map was for. Some suggested it looked like a crime map. I decided to add a description for users who might not know what Brutalist London refers to.
- Made a lot of changes to the site's CSS as I went along to make sure it looked clean and would be easy to use. For example I:
  - I experimented with adding a concrete texture to the footer and header but in the end it made the site look too cluttered.
  - Added media queries for tablet and mobile view.
  - Vertically center text in header and footer.

## Debugging:

- Using APIs for the first time was a learning curve. The Mapbox docs were very helpful though. I was able to get my API token and use an URL restriction to allow me to publish all my code publicly on Github whilst staying secure.

## TODO:

- bring down text - london brutalist map and light mode and github so they look more centred.
- small explanation of what brutalism is, could be a button/pop out.
- favicon

### markers

- add popups when tap on markers: https://docs.mapbox.com/help/tutorials/add-points-pt-3/
- add google map link for each marker
- maybe get photos with google places api: https://developers.google.com/maps/documentation/places/web-service/place-photos.

### Colours

- change color when hover/click on landmark.
- change dot color for brutalist buildings, yellow.
- white for labels same as background white
- edit dataset so highlights whole building not just dot.
- maybe add green

## Resources:

- https://socialistmodernism.com/
- https://www.sosbrutalism.org/cms/15802395#map
- https://bluecrowmedia.com/products/brutalist-london-map
- https://strikemap.org
- https://pnote.eu/projects/invaders/map.html
- https://www.are.na/gemma-copeland/community-maps
- https://atlas.smartforests.net/en/map/
- https://www.mapbox.com/showcase
