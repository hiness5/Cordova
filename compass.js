//compass.js

var watchID;
var element = document.getElementById('divHeading');


function onSuccess(heading) {
    var degrees = heading.magneticHeading;
    var d = "";
 

                if (degrees >= 0 && degrees <= 11.25) {
                    d = 'N';
                }

                else if (degrees > 11.25 && degrees <= 33.75) {
                   d = 'NNE';
                }

                else if (degrees > 33.75 && degrees <= 56.25) {
                   d = 'NE';
                }

                else if (degrees > 56.25 && degrees <= 78.75) {
                    d = 'ENE';
                }

                else if (degrees > 78.75 && degrees <= 101.25) {
                    d = 'E';
                }

                else if (degrees > 101.25 && degrees <= 123.75) {
                    d = 'ESE';
                }

                else if (degrees > 123.75 && degrees <= 146.25) {
                    d = 'SE';
                }

                else if (degrees > 146.25 && degrees <= 168.75) {
                    d = 'SSE';
                }

                else if (degrees > 168.75 && degrees <= 191.25) {
                    d = 'S';
                }

                else if (degrees > 191.25 && degrees <= 213.75) {
                    d = 'SSW';
                }

                else if (degrees > 213.75 && degrees <= 236.25) {
                    d = 'SW';
                }

                else if (degrees > 236.25 && degrees <= 258.75) {
                    d = 'WSW';
                }

                else if (degrees > 258.75 && degrees <= 281.25) {
                    d = 'W';
                }

                else if (degrees > 281.25 && degrees <= 303.75) {
                    d = 'WNW';
                }

                else if (degrees > 303.75 && degrees <= 326.25) {
                    d = 'NW';
                }

                else if (degrees > 326.25 && degrees <= 348.75) {
                    d = 'NNW';
                }

                else if (degrees > 348.75 && degrees <= 360) {
                    d = 'N';
                    }
               element.innerHTML = d;
            }
        

function onError(compassError) {
    document.getElementById("#divHeading").innerHTML = 'Compass error: ' + compassError.code;
}


function initCompass() {

    var options = {
        frequency: 2000
    };

    watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    initCompass();
}


 