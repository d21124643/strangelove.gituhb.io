fetch('https://api.open-meteo.com/v1/forecast?latitude=51.90&longitude=8.47&current_weather=true')
.then(response => response.json())
.then(data => {
    const weatherContainer = document.getElementById("weather-data");
    weatherContainer.innerHTML = `
    <p>Temperature: ${data.current_weather.temperature}°C</p>
    <p>Precipitation probability: ${data.current_weather.precipitation_probability}</p>
    <p>Cloud cover: ${data.current_weather.cloudcover}
    `;
});