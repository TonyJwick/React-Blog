import React, { useState } from 'react';
import Card from './Card';
import BulletinBoard from './BulletinBoard';
import './Container.css';
class Content extends React.Component {
    constructor (props) {
        super(props);
        this.state = { width: '500px', height: '500px'}
    }
    render() {
        return(
        <div className="container">
                <Card/>
                <Card/>
        </div>
            );

    }

}
export default Content;