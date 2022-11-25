import React from 'react';
import { Card } from 'react-bootstrap';
import './SpecialProduct.css';

const SpecialProduct = ({special}) => {
    const {name, img, price} =special;
    return (
        <div className='mt-4'>
             <Card>
      <Card.Img variant="top" src={img} className='image'/>
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Title>Price: ${price}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    );
};

export default SpecialProduct;