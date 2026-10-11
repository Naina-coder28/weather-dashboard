Weather Dashboard

A responsive Weather Dashboard built using HTML, CSS, and JavaScript that fetches live weather information using the Open-Meteo REST API.

## 🚀 Live Demo

[View Weather Dashboard](https://naina-coder28.github.io/weather-dashboard/)

## ✨ Features

- Search for weather by city name
- Display current temperature in Celsius
- Show relative humidity and wind speed
- Display readable weather conditions
- Handle invalid city names and API errors
- Show a loading message while fetching data
- Responsive layout for desktop and mobile screens

## 🛠️ Technologies Used

- **HTML5** — page structure and semantic elements
- **CSS3** — styling and responsive layout
- **JavaScript** — DOM manipulation and application logic
- **Fetch API** — HTTP requests to external APIs
- **Async/Await** — asynchronous JavaScript
- **JSON** — processing API responses
- **Open-Meteo API** — geocoding and weather data

## ⚙️ How It Works

1. The user enters a city name.
2. The Geocoding API retrieves the city's latitude and longitude.
3. The Weather API fetches current weather information for those coordinates.
4. JavaScript processes the JSON response and updates the dashboard.
5. Error handling displays a message if the city cannot be found or a request fails.

## 📂 Project Structure

weather-dashboard/
├── index.html
├── style.css
├── script.js
└── README.md

## ▶️ Run Locally

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser.
4. Ensure you have an internet connection to fetch live weather data.

## 🌐 API Sources

- [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- [Open-Meteo Weather API](https://open-meteo.com/en/docs)

## 📚 What I Learned

- Working with REST APIs
- Fetching and parsing JSON data
- Using `async` and `await`
- Handling API errors with `try...catch...finally`
- Updating webpage content using DOM manipulation
- Building and deploying a responsive web application with GitHub Pages

---

**Created as part of my Web Development Internship — Task 4.**
