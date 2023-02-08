import React from "react";
import "../Styles/Projects.css";
import JoinBtnRed from "../Components/JoinBtnRed";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-hero">
        <h1>Projects + Challenges</h1>

        <p>
          projectCodeCo-op team members are working tirelessly on projects to
          show the world, but don’t want anyone to see what we are capable of
          until it absolutely perfect! Check back shortly and be ready for your
          mind to be blown!
        </p>
        <JoinBtnRed />
      </div>
    </div>
  );
}

export default Projects;
