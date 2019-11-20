import React, { useState} from "react";

// reactstrap
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

// components
import { LabelAndInput } from "../";

import { store } from "../../services/Posts/storePost";
const ModalContainer = ({ modal, closeOrOpen, title, className, children }) => {
  const closeBtn = (
    <button className="close" onClick={closeOrOpen}>
      &times;
    </button>
  );

  const [bodyVal, setBodyVal] = useState();
  const [titleVal, setTitleVal] = useState();
  const author_id = 3;


  function handleSubmit(){
   store(author_id, titleVal, bodyVal);
   closeOrOpen();
  }
  //console.log(data);
  return (
    
    <Modal isOpen={modal} tgl={closeOrOpen} className={className}>
      <ModalHeader tgl={closeOrOpen} close={closeBtn}>
        {title}
      </ModalHeader>
      <ModalBody>
        <LabelAndInput
          type="text"
          name="Title"
          placeholder="type a title"
          onChange={(e)=>setTitleVal(e.target.value )}
        ></LabelAndInput>
        <LabelAndInput type="file" name="Image"></LabelAndInput>
        <LabelAndInput
          type="textarea"
          rows={8}
          name="Body"
          placeholder="type a body"
          onChange={(e)=>setBodyVal(e.target.value )}
        ></LabelAndInput>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={closeOrOpen}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Publish
        </Button >
      
      </ModalFooter>
    </Modal>
  );
};

ModalContainer.propTypes = {};

export default ModalContainer;
