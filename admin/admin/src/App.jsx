import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/ADD/Add'
import List from './pages/LIST/List'
import { ToastContainer, toast } from 'react-toastify';
import Order from './pages/Orders/Order'


const App = () => {
  
  const url = "http://localhost:4000";

  
  
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/> 
        <Routes>
          <Route path ="/Add" element={<Add  url={url}/>}/>
          <Route path ="/List" element={<List url={url}/>}/>
          <Route path ="/Orders" element={<Order url={url}/>}/>

        </Routes>
        


      </div>
      
    </div>
  )
}

export default App
