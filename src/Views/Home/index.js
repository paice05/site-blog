import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";


// reactstrap
import { Media } from "reactstrap";

// components
import { Nave } from "../../Components";

// assets
import Avatar from "../../Assets/img/perfil.png";
import Floresta from "../../Assets/img/floresta.jpg";

//import author dados do  Axios
import { showRecentsPosts } from "../../services/Posts/showRecentsPosts";

//import moment
import moment from "moment"
// style
import "./style.css";

function Home() {
  const [dados, setDados] = useState();

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await showRecentsPosts();
  
      setDados(response.data.data)
    }
    fetchData();
  }, []);


  if (!dados) {
   return(
    <div></div>
   )
  }

  return (
    <>
      <Nave></Nave>

      {dados.map(valorAtual => {
        return (
          <div key={valorAtual.id}> 
            <div id="main">
              <Media>
                <Media left>
                  <Media
                    id="img"
                    object
                    src={Avatar}
                    alt="Generic placeholder image"
                  />
                  <div>
                    <p className="dadosPerfil">{valorAtual.author.name}</p>
                    <p className="dadosPerfil age">Nasceu { moment(valorAtual.author.age).format('YYYY')}</p>
                    <p className="dadosPerfil qtdPosts">58 posts</p>
                  </div>
                </Media>

                <Media body id="texto">
                  <Media heading>{valorAtual.title}</Media>
                  {valorAtual.body}
                  <button className="btn btn-success" id="btnRM">
                    <Link to={`/post/${valorAtual.id}`} id="link">
                      Read more
                    </Link>
                  </button>
                </Media>
              </Media>
              <div>
                <img src={Floresta} id="imagem" alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Home;
