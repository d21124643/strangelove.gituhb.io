// Fetch weather data
fetch('https://api.open-meteo.com/v1/latitude=51.90&longitude=-8.47&hourly=temperature_2m,precipitation,weathercode,pressure_msl&current_weather=true')
  .then(response => response.json())
  .then(data => {
    // Process the weather data
    const currentWeather = data.current_weather;
    const temperature = currentWeather.temperature_2m.value;
    const precipitation = currentWeather.precipitation.value;
    const weatherCode = currentWeather.weathercode.value;
    const pressure = currentWeather.pressure_msl.value;

    // Display the weather data
    const weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.innerHTML = `
      <p>Temperature: ${temperature}°C</p>
      <p>Precipitation: ${precipitation} mm</p>
      <p>Weather Code: ${weatherCode}</p>
      <p>Pressure: ${pressure} hPa</p>
    `;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
