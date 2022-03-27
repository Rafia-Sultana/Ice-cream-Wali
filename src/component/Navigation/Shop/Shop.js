import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import Icecream from '../../Icecream/Icecream';
import './Shop.css'

const Shop = () => {
    const [iceCream, setIceCreamList] = useState([]);
    const [selectedIceCream, setSelectedIceCream] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setIceCreamList(data))
    }, [])


    const addedHandler = (iceCream) => {
        let selected = [...selectedIceCream, iceCream];
        setSelectedIceCream(selected);
    }
    const clear = () => {
        let clearItem = [];
        setSelectedIceCream(clearItem);
    }


    return (
        <div className='shopContainer'>
            <div className="iceCreamContainer">
                {
                    iceCream.map(iceCream => <Icecream
                        iceCream={iceCream}
                        addedHandler={addedHandler}
                        key={iceCream.id}
                    ></Icecream>)
                }
            </div>
            <div className="cardContainer">
                <Card
                    clear={clear}
                    selectedIceCream={selectedIceCream}>

                </Card>
            </div>
        </div>
    );
};

export default Shop;