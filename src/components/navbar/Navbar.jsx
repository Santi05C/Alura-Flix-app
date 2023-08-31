import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src="/src/assets/img/LogoMain.png" alt="Logo" />
      </div>
      <div className="right">
        <button>Nuevo Video</button>
      </div>
    </div>
  );
};

export default Navbar;
