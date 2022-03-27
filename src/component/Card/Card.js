import React from 'react';
import './Card.css'

const Card = ({ selectedIceCream, clear }) => {

    return (
        <div className='cardContainer2'>
            <h1>Selected Item: {selectedIceCream.length}</h1>
            <div className='itemList'>
                {
                    selectedIceCream.map(item => <div className='itemStyle' key={item.id}>
                        <img src={item.img} alt="" />
                        {item.name}
                    </div>)
                }
            </div>
            <button onClick={clear}>Clear All</button>
            <button>Suggest Randomly</button>
        </div>
    );
};

export default Card;