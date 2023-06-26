var map = L.map('map').setView([51.1294, 71.4491], 14);
var markers = [];

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

function removeMarker(marker) {
    map.removeLayer(marker); 
}

$("#events-header").click(function() {
    $("#events-list").slideToggle();
});

map.on('click', function (e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;

    var name = prompt("Enter the event name:");
    var date = prompt("Enter the event date (YYYY-MM-DD):");
    var type = prompt("Enter the event type:");

    var marker = L.marker([lat, lng]).addTo(map);

    var popupContent = `
        <b>${name}</b><br>
        Date: ${date}<br>
        Type: ${type}<br>
        <button onclick="removeMarker(markers[${markers.length}])">Remove Event</button>
    `;

    var marker = L.marker([lat, lng]).addTo(map);
    var popupContent = `
        <b>${name}</b><br>
        Date: ${date}<br>
        Type: ${type}<br>
        <button onclick="removeMarker(markers[${markers.length}])">Remove Event</button>
    `;

    marker.bindPopup(popupContent);

    $("#events-list").append(`<li><b>${name}</b> - ${date} - ${type}</li>`);

    markers.push(marker); 
});

