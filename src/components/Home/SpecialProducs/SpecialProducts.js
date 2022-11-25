import React from 'react';
import cacke from '../../../images/special-products/cacke.jpg';
import chocolate from '../../../images/special-products/chocolate.jpg';
import headoil from '../../../images/special-products/headoil.jpg';
import messegeoil from '../../../images/special-products/messegeoil.jpg';
import SpecialProduct from '../SpecialProduct/SpecialProduct';
import './SpecialProducts.css';

const SpecialProducts = () => {
    const specialProducts =[
{
    id:1, name:'Cacke', price:'50', description:'Are you buying this product?', img: cacke
},
{
    id:2, name:'Chocolate', price:'100', description:'Are you buying this product?', img: chocolate
},
{
    id:3, name:'Head Oil', price:'250', description:'Are you buying this product?', img: headoil
},
{
    id:4, name:'Messege Oil', price:'300', description:'Are you buying this product?', img: messegeoil
}

    ];
    return (
        <section className='container my-6 py-4'>
            <h2 className='special-title'>Our Special Products</h2>
            <div className='special-products'>
                {
                    specialProducts.map(special => <SpecialProduct key={special.id} special={special}></SpecialProduct>)
                }
            </div>
        </section>
    );
};

export default SpecialProducts;