import React from "react";
import "../Styles/Learn.css";
import JoinBtnRed from "../Components/JoinBtnRed";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import EMC2 from "../Assets/Images/SVGImages/E=MC2Graffiti.svg"
import Einstein from "../Assets/Images/Einstein.png";
import Design from "../Assets/Images/SVGImages/Explosion.svg";


export default function Learn() {
  return (
    <div className="learn-container">
      <div className="nav-bar">
        <NavBar />
      </div>

      <div className="learn-hero">
        <div className="learn-title">
          <h1>&#123;projectCode&#125;Co-op Gives Good Brain </h1>

          <img src={EMC2} alt="E=MC2 Graffiti" />

          <img src={Einstein} alt="" />

          <p className="learn-quote">“Self-education is, I firmly believe, the only kind of education there is.” – Issac Asimov</p>

          <div className="learn-button">
            <JoinBtnRed />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
