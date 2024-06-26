import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">8+</h3>
          <span className="about__subtitle">Project Completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>

        <div>
          <h3 className="about__title">500+</h3>
          <span className="about__subtitle">Cup of Coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>

        <div>
          <h3 className="about__title">1300+</h3>
          <span className="about__subtitle">Connections</span>
        </div>
      </div>

      {/* <div className="about__box">
        <i className="about__icon icon-badge"></i>

        <div>
          <h3 className="about__title">35</h3>
          <span className="about__subtitle">Nominees Winner</span>
        </div>
      </div> */}
    </div>
  );
};

export default AboutBox;
