import React from "react";

import { Media } from 'reactstrap'

import { Nave } from "../../Components/";

import Avatar from '../../Assets/img/perfil.png'

import "./style.css";

function NewPost() {
  return (
    <>
      <Nave></Nave>
        <div>
          <button id="btnVoltar" className="btn btn-success">
            Voltar
          </button>
          <Media>
        <Media left>
          <Media object src={Avatar} id="imgPerfil" />
        </Media>
        <Media
          body
          style={{
            marginTop: "18px",
            padding: "10px"
          }}
        >
          <Media heading>Daniel Barbosa de Lima</Media>
          15:26 11/11/2019
          <div id="perfilP">
            <Media heading id="titlePerfil">
              Titulo - Significado da palavra "Comentário"
            </Media>
            <br />
            <div id="corpo">
              <p id="pBody">
                Série de notas ou ponderações, por escrito ou orais, críticas ou
                de esclarecimento, acerca de um texto, um evento, um ato etc.
                <br />
                Série de notas ou ponderações, por escrito ou orais, críticas ou
                de esclarecimento, acerca de um texto, um evento, um ato
                etc.7777777777777777777777777777777777778888888
                88888888888888888888888888888888888888888888888888888888
                <br />
                Série de notas ou ponderações, por escrito ou orais, críticas ou
                de esclarecimento, acerca de um texto, um evento, um ato etc.
                <br />
                Série de notas ou ponderações, por escrito ou orais, críticas ou
                de esclarecimento, acerca de um texto, um evento, um ato etc.
              </p>
              <textarea id="" cols="69" rows="5"></textarea>
              <input
                type="button"
                style={{
                  float: "right"
                }}
                value="Comentar"
              />
              <br />
              <br />
              <hr />
              <div id="photoProfileName">
                <Media>
                  <Media left>
                    <Media object src={Avatar} id="imgComment" />
                    <Media heading>
                      <p style={{ fontSize: "10pt" }}>Daniel</p>
                    </Media>
                  </Media>
                </Media>{" "}
                cometariocometariocometariocometariocometariocometario
              </div>
              15:26 11/11/2019
            </div>
          </div>
        </Media>
      </Media>
        </div>
    </>
  );
}

export default NewPost;
