import React, { useEffect, useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [category, setCategory] = useState([]);
  // console.log(category[1].cor);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/category/search"
        );

        setCategory(res.data);

        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVideos();
  }, []);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="register">
      <h1>Nuevo Categoria</h1>
      <div className="form">
        <div className="inputs">
          <input
            className="input"
            type="text"
            placeholder="Nombre de la Categoria"
          />
          <input className="input" type="text" placeholder="Link del video" />
          <input
            aria-invalid="false"
            id=":r7:"
            type="color"
            className="input_color"
            placeholder="Color"
          />

          <input
            className="input"
            type="text"
            placeholder="Código de seguridad"
          />
        </div>
      </div>

      <div className="btns">
        <div className="left">
          <div className="btn1">
            <button className="save">Guardar</button>
          </div>
          <div className="btn2">
            <button className="delete">Eliminar</button>
          </div>
        </div>
      </div>

      <table className="table">
        <tr className="table_head">
          <th>Categorías</th>
        </tr>

        {category.map((cat) => (
          <div>
            <tr>
              <td
                style={{
                  backgroundColor: isHovering ? cat.cor : "transparent",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {cat.title}
              </td>
            </tr>
          </div>
        ))}
      </table>
    </div>
  );
};

export default Register;
