import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [city, setCity] = useState('London');
  const [searchCity, setSearchCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Event handler: updates city when user types
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  // Event handler: triggers search (handles both button click and Enter key)
  function handleSearchSubmit(event) {
    event.preventDefault();  // Prevent page reload
    if (city.trim()) {
      setSearchCity(city.trim());
    }
  }

  // NEW: Fetch weather data
  useEffect(() => {
    // Don't fetch if city is empty
    if (!searchCity) return;
    
    // Your API key from OpenWeatherMap
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;  
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    // Start loading
    setLoading(true);
    setError(null);
    
    // Fetch weather data
    fetch(API_URL)
      .then(response => {
        // Check if request was successful
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(data => {
        // Success! Save the weather data
        console.log('Weather data:', data);
        setWeather(data);
        setLoading(false);
      })
      .catch(error => {
        // Error! Save the error message
        console.error('Error:', error);
        setError(error.message);
        setLoading(false);
        setWeather(null);
      });
      
  }, [searchCity]);

  return (
    <div className="app">
      {/* Search form */}
      <form onSubmit={handleSearchSubmit} className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={handleCityChange}
        />
        <button type="submit" className="search-btn">
          🔍 Search
        </button>
      </form>

      {/* Loading state */}
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading weather data...</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="error">
          <p>❌ {error}</p>
          <p className="error-hint">Try checking the city name spelling</p>
        </div>
      )}

      {/* Weather data - only show if we have data and not loading */}
      {weather && !loading && (
        <div className="weather-card">
          <div className="weather-header">
            <h2>{weather.name}</h2>
            <img 
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          </div>
          
          <div className="temperature">
            <span className="temp-value">{Math.round(weather.main.temp)}</span>
            <span className="temp-unit">°C</span>
          </div>
          
          <p className="weather-description">
            {weather.weather[0].description}
          </p>
          
          <div className="weather-details">
            <div className="detail">
              <span className="detail-label">Feels like</span>
              <span className="detail-value">{Math.round(weather.main.feels_like)}°C</span>
            </div>
            
            <div className="detail">
              <span className="detail-label">Humidity</span>
              <span className="detail-value">{weather.main.humidity}%</span>
            </div>
            
            <div className="detail">
              <span className="detail-label">Wind Speed</span>
              <span className="detail-value">{weather.wind.speed} m/s</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;