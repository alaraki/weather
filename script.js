//https://api.openweathermap.org/data/2.5/weather?q=khartoum&appid=51727e766f71d542f1bd33e6751c0c3a&units=metric

//apiKey = "51727e766f71d542f1bd33e6751c0c3a";
apiKey = "594e4f77ff7d7d0cf0fccc35160d9122";
apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//https://api.openweathermap.org/data/2.5/weather?q=khartoum&appid=594e4f77ff7d7d0cf0fccc35160d9122&units=metric

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherState = document.querySelector(".state");

async function checkWeather(city) {

const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

console.log(response.status);

if(response.status == 404) {
  document.querySelector(".error").style.display = "block";
  document.querySelector(".weather").style.display = "none";
} else {

var data = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main == "Clouds") {
  weatherIcon.src = "Images/Clouds.png";
  weatherState.innerHTML = "Clouds";
}
else if(data.weather[0].main == "Clear"){
  weatherIcon.src = "Images/Clear.png";
  weatherState.innerHTML = "Clear";
}
else if(data.weather[0].main == "Rain"){
  weatherIcon.src = "Images/Rain.png";
  weatherState.innerHTML = "Rain";
}
else if(data.weather[0].main == "Drizzle"){
  weatherIcon.src = "Images/Drizzle.png";
  weatherState.innerHTML = "Drizzle";
}
else if(data.weather[0].main == "Mist"){
  weatherIcon.src = "Images/Mist.png";
  weatherState.innerHTML = "Mist";
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
}

}

searchBtn.addEventListener(("click"), ()=> {
  checkWeather(searchBox.value);
})

