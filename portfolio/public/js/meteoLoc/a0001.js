function weatherBallon() {
  var key = "6ba292e8eedd0f18a33724036c268124";
  var lat = "lat=50.87652";
  var lon = "lon=4.36345";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?" +
      lat +
      "&" +
      lon +
      "&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      drawWeather(data);
    })
    .catch(function () {
      // catch any errors
    });
}
function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  var fahrenheit = Math.round((parseFloat(d.main.temp) - 273.15) * 1.8 + 32);
  var description = d.weather[0].description;

  document.getElementById("description").innerHTML = description;
  document.getElementById("temp").innerHTML = celcius + "&deg;";
  document.getElementById("location").innerHTML = d.name;

  if (description.indexOf("rain") > 0) {
    document.body.className = "rainy";
  } else if (description.indexOf("cloud") > 0) {
    document.body.className = "cloudy";
  } else if (description.indexOf("sunny") > 0) {
    document.body.className = "sunny";
  } else {
    document.body.className = "clear";
  }
}
window.onload = function () {
  weatherBallon();
};
