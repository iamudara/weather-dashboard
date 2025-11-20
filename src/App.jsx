import { useState } from 'react';
import './App.css';

function App() {

  const [city, setCity] = useState('Colombo');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Event handler: updates city when user types
  function handleCityChange(event) {
    setCity(event.target.value);
  }


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