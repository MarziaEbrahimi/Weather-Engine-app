function Temprature(response) {
  let degreeElement = document.querySelector("#show-degree");
  degreeElement.innerHTML = Math.round(response.data.main.temp);
  let cityName = document.querySelector("h6");
  cityName.innerHTML = response.data.name;
  let countryName = document.querySelector("#country");
  countryName.innerHTML = response.data.sys.country;

  console.log(response.data);
}

let apiKey = "9666cb098baebeb992cfd789750f6f47";
let cityName = "Philadelphia";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(Temprature);
