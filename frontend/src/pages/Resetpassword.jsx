import React from 'react'

const Resetpassword = () => {
  return (
    <div>

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




    </div>
  )
}

export default Resetpassword