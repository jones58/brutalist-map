# Brutalist Map

A map for discovering London's Brutalist buildings, built using Mapbox's API.

## Planning:

- I thought a lot about the color scheme of the site, before eventually deciding i wanted the site itself to look restrained and easy to use, with the map component being more colourful.

## Building:

- deployed with Netlify on a subdomain of my website, jackkershaw.net.
- made a custom designed map with mapbox studio.
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
- I realised that the popups that come with Mapbox are not very user friendly and would not suit my use case. I decided that the best thing to do would be to add a custom popup.
  - This involved:
    - Designing for different screen sizes using media queries.
    - Using javascript to set the content of the popup.
- Editing Geojson data to add properties for an image and a description. I started doing this in Mapbox Studio but quickly realised it would be quicker to do edit the geojson in vscode and then update it by uploading the edited file.
  - I noticed that the image links I'd gathered from startpage.com weren't working so I had to add them manually from the websites themselves.
- I tried setting the checkbox with the input type="checkbox" but i decided i wanted more of a custom look so I made my own "tick" based on the back button I'm using which I previously found on [Public domain vectors](https://publicdomainvectors.org).
- Whilst building the site, I liked the look of the images but it was not as cohesive as it could be so I decided to use filter: grayscale(100%); to make the images look more similar, and blend with the aesthetic of the site better. I also added rounded corners to the images to match my checkbox and back button svg icons. I used calc() to get it in line with the back button.
- I noticed that adding the checkbox was causing the back button's icon to have a thick stroke and set about trying to fix it. Changing the id for the svg was not successful so I had to change the class names inside the svg to unique numbers.
- I initially start the design with a light and a dark mode but for the sake of simplicity, I decided to leave this out as I don't think it contributes to accessibility in its current form.
- I realised that the visited count at the bottom was showing 2 places instead of 0 and looked in local storage to debug. I found two mapbox.event keys and used a regex to make sure they weren't counted in the visited count.
- I noticed that touch events weren't happening right on the map - so I used a simple onTouch(event) to mimic an onClick(event).

## TODO:

- Edit geojson dataset, "designed by: " "completed: ", " - finish doing this. Maybe add more info url.
- Edit media queries for tablet, keep testing and editing for different screen sizes. Use chrome, safari, firefox. Also browserstack.
- List of places visited - Could be in table format. when click visited.
- Test on personal phone chrome and firefox.
  - Maybe do live edit with vscode.
  - work out why it looks much better on chrome than Firefox - extensions maybe.
- Accessibility - go through docs and see if there are any accessibility issues, use lighthouse too.
- Eliminate edge cases, old browsers etc.
- Check got all places from paper brutalist map. Add Alton Estate.
- Share with cohort and reddit brutalist, family, friends etc.

### Maybe

- Small explanation of what brutalism is, could be a button and another pop out like the buildings one.
- Maybe get photos with google places api: https://developers.google.com/maps/documentation/places/web-service/place-photos.
- Edit mapbox studio data so highlights whole building not just dot.
  - Change color when hover/click on it.
- Add css bootstrap.

## Resources:

### Brutalism:

- https://socialistmodernism.com/
- https://www.sosbrutalism.org/cms/15802395#map
- https://bluecrowmedia.com/products/brutalist-london-map
- https://www.youtube.com/watch?v=UWhuHiL8Pug
- https://www.youtube.com/watch?v=TvKi_hsJf3c
- https://www.bloomberg.com/news/articles/2015-11-25/the-case-for-calling-brutalism-heroic-instead
  https://www.langhamhouseclose.com/

### Maps:

- https://strikemap.org
- https://pnote.eu/projects/invaders/map.html
- https://www.are.na/gemma-copeland/community-maps
- https://atlas.smartforests.net/en/map/
- https://www.mapbox.com/showcase
