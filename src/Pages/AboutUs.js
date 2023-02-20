import React from 'react'
import "../Styles/AboutUs.css"
import AboutUsHeroImg from "../Assets/Images/AboutUsHeroImage.png"

function AboutUs() {
  return (
    <div>
      <div className="about-us-hero">
        <img src={AboutUsHeroImg} alt="The two founders of ProjectCode Co-op" />
        <h1 className="about-us-hero-title">Two Coders, One Desire</h1>
      </div>
    </div>
  )
}

export default AboutUs