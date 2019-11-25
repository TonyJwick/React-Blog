import React, { useState, Fragment } from 'react';
import './ProfileBox.css';
import profile from './profile.jpg';
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
        this.state = {isLoggedIn: false }
    }

    handleLoginClick() {
        this.setState(isLoggedIn => ({
            isLoggedIn: !this.state.isLoggedIn}));
   }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const profileText = (   <div className="col-4">
                                <p className="padded">email</p>
                                </div>
                            );

        return(
             isLoggedIn ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Welcome, {props.email}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    My Page
                  </DropdownItem>
                  <DropdownItem divider />
                    <img src={profile} />
                    {profileText}
                </DropdownMenu>
              < /UncontrolledDropdown>
               ) : (

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Welcome, Guest!
                </DropdownToggle>
                <DropdownMenu right>
                    <form onSubmit={this.handleLogginClick}>
                      <label>
                            Email:
                        <input type="text" name="email" />
                            Password:
                       <input type="password" name="password"/>
                      </label>


                      <input type="submit" value="Submit" className="btn btn-primary" onClick={props.onClick}/>
                    </form>
                </DropdownMenu>
              < /UncontrolledDropdown>
        )
            );
    }
}
export default ProfileBox;