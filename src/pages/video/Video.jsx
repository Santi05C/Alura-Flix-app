import React from "react";
import "./Video.scss";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="video">
      <h1 className="title_video">Nuevo Video</h1>

      <div className="btns">
        <div className="left">
          <div className="btn1">
            <button className="save">Guardar</button>
          </div>
          <div className="btn2">
            <button className="delete">Eliminar</button>
          </div>
        </div>
        <div className="right">
          <Link to="/register">
            <button>Nueva Categoría</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
