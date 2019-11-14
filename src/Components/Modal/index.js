import React from "react";

// reactstrap
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const ModalContainer = ({ modal, tgl, className }) => {

  const closeBtn = (
    <button className="close" onClick={tgl}>
      &times;
    </button>
  );

  return (
    <Modal isOpen={modal} tgl={tgl} className={className}>
          <ModalHeader tgl={tgl} close={closeBtn}>
            New Post
          </ModalHeader>
          <ModalBody>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={tgl}>
              Cancel
            </Button>
            <Button color="primary" onClick={tgl}>
              Publish
            </Button>
          </ModalFooter>
        </Modal> 
  );
};

ModalContainer.propTypes = {};

export default ModalContainer;