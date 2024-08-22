import React from "react";
import "./About.css";
import Image from "../../assets/me.jpg";
import Resume from "../../assets/Anthony Volquez Peña - Desarrollo De Software (1).pdf";


const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Sobre mí</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              ¡Hola! Soy Anthony Volquez Peña, y soy de Santo Domingo Este,
              República Dominicana. Estudié en el Instituto Tecnológico de las
              Américas (ITLA), donde completé mi técnico superior en Desarrollo
              de Software.
              <br />
              <br />
              Mi profundo interés por la programación comenzó a los 13 años, y
              hoy en día puedo decir que ha sido un viaje hermoso que me ha
              llevado a crecer constantemente como desarrollador. Actualmente,
              me encuentro inmerso en el aprendizaje web, persiguiendo mi firme
              objetivo de convertirme en un desarrollador web completo.
              <br />
              <br />
              Las tecnologías que domino son:
            </p>
            <ul className="about__list">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>SQL</li>
              <li>Scrum</li>
              <li>Git</li>
              <li>MongoDB</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              Descargar CV
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
