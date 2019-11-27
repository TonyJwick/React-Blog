import React, { useState } from 'react';
import './Navigation.css';
import ProfileBox from './ProfileBox';
import ImageText from './ImageText';
import git from './assets/github.png';
import resume from './assets/Address.png';
import linkedin from './assets/linkedin.png';
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
                <NavLink href="https://drive.google.com/file/d/111dpsyuQoR6EhFLdV6FvlVa_miK3rGxn/view?usp=sharing" target="_blank"><ImageText src={resume} width="30px" height="30px" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/TonyJwick?tab=repositories" target="_blank"><ImageText src={git} width="30px" height="30px" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/tonydongwookang/" target="_blank"><ImageText src={linkedin} width="30px" height="30px" /></NavLink>
              </NavItem>
              <ProfileBox email="dongkang359@gmail.com"/>
              </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
}

export default Navigation;