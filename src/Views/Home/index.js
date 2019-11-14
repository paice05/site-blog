import React from "react";

import { Link } from 'react-router-dom'

// reactstrap
import { Media } from 'reactstrap'

// components
import { Nave } from "../../Components";

// assets
import Avatar from '../../Assets/img/perfil.png';
import Floresta from '../../Assets/img/floresta.jpg'

// style
import './style.css'

function Home() {
  return (
    <>
      <Nave></Nave>
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
              <p className="dadosPerfil">Daniel</p>
              <p className="dadosPerfil age">21 anos</p>
              <p className="dadosPerfil qtdPosts">18 posts</p>
            </div>
          </Media>

          <Media body id="texto">
            <Media heading>Media heading</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            overflow: hidden overflow: hidden overflow: hidden overflow: hidden
            overflow: hidden overflow: hidden overflow: hidden overflow: hidden
            overflow: hidden overflow: hidden overflow: hidden overflow: hidden
            overflow: hidden overflow: hidden overflow: hidden overflow: hidden
            overflow: hidden overflow: hidden overflow: hidden overflow: hidden
            overflow: hidden overflow: hidden v
            <button className="btn btn-success" id="btnRM" >
            <Link to="/post" style={{textDecoration: "none"}}>Read more</Link>
            </button>
          </Media>
        </Media>
        <div>
          <img src={Floresta} id="imagem" alt="" />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
