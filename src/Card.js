import React from 'react';
import github from './assets/github.png';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const card = (props) => {
    return (
      <div>
        <Card>
          <CardImg top src={github} alt="Card image cap" />
          <CardBody>
            <CardTitle>Title</CardTitle>
            <CardSubtitle>Location</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
  );
};

export default card;