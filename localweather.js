var tempSym = "f";
var tempFah;

$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) { 
      var long = position.coords.longitude;
      var lat = position.coords.latitude;
      var urlUserLocation = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial&APPID=[Put Your API Key Here]";
      $.getJSON(urlUserLocation, function(json) {
        tempFah = json.main.temp;
        $("#textlocation").html(json.name + ", " + json.sys.country);
        $("#iconweather").html(
          '<img src="http://openweathermap.org/img/w/' + json.weather[0].icon + '.png"></img>'
        );
        $("#textweather").html(json.weather[0].main);
        $("#texttemperature").html(json.main.temp + " &#8457");
        
      });
    });
  };
});

function toCelcius() {
  if (tempSym !== "c") {
    tempSym = "c";
    var tempCel = tempFah;
    tempCel = (tempCel - 32) * 5/9;
    tempCel = tempCel.toFixed(2) + " &#8451";
    document.getElementById("texttemperature").innerHTML = tempCel;
  }
}

function toFahrenheit() {
  if (tempSym !== "f") {
    tempSym = "f";
    // var tempCel = tempFah;
    // tempCel = (tempCel - 32) * 5/9;
    // tempCel = tempCel.toFixed(2) + " &#8451";
    var tempFahrenheit = tempFah + " &#8457";
    document.getElementById("texttemperature").innerHTML = tempFahrenheit;
  }
}