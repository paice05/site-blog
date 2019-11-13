import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormularioNewPost from "../FormularioNewPost";
import "./style.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Nave(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  //Modal
  const { className } = props;
  const [modal, setModal] = useState(false);

  const tgl = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={tgl}>
      &times;
    </button>
  );

  return (
    <div>
      <link rel="stylesheet" href="style.css" />
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link id="link" to="/">
            Blog
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link id="link" onClick={tgl}>
                  New Post
                </Link>
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Daniel
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link id="link" to="/profile">
                    Profile
                  </Link>
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem>
                  <Link id="link" to="/login">
                    Logout
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>

      {/* Modal  */}
      <div>
        <Modal isOpen={modal} tgl={tgl} className={className}>
          <ModalHeader tgl={tgl} close={closeBtn}>
            New Post
          </ModalHeader>
          <ModalBody>
            <FormularioNewPost></FormularioNewPost>
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
      </div>
    </div>
  );
}

export default Nave;
