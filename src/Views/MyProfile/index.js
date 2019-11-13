import React from "react";
import { Button,Form,Input } from "reactstrap";
import { LabelAndInput, Nave } from "../../Components/";
import "./style.css";

function MyProfile() {
  return (
    <div>
      
      <Nave />

      <p>My Profile</p>
      <div>
        <Form >
          <div id="formulario">
            <LabelAndInput type="email" name="Email" placeholder="type a valid email" />
            <LabelAndInput type="text" name="Name" placeholder="type your full name" />
            <LabelAndInput type="text" name="Username" placeholder="type a username" />
            <LabelAndInput type="password" name="Password" placeholder="type a password" />
            <LabelAndInput type="date" name="Date of birth" />
            <Button id="btnAlterar" type="submit" className="primary" color="primary"> Save</Button>
            </div>
            <p>Set a image</p>
            <Input id="file" type="file"/>
          
        </Form>
        </div>
    </div>
  );
}

export default MyProfile;
