import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='product-container container'>
            <h2 className='my-4 text-center product-title'>Show all product : {products.length}</h2>
            <div className='all-product'>
                {
                    products.map(product => <Product 
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;