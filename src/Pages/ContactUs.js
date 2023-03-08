import React from "react";
import "../Styles/ContactUs.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

// Make an array with the 3 images/texts an Map thru them
export default function ContactUs(props) {
  return (
    <>
      <div className="contactUs-container">
        <NavBar />
        <div className="contactUs-hero">
          <div>Hit Us Up</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
