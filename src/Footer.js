import React, { useState } from 'react';
import {Alert} from 'reactstrap';
import './Footer.css';
import ImageText from './ImageText';
import django from './assets/django.png';
import reactstrap from 'reactstrap';
class Footer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
       <div className="footer">
            <div className="row">
                <div className="col-4">
                <p className="justified-center">Please Subscribe to Receive Email Alert!</p>
                <form>
                    <label>
                        Email:
                        <input type="email"/>
                    </label>
                      <input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
                </div>
                <div className="col-4">
                    <ImageText src="https://img.icons8.com/plasticine/100/000000/react.png" width="50px" height="50px" />
                    <ImageText src={django} width="50px" height="50px" />
                </div>
                <div className="col-4">
                    <p>This Website is a Personal Blog & Feel Free to Share My articles</p>
                </div>
            </div>
        </div>
            );

    }

}
export default Footer;