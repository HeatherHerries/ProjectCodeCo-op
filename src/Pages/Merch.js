import React from "react";
import "../Styles/Merch.css";
import JoinBtnRed from "../Components/JoinBtnRed";
import MerchImage from "../Assets/Images/MerchImage.png";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function Merch(props) {
  return (
    <>
      <div className="merch-container">
        <NavBar />
        <div className="merch-hero">
          <h1>Merch</h1>
          <div className="merch-hero-text">
            <p>
              Shop "projectCodeCo-op" merch right in this very spot. Get ready
              to show the world where you build such mind blowing projects!
            </p>
            <JoinBtnRed />
          </div>

          <img
            src={MerchImage}
            alt="Merch Images icon"
            className="merch-hero-image"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
