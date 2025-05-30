import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
         <NavLink to="/Add" className="sidebar-option">
          <img src={assets.add_icon} />
          <p>Add Item</p>
            </NavLink>
        <NavLink to="/List" className="sidebar-option">
          <img src={assets.order_icon} />
          <p>list item</p>
        </NavLink>
        <NavLink to="/Orders" className="sidebar-option">
          <img src={assets.order_icon} />
          <p>orders</p>
        </NavLink>

      </div>
      
    </div>
  )
}

export default Sidebar
