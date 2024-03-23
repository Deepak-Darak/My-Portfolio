import React from "react";
import "./about.css";
import Me from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Me} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm Deepak Darak, an Engineering graduate from NIT Patna. I'm
              passionate about leveraging technology for positive change. Let's
              collaborate and innovate!
            </p>
            <a
              href="https://drive.google.com/file/d/1T7kf2h5ttYjFMk1kxANcBRcq8oC2EGdc/view?usp=sharing"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Skills</h3>
                <span className="skills__number">
                  C++, React.js, Problem-Solving, Git{" "}
                </span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skills"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Leetcode</h3>
                <span className="skills__number">417 Problems Solved</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage leetcode"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Interests</h3>
                <span className="skills__number">
                  Development, Acting, Reading{" "}
                </span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage interest"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
