import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Media } from "reactstrap";

import { Nave } from "../../Components/";

import { showPostsComments } from "../../services/Posts/showPostsComments";

import Avatar from "../../Assets/img/perfil.png";

import "./style.css";

function NewPost(props) {
  const [nameVal, setNameVal] = useState();
  const [ageVal, setAgeVal] = useState();
  const [emailVal, setEmailVal] = useState();
  const [titleVal, setTitleVal] = useState();
  const [bodyVal, setBodyVal] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await showPostsComments(props.match.params.id);
      setNameVal(response.data.data.author.name);
      setAgeVal(response.data.data.author.age);
      setEmailVal(response.data.data.author.email);
      setTitleVal(response.data.data.title);
      setBodyVal(response.data.data.body);
    }
    fetchData();
    console.log("esse é meu id: " + props.match.params.id);
  }, [props.match.params.id]);

  return (
    <>
      <Nave></Nave>
      <div
        style={{
          marginLeft: "220px"
        }}
      >
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
            <Media heading>{nameVal}</Media>
            {ageVal}
            <br />
            {emailVal}
            <div id="perfilP">
              <Media heading id="titlePerfil">
                {titleVal}
              </Media>
              <br />
              <div id="corpo">
                <p id="pBody">{bodyVal}</p>
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
              </div>
            </div>
          </Media>
        </Media>
      </div>
    </>
  );
}

export default NewPost;
