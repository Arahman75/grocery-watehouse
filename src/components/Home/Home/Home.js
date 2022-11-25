import React from 'react';
import Banner from '../Banner/Banner';
import OtherProducts from '../OtherProducts/OtherProducts';
import Products from '../Products/Products';
import SpecialProducts from '../SpecialProducs/SpecialProducts';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <SpecialProducts></SpecialProducts>
           <OtherProducts></OtherProducts>
        </div>
    );
};

export default Home;