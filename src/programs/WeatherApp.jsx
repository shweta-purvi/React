import { useState } from 'react';
import './WeatherApp.css';

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city.trim()) return;
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current=temperature_2m,relative_humidity_2m,weather_code`
      );
      const data = await response.json();
      setWeather({
        city: city,
        temp: Math.round(data.current.temperature_2m),
        humidity: data.current.relative_humidity_2m,
      });
    } catch (error) {
      console.log('Error fetching weather');
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h2>🌤️ Weather App</h2>
        <div className="weather-input">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && getWeather()}
            placeholder="Enter city name..."
          />
          <button onClick={getWeather}>Search</button>
        </div>

        {weather ? (
          <div className="weather-display">
            <h3>{weather.city}</h3>
            <div className="temp-display">
              <span className="temperature">{weather.temp}°C</span>
              <span className="condition">Sunny ☀️</span>
            </div>
            <div className="weather-details">
              <div className="detail">
                <span className="label">Humidity</span>
                <span className="value">{weather.humidity}%</span>
              </div>
              <div className="detail">
                <span className="label">Wind Speed</span>
                <span className="value">12 km/h</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-weather">
            <p>🔍 Search for a city to see weather</p>
          </div>
        )}
      </div>
    </div>
  );
}
