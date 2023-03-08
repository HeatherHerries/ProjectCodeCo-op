import React from "react";
import "../Styles/Learn.css";
import JoinBtnRed from "../Components/JoinBtnRed";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Einstein from "../Assets/Images/Einstein.png";
import Design from "../Assets/Images/SVGImages/Explosion.svg";

// useState for both development and design Icons then use their pagelinks as the setIcon (future state).

//  use props for blue square Icons62

export default function Learn(props) {
  return (
    <>
      <div className="learn-container">
        <NavBar />
        <div className="learn-hero">
          <div>
            <h1> ProjectCodeCo - op Gives Good Brain </h1>

            <h6>
              “Self-education is, I firmly believe, the only kind of education
              there is.” – Issac Asimov
            </h6>
          </div>
          <div>
            <img src={Einstein} alt="pic of einstein" />
            <div className="learn-hero-btn">
              <JoinBtnRed />
            </div>
          </div>
        </div>{" "}
      </div>

      <div className="learn-section2">
        {" "}
        <div>
          <img src={Design} alt="Design Icon" />
          <h1>Design</h1>
        </div>
        <div>
          <img
            src={Design}
            alt="
          Design
          Icon"
          />
          <h2>Development</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
