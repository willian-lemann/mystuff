import React, {
    useContext,
    useEffect
} from 'react';

import { FaTrash } from 'react-icons/fa';

import './index.css';

import { CartContext } from '../../context/CartContext';

const ShopItem = ({ item }) => {
    const [itemsValue, setItemsValue] = useContext(CartContext);



    const removeFromCart = (id) => {
        setItemsValue(itemsValue.filter(item => item.id !== id))
    };
 

    const openInOtherWindow = (photoLink) => {
        window.open(photoLink);
    };

    return (
        <>
            <li>
                <img className="itemImage" src={item.urls.thumb} alt="thumb" />
                <section>
                    <button onClick={() => removeFromCart(item.id)} className="trashIcon"> <FaTrash /></button>
                    <span>Photo Description: <span>{item.alt_description}</span></span>
                    <p>Name of the artist: <strong>{item.user.name}</strong></p>
                    <span>Likes: <strong>{item.likes}</strong></span>
                    <button onClick={() => openInOtherWindow(item.links.download)}>
                        Check it out on Full Screen
                    </button>
                </section>
            </li>
        </>
    );
};

export default ShopItem;