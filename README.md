# weather-app
A responsive weather web app that fetches real-time weather data using Open-Meteo API based on user-input city. Built with HTML, Bootstrap, and JavaScript.

Weather App
A simple and responsive weather application that allows users to search for any city and get real-time weather data.

Features
- Search weather by city name
- Displays:
  - 🌡️ Temperature
  - 🌬️ Wind speed & direction
  - ⏰ Time
  - 🌤️ Weather condition code
  - 🌙 Day/Night status
- Responsive UI using Bootstrap
- Real-time data from Open-Meteo API

Tech Stack
- HTML5
- CSS (Bootstrap 5)
- JavaScript (Vanilla JS)
- Open-Meteo API (Weather + Geocoding)

How It Works
1. User enters a city name
2. App converts city → latitude & longitude using Geocoding API
3. Weather API fetches real-time weather data using coordinates
4. Data is displayed dynamically on the UI


Installation & Usage
1. Clone the repository : ```bash git clone https://github.com/your-username/weather-app.git
2. Open the project folder : cd weather-app
3. Run the app : Simply open index.html in your browser

How to Use
- Enter a city name in the search bar
- Click on Search/enter
- View weather details instantly

API Used
- Open-Meteo Geocoding API
- Open-Meteo Weather API

Future Improvements
- Add weather icons
- Add error handling (city not found)
- Show 7-day forecast
- Add loading spinner
- Improve UI design
