import React from 'react';
import family from './assets/family.jpg';
import symbol from './assets/location-pin.png';
import ImageText from './ImageText';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const card = (props) => {
    return (
        <Card>
          <CardImg top src={family} alt="Card image cap"/>
          <CardBody>
            <CardTitle>Family Trip</CardTitle>
            <CardSubtitle><ImageText src={symbol} width="15px" height="15px" />Malibu</CardSubtitle>
            <CardText>2019/11/25 - 2019/11/27</CardText>
            <CardText>Family Trip to Malibu</CardText>
            <Button className="btn btn-warning">Explore</Button>
          </CardBody>
        </Card>
  );
};

export default card;