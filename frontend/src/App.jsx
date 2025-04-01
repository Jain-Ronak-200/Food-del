import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Home/cart/Cart'
import Placeorder from './Pages/placeorder/Placeorder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/Loginpopup/LoginPopup'
import Verify from './Pages/verify/Verify'
import Myorders from './Pages/Myorders/Myorders'


const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  


  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
      </Routes>
 
       
    </div>
    <Footer/>
    </>
    
  )
}

export default App
