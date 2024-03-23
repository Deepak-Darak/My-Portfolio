import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/deepak-darak/"
        className="home__socials-link"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>

      {/* <a
        href="mailto:deepakdarak96@gmail.com"
        className="home__socials-link"
        target="_blank"
      >
        <i className="fa-regular fa-message"></i>
      </a> */}

      <a
        href="https://github.com/Deepak-Darak"
        className="home__socials-link"
        target="_blank"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        href="https://leetcode.com/deepak-darak/"
        className="home__socials-link"
        target="_blank"
      >
        <i className="fa-solid fa-laptop-code"></i>
      </a>

      <a
        href="https://www.instagram.com/deepakmaheswari1309/"
        className="home__socials-link"
        target="_blank"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
