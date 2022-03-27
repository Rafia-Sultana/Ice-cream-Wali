import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [iceCream, setIceCreamList] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setIceCreamList(data))
    }, [])
    return (
        <div className='shopContainer'>
            <div className="iceCreamContainer">
                <h1>Ice-Cream</h1>
            </div>
            <div className="cardContainer">
                <h2>Card Container</h2>
            </div>
        </div>
    );
};

export default Shop;