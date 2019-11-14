import React from "react";

// reactstrap
import { Form, Button, Input } from "reactstrap";

// components
import { Nave, LabelAndInput } from "../../Components/";

// style
import "./style.css";
import "../../Assets/css/table.css";

function MyProfile() {
  return (
    <>
      <Nave />
      <div className="div-table" style={{ width: '100%' }}>
        <div className="div-table-row">
          <div className="div-table-col">
            <p>Set a image</p>
            <Input id="file" type="file" />
          </div>
          <div className="div-table-col" style={{ padding: '0 100px' }}>
            <Form>
              <LabelAndInput
                type="email"
                name="Email"
                placeholder="type a valid email"
              />
              <LabelAndInput
                type="text"
                name="Name"
                placeholder="type your full name"
              />
              <LabelAndInput
                type="text"
                name="Username"
                placeholder="type a username"
              />
              <LabelAndInput
                type="password"
                name="Password"
                placeholder="type a password"
              />
              <LabelAndInput type="date" name="Date of birth" />
              <Button
                id="btnAlterar"
                type="submit"
                className="primary"
                color="primary"
              >
                {" "}
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
