import React from "react";
import "../Styles/Projects.css";
import JoinBtnRed from "../Components/JoinBtnRed";
import ProjectsHero from "../Assets/Images/SVGImages/TeamMembers.svg";
import NavBar from "../Components/NavBar";

export default function Projects() {
  return (
    <>
      <div className="projects-container">
        <div className="projects-hero">
          <NavBar />
          <h1>Projects + Challenges</h1>

          <div className="home-hero-nav"></div>
          <img
            src={ProjectsHero}
            alt="Man & Woman studying"
            className="projects-hero-Image"
          />

          <p className="projects-hero-text">
            projectCodeCo-op team members are working tirelessly on projects to
            show the world, but don’t want anyone to see what we are capable of
            until it absolutely perfect! Check back shortly and be ready for
            your mind to be blown!
          </p>
          <JoinBtnRed className="projects-hero-button" />
        </div>
      </div>
    </>
  );
}
