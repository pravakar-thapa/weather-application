// -----------------------------
// Weather API configuration
// -----------------------------
const getWeather = async (city) => {
    
    try {

        // 1️⃣ Convert city name to latitude & longitude
        const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
        const geoResponse = await fetch(geoURL);
        const geoData = await geoResponse.json();

        const lat = geoData.results[0].latitude;
        const lon = geoData.results[0].longitude;

        // 2️⃣ Fetch weather using coordinates
        const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        const weatherResponse = await fetch(weatherURL);
        const weatherData = await weatherResponse.json();

        console.log(weatherData);

        // 3️⃣ Display data
        cityName.innerHTML = city
        temp.innerHTML = weatherData.current_weather.temperature;
        wind_speed.innerHTML = weatherData.current_weather.windspeed;
        wind_degrees.innerHTML = weatherData.current_weather.winddirection;
        time.innerHTML = weatherData.current_weather.time; 
        weathercode.innerHTML = weatherData.current_weather.weathercode; 
        is_day.innerHTML = weatherData.current_weather.is_day;
        
        if (weatherData.current_weather.is_day === 1) {
    is_day.innerHTML = "Day";
} else {
    is_day.innerHTML = "Night";
}

    } catch (error) {
        console.error(error);
    }
};


// Search button
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

// Default city on page load
getWeather("New York"); 