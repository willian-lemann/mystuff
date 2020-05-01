import React, {
    useContext,
} from 'react';

import { Link, useHistory } from 'react-router-dom';

import Logo from '../../assets/ecommerce-logo.png';
import { FaShoppingCart } from 'react-icons/fa';

import './index.css';

import { CartContext } from '../../context/CartContext';

const Header = () => {
    const history = useHistory();

    const [itemsValue] = useContext(CartContext);

    const goToCart = () => {
        history.push('/cart', { itemsValue });
    };

    return (
        <header className="header-container">
            <nav>
                <img src={Logo} alt="Logotype" />
                <ul>
                    <Link to="/products" className="navlist">Products</Link>
                    <Link onClick={goToCart} to="/cart" className="navlist"><FaShoppingCart className="CartIcon" /> {itemsValue.length}</Link>
                </ul>
            </nav>
        </header>
    );
};


export default Header;

