import React from "react";
import { Nave, Perfil } from "../../Components/";
import "./style.css";

function NewPost() {
  return (
    <div>
      <Nave></Nave>
      <div>
        <div>
          <button id="btnVoltar" className="btn btn-success">
            Voltar
          </button>
          <Perfil></Perfil>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
