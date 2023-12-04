"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("dom is loaded");
  /* data for map */
  let bostonSite = {
      name : "Boston African American National Historic Site",
      description: "Centered on the north slope of Beacon Hill, the African American community of 19th century Boston led the city and the nation in the fight against slavery and injustice. These remarkable men and women, together with their allies, were leaders in the Abolition Movement, the Underground Railroad, the Civil War, and the early struggle for equal rights and education.",
      lat : 42.35908295,
      lng : -71.06764181
  }
  let bostonLatLng = [bostonSite.lat, bostonSite.lng];
  let zoomLevel = 8.5;

  let blackstonePark = {
    name : "Blackstone River Valley National Historical Park",
    description: "The Blackstone River powered America's entry into the Age of Industry. The success of Samuel Slater's cotton spinning mill in Pawtucket, RI touched off a chain reaction that changed how people worked and where they lived, and continues to reverberate across the nation to this day. Come visit and see how this revolution transformed the landscape of the Blackstone Valley and then the United States.",
    lat : 41.8775792791768,
    lng : -71.3824339450125
    }
    let blackstoneLatLng = [blackstonePark.lat, blackstonePark.lng];

  let lowellPark = {
    name : "Lowell National Historical Park",
    description: "Discover the Continuing Revolution. Lowell’s water-powered textile mills catapulted the nation – including immigrant families and early female factory workers – into an uncertain new industrial era. Nearly 200 years later, the changes that began here still reverberate in our shifting global economy. Explore Lowell, a living monument to the dynamic human story of the Industrial Revolution.",
    lat : 42.6455371,
    lng : -71.31588673
    }
    let lowellLatLng = [lowellPark.lat, lowellPark.lng];

  /* create Leaflet map object, 
    place in container, 
    and set initial center and zoom */
  let map = L.map("map-container");
  map.setView(bostonLatLng,zoomLevel);

  /* required attribution */
  let attributionHtml =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  /* create tile layer with attribution */
  let tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: attributionHtml
  });
  tileLayer.addTo(map);

  /* create marker, info popup, and add to map */
  /* note the use of ` for template literals ` */
  let markerHTML = `<h2>${bostonSite.name}</h2>
  <p>${bostonSite.description}</p>`;
  let marker = L.marker(bostonLatLng);
  marker.bindPopup(markerHTML);
  marker.addTo(map);

  let BlackstonemarkerHTML = `<h2>${blackstonePark.name}</h2>
  <p>${blackstonePark.description}</p>`;
  let bostonmarker = L.marker(blackstoneLatLng);
  bostonmarker.bindPopup(BlackstonemarkerHTML);
  bostonmarker.addTo(map);

  let LowellmarkerHTML = `<h2>${lowellPark.name}</h2>
  <p>${lowellPark.description}</p>`;
  let lowellmarker = L.marker(lowellLatLng);
  lowellmarker.bindPopup(LowellmarkerHTML);
  lowellmarker.addTo(map);
});
