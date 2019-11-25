import React, { useState } from 'react';
import './Navigation.css';
import ProfileBox from './ProfileBox';
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
} from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
      <div className="fit fixed-top">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">B-Blog</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="nav-justified" navbar>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Projects
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Family Gallery
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Nutrigym
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Git</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Linked-In</NavLink>
              </NavItem>
              <ProfileBox/>
              </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
}

export default Navigation;