import React, { useState, useEffect } from "react";

// reactstrap
import { Form, Button, Input } from "reactstrap";

// components
import { Nave, LabelAndInput } from "../../Components/";

//
import { Update } from "../../services/Author/Update";
// style
import "./style.css";
import "../../Assets/css/table.css";

function MyProfile() {
  const [emailVal, setEmailVal] = useState();
  const [nameVal, setNameVal] = useState();
  const [usernameVal, setUsernameVal] = useState();
  const [passwordVal, setPasswordVal] = useState();
  const [ageVal, setAgeVal] = useState();

  function handleSubmit(e){
    e.preventDefault();
    Update(emailVal, nameVal, usernameVal, passwordVal, ageVal);
  }

  function useEffect(){
    
  }
  return (
    <>
      <Nave />
      <div className="div-table" style={{ width: "100%" }}>
        <div className="div-table-row">
          <div className="div-table-col">
            <p>Set a image</p>
            <Input id="file" type="file" />
          </div>
          <div className="div-table-col" style={{ padding: "0 100px" }}>
            <Form>
              <LabelAndInput
                type="email"
                name="Email"
                placeholder="type a valid email"
                onChange={(e) => setEmailVal(e.target.value)}
              />
              <LabelAndInput
                type="text"
                name="Name"
                placeholder="type your full name"
                onChange={(e) => setNameVal(e.target.value)}
              />
              <LabelAndInput
                type="text"
                name="Username"
                placeholder="type a username"
                onChange={e => setUsernameVal(e.target.value)}
              />
              <LabelAndInput
                type="password"
                name="Password"
                placeholder="type a password"
                onChange={(e) => setPasswordVal(e.target.value)}
              />
              <LabelAndInput
                type="date"
                name="Date of birth"
                onChange={e => setAgeVal(e.target.value)}
              />
              <Button
                id="btnAlterar"
                type="submit"
                className="primary"
                color="primary"
                onClick={handleSubmit}
              >
                Save
              </Button>
       
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
