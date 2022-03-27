import React from 'react';
import './Card.css'

const Card = ({ selectedIceCream }) => {

    return (
        <div className='cardContainer2'>
            <h1>Selected Item: {selectedIceCream.length}</h1>
            <div className='itemList'>
                {
                    selectedIceCream.map(item => <li>
                        <img src={item.img} alt="" />
                        {item.name}


                    </li>)
                }
            </div>
        </div>
    );
};

export default Card;