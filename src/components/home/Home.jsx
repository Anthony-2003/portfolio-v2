import React from "react";
import "./Home.css";
import Me from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="owner profile" className="home__img" width="120" />
        <h1 className="home__name">Anthony Volquez Peña</h1>
        <span className="home__education">Desarrollador de Software</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Contáctame
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
