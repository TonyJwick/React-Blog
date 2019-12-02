import React, { useState } from 'react';
import Card from './Card';
import BulletinBoard from './BulletinBoard';
import './Container.css';
import Articles from './Articles'
class Content extends React.Component {
    constructor (props) {
        super(props);
        this.state = { width: '100px', height: '100px'}
    }
    render() {
        return(
        <div>
            <h2>Container Name</h2>
        <div className= "resize row">
            <div className="col-4">
                <Articles/>
            </div>
        </div>
        <div className="resize row">

            <div className="col-4">
                <Card/>
            </div>
            <div className="col-4">
                <Card/>
            </div>
        </div>
        </div>
            );

    }

}
export default Content;