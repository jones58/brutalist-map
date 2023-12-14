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
- I noticed that touch events weren't working right on the map - I thought the solution would be to use js, linking the touch and click events but I realised through reading github issues that the solution was simpler - i simply needed to wrap the map in a div with the attribute: data-tap-disabled="true". During debugging, I found [this site](https://www.charlemagne-icon.ac.uk/trail/claverley-church-trail/) and liked the functionality of the map: the way in how clicking slightly off from the marker still opens the necessary popup - so I looked at the code. I realised this would be difficult to implement in Mapbox Studio (where the markers are made for you), so I thought of another solution. I used a wide stroke width (set to 0 opacity), so that the marker would appear 50px wider than it was to touch events but to the human eye would still be 5px.
- Following some user feedback, I realised it wasn't super obvious what the tick box was for without a tick in it. I changed the otherwise blank box to a faded tick, using the color #272b2f from the map. Editing the svg in Illustrator allowed me to quickly make the necessary edits to my svg file.
- Whilst debugging the mobile CSS I used my phone and live server on the ip address of my computer to view the site on my phone.
- I wanted a list of the places visited to show up when clicking the counter (0/67 etc.). i wrapped the counter in a div to make it clickable then wrote the necessary code in js. I originally thought about writing all the places in the list by accessing the geojson file but I thought keeping the complete list viewable only in map format enhanced the experience of exploration and intrigue from the website. I don't want to serve everything to visitors on a plate but instead let them discover places for themselves with the map. I left it to a list of the places visited, accessed via the saved local storage keys.
- added an underline on hover to the links (github, list of places visited, description of brutalism) to make it more clear they are clickable on desktop.
- added a description of what brutalism is in a popup when clicking on the description of the map.

## TODO:

- Edit media queries

  - Edit media queries for tablet
  - Keep testing and editing for different screen sizes. Use chrome, safari, firefox. Also browserstack and 192.168.0.254... on phone.
  - Edit popup size for mobile - atm it's too big and covers visited count (see on personal phone). Could get around this by hiding github link on mobile maybe.

- Accessibility

  - Go through docs and see if there are any accessibility issues.
  - check in lighthouse.

- Share it
  - cohort
  - reddit
    - Brutalist
    - London
    - Architecture
    - any other joined communities
  - simon phipps etc.
  - https://www.google.com/maps/d/u/0/viewer?mid=1zc9ox2h5xRkaEka7QH_3iHVG0Ho&hl=ja&ll=51.50501640618957%2C-0.20974870825261616&z=11 email on here
  - Londonist
  - Ian visits
  - family
  - friends etc.
  - social media like twitter

### Maybe

- Add:

1. Holmefield House
2. Guy's Tower SE1 - Guy's Tower (Architect: Watkins Gray, completed: 1974), part of Guy's Hospital.
3. Carradale House
4. Glenkerry Estate
5. Highgate New Town Stage 1 ([Modern Architecture London](http://modernarchitecturelondon.com/buildings/highgatenewtown1.php))
6. Milford Towers ([SOS Brutalism](https://www.sosbrutalism.org/cms/19103323))
7. St George's Fields
8. Jack Taylor School
9. Maiden Lane Estate
10. Oakshott Court
11. Whittington Estate
12. Camden Ambulance Station (Year: 1975)
13. Dunboyne Road Estate (Year: 1971)
14. Abbey Road Estate
15. Ingestre Road Estate
16. Morris Walk Estate
17. Pellipar Gardens
18. Trafalgar Estate
19. Vanbrugh Park Estate
20. Arden Estate (Year: 1968–72)
21. Community Hall, Gooch House (Year: 1962–64)
22. Clissold Park School (Year: 1967–70)
23. Crown Estate (Year: 1967–77)
24. De Beauvoir Estate (Year: 1965–75)
25. Lincoln Court (Year: 1969)
26. Lockner Estate (Year: c.1968)
27. Shoreditch Fire Station (Year: 1964)
28. Angel Walk
29. Ashcroft Square
30. Malabar Court
31. City University (Year: 1960–76)
32. Earlstoke Estate (Year: 1972–76)
33. Elia Mews (Late 1960s)
34. Marquess Estate (Year: 1966–76)
35. Quaker Court (Year: 1967)
36. Triangle Estate (Year: 1970–76)
37. St Thomas’ Hospital
38. Kensington Place
39. Pepys Estate
40. Brunswick Park School (Year: 1961–62)
41. Heygate Estate
42. Perronet House (Year: 1969)
43. Sampson House (Year: 1976–79)
44. Wyndham and Comber Estate (Year: 1965–67)
45. Yarnfield Square (Year: 1968–69)
46. Ashington House (Year: 1971)
47. Charles Hayward Research Building
48. Newling Estate (Year: 1963)
49. St Paul's Church (Year: 1960)
50. Doddington and Rollo Estate (Year: 1967–71)
51. York Road Estate (Year: 1967–73)
52. College of Engineering and Science (Year: 1965–70)
53. Paddington Fire Station (Year: 1969)
54. Post Office Tower (Year: 1961–64)
55. Queen Anne’s Gate (Year: 1976)
56. Sidmouth House (Year: 1972)
57. Middlesex Street Estate (Year: 1965–75)
58. Museum of London (Year: 1976)
59. St Paul’s Cathedral School (Year: 1962–67)
60. Branch Hill Estate
61. St James' Places
62. Allbrook House and Roehampton Library
63. Coralline Walk
64. Wates Blocks
65. Kate Macintosh: 269 Leigham Court Road
66. Peter Moro: Showroom Hille (Furniture Hille), London, Great Britain, ?-1963
67. Cranbrook Estate
68. Perronet House
69. Renton Howard Wood Partnership: Tower Hotel, London, Great Britain, ?-1973
70. Lyons, Israel and Ellis: Wolfson Institute, Hammersmith Hospital, London, Great Britain, ?-1961
71. Gillian Howell / William G. Howell / Stanley Amis: 20th Century Building on South Hill Park, NW3, London, Great Britain,?-1956
72. Tom Kay: Workshops & Housing, Loudoun Road, London, Great Britain, 1974?-1980
73. Owen Luder: Catford Centre, London, Great Britain, 1974°
74. Austin-Smith, Salmon, Lord Partnership: Hinstock Flats, London, Great Britain, 1965
75. South Norwood Library
76. Owen Luder Partnership: Consort House, London, Great Britain, 1970
77. C. Lovett Gill & Partners: Imperial Hotel, London, Great Britain, 1966C-1970
78. Central Hill Estate
79. Colin St. John Wilson / Peter Carter / Alan Colquhoun: Gascoyne Estate, Bentham Road, London, Great Britain,?-1955
80. Robert Giles ARIBA: Hammersmith and West London College, London, Great Britain, 1976C-1980

- Add more info url to json and add to popup with js.
- Get photos with google places api: https://developers.google.com/maps/documentation/places/web-service/place-photos.
- Edit mapbox studio data so highlights whole building not just dot.
  - Change color when hover/click on it.
- Add css bootstrap.
- Move to custom domain like: londonbrutalistmap.com
- intro page like on https://www.get-into-gizz.com/

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
