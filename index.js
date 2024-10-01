// Function to render the weather information
function renderWeather(weather) {
    console.log(weather);
    
    // Clear previous results
    let resultsContainer = document.querySelector("#weather-result");
    resultsContainer.innerHTML = "";

    // Create elements for weather data
    let city = document.createElement("h2");
    city.textContent = weather.name;
    resultsContainer.append(city);

    let temp = document.createElement("p");
    temp.textContent = "Temp: " + weather.main.temp + "°F";
    resultsContainer.append(temp);

    let humidity = document.createElement("p");
    humidity.textContent = "Humidity: " + weather.main.humidity + "%";
    resultsContainer.append(humidity);

    let wind = document.createElement("p");
    wind.textContent = "Wind: " + weather.wind.speed + " mph, " + weather.wind.deg + "°";
    resultsContainer.append(wind);
}

// Function to fetch the weather based on user input
function fetchWeather(city) {
    let apiKey = "f3ba16f1be3cb6768e10811072079810";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === 200) {
                renderWeather(data);
            } else {
                alert("City not found. Please try again.");
            }
        })
        .catch((error) => {
            console.error("Error fetching the weather data:", error);
            alert("Something went wrong. Please try again.");
        });
}

// Add event listener for the search button
document.querySelector("#search-btn").addEventListener("click", () => {
    let city = document.querySelector("#city-input").value;
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});
