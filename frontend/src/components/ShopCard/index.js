import React, {
    useContext,
} from 'react';
import {
    Card,
    CardBody,
} from 'react-simple-card';

import './index.css';

import { CartContext } from '../../context/CartContext';

const ShopCard = ({ photo }) => {
    const [itemsValue, setItemsValue] = useContext(CartContext);


    const addToCart = (item) => {
        setItemsValue([...itemsValue, item])
    };


    return (
        <Card className="card" >
            <img src={photo.urls.thumb} alt="Shopping cards" className="CardImage" />
            <CardBody className="CardBody">
                <button onClick={() => addToCart(photo)}>Adicionar ao carrinho</button>
            </CardBody>
        </Card>
    );
};

export default ShopCard;
