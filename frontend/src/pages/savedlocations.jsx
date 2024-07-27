import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SavedLocations = () => {
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('/api/api/locations');
        setLocations(response.data);
      } catch (err) {
        console.error('Error fetching locations:', err);
      }
    };
    fetchLocations();
  }, []);

  // const deleteLocation = async (id) => {

  //   console.log(id)
  //   const confirm = window.confirm('Are you sure you want to delete this location?');
  //   if (!confirm) return;

  //   try {
  //     await axios.delete(`http://localhost:5000/api/location/${id}`);
  //     setLocations(locations.filter(location => location._id !== id));
  //     alert('Location deleted successfully');
  //   } catch (error) {
  //     console.error('Error deleting location:', error);
  //     alert('Failed to delete location');
  //   }
  // };

  const deleteLocation = async (id) => {
    console.log(id)
    const confirm = window.confirm('Are you sure you want to delete this location?');
    if (!confirm) return;
  
    try {
      await axios.delete(`/api/api/locations/${id}`);
      setLocations(locations.filter(location => location._id !== id));
      alert('Location deleted successfully');
    } catch (error) {
      console.error('Error deleting location:', error);
      alert('Failed to delete location');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-slate-800 rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold mb-4 text-white">SAVED LOCATIONS LIST</h2>
      <ul>
        {locations.map((location) => (
          <div key={location._id} className='flex items-center justify-between mb-4'>
            <li className="mb-4 mt-4 text-blue-600 text-3xl">
              {location.city}, {location.country}
            </li>
            <li>
              <button 
                className='w-[120px] h-8 bg-red-600 text-white rounded-lg'
                onClick={() => deleteLocation(location._id)}
              >
                Delete
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SavedLocations;
