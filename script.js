document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if(value === "")
    return;
  console.log(value);
  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value +
    ",US&units=metric" + "&APPID=02cbc178fa247d6882b260e84f2c9df3";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += '<h2>Weather in ' + json.name + '</h2>';
      for (let i=0; i < json.weather.length; i++) {
        results += '<img src="http://openweathermap.org/img/w/' +
          json.weather[i].icon + '.png"/>';
      }
      results += '<h2>' + json.main.temp + " &deg;F</h2>";
      results += "<p>"
      for (var i = 0; i < json.weather.length; i++) {
        results += json.weather[i].description;
        if (i !== json.weather.length - 1)
          results += ", "
      }
      results += "</p>";
      document.getElementById("weatherResults").innerHTML = results;
    })
})
