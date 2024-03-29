function formatTime(nowTime) {
  let date = new Date(nowTime);
  let hour = date.getHours();
  let minute = date.getMinutes();
  return `last updated ${hour}:${minute}`;
}
function getdailyForecast(coordinates) {
  let apiKey = "ce144f0cf51fa43f03431f0488a36728";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
  console.log(apiUrl);
  axios.get(apiUrl).then(dailyForecast);
}
function Temprature(response) {
  let degreeElement = document.querySelector("#show-degree");
  degreeElement.innerHTML = Math.round(response.data.main.temp);
  let cityName = document.querySelector("h6");
  cityName.innerHTML = response.data.name;
  let countryName = document.querySelector("#country");
  countryName.innerHTML = response.data.sys.country;
  let skyCloudy = document.querySelector("#sky-cloudy");
  skyCloudy.innerHTML = response.data.weather[0].main;
  let windSky = document.querySelector("#winddy");
  windSky.innerHTML = `${Math.round(response.data.wind.speed)} Km/h`;
  let humidityDescrip = document.querySelector("#humidity-temp");
  humidityDescrip.innerHTML = `humidity ${response.data.main.humidity} %`;
  let skyLook = document.querySelector("#skyLook");
  skyLook.innerHTML = response.data.weather[0].description;
  let timeDay = document.querySelector("#myHour");
  timeDay.innerHTML = formatTime(response.data.dt * 1000);
  let iconElement = document.querySelector("#sky-icon");
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  getdailyForecast(response.data.coord);
}

function search(cityName) {
  let apiKey = "9666cb098baebeb992cfd789750f6f47";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(Temprature);
}
function formSearch(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#input-city");
  search(cityElement.value);
}
function formatDay(timetamp) {
  let date = new Date(timetamp * 1000);
  let day = date.getDay();
  let days = ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"];
  return days[day];
}

function dailyForecast(response) {
  let forecast = response.data.daily;
  let daynameElement = document.querySelector("#dayName");

  let daynameHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      daynameHTML =
        daynameHTML +
        `
    <div class="col-2">
                <p>${formatDay(forecastDay.dt)}</p>
                <img class="pic" src="https://openweathermap.org/img/wn/${
                  forecastDay.weather[0].icon
                }@2x.png" alt="Raining" />
                <p><strong> ${Math.round(
                  forecastDay.temp.max
                )}°</strong>${Math.round(forecastDay.temp.min)} °</p>
                </div>
                `;
    }
  });
  daynameHTML = daynameHTML + `</div>`;
  daynameElement.innerHTML = daynameHTML;
}

search("Harat");

let now = new Date();
let year = now.getFullYear();
let weekDays = [
  "Sunday",
  "Monday",
  "Tuseday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekDays[now.getDay()];
let monthsName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = monthsName[now.getMonth()];
let weekDay = document.querySelector("#my-day");
weekDay.innerHTML = weekDays[now.getDay()];
let monthDay = document.querySelector("#my-month");
monthDay.innerHTML = monthsName[now.getMonth()];
let years = document.querySelector("#my-year");
years.innerHTML = now.getFullYear();

let form = document.querySelector("#input-form");
form.addEventListener("submit", formSearch);
