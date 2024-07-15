import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weather from './pages/Weather';
import SavedLocations from './pages/Locations';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4">
       
        <Routes>

          <Route path="/" element={<Login/>} />
          <Route path="/saved" element={<SavedLocations />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/weather" element={<Weather/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;