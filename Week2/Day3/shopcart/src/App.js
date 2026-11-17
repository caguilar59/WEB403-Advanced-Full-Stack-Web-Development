import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
//import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from './components/navbar';
import Items from './components/items';
import Cart from './components/cart';

function App() {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Navbar 
        total={total}
        onCartClick={() => setShowCart(!showCart)}
      />
      {showCart ? (
        <Cart cart={cart}/>      
      ): (
        <Items 
        setTotal={setTotal}
        setCart={setCart}
        />
      )}
      
    </div>
  );
}

export default App;
