import React, { useState } from "react";

import { Link } from "react-router-dom";

// reactstrap
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
  DropdownItem,
  Button
} from "reactstrap";

import Modal from "../Modal";

// style
import "./style.css";

function Nave({ children }) {
  console.log(children)
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false)

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
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
                <Button onClick={() => setOpenModal(!openModal)}> New Post </Button>
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Daniel
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link id="link" className="drop" to="/profile">
                    Profile
                  </Link>
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem>
                  <Link id="link" className="drop" to="/login">
                    Logout
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <Modal title='Posts' closeOrOpen={() => setOpenModal(!openModal)} modal={openModal}> {children} </Modal>
    </div>
  );
}

export default Nave;
