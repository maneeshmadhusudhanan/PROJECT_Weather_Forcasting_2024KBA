import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
      setWeather(response.data);
      setError('');
    } catch (err) {
      setWeather(null);
      setError('City not found');
    }
  };

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:5000/api/locations', {
        city: weather.name,
        country: weather.sys.country,
      });
      alert('Location saved!');
    } catch (err) {
      console.error('Error saving location:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <Navbar/>
      <h1 className="text-3xl font-bold mb-4 text-center">Weather Forecast</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Search
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {weather && (
        <div>
          <h2 className="text-xl font-semibold">{weather.name}, {weather.sys.country}</h2>
          <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
          <p>{weather.weather[0].description}</p>
          <button onClick={handleSave} className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Save Location
          </button>
        </div>
      )}
    </div>
  );
};

export default Weather;