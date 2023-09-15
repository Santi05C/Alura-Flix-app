import axios from "axios";
import "./Register.scss";
import { useState } from "react";

const Register = ({ categorys }) => {
  const [title, setTitle] = useState();
  const [urlCategory, setUrlCategory] = useState();
  const [cor, setCor] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://appflix.onrender.com/api/category/addcategory",
        {
          title,
          urlCategory,
          cor,
          password,
        }
      );
      alert("¡Categoría creada correctamente!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://appflix.onrender.com/api/category/${id}`);
      alert("Categoría eliminada correctamente");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <h1 className="title_categoria">Nuevo Categoria</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            className="input"
            type="text"
            placeholder="Nombre de la Categoria"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Link del video"
            onChange={(e) => setUrlCategory(e.target.value)}
          />
          <label className="label" htmlFor="color">
            <input
              aria-invalid="false"
              id="color"
              type="color"
              className="input_color"
              placeholder="Color"
              onChange={(e) => setCor(e.target.value)}
            />
            <span className="span_color">Color</span>
          </label>

          <input
            className="input"
            type="text"
            placeholder="Código de seguridad"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btns">
          <div className="left">
            <div className="btn1">
              <button className="save">Guardar</button>
            </div>
          </div>
        </div>
      </form>

      <table className="table">
        <tr className="table_head">
          <th>Categorías</th>
        </tr>

        {categorys.map((cat) => (
          <>
            <tr className="container_table">
              <td
                className="category_row"
                style={{
                  color: cat.cor,
                }}
              >
                <p className="title_table">{cat.title}</p>
                <span className="delete" onClick={() => handleDelete(cat._id)}>
                  <i class="fa-solid fa-trash-can"></i>
                </span>
              </td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
};

export default Register;
