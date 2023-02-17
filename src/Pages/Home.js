import React from 'react'
import '../Styles/Home.css'
import MainHeroImg from '../Assets/Images/SVGImages/HomeHeroDT.svg'
import FPImg from '../Assets/Images/SVGImages/GirlWorkingatComputer.svg'
import HomeNav from '../Components/HomeNav'
import JoinBtnRed from '../Components/JoinBtnRed'
import JoinBtnBlue from '../Components/JoinBtnBlue'
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

      <div className="home-featured-projects">
        <h1 className="featured-projects-title">Featured Projects</h1>
        <p className="featured-projects-text">&#123;projectCode&#125;Co-op team members are working tirelessly on projects to show the world, but don’t want anyone to see what we are capable of until it absolutely perfect! Check back shortly and be ready for your mind to be blown! </p>
        <img src={FPImg} alt="" className="featured-projects-img" />
        <div className="featured-projects-btn">
          <JoinBtnBlue />
        </div>
      </div>
    </div>
  )
}

export default Home
