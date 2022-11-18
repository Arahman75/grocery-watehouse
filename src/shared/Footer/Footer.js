import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <section className='search-box'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h3 className='text-center'>Newsletter Signup</h3>
                        <input className='search-field mt-2' type="text" placeholder='Enter Your Email' />
                        <input className='submit-btn mt-2' type="submit" value="Subscribe" />
                    </div>
                    <div className='col-md-4'>
                        <h3 className='text-center'>Get in Touch With Us</h3>
                    </div>
                    <div className='col-md-4'>
                        <h3 className='text-center'>Download App</h3>
                    </div>

                </div>
            </section>
            <section className='footer-second'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h4>Help</h4>
                        <p>How to Make an Order?</p>
                        <p>Delivery Terms</p>
                        <p>My Orders</p>
                        <p>Returns</p>
                        <p>About Us</p>
                    </div>
                    <div className='col-md-3'>
                        <h4>Quick Links</h4>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>YouTube</p>
                        <p>Pinterest</p>
                        <p>Tiwtter</p>
                    </div>
                    <div className='col-md-3'>
                        <h4>Shop</h4>
                        <p>Products</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>My Account</p>
                        <p>Contacts</p>
                    </div>
                    <div className='col-md-3'>
                        <h4>Categories</h4>
                        <p>Products</p>
                        <p>Potato</p>
                        <p>Sugar</p>
                        <p>Lentil</p>
                        <p>Gingers</p>
                    </div>
<p className='text-center mt-4'>All Context Reserved By 2022 Abdur Rahman</p>
                </div>

            </section>
        </div>
    );
};

export default Footer;