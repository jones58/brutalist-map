# brutalist-map

## Planning:

- I thought a lot about the color scheme of the site, before eventually deciding i wanted the site itself to look restrained and easy to use, with the map component being more colourful.

## Building:

- deployed with Netlify on a subdomain of my website, jackkershaw.net.
- made a custom designed map with mapbox studio:
  ![A screenshot of the map with pink for buildings, dark blue as base and yellow for landmarks and road labels](image.png)
- Added light and dark mode to the site, with two different mapbox styles - dark and light mode. Designed with the help of mapbox studio
- I considered adding directions to the mapbox with the help of the mapbox directions plugin but decided not to because Citymapper/Google is sufficient for turn-by-turn navigation and that's not the goal of the project.
- I added markers for each landmark on the map with the dataset feature of Mapbox Studio. I made a CSV file of the landmarks, their latitude and longitude, the name of the landmark and a Google Maps link and imported it to my map.
- Following user testing with my other Just IT classmates, I realised that it wasn't immediately obvious what the map was for. Some suggested it looked like a crime map. I decided to add a description for users who might not know what Brutalist London refers to.
- Made a lot of changes to the site's CSS as I went along to make sure it looked clean and would be easy to use. For example I:
  - I experimented with adding a concrete texture to the footer and header but in the end it made the site look too cluttered.
  - Added media queries for tablet and mobile view.
  - Vertically center text in header and footer.
- Add popups when tapped on markers with the help of Mapbox docs:s https://docs.mapbox.com/help/tutorials/add-points-pt-3/.
  - Styled these markers.
  - Edited Geojson to add properties title and a google maps link to be displayed in the popup.
- changed colours in mapbox studio to match the rest of the site (white labels, white background for light mode)
- added favicon

## Debugging:

- Using APIs for the first time was a learning curve. The Mapbox docs were very helpful though. I was able to get my API token and use an URL restriction to allow me to publish all my code publicly on Github whilst staying secure.

## TODO:

- Fix popups:
  - change pop up offset and styling of marker popups, maybe do them yourself somehow - see browser developer tools for bits of this. Could do like smart forests, where bigger box.
- Tick box if you've been there, stored in local storage. Maybe counter of how many been to.
- Small explanation of what brutalism is, could be a button/pop out.
- CSS Bootstrap

### Things I'd like to do later

- maybe get photos with google places api: https://developers.google.com/maps/documentation/places/web-service/place-photos.
- add image, alt text and building description in each popup,
  - maybe a tick box whether you have visited the landmark, stored in local storage too.
- edit so highlights whole building not just dot.
  -change color when hover/click on it.
- check got all places from brutalist map.

## Resources:

### Brutalism:

- https://socialistmodernism.com/
- https://www.sosbrutalism.org/cms/15802395#map
- https://bluecrowmedia.com/products/brutalist-london-map
- https://www.youtube.com/watch?v=UWhuHiL8Pug
- https://www.youtube.com/watch?v=TvKi_hsJf3c

### Maps:

- https://strikemap.org
- https://pnote.eu/projects/invaders/map.html
- https://www.are.na/gemma-copeland/community-maps
- https://atlas.smartforests.net/en/map/
- https://www.mapbox.com/showcase
