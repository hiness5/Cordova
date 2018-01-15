//map.js
//scripts.js

$.blockUI({
    message: null,
    overlayCSS: {
        opacity: .6
    }
}); 

//variables

var map;
var geocoder;

function initMap() {
    map = new google.maps.Map(document.getElementById('divMap'), {
        center: { lat: 43, lng: -76 },
        zoom: 7
    });
    geocoder = new google.maps.Geocoder();
    getCurrentLocation();
}



if (window.location.pathname !== "/index.html") {
    $("#btnFind").click(function () {
        //var address = document.getElementById("tbAddress").value.trip();
        var address = $("#tbAddress").val().trim();
        if (address.length !== 0) {
            if (window.location.pathname === "/map.html") {
                getLocation(address);
            } else if (window.location.pathname === "/weather.html") {
                getForecast(address);
            }
        }
    });
    $("#btnClear").click(function () {
        $("#tbAddress").val("");
        if (window.location.pathname === "/map.html") {
            clearLocation();
        } else if (window.location.pathname === "/weather.html") {
            clearForecast();
        }
    });
} function getCurrentLocation() {
    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(pos) {
    var y = pos.coords.latitude;
    var x = pos.coords.lonitude;
    var point = { lat: y, lng: x };
    map.setCenter(point);
    map.setZoom(17);
}

function getLocation(address) {
    geocoder.geocode({ "address": address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
            var location = results[0].geometry.location;
            var lat = location.lat();
            var lng = location.lng();
            //alert("Latitude: " + lat);
            //alert("Longitude: " + lng);
            var point = { lat: lat, lng: lng};
            map.setCenter(point);
            map.setZoom(17);

        }
    });
}

function clearLocation() {

}

function getForecast(address) {

}

function clearForecast() {

}

$("#btnMap").click(function () {
    window.location = "map.html";
});
$("#btnForecast").click(function () {
    window.location = "weather.html";
});

function onDeviceReady() {
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("menubutton", onMenuKeyDown, false);
    $.unblockUI();
}

function onPause() {
    // Handle the pause event
}

function onResume() {
    // Handle the resume event
}

function onMenuKeyDown() {
    // Handle the menubutton event
}

document.addEventListener("deviceready", onDeviceReady, false);