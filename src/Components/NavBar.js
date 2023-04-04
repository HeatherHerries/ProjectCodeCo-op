import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import NavbarImg from "../Assets/Images/SVGImages/PCCLogoBlueTransparent.svg"

export default function NavBar() {
   return (
    <div className="navbar-container">
      <div className="nb-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>

          <li>
            <Link to="/Projects">Projects</Link>
          </li>

          <div>
            <img className="nb-image"src={NavbarImg} alt="" />
          </div>

          <li>
            <Link to="/Learn">Learn</Link>
          </li>

          <li>
            <Link to="/Merch">Merch</Link>
          </li>

          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>

        </ul>
      </div>
    </div>
  );
}
