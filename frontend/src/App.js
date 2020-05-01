import React from 'react';

import '../src/global.css';

import Routes from '../src/routes';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <>
      <CartProvider >
        <Routes />
      </CartProvider>
    </>
  );
}

export default App;
