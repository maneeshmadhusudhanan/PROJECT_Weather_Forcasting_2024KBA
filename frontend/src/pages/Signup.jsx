// src/components/Signup.jsx
import React from 'react';

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 rounded-lg w-full max-w-md bg-white shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <form action="/signup" method="POST" id="signupform">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
            <input type="text" id="username" name="username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            <span id="passwordError" className="text-red-500 text-sm"></span>
          </div>
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-gray-700 mb-2">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            <span id="confirmPasswordError" className="text-red-500 text-sm"></span>
          </div>
          <Link></Link>
          <button   type="submit" className="w-full bg-violet-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-violet-700">Sign Up</button>
        </form>
        <p className="mt-6 text-center text-gray-700">Already have an account? <a href="/login" className="text-violet-700 hover:underline">Login</a></p>
      </div>
    </div>
  );
}

export default Signup;
