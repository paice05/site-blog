import React, { useState, useEffect } from "react";

import { useSelector } from 'react-redux'

// reactstrap
import { Link } from "react-router-dom";

// services
import { login } from "../../services/Login";

import { useHistory } from "react-router-dom";

// style
import "../../Assets/css/table.css";

const style = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh"
  },
  form: { border: "1px solid", padding: "10px" }
};

function Login() {
  var history = useHistory();

  const [showPass, setShowPass] = useState(false);

  const [objValue, setObjValue] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();
    await login(history, objValue.username, objValue.password);
  };
  return (
    <div style={style.container}>
      <form onSubmit={handleSubmit} style={style.form}>
        <div className="div-table">
          {[
            {
              name: "Username",
              type: "text",
              fn: e => setObjValue({ ...objValue, username: e.target.value }),
              bole: true
            },
            {
              name: "Password",
              type: showPass ? "text" : "password",
              fn: e => setObjValue({ ...objValue, password: e.target.value }),
              bole: false
            }
          ].map(({ name, type, fn, bole },index) => (
            <div key={index}>
              <div className="div-table-row">
                <div className="div-table-col" style={{ textAlign: "right" }}>
                  {name}
                </div>
                <div className="div-table-col">
                  <input type={type} onChange={e => fn(e)} />{" "}
                  <input type="button" value="hide" hidden={bole} onClick={() => setShowPass(!showPass)}/>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="cadastro">Cadastrar-se</Link>

          <input
            type="submit"
            value="Login"
            //onClick={(e) =>{
            //(login ? (<p> {toastr.success("Success!", "Login")} </p>) : (<p> {toastr.error("Usuario ou senha invalidos!", "Login")} </p>))
            //  }
            // }
            style={{ float: "right" }}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
