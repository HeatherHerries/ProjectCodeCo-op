import React from 'react'
import '../Styles/Home.css'
import MainHeroImg from '../Assets/Images/SVGImages/HomeHeroDT.svg'
import HomeNav from '../Components/HomeNav'
import JoinBtnRed from '../Components/JoinBtnRed'
import SocialLinks from '../Components/SocialLinks'

function Home() {
  return (
    <div className='home-container'>
      <div className="home-hero">

          <img src={MainHeroImg} alt="Main banner" className="home-hero-main-img" />

        <div className="home-hero-nav">
          <HomeNav />
        </div> 

        <div className="home-hero-text">
          <h1>Project Like a <span className='quote'>“</span><span className='letter'>G</span><span className='quote'>"</span>enius</h1>
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
