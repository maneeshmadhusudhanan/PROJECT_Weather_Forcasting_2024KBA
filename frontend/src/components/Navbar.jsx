import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
    <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500 hover:text-blue-700">WEATHER</Link>
            </li>
        
            <li>
              <Link to="/saved" className="text-blue-500 hover:text-blue-700">SAVED LOCATION LISTS</Link>
            </li>
            <Link to="/" className="text-blue-500 hover:text-blue-700">LOGOUT</Link>
          </ul>
        </nav>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Navbar
