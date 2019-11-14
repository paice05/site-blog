import React from "react";

// reactstrap
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

// components 
import { LabelAndInput } from '../'

const ModalContainer = ({ modal, closeOrOpen, title, className, children }) => {

  const closeBtn = (
    <button className="close" onClick={closeOrOpen}>
      &times;
    </button>
  );

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
        ></LabelAndInput>
        <LabelAndInput type="file" name="Image"></LabelAndInput>
        <LabelAndInput
          type="textarea"
          rows={8}
          name="Body"
          placeholder="type a body"
        ></LabelAndInput>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={closeOrOpen}>
          Cancel
        </Button>
        <Button color="primary" onClick={closeOrOpen}>
          Publish
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ModalContainer.propTypes = {};

export default ModalContainer;
