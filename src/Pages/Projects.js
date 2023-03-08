import React from "react";
import "../Styles/Projects.css";
import JoinBtnBlue from "../Components/JoinBtnBlue";
import ProjectsHero from "../Assets/Images/SVGImages/TeamMembers.svg";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function Projects() {
  return (
    <>
      <div className="projects-container">
        <NavBar />
        <div className="projects-hero">
          <h1>Projects + Challenges</h1>
          <img
            src={ProjectsHero}
            alt="Man & Woman studying"
            className="projects-hero-Image"
          />
          <div className="projects-hero-content">
            <p>
              projectCodeCo-op team members are working tirelessly on projects
              to show the world, but don’t want anyone to see what we are
              capable of until it absolutely perfect! Check back shortly and be
              ready for your mind to be blown!
            </p>
            <div className="projects-hero-btn">
              <JoinBtnBlue />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
