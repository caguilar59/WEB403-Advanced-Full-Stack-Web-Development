import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from './components/navbar';
import Items from './components/items';
import Cart from './components/cart';


function App() {
    const [cart, setCart] = useState({});
    const [showCart, setShowCart] = useState(false);

    // Calculate total items in cart
    const total = Object.values(cart).reduce(
        (sum, quantity) => sum + quantity, 0
    );

    return (
        <div>
            <Navbar
                total={total}
                onCartClick={() => setShowCart(!showCart)}
            />

            {showCart ? (
                <Cart cart={cart}/>
            ) : (
                <Items
                    cart={cart}
                    setCart={setCart}
                />
            )}

        </div>
    );
}

export default App;