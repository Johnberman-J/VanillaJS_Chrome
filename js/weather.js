function onGeoSuccess(location) {
    console.log(location);
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);