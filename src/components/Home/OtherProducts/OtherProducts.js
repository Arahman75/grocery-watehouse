import React from 'react';
import './OtherProducts.css';
import sandwich from '../../../images/other-product/sandwich-cookies.jpg';
import pineApple from '../../../images/other-product/pineapple.jpg';
import cookieBear from '../../../images/other-product/cookie-bear.jpg';
import toast from '../../../images/other-product/toast.jpg';
import OtherProduct from '../OtherProduct/OtherProduct';

const OtherProducts = () => {
    const otherProducts = [
        {id:1, name:'SandWich Cookies', price: 150, img: sandwich},
        {id:2, name:'Pine Apple', price: 80, img: pineApple},
        {id:3, name:'Cookie Bear', price: 160, img: cookieBear},
        {id:4, name:'toast', price: 120, img: toast}
    ];
    return (
        <section className='container my-4 py-4'>
            <h2 className='other-title'>Our Other Products</h2>
            <div className='other-product'>
                {
otherProducts.map(other => <OtherProduct key={other.id} other={other}></OtherProduct>)
                }
            </div>
        </section>
    );
};

export default OtherProducts;