import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {name, id, img, price, description} = product;

const navigate = useNavigate();

    const handleUpdate=(id)=>{
       navigate(`/inventory/${id}`)
    }
    return (
        <div  className='product-details'>
            <img src={img} alt="" />
           <div className='item-info'>
           <h3>Name: {name}</h3>
            <h4>Price: ${price}</h4>
            <h5>{description}</h5>
            {/* <Link to={'/inventory'}><button onClick={()=>handleUpdate(id)}>Manage Product</button></Link> */}
            <button onClick={()=> handleUpdate(id)}>Update</button>
           </div>
        </div>
    );
};

export default Product;