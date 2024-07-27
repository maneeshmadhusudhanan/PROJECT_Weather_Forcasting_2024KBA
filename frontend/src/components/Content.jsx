import React from 'react'

const Content = () => {
  return (
    <div>

<div className="bg-gray-100 text-gray-900 min-h-screen">
      <header className="bg-blue-600 text-white py-6 mb-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center">Weather Forecasting Aggregator App</h1>
        
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section className="mb-8">
          
          <p>
            The weather forecasting aggregator app is a web application where users can find the current weather details (like temperature, humidity, wind speed) of any city on the globe. In this project, we present the development of a Weather Forecast Aggregator using REACTJS and TAILWIND CSS. The aim of this application is to provide users with a unified interface to access and compare weather forecasts from multiple sources, enhancing accuracy and usability.
          </p>
        </section>

        

        <section className="mb-8">
       
          <p>
            The application utilizes CSS for styling and layout, ensuring an intuitive and visually appealing user experience. Leveraging JavaScript, the application fetches weather forecast data from various APIs, including OpenWeatherMap, AccuWeather, and The Weather Channel. Through asynchronous HTTP requests, the application collects real-time forecast information from these sources.
            By combining the power of CSS and JavaScript for dynamic data retrieval and interactivity, the Weather Forecast Aggregator offers users a seamless and feature-rich platform for accessing and comparing weather forecasts from multiple sources. This project demonstrates the practical application of web technologies to address real-world challenges in weather forecasting and information aggregation.
          </p>
        </section>




        <section className="mb-8">
          
          <h3 className="text-xl font-semibold mb-2">Functional Requirements</h3>
          <ul className="list-disc list-inside">
            <li>Weather temperature (shown on screen)</li>
            <li>Humidity (shown on screen)</li>
            <li>Wind speed</li>
            <li>Responsive design</li>
            <li>Login page for user</li>
            <li>Store a week's data and display it</li>
          </ul>
        </section>

       
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
         
        </div>
      </footer>
    </div>








    </div>
  )
}

export default Content