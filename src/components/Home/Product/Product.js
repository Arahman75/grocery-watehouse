import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const {name, img, price, description} = product;
    return (
        <div  className='product-details'>
            <img src={img} alt="" />
           <div className='item-info'>
           <h3>Name: {name}</h3>
            <h4>Price: ${price}</h4>
            <h5>{description}</h5>
            <button>Manage Product</button>
           </div>
        </div>
    );
};

export default Product;