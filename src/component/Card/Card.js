import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import './Card.css'

const Card = ({ selectedIceCream, clear }) => {
    const [randomItem, setRandomItem] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const random = (selectedIceCream) => {
        let random = selectedIceCream[Math.floor((Math.random() * selectedIceCream.length))]
        setRandomItem(random);
        setShow(true);
    }
    return (
        <div className='cardContainer2'>
            <h3>Selected Item: {selectedIceCream.length}</h3>
            <div className='itemList'>
                {
                    selectedIceCream.map(item => <div className='itemStyle' key={item.id}>
                        <img src={item.img} alt="" />
                        {item.name}
                    </div>)
                }
            </div>
            {selectedIceCream.length > 0 ?
                <div>
                    <button onClick={clear}>Clear All</button>
                    <button variant="primary" onClick={() => random(selectedIceCream)}>Suggest Randomly</button>
                </div> : ''}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{randomItem.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <img className='img-fluid' src={randomItem.img} alt="" />
                </Modal.Body>

            </Modal>


        </div>
    );
};

export default Card;