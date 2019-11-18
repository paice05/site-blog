import React from "react";

import { Link } from "react-router-dom";

import { Media } from "reactstrap";

import { Nave } from "../../Components/";

import Avatar from "../../Assets/img/perfil.png";

import "./style.css";

function NewPost() {
  return (
    <>
      <Nave></Nave>
      <div style={{
        marginLeft: "220px"
      }}>
        <button id="btnVoltar" className="btn btn-success">
          <Link id="link" to="/">
            Voltar
          </Link>
        </button>
        <Media>
          <Media left>
            <Media object src={Avatar} id="imgPerfil" />
          </Media>
          <Media
            body
            style={{
              marginTop: "48px",
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
                  Série de notas ou ponderações, por escrito ou orais, críticas
                  ou de esclarecimento, acerca de um texto, um evento, um ato
                  et
                  Série de notas ou ponderações, por escrito ou orais, críticas
                  ou de esclarecimento, acerca de um texto, um evento, um ato
                  etc.77777777777777777777 77777777777777778888888
                
                  Série de notas ou ponderações, por escrito ou orais, críticas
                  ou de esclarecimento, acerca de um texto, um evento, um ato
             
                  Série de notas ou ponderações, por escrito ou orais, críticas
                  ou de esclarecimento, acerca de um texto, um evento, um ato
                  etc.
                
                  Série de notas ou ponderações, por escrito ou orais, críticas
                  ou de esclarecimento, acerca de um texto, um evento, um ato
                  etc.77777777777777777777 77777777777777778888888
                  888888888888888888888888 88888888888888888888888888888888
              
                  Série de notas ou ponderações, por escrito ou orais, críticas
                  ou de esclarecimento, acerca de um texto, um evento, um ato
                  etc.
                  
                  Série de notas ou ponderações, por escrito ou orais, críticas
                  ou de esclarecimento, acerca de um texto, um evento, um ato
                  etc.
                  
                  Série de notas ou ponderações, por escrito ou orais, críticas
                  ou de esclarecimento, acerca de um texto, um evento, um ato
                  etc.77777777777777777777 77777777777777778888888
                  888888888888888888888888 88888888888888888888888888888888
                  
                  Série de notas ou ponderações, por escrito ou orais, críticas
                  ou de esclarecimento, acerca de um texto, um evento, um ato
                  etc.
                
                  Série de notas ou ponderações, por escrito ou orais, críticas
                  ou de esclarecimento, acerca de um texto, um evento, um ato
                  etc.
                 
                  Série de notas ou ponderações, por escrito ou orais, críticas
                  ou de esclarecimento, acerca de um texto, um evento, um ato
                  etc.77777777777777777777 77777777777777778888888
                  888888888888888888888888 88888888888888888888888888888888
                  
                  Série de notas ou ponderações, por escrito ou orais, críticas
                  ou de esclarecimento, acerca de um texto, um evento, um ato
                  etc.
                  
                  Série de notas ou ponderações, por escrito ou orais, críticas
                  ou de esclarecimento, acerca de um texto, um evento, um ato
                  etc.
                </p>
                <p
                  style={{
                    marginBottom: "30px"
                  }}
                >
                  <textarea id="commentsBox" cols="69" rows="5" />
                  <input
                    type="button"
                    style={{
                      float: "right",
                      marginRight: "8px"
                    }}
                    value="Comentar"
                  />
                </p>
                
                {/* Comentários */}
                <div id="comments">
                  <Media>
                    <Media left>
                      <Media object src={Avatar} id="imgComment" />
                      <Media heading>
                        <p
                          style={{ fontSize: "10pt", margin: "-20px 0 0 20px" }}
                        >
                          Daniel
                        </p>
                      </Media>
                    </Media>
                    <div id="commentText">
                      cometar iocometar iocomet arioc ometari ocometario
                      cometario cometar iocometar iocomet arioc ometari
                      ocometario cometario cometar iocometar iocomet arioc
                      ometari ocometario cometario cometar iocometar iocomet
                      arioc ometari ocometario cometario cometar iocometar
                      iocomet arioc ometari ocometario cometario cometar
                      iocometar iocomet arioc ometari ocometario
                      cometariocometar iocometar iocomet arioc ometari
                      ocometario cometario
                    </div>
                  </Media>
                </div>

                <div id="comments">
                  <Media>
                    <Media left>
                      <Media object src={Avatar} id="imgComment" />
                      <Media heading>
                        <p
                          style={{ fontSize: "10pt",margin: "-20px 0 0 20px"}}
                        >
                          Daniel
                        </p>
                      </Media>
                    </Media>
                    <div id="commentText">
                      cometar iocometar iocomet arioc ometari ocometario
                      cometario cometar iocometar iocomet arioc ometari
                      ocometario cometario cometar iocometar iocomet arioc
                      ometari ocometario cometario cometar iocometar iocomet
                      arioc ometari ocometario cometario cometar iocometar
                      iocomet arioc ometari ocometario cometario cometar
                      iocometar iocomet arioc ometari ocometario
                      cometariocometar iocometar iocomet arioc ometari
                      ocometario cometario
                    </div>
                  </Media>
                </div>

                <div id="comments">
                  <Media>
                    <Media left>
                      <Media object src={Avatar} id="imgComment" />
                      <Media heading>
                        <p
                          style={{ fontSize: "10pt",margin: "-20px 0 0 20px"}}
                        >
                          Daniel
                        </p>
                      </Media>
                    </Media>
                    <div id="commentText">
                      cometar iocometar iocomet arioc ometari ocometario
                      cometario cometar iocometar iocomet arioc ometari
                      ocometario cometario cometar iocometar iocomet arioc
                      ometari ocometario cometario cometar iocometar iocomet
                      arioc ometari ocometario cometario cometar iocometar
                      iocomet arioc ometari ocometario cometario cometar
                      iocometar iocomet arioc ometari ocometario
                      cometariocometar iocometar iocomet arioc ometari
                      ocometario cometario
                    </div>
                  </Media>
                </div>

              </div>
            </div>
          </Media>
        </Media>
      </div>
    </>
  );
}

export default NewPost;
