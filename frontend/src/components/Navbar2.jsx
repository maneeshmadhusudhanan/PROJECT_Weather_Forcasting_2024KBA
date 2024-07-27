import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <>
    
   
    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img className='h-14' src="/src/images/Gardner Design - Branding, Identity, Websites - Wichita, KS.jpeg" alt="" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-400">WEATHER FORECAST</span>
  </a>
  <ul className="  flex space-x-4">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-900">WEATHER</Link>
            </li>
            <Link to="/aboutpage" className="text-blue-600 hover:text-blue-900">ABOUT US</Link>
          </ul>
          

        
 
  </div>
</nav>

    
     
        
     
    
    
    
    
    </>
  )
}

export default Navbar2
