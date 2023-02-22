import React from "react";
import "../Styles/Merch.css";
import JoinBtnRed from "../Components/JoinBtnRed";
import MerchImage from "../Assets/Images/MerchImage.png";
import NavBar from "../Components/NavBar";

export default function Merch(props) {
  return (
    <>
      <div className="merch-container">
        <div className="merch-hero">
          <NavBar />
          <h1>Merch</h1>
          <p>
            Shop "projectCodeCo-op" merch right in this very spot. Get ready to
            show the world where you build such mind blowing projects!
          </p>

          <img
            src={MerchImage}
            alt="Merch Images icon"
            className="merch-hero-image"
          />
          <JoinBtnRed />
        </div>
      </div>
    </>
  );
}
