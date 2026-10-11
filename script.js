
const searchForm = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");

const loadingMessage = document.getElementById("loading-message");
const errorMessage = document.getElementById("error-message");
const weatherCard = document.getElementById("weather-card");

const weatherCity = document.getElementById("weather-city");
const weatherDescription = document.getElementById("weather-description");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

// Convert weather codes into readable descriptions.
function getWeatherDescription(code) {
    const descriptions = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Foggy",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        71: "Slight snowfall",
        73: "Moderate snowfall",
        75: "Heavy snowfall",
        80: "Rain showers",
        81: "Moderate rain showers",
        82: "Heavy rain showers",
        95: "Thunderstorm",
        96: "Thunderstorm with hail",
        99: "Thunderstorm with heavy hail"
    };

    return descriptions[code] ?? "Weather conditions unavailable";
}

// Fetch and display weather for a city.
async function getWeather(city) {
    loadingMessage.hidden = false;
    errorMessage.hidden = true;
    weatherCard.hidden = true;

    try {
        // Step 1: Find the city's coordinates.
        const geocodingURL =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        const locationResponse = await fetch(geocodingURL);

        if (!locationResponse.ok) {
            throw new Error("Unable to search for the city.");
        }

        const locationData = await locationResponse.json();

        if (!locationData.results || locationData.results.length === 0) {
            throw new Error("City not found. Please check the spelling.");
        }

        const location = locationData.results[0];
        const latitude = location.latitude;
        const longitude = location.longitude;

        // Step 2: Fetch weather using the coordinates.
        const weatherURL =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto`;

        const weatherResponse = await fetch(weatherURL);

        if (!weatherResponse.ok) {
            throw new Error("Unable to fetch weather data. Please try again.");
        }

        const weatherData = await weatherResponse.json();
        const current = weatherData.current;

        if (!current) {
            throw new Error("Weather data is currently unavailable.");
        }

        // Step 3: Display the weather information.
        weatherCity.textContent = `${location.name}, ${location.country}`;
        weatherDescription.textContent =
            getWeatherDescription(current.weather_code);

        temperature.textContent =
            `${Math.round(current.temperature_2m)}°C`;

        humidity.textContent =
            `${current.relative_humidity_2m}%`;

        windSpeed.textContent =
            `${current.wind_speed_10m} km/h`;

        weatherCard.hidden = false;

    } catch (error) {
        errorMessage.textContent =
            error.message || "Something went wrong. Please try again.";

        errorMessage.hidden = false;

    } finally {
        loadingMessage.hidden = true;
    }
}

// Run when the user submits the search form.
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (city) {
        getWeather(city);
    }
});
