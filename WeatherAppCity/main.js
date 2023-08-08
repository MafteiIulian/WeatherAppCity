

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const temperature = document.querySelector('.temp');
const humidityData = document.getElementById('humidity');
const windSpeed = document.getElementById('wind');

const apiKey = "a934d72c2d2e1a625e26a36727b2f252";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else   
         var data = await response.json();
       
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&degC";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; 
        document.querySelector(".pressure").innerHTML = Math.round(data.main.pressure);
        document.querySelector(".max-temp").innerHTML = Math.round(data.main.temp_max) + "&degC";
        document.querySelector(".min-temp").innerHTML = Math.round(data.main.temp_min) + "&degC";
        
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src ="assets/clouds.png"
        } else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "assets/clear.png"
        } else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "assets/rain.png"
        } else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "assets/drizzle.png"
        } else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "assets/mist.png"
    }
    document.querySelector('.weather').style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

document.getElementById("enter")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("enter1").click();
    }
});




