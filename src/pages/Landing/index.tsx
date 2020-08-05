import React from "react";

import logoImg from "../../assets/images/logo.svg";
import heroImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import classesIcon from "../../assets/images/icons/give-classes.svg";

import purpleIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="logo" />
        </div>
        <img src={heroImg} alt="Plataforma de estudos" className="hero-image" />
        <div className="buttons-container">
          <a href="/" className="study">
            <img src={studyIcon} alt="Estude" />
            Estudar
          </a>
          <a href="/" className="classes">
            <img src={classesIcon} alt="Dê Aulas" />
            Dar Aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas.
          <img src={purpleIcon} alt="Yeah!" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
