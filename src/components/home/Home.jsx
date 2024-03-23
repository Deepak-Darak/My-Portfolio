import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <div>
      <Shapes />
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <h1 className="home__name">Deepak Darak</h1>
          <span className="home__education">I'm a curious developer</span>
          <HeaderSocials />
          <a href="#contact" className="btn">
            Hire Me
          </a>
          <ScrollDown />
        </div>
      </section>
    </div>
  );
};

export default Home;
