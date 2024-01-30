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
- Next I wanted to change the colour of the markers on the map based on whether buildings had been visited or not (ie if they were in local storage). This proved difficult to do with mapbox studio and the markers i had originally made in there, so I decided to make my own markers based on the geojson file i have. I was then able to manipulate these markers based on local storage.

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
- I noticed that touch events weren't working right on the map - I thought the solution would be to use js, linking the touch and click events but I realised through reading github issues that the solution was simpler - i simply needed to wrap the map in a div with the attribute: data-tap-disabled="true". During debugging, I found [this site](https://www.charlemagne-icon.ac.uk/trail/claverley-church-trail/) and liked the functionality of the map: the way in how clicking slightly off from the marker still opens the necessary popup - so I looked at the code. I realised this would be difficult to implement in Mapbox Studio (where the markers are made for you), so I thought of another solution. I used a wide stroke width (set to 0 opacity), so that the marker would appear 50px (radius) wider than it was to touch events but to the human eye would still be 5px.
- Following some user feedback, I realised it wasn't super obvious what the tick box was for without a tick in it. I changed the otherwise blank box to a faded tick, using the color #272b2f from the map. Editing the svg in Illustrator allowed me to quickly make the necessary edits to my svg file.
- Whilst debugging the mobile CSS I used my phone and live server on the ip address of my computer to view the site on my phone.
- I wanted a list of the places visited to show up when clicking the counter (0/67 etc.). i wrapped the counter in a div to make it clickable then wrote the necessary code in js. I originally thought about writing all the places in the list by accessing the geojson file but I thought keeping the complete list viewable only in map format enhanced the experience of exploration and intrigue from the website. I don't want to serve everything to visitors on a plate but instead let them discover places for themselves with the map. I left it to a list of the places visited, accessed via the saved local storage keys.
- added an underline on hover to the links (github, list of places visited, description of brutalism) to make it more clear they are clickable on desktop.
- added a description of what brutalism is in a popup when clicking on the description of the map.
- score of 100 for accessibility on Google Lighthouse.
- shared with the world (friends, reddit, email, twitter)
- I found it difficult to edit the site when I came back to it, so I decided to split the js file into two files, one for the map and one for the popup to make it easier to edit.

## TODO:

- add markers on top of map based on geojson.

- Tooltips on hover over feature.
  -maybe onHover function that runs similar to the onclick one, where feature etc.
- Different colour marker for if visited, change marker color based on if feature exists in local storage

- Test for different screen sizes.

- Improve SEO.

- Add: https://commons.m.wikimedia.org/wiki/Category:St_Laurence_Church,_Catford + https://www.google.com/maps/@51.506232,-0.0877861,3a,75y,86.2h,103.38t/data=!3m6!1e1!3m4!1sqipjXXyY7azRH5kdluAQeQ!2e0!7i16384!8i8192?entry=ttu

### Maybe later

- Seeing as much of the functionality of the project is in JavaScript, I think the whole project could do with being rebuilt in React, as it is hard to navigate the codebase at the moment, something a component based architecture would solve.
  - Also allows: npm install mapbox gl js rather than cdn/mapbox studio method, which would mean can edit geojson much more easily etc.
- split css files
- It would be good if I could close the information for a building and see the entire map again. (currently the arrow does this but not very intuitive)
- filter by option, e.g. architect, area, material
- material type: brick etc. with the designed and completed labels.
- Add more info url to json and add to popup with js.
- Get photos with google places api: https://developers.google.com/maps/documentation/places/web-service/place-photos.
- Edit mapbox studio data so highlights whole building not just dot.
  - Change color when hover/click on it.
- Add css bootstrap.
- Move to custom domain like: londonbrutalistmap.com
- intro page like on https://www.get-into-gizz.com/
- images local for faster loading

## Resources:

### Brutalism:

- https://socialistmodernism.com/
- https://www.sosbrutalism.org/cms/15802395#map
- https://bluecrowmedia.com/products/brutalist-london-map
- https://www.youtube.com/watch?v=UWhuHiL8Pug
- https://www.youtube.com/watch?v=TvKi_hsJf3c
- https://www.bloomberg.com/news/articles/2015-11-25/the-case-for-calling-brutalism-heroic-instead
- https://www.langhamhouseclose.com/
- Brutal London, Simon Phipps

### Maps:

- https://strikemap.org
- https://pnote.eu/projects/invaders/map.html
- https://www.are.na/gemma-copeland/community-maps
- https://atlas.smartforests.net/en/map/
- https://www.mapbox.com/showcase
