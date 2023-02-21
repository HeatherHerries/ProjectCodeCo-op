import React from 'react'
import "../Styles/AboutUs.css"
import AboutUsHeroImg from "../Assets/Images/AboutUsHeroImage.png"
import OurStory1Img from "../Assets/Images/SVGImages/Man&Woman.svg"
import OurStory2Img from "../Assets/Images/SVGImages/Mouth.svg"
import OMG from "../Assets/Images/OMG.png"
import TheEnd from "../Assets/Images/SVGImages/TheEndExplosion.svg"
import Savage from "../Assets/Images/SVGImages/SavageGraffiti.svg"
import SurprisedGirl from "../Assets/Images/SVGImages/SurprisedGirl.svg"
import SpeechBubble from "../Assets/Images/SVGImages/SpeechBubbleIcon.svg"
import JoinBtnRed from "../Components/JoinBtnRed"
import Footer from "../Components/Footer"

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

          <img src={OMG} alt="OMG" className="omg" />
        </div>

        <div className="our-story1-rs">
          <img src={OurStory1Img} alt="" />
        </div>
      </div>

      <div className="about-us-our-story2">
        <div className="our-story2-ls">
        <img src={OurStory2Img} alt="" />
        </div>

        <div className="our-story2-rs">
          <h1 className="our-story2-rs-header">One week later...</h1>

          <img className="os2-top-img" src={SpeechBubble} alt="" />
          <p className="os2-top-text">
          So, I have been looking all over the place for a group of coders that we can code with and I really haven’t found much… I mean a few here and there, but not much. How about you have you found anything?
          </p>

          <img className="os2-bottom-img" src={SpeechBubble} alt="" />
          <p className="os2-bottom-text">
          Naw, Not really! I’m so disappointed!
          </p>
        </div>
      </div>

      <div className="about-us-our-story3">
        <div className="our-story3-ls">
        <img className="os3-top-img" src={SpeechBubble} alt="" />
        <p className="os3-top-text">
        Hey, what if we started our own group and make it exactly what we want!?
        </p>

        <img className="os3-bottom-img" src={SpeechBubble} alt="" />
        <p className="os3-bottom-text">
        I love it! Yes! We should do it!
        </p>

        <h1 className="os3-footer">
        And thus, &#123;projectCode&#125; Co-op was a thing!
        </h1>

        <img src={TheEnd} alt="The end" className="the-end" />
        </div>

        <div className="our-story3-rs">
          <img src={Savage} alt="" className="savage" />

          <img src={SurprisedGirl} alt="Surprised girl" className="surprised-girl" />
        </div>
      </div>

      <div className="call-to-action">
        <JoinBtnRed />
      </div>

      <div className="about-us-footer">
        <Footer />
      </div>
    </div>
  )
}

export default AboutUs