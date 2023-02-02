import React from 'react'
import '../Styles/Home.css'
import MainHeroImg from '../Assets/Images/SVGImages/HomeHeroDT.svg'
import PCCLogo from '../Assets/Images/SVGImages/PCCLogoBlueTransparent.svg'
import PhoneImg from '../Assets/Images/SVGImages/LadiesHandHoldingPhone.svg'
import HomeNav from '../Components/HomeNav'
import JoinBtnRed from '../Components/JoinBtnRed'
import SocialLinks from '../Components/SocialLinks'

function Home() {
  return (
    <div className='container'>
      <div className="hero-section">

          <img src={MainHeroImg} alt="Main banner" className="home-hero-main-img" />

        <div className="home-hero-logo">
          <img src={PCCLogo} alt="Project Code Co-op Logo" className="logo" />
        </div>

        <div className="home-hero-phone-img">
          <img src={PhoneImg} alt="Ladies hand holding phone with logo" className="phone-img" />
        </div>

        <div className="home-hero-nav">
          <HomeNav />
        </div>

        <div className="home-hero-text">
          <h1>Project Like a “G”enius</h1>
          <p>Bringing skilled designers and developers together with a goal to focus on real-world collaborative projects and challenges that they are exploding to show off.</p>
        </div>

        <div className="join-btn-red">
          <JoinBtnRed />
        </div>

        <div className="social-links">
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export default Home
