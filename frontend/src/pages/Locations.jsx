import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const SavedLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/locations');
        setLocations(response.data);
      } catch (err) {
        console.error('Error fetching locations:', err);
      }
    };
    fetchLocations();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold mb-4">Saved Locations</h2>
      <ul>
        {locations.map((location) => (
          <li key={location._id} className="mb-2">
            {location.city}, {location.country}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default SavedLocations;