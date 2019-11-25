import React, { useState, Fragment } from 'react';
import './ProfileBox.css';
import {Image} from 'react-native';
import { Button, Badge,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class ProfileBox extends React.Component {
    constructor (props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.state = {isLoggedIn: false}
    }

    handleLoginClick() {
            this.setState(isLoggedIn => ({
                isLoggedIn: !this.state.isLoggedIn}));
     }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if(isLoggedIn) {
            return(
                    <Fragment>
                        <div className="row">
                        <NavItem className="col-4">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Welcome, xhslrkd!
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    My Page
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
         <Image source={require('../profile.png')} style={{width:100,height: 150}}/>
                   Notification <Badge color="primary">3</Badge>
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>
                        </NavItem>
                        </div>
                    </Fragment>
                );
        } else {
            return(
                    <Fragment>
                        <div className="row">
                        <NavItem className="col-4">
                            <Button className="btn btn-warning" onClick={this.handleLoginClick}>Login</Button>
                        </NavItem>
                        </div>
                    </Fragment>
                );
        }
    } 
}
export default ProfileBox;