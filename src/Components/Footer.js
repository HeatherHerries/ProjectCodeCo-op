import React from 'react'
import "../Styles/Footer.css"
import { Link } from "react-router-dom"
import BlueLogo from "../Assets/Images/SVGImages/PCCLogoBlueTransparent.svg"
import SocialLinks from './SocialLinks'

export default function Footer() {
  const links = [
    {
      url: '/',
      text: 'Home'
    },

    {
      url: '/AboutUs',
      text: 'About Us'
    },

    {
      url: '/Projects',
      text: 'Projects'
    },

    {
      url: '/Learn',
      text: 'Learn'
    },

    {
      url: '/Merch',
      text: 'Merch'
    },

    {
      url: '/ContactUs',
      text: 'Contact Us'
    }
  ]
  return (
    <div className="shared-footer">
      
      <div >
        <div className="footer-navigation">
          <ul>
            {
              links.map(link => (<Link style={{textDecoration:'none'}}to={link.url}><li>{link.text}</li></Link>))
            }
          </ul>
        </div>
      </div>

      <div className="blue-footer-logo">
        <img src={BlueLogo} alt="Blue ProjectCode Logo" />
      </div>

      <div className="footer-social-links">
        <SocialLinks />
      </div>
    </div>
  )
}
