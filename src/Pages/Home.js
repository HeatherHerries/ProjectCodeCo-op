import React from 'react'
import '../Styles/Home.css'
import MainHeroImg from '../Assets/Images/SVGImages/HomeHeroDT.svg'
import LearnTogether from '../Assets/Images/SVGImages/BooksIcon.svg'
import InnovateTogether from '../Assets/Images/SVGImages/GearsIcon.svg'
import CelebrateTogether from '../Assets/Images/SVGImages/ChampagneGlassesIcon.svg'
import HomeNav from '../Components/HomeNav'
import JoinBtnRed from '../Components/JoinBtnRed'
import SocialLinks from '../Components/SocialLinks'
import LearnTogetherCards from '../Components/LearnTogetherCards'
import SubscribeCard from '../Components/SubscribeCard'


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

        <div className='hero-button'>
          <JoinBtnRed />
        </div>

        <div className="social-links">
          <SocialLinks />
        </div>
      </div>

      <div className="learn-together-section">
        <div className="learn-together-cards">
          <LearnTogetherCards 
          title='Learn Together'
          img={ LearnTogether }
          alt='books'
          text='Each team member brings a unique skill to the table. By collaborating on projects and challenges you have the opportunity to learn from one anothers skills.'
          />

          <LearnTogetherCards 
          title='Innovate Together'
          img={ InnovateTogether }
          alt='gears'
          text='Facing challenges head on as a team helps to streamline the build process. Production will be accelerated and results will be superior.'
          />

          <LearnTogetherCards 
          title='Celebrate Together'
          img={ CelebrateTogether }
          alt='glasses with champagne'
          text='Showing that you collaborate effectively in a team is a skill on its own. Create projects with your team that you will be proud to show the world.'
          />
        </div>

        <div className="subscribe">
          <SubscribeCard />
        </div>
      </div>
    </div>
  )
}

export default Home
