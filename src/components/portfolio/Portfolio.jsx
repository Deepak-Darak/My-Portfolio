import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>
      {/* <div className="work__filters">
        <span className="work__item">Everything</span>
        <span className="work__item">Creative</span>
        <span className="work__item">Art</span>
        <span className="work__item">Design</span>
        <span className="work__item">Branding</span>
      </div> */}

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, desc, url } = elem;

          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
              </div>
              <div className="work__mask"></div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <p className="work__desc">{desc}</p>
              <a href={url} target="_blank" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
