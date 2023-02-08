import React from "react";
import "../Styles/Merch.css";
import JoinBtnRed from "../Components/JoinBtnRed";

export default function Merch(props) {
  return (
    <>
      <div className="merch-container">
        <div className="merch-hero">
          <h1>Merch</h1>
          <JoinBtnRed />
        </div>
      </div>
    </>
  );
}
