import React from 'react'
import "./footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className="footerContent">
            
            <div className="footerContentLeft">
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perspiciatis numquam voluptatibus ducimus autem hic ea eius debitis minus nihil.</p>
            <div className="footerSocialIcons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>

            <div className="footerContentRight">
                <h2 >Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delevary</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footerContentCenter">
        <h2>Get In Touch</h2>
        <ul>
            <li>1234567890</li>
            <li>foodDel@gmail.com</li>
        </ul>

            </div>
        </div>
        <hr />
        <p className="footerCopyRight">
              © Copyright 2024 All Right Reserve.
        </p>
    </div>
  )
}

export default Footer