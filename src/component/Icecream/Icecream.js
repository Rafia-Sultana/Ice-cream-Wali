import React from 'react';
import './Icecream.css'

const Icecream = ({ iceCream, addedHandler }) => {
    return (
        <div className='iceCard'>
            <img src={iceCream.img} alt="" />
            <div className='iceDetails'>
                <p className='iceName'>Name:{iceCream.name}</p>
                <p>Price:{iceCream.price}</p>
            </div>
            <button className='iceBtn' onClick={() => addedHandler(iceCream)}>Add to Cart</button>


        </div>

    );
};

export default Icecream;