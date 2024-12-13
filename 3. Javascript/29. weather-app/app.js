// console.log("test");

var weather = document.getElementById("weather");
var city = document.getElementById("city");

 function getWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=392fc470c1ac8b42b2f40951a9a96cc4&units=metric`
  )
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);


      console.log(data.weather[0].main);
      // console.log(data.weather[0].des);




      weather.innerHTML = `
    <h1 class="temp">${Math.round(data.main.temp)}°c</h1>
    <p>${data.name}</p>
    <p>${data.weather[0].main}</p>
    <p>${data.wind.speed} km/h</p>
    <p>${data.main.humidity}%</p>
    `;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// getWeather()


