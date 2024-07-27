import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS


const authLayout = () => {
  return (
    <div>
        <Outlet/>
        <ToastContainer/>
    </div>
  )
}

export default authLayout