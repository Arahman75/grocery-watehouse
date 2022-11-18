import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {itemId} = useParams();
    const [service, setService] = useState({})
   console.log(itemId);

   useEffect(()=>{
        const url =`products.json/inventory/${itemId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[]);
    
    return (
        <div>
            <h2>This is inventory:{itemId}</h2>
          
        </div>
    );
};

export default Inventory;