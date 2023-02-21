import React from 'react'
import "../Styles/AboutUs.css"
import AboutUsHeroImg from "../Assets/Images/AboutUsHeroImage.png"
import OurStory1Img from "../Assets/Images/SVGImages/Man&Woman.svg"
import SpeechBubble from "../Assets/Images/SVGImages/SpeechBubbleIcon.svg"

function AboutUs() {
  return (
    <div>
      <div className="about-us-hero">
        <img src={AboutUsHeroImg} alt="The two founders of ProjectCode Co-op" />
        <h1 className="about-us-hero-title">Two Coders, One Desire</h1>
      </div>

      <div className="about-us-our-story1">
        <div className="our-story1-ls">
          
          <img className="os1-top-img" src={SpeechBubble} alt="" />
          <p className="os1-top-text">
          Hey T, What’s Up?
          </p>

          <img className="os1-middle-img" src={SpeechBubble} alt="" />
          <p className="os1-middle-text">
          I’ve been trying to think of a way that we can maximize our coding skills. I wish we could find a group that had a bunch of coders like us that just wanted to collab on projects all the time. Think of how much experience we could get and how much we could learn from one another!
          </p>

          <img className="os1-bottom-img" src={SpeechBubble} alt="" />
          <p className="os1-bottom-text">
          I love that idea! We should look and see what we can find!
          </p>
        </div>

        <div className="our-story1-rs">
          <img src={OurStory1Img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs