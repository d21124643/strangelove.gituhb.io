fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
  .then(response => response.json())
  .then(data => {
    // Process the weather data
    const currentWeather = data.current_weather;
    const temperature = currentWeather.temperature_2m.value;

    // Display the weather data
    const weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.innerHTML = `
      <p>Temperature: ${temperature}°C</p>
    `;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });