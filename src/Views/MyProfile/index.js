import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux'
// ducks
import { actionsNotifications } from '../../store/ducks/notifications'
// reactstrap
import { Form, Button, Input } from "reactstrap";

// components
import { Nave, LabelAndInput } from "../../Components/";

// moment js
import moment from "moment"

//toastr
import toastr from "toastr"

import { Update } from "../../services/Author/Update";
// style
import "./style.css";

import "../../Assets/css/table.css";

function MyProfile() {
  const dispacth = useDispatch()

  const [emailVal, setEmailVal] = useState();
  const [nameVal, setNameVal] = useState();
  const [usernameVal, setUsernameVal] = useState();
  const [passwordVal, setPasswordVal] = useState();
  const [ageVal, setAgeVal] = useState();

  var history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    if(Update(emailVal, nameVal, usernameVal, passwordVal, ageVal)){
      toastr.success("Updated with success", "Save",{
        progressBar: true,
        timeOut: 2000,
        onHidden: () => history.push("/")
      })
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await Update();
      setEmailVal(response.data.data.email);
      setNameVal(response.data.data.name);
      setUsernameVal(response.data.data.username);
      setPasswordVal(response.data.data.password);  
      setAgeVal(moment(response.data.data.age).add(1,'days').locale('pt-br').format('YYYY-MM-DD'));
      
    }
    fetchData();
  }, []);
  return (
    <>
      <Nave />
      <button onClick={() => dispacth(actionsNotifications.addNotification())}>
        Add notification
      </button>
      <button onClick={() => dispacth(actionsNotifications.removeNotification())}>
        remove notification
      </button>
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
                onChange={e => setEmailVal(e.target.value)}
                value={emailVal}
              />
              <LabelAndInput
                type="text"
                name="Name"
                placeholder="type your full name"
                onChange={e => setNameVal(e.target.value)}
                value={nameVal}
              />
              <LabelAndInput
                type="text"
                name="Username"
                placeholder="type a username"
                onChange={e => setUsernameVal(e.target.value)}
                value={usernameVal}
              />
              <LabelAndInput
                type="password"
                name="Password"
                placeholder="type a password"
                onChange={e => setPasswordVal(e.target.value)}
                value={passwordVal}
              />
              <LabelAndInput
                type="date"
                name="Date of birth"
                onChange={e => setAgeVal(e.target.value)}
                value={ageVal}
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
