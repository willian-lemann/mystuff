import React, {
    useContext
} from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import ShopItem from '../../components/ShopItem';

import { CartContext } from '../../context/CartContext';

function Cart() {
    const [itemsValues] = useContext(CartContext);

    return (
        <div className="cart-container">
            <section className="item-content">
                <ul>
                    {itemsValues.map(item => <ShopItem key={item.id} item={item} />)}
                </ul>

                <footer className="shopped-items-footer">
                    <Link to="/dashboard">
                        <button>Voltar</button>
                    </Link>
                    <button>Finalizar Compra</button>
                </footer>
            </section>
        </div>
    );
}

export default Cart;


