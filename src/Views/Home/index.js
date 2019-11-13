import { Nave } from "../../Components";
import React from "react";
import { Media } from "reactstrap";
import Avatar from "./perfil.png";
function Home() {
  return (
    <>
      <Nave></Nave>

      <hr />

      <div
        style={{
          height: "300px",
          display: "flex",
          alignItems: "center",
          margin: "0 200px 0 200px"
        }}
      >
        <Media>
          <Media left href="#">
            <Media
              object
              src={Avatar}
              style={{ width: "100px" }}
              alt="Generic placeholder image"
            />
          </Media>
          <Media body>
            <Media heading>Media heading</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <div>
          <img src={Avatar} width="300px" alt="" srcset="" />
        </div>
      </div>
      <hr />

      <div
        style={{
          height: "auto",
          display: "flex",
          alignItems: "center",
          margin: "0 200px 0 200px"
        }}
      >
        <Media>
          <Media left href="#">
            <Media
              object
              src={Avatar}
              style={{ width: "100px" }}
              alt="Generic placeholder image"
            />
          </Media>
          <Media body style={{ maxwidth: "15ch", overflow: "hidden",
  textoverflow: "ellipsis",whitespace: "nowrap" }}>
            <Media heading>Media heading</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <div>
          <img src={Avatar} width="300px" alt="" srcset="" />
        </div>
      </div>
    </>
  );
}

export default Home;
