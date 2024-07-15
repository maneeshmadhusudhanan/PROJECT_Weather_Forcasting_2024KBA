// src/components/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 rounded-lg w-full max-w-md bg-white shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
        <form action="/">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
            <input type="text" id="username" name="username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          </div>
        <Link to='/weather'>
        <button type="submit" className="w-full bg-violet-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
        </Link>
        </form>
        <p className="mt-6 text-center text-gray-700">Don't have an account? <a href="/signup" className="text-violet-700 hover:underline">Sign Up</a></p>
        <p className="mt-6 text-center text-gray-700"><a href="/forgotpassword" className="text-violet-700 hover:underline">Forgot Password?</a></p>
      </div>
    </div>
  );
}

export default Login;
