//camera.js

function cameraTakePicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
        //quality: 50,
        //destinationType: Camera.DestinationType.FILE_URL,
        //sourceType: Camera.PictureSourceType.CAMERA,
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        encodingType: Camera.EncodingType.JPEG,
        correctOrientation: true,
        saveToPhotoAlbum: true
    });
    function onSuccess(imageURI) {
        var image = document.getElementById('imgPicture');
        //image.src = "data:image/jpeg;base64," + imageData;
        image.src = imageURI;
    }
    function onFail(message) {
        alert('Failed because: ' + message);
    }
}
function cameraGetPicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });
    function onSuccess(imageURL) {
        var image = document.getElementById('imgPicture');
        image.src = imageURL;
    }
    function onFail(message) {
        alert('Failed because: ' + message);
    }
}