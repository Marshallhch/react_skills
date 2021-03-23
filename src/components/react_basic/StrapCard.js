import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

class StrapCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg
            height='200px'
            width='300px'
            src='https://m.younggagu.com/web/product/medium/201910/0836c6e7f1194bb5b84bc183ce303972.jpg'
            alt='Card Image'
          />
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardSubtitle>Card Subtitle</CardSubtitle>
            <CardText>Card Text Lorem Ipsum is simply dummy text.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default StrapCard;
