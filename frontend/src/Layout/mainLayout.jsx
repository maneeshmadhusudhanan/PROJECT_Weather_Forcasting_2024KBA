import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS


const mainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <ToastContainer/>
    </div>
  )
}

export default mainLayout