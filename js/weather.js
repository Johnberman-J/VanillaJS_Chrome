const API_KEY = "5b78057bba84753a53e5f3aa6fb67519";

function onGeoSuccess(location) {
    const latitude = "37.3501761";
    const longitude = "127.11512619999999";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherSelector = document.querySelector("#weather span:first-child");
        const citySelector = document.querySelector("#weather span:last-child");
        citySelector.innerText = data.name;
        weatherSelector.innerText = data.weather[0].main;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);