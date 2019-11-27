import React, { useState } from 'react';
import { Alert} from 'reactstrap';
import './Content.css';
import Card from './Card';
import Container from './Container';
import BulletinBoard from './BulletinBoard';
class Content extends React.Component {
    constructor (props) {
        super(props);
        this.state = { url: 'index', title: 'Home'}
    }
    render() {
        return(
        <div className="content-box">
            <div className="container">
            <h1 className="title">{this.state.title}</h1>
             <Alert color="primary">
                {this.state.url}
                <Container/>
                <Card/>
            </Alert>
            </div>
        </div>
            );

    }

}
export default Content;