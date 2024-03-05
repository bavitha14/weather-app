function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'bff066af4ed527bf89306ee14e10db7e'; // Replace with your OpenWeatherMap API key

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            const weatherInfo = `Temperature: ${temperature}°C<br>Humidity: ${humidity}%<br>Wind Speed: ${windSpeed} m/s`;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherInfo').innerHTML = 'Error fetching weather data';
        });
}
