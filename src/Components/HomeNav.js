import React from 'react'
import '../Styles/HomeNav.css'
import { Link } from "react-router-dom"

function HomeNav() {
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
    <div className='navbar-container'>
      <div>
        <ul>
          {
            links.map(link => (<Link style={{textDecoration:'none'}}to={link.url}><li>{link.text}</li></Link>))
          }
        </ul>
      </div>
    </div>
  )
}

export default HomeNav
