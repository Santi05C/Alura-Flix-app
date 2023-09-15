import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <a href="#">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>
      <p className="name">
        Todos los derechos reservados por &copy;Santiago Cabrera 2023
      </p>
    </div>
  );
};

export default Footer;
