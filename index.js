let withTime = document.querySelector("#time");
let current = new Date();
withTime.innerHTML = two();

function two() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let daysName = days[current.getDay()];
  let hour = current.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = current.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let two = `${daysName}  ${hour}:${minute}`;
  return two;
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

function searchCity(city) {
  let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function displayWeatherCondition(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = `${Math.round(
    response.data.main.temp
  )} °C`;
  document.querySelector(
    "#hum"
  ).innerHTML = ` Humidity: ${response.data.main.humidity} %`;
  document.querySelector(
    "#win"
  ).innerHTML = `Wind: ${response.data.wind.speed} mph`;
  document.querySelector(
    "#clo"
  ).innerHTML = `Clouds: ${response.data.clouds.all}`;
  console.log(response.data.main.temp);

  function seeinFah(response) {
    document.querySelector("#temperature").innerHTML = "data needed";
    document.querySelector("#fah").innerHTML = "other";
  }
}

searchCity("London");
