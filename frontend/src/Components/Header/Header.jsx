import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
    <div className='header'>
        <div className="header-content">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is  to satisfy your cravings and elevate your dining experience , one delicious meal at a time</p>
            
            {/* <a> <button></button> </a> */}
            <a href='#explore-menu'> <button>Viwe Menu</button> </a>
        </div>

      
    </div>
  )
}

export default Header
