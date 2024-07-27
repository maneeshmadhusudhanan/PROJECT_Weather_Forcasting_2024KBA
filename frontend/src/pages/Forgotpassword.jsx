import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../images/clement-falize-z_2gYApfdqc-unsplash (1).jpg';



const style = {
  backgroundImage: `url(${img})`,
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover'
}

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      // Handle successful password reset request
    } catch (error) {
      console.error('Password reset request failed:', error);
    }
  };

  return (
<div style={style} className= ' border flex justify-center  mt-16  p-8 rounded-lg  bg-slate-800 shadow-lg ml-[200px] mr-[200px]'>
    <form onSubmit={handleSubmit}>
      <h2 className='text-white '>FORGOT PASSWORD</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
       <Link to='/signup'>
      <button className='w-full mt-5 bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500' type="submit">Reset Password</button>
      </Link>
    </form>
    </div>
  );
};

export default ForgotPasswordPage;