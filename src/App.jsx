import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Event handler: updates city when user types
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  // NEW: Fetch weather data
  useEffect(() => {
    // Don't fetch if city is empty
    if (!city) return;
    
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
      
  }, [city]);

  return (
    <div className="app">
      <h1>🌤️ Weather Dashboard</h1>
      <div className="search-box">
        <input 
        type="text" 
        placeholder="Enter city name.."
        value={city} 
        onChange={handleCityChange} 
        />
      </div>

        <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
        <p>City: {city}</p>
        <p>Weather: {weather ? 'Has data' : 'No data'}</p>
        <p>Loading: {loading ? 'Yes' : 'No'}</p>
        <p>Error: {error || 'None'}</p>
      </div>
    </div>
  );
}

export default App;