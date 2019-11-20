import React, { useState } from "react";

// reactstrap
import { Link } from "react-router-dom";

// services
import { postOrPut } from "../../services/methods";

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
    await postOrPut('/authors/login', null, { ...objValue })
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
          ].map(({ name, type, fn, bole }, index) => (
            <div className="div-table-row" key={index}>
              <div className="div-table-col" style={{ textAlign: "right" }}>
                {name}
              </div>
              <div className="div-table-col">
                <input type={type} onChange={e => fn(e)} />{" "}
                <button hidden={bole} onClick={() => setShowPass(!showPass)}>
                  ico
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="cadastro">Cadastrar-se</Link>

          <input type="submit" value="Login" style={{ float: "right" }} />
        </div>
      </form>
    </div>
  );
}

export default Login;
