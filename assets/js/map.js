/* Google Maps API */
/* Init function created from end of google map src link below */
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        // initial zoom on map
        zoom: 3,
        // central coordinates where map initally displays
        center: {
            lat: 46.619261, // latitude
            lng: -33.134766 // longitude
        }
    });

    // Markers for places visited
    // each individual letter will appear on the markers
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // each location visited listed as objects w/in an array
    var locations = [
        {lat: 40.785091, lng: -73.968285},
        {lat: 41.084045, lng: -73.874245},
        {lat: 40.754932, lng: -73.984016}
    ];

    // iterate through the array to create new marker w/ label from string
    // .map is like .forEach but returns an array
    // location parameter is value of where we are in the array as we loop
    // i is the index # of where we currently are in array
    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location, // set to currect location
            // get one of the labels out of the string created
            // % loops through string again if more than 26 labels required
            label: labels[i % labels.length]
        });
    });

    // Creates marker for map with cluster (copied from Google cluster marker)
    var markerClusterer = MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}