const apiKey = "96288998fa42f60dc2135a98e30fa2fd";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    const lowercaseWeatherMain = data.weather[0].main.toLowerCase();

    if (lowercaseWeatherMain === "clouds") {
        weatherIcon.src = "drizzle.png";
    } else if (lowercaseWeatherMain === "clear") {
        weatherIcon.src = "clear.png";
    } else if (lowercaseWeatherMain === "rain") {
        weatherIcon.src = "rain1.png";
    } else if (lowercaseWeatherMain === "drizzle") {
        weatherIcon.src = "drizzle.png";
    } else if (lowercaseWeatherMain === "mist") {
        weatherIcon.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    const cityName = searchBox.value;
    if (cityName) {
        checkWeather(cityName);
    } else {
        alert("Please enter a city name.");
    }
});
