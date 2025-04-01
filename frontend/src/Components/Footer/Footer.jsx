import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footercontent">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, recusandae architecto. Sunt maiores laudantium iste? Ad alias libero culpa dolores!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-centre">
                    <h2>COMPANY</h2>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                    
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 -453-4343-3434</li>
                        <li>contancttomato@gmail.com</li>
                    </ul>

                </div>

            </div>

          <div className="footer-copyright">
            <hr />
           <p>
           Copyright 2024  Tomato.com - All Right Reserved
            </p> 
          </div>

        </div>
    )
}

export default Footer
