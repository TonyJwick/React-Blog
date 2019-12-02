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
        <div className="content-box row">
            <h1 className="title">{this.state.title}</h1>
            <div className="container colunm-4">
                <Container/>
            </div>
        </div>
            );

    }

}
export default Content;