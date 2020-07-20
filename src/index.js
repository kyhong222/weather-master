const fetch = require('node-fetch');

const APIKey = "fee325a9153b5176b2610a2096004088";
const latitude = 37.245682;
const longitude = 127.074471;

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
    ).then(function(response){
        return response.json();
    }).then(function(data){
        console.log("온도는", data.main.temp, "입니다.");
        console.log("날씨는", data.weather[0].main, "입니다.");
    })
}

const currentWeather = getWeather(latitude, longitude);
