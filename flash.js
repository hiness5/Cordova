//scripts.js
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    $(".divButtons").show();
};

$(".flight").click(function () {
    $(".flight").removeClass("toggledOn");
    if (this.id == "btnOn") {
        //button on clicked
        $("#btnOn").addClass("toggledOn");
        window.plugins.flashlight.switchOn();
    } else {
        //button off clicked
        $("#btnoff").addClass("toggledOn");
        window.plugins.flashlight.switchOff();
    }

});