import React, { createContext, useState } from 'react';

const CartContext = createContext([{}, () => { }]);

const CartProvider = ({ children }) => { 
    const [state, setState] = useState([]);

    return (
        < CartContext.Provider value={[state, setState]} >
            {children}
        </CartContext.Provider >
    );
}



export { CartContext, CartProvider };