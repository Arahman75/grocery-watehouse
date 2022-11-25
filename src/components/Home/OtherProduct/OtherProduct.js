import React from 'react';
import { Card } from 'react-bootstrap';
import './OtherProduct.css';

const OtherProduct = ({other}) => {
    const {name, price, img} = other;
    return (
        <section className='mt-4'>
  <Card>
      <Card.Img variant="top" src={img} className='other-img'/>
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Title>Price: ${price}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </section>
    );
};

export default OtherProduct;