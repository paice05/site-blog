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
  DropdownItem
} from "reactstrap";

// style
import "./style.css";

function Nave(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
                <Link id="link">
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
    </div>
  );
}

export default Nave;
