// weather.jsx

import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { toast } from 'react-toastify';


function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState([]);

  const fetchWeatherData = async (lat, lon) => {
    // Your existing code for fetching weather data

    const apiKey = '895284fb2d2c50a520ea537456963d9c';
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`;
    
        try {
          const weatherResponse = await axios.get(weatherUrl);
          const forecastResponse = await axios.get(forecastUrl);
          setData(weatherResponse.data);
          setForecast(forecastResponse.data.daily);
          // console.log(weatherResponse.data);
          // console.log(forecastResponse.data.daily);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }

  };

  const searchLocation = async (event) => {
    // Your existing code to search for location

    if (event.key === 'Enter') {
            const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=895284fb2d2c50a520ea537456963d9c`;
            try {
              const response = await axios.get(geocodeUrl);
              if (response.data.length > 0) {
                const { lat, lon } = response.data[0];
                fetchWeatherData(lat, lon);
              }
            } catch (error) {
              console.error('Error fetching location data:', error);
            }
            setLocation('');
          }
  };




  const saveLocation = async () => {
    
    try {
      const response = await axios.post('/api/savelocation', {
        
        city: data.name, 
        country: data.sys.country 
      });

      console.log('Location saved:', response.data);
      toast.success("saved your location succesfully");
      
    } catch (error) {
      console.error('Error saving location:', error);
    }
  };



  return (

    <div className=" border-2 ml-[40%] w-[400px] h-[680px] mt-[220px]   flex flex-col items-center justify-center bg-gray-800 text-white relative">
     
      <div className="z-10 w-full max-w-lg p-8 mt-8">
        <div className="flex justify-center mb-4 mt-[-80%]">


          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
            className="w-full p-4 rounded-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="text-center">
          {data.name && (
            <div className="mb-4">
              <p className="text-2xl font-bold">{data.name}</p>
              {data.main && <h1 className="text-6xl font-bold">{data.main.temp.toFixed()}°C</h1>}
              {data.weather && <p className="text-xl text-gray-400">{data.weather[0].main}</p>}
            </div>
          )}
          {data.name && (
            <div className="flex justify-around bg-gray-700  rounded-lg">
              <div>
                {data.main && <p className="font-bold text-xl">{data.main.feels_like.toFixed()}°C</p>}
                <p className="text-gray-400">Temperature</p>
              </div>
              <div>
                {data.main && <p className="font-bold text-xl">{data.main.humidity}%</p>}
                <p className="text-gray-400">Humidity</p>
              </div>
              <div>
                {data.wind && <p className="font-bold text-xl">{data.wind.speed.toFixed()} KPH</p>}
                <p className="text-gray-400">Wind Speed</p>
              </div>
            </div>
          )}
          {forecast.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">7-Day Forecast</h2>
              <table className="w-full bg-gray-700 rounded-lg">
                <thead>
                  <tr className="bg-gray-600">
                    <th className="p-2">DATE</th>
                    <th className="p-2">TEMPERATURE</th>
                    <th className="p-2">WEATHER</th>
                  </tr>
                </thead>
                <tbody>
                  {forecast.map((day, index) => (
                    <tr key={index} className="border-b border-gray-600">
                      <td className="p-2">{new Date(day.dt * 1000).toLocaleDateString()}</td>
                      <td className="p-2">{day.temp.day.toFixed()}°C</td>
                      <td className="p-2">{day.weather[0].main}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={saveLocation} className='border-2 mt-6 w-40 h-12 rounded-full bg bg-green-700' >SAVE LOCATION </button>
            </div>
          )}
        </div>
      </div>
    </div>
   
  );
}





//     <div className="...">
//       {/* Your existing JSX */}
//       {forecast.length > 0 && (
//         <div className="...">
//           {/* Your existing forecast display */}
//           <button onClick={saveLocation} className="...">SAVE LOCATION</button>
//         </div>
//       )}
//     </div>
//   );
// }

export default Weather;






//-------------------------------------------------------------------


//  import React, { useState } from 'react';
// import axios from 'axios';
// import '../App.css';

// function Weather() {
//   const [data, setData] = useState({});
//   const [location, setLocation] = useState('');
//   const [forecast, setForecast] = useState([]);

//   const fetchWeatherData = async (lat, lon) => {
//     const apiKey = '895284fb2d2c50a520ea537456963d9c';
//     const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
//     const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`;

//     try {
//       const weatherResponse = await axios.get(weatherUrl);
//       const forecastResponse = await axios.get(forecastUrl);
//       setData(weatherResponse.data);
//       setForecast(forecastResponse.data.daily);
//       console.log(weatherResponse.data);
//       console.log(forecastResponse.data.daily);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };

//   const searchLocation = async (event) => {
//     if (event.key === 'Enter') {
//       const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=895284fb2d2c50a520ea537456963d9c`;
//       try {
//         const response = await axios.get(geocodeUrl);
//         if (response.data.length > 0) {
//           const { lat, lon } = response.data[0];
//           fetchWeatherData(lat, lon);
//         }
//       } catch (error) {
//         console.error('Error fetching location data:', error);
//       }
//       setLocation('');
//     }
//   };

//   return (



//     <div className=" border-2 ml-[40%] w-[400px] h-[680px] mt-[220px]   flex flex-col items-center justify-center bg-gray-800 text-white relative">
     
//       <div className="z-10 w-full max-w-lg p-8 mt-8">
//         <div className="flex justify-center mb-4 mt-[-80%]">


//           <input
//             value={location}
//             onChange={event => setLocation(event.target.value)}
//             onKeyPress={searchLocation}
//             placeholder="Enter Location"
//             type="text"
//             className="w-full p-4 rounded-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="text-center">
//           {data.name && (
//             <div className="mb-4">
//               <p className="text-2xl font-bold">{data.name}</p>
//               {data.main && <h1 className="text-6xl font-bold">{data.main.temp.toFixed()}°C</h1>}
//               {data.weather && <p className="text-xl text-gray-400">{data.weather[0].main}</p>}
//             </div>
//           )}
//           {data.name && (
//             <div className="flex justify-around bg-gray-700  rounded-lg">
//               <div>
//                 {data.main && <p className="font-bold text-xl">{data.main.feels_like.toFixed()}°C</p>}
//                 <p className="text-gray-400">Temperature</p>
//               </div>
//               <div>
//                 {data.main && <p className="font-bold text-xl">{data.main.humidity}%</p>}
//                 <p className="text-gray-400">Humidity</p>
//               </div>
//               <div>
//                 {data.wind && <p className="font-bold text-xl">{data.wind.speed.toFixed()} KPH</p>}
//                 <p className="text-gray-400">Wind Speed</p>
//               </div>
//             </div>
//           )}
//           {forecast.length > 0 && (
//             <div className="mt-8">
//               <h2 className="text-2xl font-bold mb-4">7-Day Forecast</h2>
//               <table className="w-full bg-gray-700 rounded-lg">
//                 <thead>
//                   <tr className="bg-gray-600">
//                     <th className="p-2">DATE</th>
//                     <th className="p-2">TEMPERATURE</th>
//                     <th className="p-2">WEATHER</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {forecast.map((day, index) => (
//                     <tr key={index} className="border-b border-gray-600">
//                       <td className="p-2">{new Date(day.dt * 1000).toLocaleDateString()}</td>
//                       <td className="p-2">{day.temp.day.toFixed()}°C</td>
//                       <td className="p-2">{day.weather[0].main}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button onClick={searchLocation} className='border-2 mt-6 w-40 h-12 rounded-full bg bg-green-700' >SAVE LOCATION </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
   
//   );
// }

// export default Weather;


