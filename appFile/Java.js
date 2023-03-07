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
  windSky.innerHTML = `${response.data.wind.speed} Km/h`;
  let humidityDescrip = document.querySelector("#humidity-temp");
  humidityDescrip.innerHTML = `humidity ${response.data.main.humidity} %`;
  let skyLook = document.querySelector("#skyLook");
  skyLook.innerHTML = response.data.weather[0].description;
}

let apiKey = "9666cb098baebeb992cfd789750f6f47";
let cityName = "Philadelphia";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(Temprature);

let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
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
let timeDay = document.querySelector("#myHour");
timeDay.innerHTML = ` ${hour} : ${minute}`;

console.log(hour);
console.log(minute);
