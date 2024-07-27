import React from 'react';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Weather from './pages/Weather';
import SavedLocations from './pages/savedlocations';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgotpassword from './pages/Forgotpassword';
import AuthLayout from './Layout/authLayout';
import MainLayout from './Layout/mainLayout';
import Resetpassword from './pages/Resetpassword';
import Index from './pages/Index';
import Aboutpage from './pages/Aboutpage';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/weather' element={<Weather/>}/>
          <Route path='/savedlocation/:id' element={<SavedLocations/>}/>
          <Route path='/forgotpassword' element={<Forgotpassword/>} />
          <Route path='/resetpassword'element={<Resetpassword/>}/>
          <Route path='/index'element={<Index/>}/>
          <Route path='/aboutpage'element={<Aboutpage/>}/>
        </Route>
      </>
    )
  )
  return (
    <>

    <div className='bg-slate-700 h-screen'>


    
      <RouterProvider router={router}/>

      </div>
    </>
  )
}

export default App;