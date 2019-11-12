import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Cadastro() {
  const [objValue, setObjValue] = useState({});

  // TODO: Vou otim
  const handleSubmit = e => {
    e.preventDefault();
    console.log(objValue);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ border: "1px solid", padding: "10px" }}
      >
        <div className="div-table">
          {[
            {
              name: "Name",
              type: "text",
              fn: e => setObjValue({ ...objValue, name: e.target.value }),
              placeholder: "write a name"
            },
            {
              name: "Username",
              type: "text",
              fn: e => setObjValue({ ...objValue, username: e.target.value }),
              placeholder: "write a username"
            },
            {
              name: "E-mail",
              type: "email",
              fn: e => setObjValue({ ...objValue, email: e.target.value }),
              placeholder: "write a e-mail"
            },
            {
              name: "Password",
              type: "password",
              fn: e => setObjValue({ ...objValue, password: e.target.value }),
              placeholder: "write a password"
            },
            {
              name: "Age",
              type: "date",
              fn: e => setObjValue({ ...objValue, date: e.target.value }),
              placeholder: null
            }
          ].map(({ name, type, fn, placeholder }) => (
            <div className="div-table-row">
              <div className="div-table-col" style={{ textAlign: "right" }}>
                <label htmlFor="age">{name} </label>
              </div>

              <div className="div-table-col">
                <input
                  type={type}
                  onChange={e => fn(e)}
                  placeholder={placeholder && placeholder}
                />
              </div>
            </div>
          ))}
        </div>

        <div style={{ float: "left" }}>
          <Link to="login">
            <input type="button" value="Voltar" />
          </Link>
        </div>
        <div style={{ float: "right" }}>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
