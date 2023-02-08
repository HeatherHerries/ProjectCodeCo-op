import React from "react";
import "../Styles/Learn.css";
import JoinBtnRed from "../Components/JoinBtnRed";

// useState for both development and design Icons then use their pagelinks as the setIcon (future state).

export default function Learn(props) {
  return (
    <>
      <div className="learn-container">
        <div className="learn-hero">
          <h1>Learn</h1>
          <JoinBtnRed />
          <div className="learn-section2">
            {" "}
            <h1>Design</h1>
            <h1>Development</h1>
          </div>
        </div>
      </div>
    </>
  );
}
