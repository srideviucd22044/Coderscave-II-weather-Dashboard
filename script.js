const apiKey = "9bf03420bdd63f9fdd28137dddbb02a4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "Screenshot_2024-01-25_181752-removebg-preview.png"
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "Screenshot_2024-01-25_182406-removebg-preview.png"
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "Screenshot_2024-01-25_182655-removebg-preview.png"
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Screenshot_2024-01-25_183536-removebg-preview.png"
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "Screenshot_2024-01-25_183839-removebg-preview.png"
        }

        document.querySelector(".weather").style.display = "block";

        

    } catch (error) {
        alert("Location not found"); 
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})