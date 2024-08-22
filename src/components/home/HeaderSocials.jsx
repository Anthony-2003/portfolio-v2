import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/Anthony-2003"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/anthony-volquez-peña-9106b9197/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default HeaderSocials;
